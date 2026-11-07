"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const RECEIPT_SCHEMA = "cttn.native-build-preflight.v1";

const TARGETS = Object.freeze({
  "darwin-arm64": Object.freeze({
    platform: "darwin",
    arch: "arm64",
    oxide: "@tailwindcss/oxide-darwin-arm64",
    lightning: "lightningcss-darwin-arm64",
    rolldown: "@rolldown/binding-darwin-arm64",
    typescript: "@typescript/typescript-darwin-arm64",
    fsevents: true,
  }),
  "linux-x64": Object.freeze({
    platform: "linux",
    arch: "x64",
    oxide: "@tailwindcss/oxide-linux-x64-gnu",
    lightning: "lightningcss-linux-x64-gnu",
    rolldown: "@rolldown/binding-linux-x64-gnu",
    typescript: "@typescript/typescript-linux-x64",
    fsevents: false,
  }),
});

const VERSIONS = Object.freeze({
  oxide: "4.3.4",
  lightning: "1.33.0",
  rolldown: "1.2.6",
  typescript: "7.0.2",
});

class NativePreflightError extends Error {
  constructor(phase) {
    super(`CTTN_NATIVE_ADMISSION_REFUSED ${phase}`);
    this.name = "NativePreflightError";
    this.phase = phase;
  }
}

function fail(phase) {
  throw new NativePreflightError(phase);
}

function isWithin(base, candidate) {
  const relative = path.relative(base, candidate);
  return relative !== "" && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function packageMetadata(packageRoot, name, version, expectedPlatform, expectedArch, fsApi) {
  const packagePath = path.join(packageRoot, ...name.split("/"), "package.json");
  let metadata;
  try {
    metadata = JSON.parse(fsApi.readFileSync(packagePath, "utf8"));
  } catch {
    fail(`metadata:${name}`);
  }
  if (
    metadata.name !== name ||
    metadata.version !== version ||
    !Array.isArray(metadata.os) ||
    !metadata.os.includes(expectedPlatform) ||
    !Array.isArray(metadata.cpu) ||
    !metadata.cpu.includes(expectedArch)
  ) {
    fail(`metadata:${name}`);
  }
  return Object.freeze({
    name,
    version,
    platform: expectedPlatform,
    arch: expectedArch,
  });
}

function runNativeBuildPreflight(options = {}) {
  const {
    projectRoot,
    platform = process.platform,
    arch = process.arch,
    environment = process.env,
    fsApi = fs,
    cryptoApi = crypto,
    resolveModule = require.resolve,
    loadModule = require,
    getCacheEntries = () => Object.keys(require.cache),
  } = options;
  let phase = "target";

  try {
    if (typeof projectRoot !== "string" || projectRoot.length === 0) fail(phase);
    const root = path.resolve(projectRoot);
    const packageRoot = path.join(root, "node_modules");
    const target = TARGETS[`${platform}-${arch}`];
    if (!target) fail(phase);
    if (Object.prototype.hasOwnProperty.call(environment, "NAPI_RS_FORCE_WASI")) {
      fail("force-wasi");
    }

    const binaries = [];
    function loadNative(name, version) {
      phase = `load:${name}`;
      const metadata = packageMetadata(packageRoot, name, version, platform, arch, fsApi);
      let requested;
      try {
        requested = resolveModule(name);
      } catch {
        fail(phase);
      }
      let linkStat;
      try {
        linkStat = fsApi.lstatSync(requested);
      } catch {
        fail(phase);
      }
      if (!linkStat.isFile() || linkStat.isSymbolicLink()) fail(phase);
      let resolved;
      try {
        resolved = fsApi.realpathSync(requested);
      } catch {
        fail(phase);
      }
      if (!isWithin(packageRoot, resolved) || !resolved.endsWith(".node")) fail(phase);
      let stat;
      try {
        stat = fsApi.lstatSync(resolved);
      } catch {
        fail(phase);
      }
      if (!stat.isFile() || stat.isSymbolicLink()) fail(phase);
      let data;
      try {
        data = fsApi.readFileSync(resolved);
      } catch {
        fail(phase);
      }
      if (!Buffer.isBuffer(data)) fail(phase);
      const binary = Object.freeze({
        package: name,
        version,
        bytes: data.length,
        sha256: cryptoApi.createHash("sha256").update(data).digest("hex"),
      });
      binaries.push(binary);
      let loaded;
      try {
        loaded = loadModule(name);
      } catch {
        fail(phase);
      }
      return { loaded, metadata };
    }

    phase = "oxide";
    const oxide = loadNative(target.oxide, VERSIONS.oxide).loaded;
    phase = "oxide-wrapper";
    const wrapper = loadModule("@tailwindcss/oxide");
    if (typeof oxide?.Scanner !== "function" || wrapper?.Scanner !== oxide.Scanner) fail(phase);
    const cacheHas = (pattern) => getCacheEntries().some((entry) => pattern.test(String(entry)));
    if (cacheHas(/oxide-wasm32|oxide\.wasi|wasm-runtime/)) fail("wasi-cache");

    phase = "lightningcss";
    const lightning = loadNative(target.lightning, VERSIONS.lightning).loaded;
    if (typeof lightning?.transform !== "function") fail(phase);

    phase = "rolldown";
    const rolldown = loadNative(target.rolldown, VERSIONS.rolldown).loaded;
    if (!rolldown || (typeof rolldown !== "object" && typeof rolldown !== "function")) fail(phase);

    let fseventsLoaded = false;
    if (target.fsevents) {
      phase = "fsevents";
      const fsevents = loadModule("fsevents");
      if (typeof fsevents?.watch !== "function") fail(phase);
      fseventsLoaded = true;
    } else if (cacheHas(/node_modules[\\/]fsevents(?:[\\/]|$)/)) {
      fail("fsevents-cache");
    }

    phase = "typescript-platform";
    const typescript = packageMetadata(
      packageRoot,
      target.typescript,
      VERSIONS.typescript,
      platform,
      arch,
      fsApi,
    );
    if (cacheHas(/oxide-wasm32|oxide\.wasi|wasm-runtime/)) fail("wasi-cache");
    if (!target.fsevents && cacheHas(/node_modules[\\/]fsevents(?:[\\/]|$)/)) fail("fsevents-cache");

    return Object.freeze({
      schema: RECEIPT_SCHEMA,
      target: `${platform}-${arch}`,
      oxideUsesSelectedNativeScanner: true,
      wasiFallbackSelected: false,
      forceWasiAbsent: true,
      lightningNativeLoaded: true,
      rolldownNativeLoaded: true,
      fseventsLoaded,
      typescriptPlatformMetadataMatches: true,
      typescript,
      binaries: Object.freeze(binaries.slice()),
    });
  } catch (error) {
    if (error instanceof NativePreflightError) throw error;
    throw new NativePreflightError(phase);
  }
}

module.exports = Object.freeze({
  RECEIPT_SCHEMA,
  TARGETS,
  VERSIONS,
  NativePreflightError,
  runNativeBuildPreflight,
});
