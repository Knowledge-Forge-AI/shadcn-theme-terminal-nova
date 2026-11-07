"use strict";

// Direct Node test entry for the projected source layout.
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const test = require("node:test");
const vm = require("node:vm");

const {
  NativePreflightError,
  RECEIPT_SCHEMA,
  runNativeBuildPreflight,
} = require("../native-build-preflight-lib.cjs");

const projectRoot = path.resolve("/proposal/cttn-site");
const entrySource = fs.readFileSync(path.join(__dirname, "..", "native-build-preflight.cjs"), "utf8");
const scanner = function scanner() {};

function createHarness({ target = "linux", environment = {}, cacheEntries = [], mutate = {} } = {}) {
  const platform = target === "darwin" ? "darwin" : "linux";
  const arch = target === "darwin" ? "arm64" : "x64";
  const packageRoot = path.join(projectRoot, "node_modules");
  const names = {
    oxide:
      platform === "darwin" ? "@tailwindcss/oxide-darwin-arm64" : "@tailwindcss/oxide-linux-x64-gnu",
    lightning: platform === "darwin" ? "lightningcss-darwin-arm64" : "lightningcss-linux-x64-gnu",
    rolldown:
      platform === "darwin" ? "@rolldown/binding-darwin-arm64" : "@rolldown/binding-linux-x64-gnu",
    typescript:
      platform === "darwin" ? "@typescript/typescript-darwin-arm64" : "@typescript/typescript-linux-x64",
  };
  const versions = {
    [names.oxide]: "4.3.4",
    [names.lightning]: "1.33.0",
    [names.rolldown]: "1.2.6",
    [names.typescript]: "7.0.2",
  };
  const modules = {
    [names.oxide]: { Scanner: scanner },
    "@tailwindcss/oxide": { Scanner: scanner },
    [names.lightning]: { transform() {} },
    [names.rolldown]: {},
    fsevents: { watch() {} },
  };
  const metadata = new Map(
    Object.entries(versions).map(([name, version]) => [
      path.join(packageRoot, ...name.split("/"), "package.json"),
      JSON.stringify({ name, version, os: [platform], cpu: [arch] }),
    ]),
  );
  const resolveModule = (name) => path.join(packageRoot, ...name.split("/"), "native.node");
  const readFileSync = (file, encoding) => {
    if (metadata.has(file)) return encoding ? metadata.get(file) : Buffer.from(metadata.get(file));
    if (file.endsWith("native.node") || file.endsWith("native-target.node")) return Buffer.from(file);
    throw new Error("unknown fixture file");
  };
  const fsApi = {
    readFileSync,
    realpathSync: (file) => {
      if (mutate.realpath) return mutate.realpath(file);
      return file;
    },
    lstatSync: (file) => ({
      isFile: () => !mutate.nonFile,
      isSymbolicLink: () => Boolean(mutate.symlink && file.endsWith("native.node")),
    }),
  };
  const loadModule = (name) => {
    if (mutate.wrapperMismatch && name === "@tailwindcss/oxide") return { Scanner: function otherScanner() {} };
    if (mutate.loadFailure === name) throw new Error("load");
    return modules[name];
  };
  return {
    projectRoot,
    platform,
    arch,
    environment,
    cacheEntries,
    getCacheEntries: () => cacheEntries,
    fsApi,
    resolveModule,
    loadModule,
  };
}

function assertRefused(options, phase) {
  assert.throws(
    () => runNativeBuildPreflight(options),
    (error) => error instanceof NativePreflightError && error.phase === phase,
  );
}

function executeEntryInVm(run) {
  const fakeCache = { initial: {} };
  const calls = [];
  const exits = [];
  let stderr = "";
  const fakeRequire = (request) => {
    if (request === "path") return path;
    if (request === "./native-build-preflight-lib.cjs") {
      return {
        NativePreflightError,
        runNativeBuildPreflight: (options) => {
          calls.push(options);
          return run(options, fakeRequire);
        },
      };
    }
    throw new Error(`unexpected import ${request}`);
  };
  fakeRequire.cache = fakeCache;
  const module = { exports: {} };
  const context = {
    require: fakeRequire,
    module,
    __dirname: path.join("/projection", "cttn-site", "tools"),
    process: {
      stderr: { write: (value) => { stderr += value; } },
      exit: (code) => { exits.push(code); },
    },
  };
  vm.runInNewContext(entrySource, context, { filename: "native-build-preflight.cjs" });
  return { module, calls, exits, stderr, fakeRequire };
}

test("Linux receipt selects the three GNU native bindings and records hashes", () => {
  const receipt = runNativeBuildPreflight(createHarness());
  assert.equal(receipt.schema, RECEIPT_SCHEMA);
  assert.equal(receipt.target, "linux-x64");
  assert.equal(receipt.fseventsLoaded, false);
  assert.equal(receipt.binaries.length, 3);
  assert.deepEqual(
    receipt.binaries.map(({ package: name, version }) => [name, version]),
    [
      ["@tailwindcss/oxide-linux-x64-gnu", "4.3.4"],
      ["lightningcss-linux-x64-gnu", "1.33.0"],
      ["@rolldown/binding-linux-x64-gnu", "1.2.6"],
    ],
  );
  for (const binary of receipt.binaries) {
    assert.equal(binary.bytes > 0, true);
    assert.match(binary.sha256, /^[0-9a-f]{64}$/);
  }
});

test("Darwin arm64 branch preserves fsevents and target package mapping", () => {
  const receipt = runNativeBuildPreflight(createHarness({ target: "darwin", cacheEntries: ["/site/node_modules/fsevents/index.js"] }));
  assert.equal(receipt.target, "darwin-arm64");
  assert.equal(receipt.fseventsLoaded, true);
  assert.equal(receipt.binaries[0].package, "@tailwindcss/oxide-darwin-arm64");
});

test("unsupported platform or architecture refuses before module loading", () => {
  assertRefused({ ...createHarness(), platform: "linux", arch: "arm64" }, "target");
});

test("Linux refuses any force-WASI environment key, including an empty value", () => {
  assertRefused(createHarness({ environment: { NAPI_RS_FORCE_WASI: "" } }), "force-wasi");
});

test("Linux refuses WASI cache residue", () => {
  assertRefused(createHarness({ cacheEntries: ["/site/node_modules/@tailwindcss/oxide-wasm32-wasi/index.js"] }), "wasi-cache");
});

test("Linux refuses fsevents cache residue without importing it", () => {
  assertRefused(createHarness({ cacheEntries: ["/site/node_modules/fsevents/index.js"] }), "fsevents-cache");
});

test("metadata identity and platform fields are checked", () => {
  const harness = createHarness();
  const original = harness.fsApi.readFileSync;
  harness.fsApi.readFileSync = (file, encoding) => {
    const value = original(file, encoding);
    if (file.endsWith("@rolldown/binding-linux-x64-gnu/package.json")) {
      return JSON.stringify({ name: "@rolldown/binding-linux-x64-gnu", version: "1.2.5", os: ["linux"], cpu: ["x64"] });
    }
    return value;
  };
  assertRefused(harness, "metadata:@rolldown/binding-linux-x64-gnu");
});

test("native binary lstat rejects a symlink before canonical containment", () => {
  assertRefused(createHarness({ mutate: { symlink: true } }), "load:@tailwindcss/oxide-linux-x64-gnu");
});

test("an in-root symlink target cannot pass the pre-realpath lstat check", () => {
  const targetPath = path.join(projectRoot, "node_modules/@tailwindcss/oxide-linux-x64-gnu/native-target.node");
  const harness = createHarness({
    mutate: { symlink: true, realpath: () => targetPath },
  });
  assertRefused(harness, "load:@tailwindcss/oxide-linux-x64-gnu");
});

test("native binary canonical path must remain in the project node_modules", () => {
  assertRefused(createHarness({ mutate: { realpath: () => "/outside/native.node" } }), "load:@tailwindcss/oxide-linux-x64-gnu");
});

test("wrapper scanner identity is checked against the selected native module", () => {
  assertRefused(createHarness({ mutate: { wrapperMismatch: true } }), "oxide-wrapper");
});

test("module-load failures are reported with a stable phase only", () => {
  const harness = createHarness({ mutate: { loadFailure: "lightningcss-linux-x64-gnu" } });
  assertRefused(harness, "load:lightningcss-linux-x64-gnu");
});

test("TypeScript platform metadata is required even though tsc is not loaded", () => {
  const harness = createHarness();
  const original = harness.fsApi.readFileSync;
  harness.fsApi.readFileSync = (file, encoding) => {
    if (file.endsWith("@typescript/typescript-linux-x64/package.json")) {
      return JSON.stringify({ name: "@typescript/typescript-linux-x64", version: "7.0.2", os: ["linux"], cpu: ["arm64"] });
    }
    return original(file, encoding);
  };
  assertRefused(harness, "metadata:@typescript/typescript-linux-x64");
});

test("receipt is immutable and does not expose project paths", () => {
  const receipt = runNativeBuildPreflight(createHarness());
  assert.equal(Object.isFrozen(receipt), true);
  assert.equal(Object.isFrozen(receipt.binaries), true);
  assert.equal("projectRoot" in receipt, false);
  assert.equal(JSON.stringify(receipt).includes(projectRoot), false);
});

test("missing project root is refused without falling back to the caller cwd", () => {
  assertRefused({ platform: "linux", arch: "x64" }, "target");
});

test("projected production entry auto-runs with the fixed site root and live cache accessor", () => {
  const receipt = Object.freeze({ schema: RECEIPT_SCHEMA, target: "darwin-arm64" });
  const result = executeEntryInVm((options, fakeRequire) => {
    assert.equal(options.projectRoot, path.resolve("/projection/cttn-site"));
    const before = options.getCacheEntries();
    fakeRequire.cache.afterLoad = {};
    const after = options.getCacheEntries();
    assert.equal(before.includes("afterLoad"), false);
    assert.equal(after.includes("afterLoad"), true);
    return receipt;
  });
  assert.deepEqual(result.module.exports, receipt);
  assert.equal(result.calls.length, 1);
  assert.deepEqual(result.exits, []);
  assert.equal(result.stderr, "");
});

test("projected production entry reports a stable phase and exit code on refusal", () => {
  const result = executeEntryInVm(() => {
    throw new NativePreflightError("load:@rolldown/binding-linux-x64-gnu");
  });
  assert.deepEqual(result.exits, [2]);
  assert.equal(result.stderr, "CTTN_NATIVE_ADMISSION_REFUSED load:@rolldown/binding-linux-x64-gnu\n");
});
