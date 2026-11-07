import assert from "node:assert/strict";
import {
  cpSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { describe, it } from "vitest";

import {
  bundledNoticesPlugin,
  collectBundledNoticeModel,
  portableEvidenceRoot,
  renderBundledNotices,
  serializeBundledModules,
} from "../bundled-notices.mjs";

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const removedScrollBarModule = resolve(
  siteRoot,
  "node_modules/react-remove-scroll-bar/dist/es2015/index.js",
);
const themeStylesheetModule = resolve(
  siteRoot,
  "node_modules/@knowledge-forge-ai/shadcn-theme-terminal-nova/styles/theme.css",
);
const themePackageRoot = resolve(
  siteRoot,
  "node_modules/@knowledge-forge-ai/shadcn-theme-terminal-nova",
);
const tailwindPackageRoot = resolve(siteRoot, "node_modules/tailwindcss");
const rolldownPackageRoot = resolve(siteRoot, "node_modules/rolldown");

function makeExplicitInputFixture({
  themeVersion = "0.2.0",
  themeLicense = "AGPL-3.0-or-later",
  includeNotices = true,
  viteVersion = "8.2.4",
  viteLicense = "MIT",
  includeViteNotice = true,
  tailwindVersion = "4.3.4",
  tailwindLicense = "MIT",
  includeTailwindNotice = true,
  rolldownVersion = "1.2.6",
  rolldownLicense = "MIT",
  includeRolldownNotice = true,
} = {}) {
  const scratchRoot = mkdtempSync(join(tmpdir(), "cttn-explicit-input-"));
  const themeRoot = join(
    scratchRoot,
    "node_modules/@knowledge-forge-ai/shadcn-theme-terminal-nova",
  );
  mkdirSync(join(themeRoot, "styles"), { recursive: true });
  writeFileSync(
    join(themeRoot, "package.json"),
    JSON.stringify({
      name: "@knowledge-forge-ai/shadcn-theme-terminal-nova",
      version: themeVersion,
      license: themeLicense,
    }),
  );
  writeFileSync(join(themeRoot, "styles/theme.css"), ":root { --fixture: 1; }\n");
  if (includeNotices) {
    writeFileSync(join(themeRoot, "LICENSE"), readFileSync(join(themePackageRoot, "LICENSE")));
    writeFileSync(join(themeRoot, "NOTICE"), readFileSync(join(themePackageRoot, "NOTICE")));
  }
  const viteRoot = join(scratchRoot, "node_modules/vite");
  mkdirSync(viteRoot, { recursive: true });
  writeFileSync(
    join(viteRoot, "package.json"),
    JSON.stringify({ name: "vite", version: viteVersion, license: viteLicense }),
  );
  if (includeViteNotice) {
    writeFileSync(join(viteRoot, "LICENSE.md"), readFileSync(join(siteRoot, "node_modules/vite/LICENSE.md")));
  }
  const tailwindRoot = join(scratchRoot, "node_modules/tailwindcss");
  mkdirSync(tailwindRoot, { recursive: true });
  writeFileSync(
    join(tailwindRoot, "package.json"),
    JSON.stringify({ name: "tailwindcss", version: tailwindVersion, license: tailwindLicense }),
  );
  writeFileSync(join(tailwindRoot, "index.css"), "@theme { --fixture: 1; }\n");
  if (includeTailwindNotice) {
    writeFileSync(join(tailwindRoot, "LICENSE"), readFileSync(join(tailwindPackageRoot, "LICENSE")));
  }
  const rolldownRoot = join(scratchRoot, "node_modules/rolldown");
  mkdirSync(rolldownRoot, { recursive: true });
  writeFileSync(
    join(rolldownRoot, "package.json"),
    JSON.stringify({ name: "rolldown", version: rolldownVersion, license: rolldownLicense }),
  );
  if (includeRolldownNotice) {
    writeFileSync(join(rolldownRoot, "LICENSE"), readFileSync(join(rolldownPackageRoot, "LICENSE")));
    writeFileSync(
      join(rolldownRoot, "THIRD-PARTY-LICENSE"),
      readFileSync(join(rolldownPackageRoot, "THIRD-PARTY-LICENSE")),
    );
  }
  writeFileSync(
    join(scratchRoot, "package-lock.json"),
    JSON.stringify({
      packages: {
        "node_modules/@knowledge-forge-ai/shadcn-theme-terminal-nova": {
          version: "0.2.0",
          integrity:
            "sha512-l9RsuPQDw6paqgmKlvKxLzOu4KQdVO+3aQeYFRDv1wKXjFeNMGHra9upAaYymCBS7KeN+m1bcZWK6dIaNpNXRQ==",
          license: "AGPL-3.0-or-later",
        },
        "node_modules/vite": {
          version: "8.2.4",
          integrity:
            "sha512-lfauXnrf2x0p+UoA+wXh0dgFWnUjCyG6Js95KBkgaCwUU9k0DAHI4W6Q0WCx+h+5g+Alce1y4Zi2QjjK0UvGBw==",
          license: "MIT",
        },
        "node_modules/tailwindcss": {
          version: tailwindVersion,
          integrity:
            "sha512-PCJZTFFdG+sL3gvnP1Do9o6GbkvH2q0p04xSs3f7cSvmAeK+sttG+/7ncK1fdRwKFfC7n+wDDJaOMBSefkI9ow==",
          license: tailwindLicense,
        },
        "node_modules/rolldown": {
          version: rolldownVersion,
          integrity:
            "sha512-vMM4q3aixf46GiF1Kok8jDPFsEpXgFWGjUHXNkNHNm+Y2adXAG2dbX91jkti3i0ZRsOlcmbuzAz1poObSHCmUA==",
          license: rolldownLicense,
        },
      },
    }),
  );
  return { scratchRoot, themeRoot };
}

describe("bundled third-party notices", () => {
it("refuses to emit incomplete notices when module graph access fails", () => {
  for (const getModuleInfo of [undefined, () => { throw new Error("private builder diagnostics"); }]) {
    const emitted = [];
    const plugin = bundledNoticesPlugin({ siteRoot });
    assert.throws(() => plugin.generateBundle.call({
      emitFile(asset) { emitted.push(asset); },
      ...(getModuleInfo ? { getModuleInfo } : {}),
    }, {}, { main: { type: "chunk", modules: { [removedScrollBarModule]: {} } } }),
    /^Error: BUNDLED_NOTICE_UNAVAILABLE:module-graph$/);
    assert.equal(emitted.length, 0);
  }
});

it("uses the portable admitted MIT text when an emitted package has no license file", () => {
  const model = collectBundledNoticeModel([removedScrollBarModule], { siteRoot });
  assert.equal(model.bundledModules.length, 1);
  assert.equal(model.bundledModules[0].name, "react-remove-scroll-bar");
  assert.equal(model.bundledModules[0].version, "2.3.8");
  assert.equal(model.bundledModules[0].license, "MIT");
  assert.equal(model.bundledModules[0].notices.length, 1);
  assert.equal(
    portableEvidenceRoot,
    resolve(siteRoot, "tools/license-evidence/react-remove-scroll-bar"),
  );
  assert.match(model.bundledModules[0].notices[0].text, /Copyright \(c\) 2025 Anton Korzunov/);
});

it("collects the theme package license and notice from its installed tree", () => {
  const model = collectBundledNoticeModel([themeStylesheetModule], { siteRoot });
  assert.equal(model.bundledModules.length, 1);
  assert.equal(model.bundledModules[0].name, "@knowledge-forge-ai/shadcn-theme-terminal-nova");
  assert.equal(model.bundledModules[0].license, "AGPL-3.0-or-later");
  assert.deepEqual(
    model.bundledModules[0].notices.map((notice) => notice.file),
    ["LICENSE", "NOTICE"],
  );
});

it("records the known CSS inputs even when they are omitted from chunk modules", () => {
  const model = collectBundledNoticeModel([], { siteRoot });
  assert.equal(model.bundledModules.length, 0);
  assert.deepEqual(model.explicitInputs.map(({ kind, identifier, name, version, license }) => ({
    kind,
    identifier,
    name,
    version,
    license,
  })), [
    {
      kind: "css",
      identifier: "@knowledge-forge-ai/shadcn-theme-terminal-nova/styles/theme.css",
      name: "@knowledge-forge-ai/shadcn-theme-terminal-nova",
      version: "0.2.0",
      license: "AGPL-3.0-or-later",
    },
    {
      kind: "css",
      identifier: "tailwindcss/index.css",
      name: "tailwindcss",
      version: "4.3.4",
      license: "MIT",
    },
  ]);
  assert.equal(
    model.explicitInputs[0].notices.find((notice) => notice.file === "LICENSE").text,
    readFileSync(join(themePackageRoot, "LICENSE"), "utf8"),
  );
  assert.equal(
    model.explicitInputs[0].notices.find((notice) => notice.file === "NOTICE").text,
    readFileSync(join(themePackageRoot, "NOTICE"), "utf8"),
  );
  assert.equal(
    model.explicitInputs[1].notices.find((notice) => notice.file === "LICENSE").text,
    readFileSync(join(tailwindPackageRoot, "LICENSE"), "utf8"),
  );
  assert.match(renderBundledNotices(model), /### LICENSE[\s\S]*### NOTICE/);
  assert.match(renderBundledNotices(model), /## tailwindcss@4\.3\.4 \(MIT; css input\)/);
});

it("serializes deterministic package data without local paths", () => {
  const first = collectBundledNoticeModel([themeStylesheetModule, removedScrollBarModule], { siteRoot });
  const second = collectBundledNoticeModel([removedScrollBarModule, themeStylesheetModule], { siteRoot });
  const serialized = serializeBundledModules(first);
  assert.equal(serialized, serializeBundledModules(second));
  assert.equal(serialized.includes(siteRoot), false);
  const notices = renderBundledNotices(first);
  assert.equal(notices.includes(siteRoot), false);
  assert.match(
    notices,
    /^# Third-party notices for bundled modules, CSS, runtime inputs, and source adaptations/m,
  );
  assert.match(notices, /shadcn\/ui source adaptation/);
  assert.match(notices, /AGPL-3\.0-or-later/);
  assert.match(notices, /react-remove-scroll-bar@2\.3\.8/);
  assert.equal(JSON.parse(serialized).bundledModules.length, 2);
  assert.deepEqual(JSON.parse(serialized).explicitInputs.map((input) => input.kind), ["css", "css"]);
  assert.deepEqual(JSON.parse(serialized).observedVirtualModules, []);
});

it("fails closed for unknown virtual and parent-node_modules module IDs", () => {
  const parentNodeModule = resolve(siteRoot, "..", "node_modules", "react", "index.js");
  for (const moduleId of ["\0unclassified-plugin/module.js", parentNodeModule]) {
    assert.throws(
      () => collectBundledNoticeModel([moduleId], { siteRoot }),
      /^Error: BUNDLED_NOTICE_UNAVAILABLE:module-id$/,
    );
  }
  const firstParty = collectBundledNoticeModel([resolve(siteRoot, "src/catalog.ts")], { siteRoot });
  assert.equal(firstParty.bundledModules.length, 0);
});

it("fails closed for relative module IDs", () => {
  assert.throws(
    () => collectBundledNoticeModel(["src/catalog.ts"], { siteRoot }),
    /^Error: BUNDLED_NOTICE_UNAVAILABLE:module-id$/,
  );
});

it("fails closed when one package name resolves to two physical roots", () => {
  const { scratchRoot } = makeExplicitInputFixture();
  const firstRoot = join(scratchRoot, "node_modules/fixture-a/node_modules/tailwindcss");
  const secondRoot = join(scratchRoot, "node_modules/fixture-b/node_modules/tailwindcss");
  for (const [packageRoot, version] of [[firstRoot, "4.3.4"], [secondRoot, "4.2.3"]]) {
    mkdirSync(packageRoot, { recursive: true });
    writeFileSync(
      join(packageRoot, "package.json"),
      JSON.stringify({ name: "tailwindcss", version, license: "MIT" }),
    );
    writeFileSync(join(packageRoot, "LICENSE"), readFileSync(join(tailwindPackageRoot, "LICENSE")));
    writeFileSync(join(packageRoot, "index.css"), "@theme { --fixture: 1; }\n");
  }
  try {
    assert.throws(
      () => collectBundledNoticeModel(
        [join(firstRoot, "index.css"), join(secondRoot, "index.css")],
        { siteRoot: scratchRoot },
      ),
      /^Error: BUNDLED_NOTICE_UNAVAILABLE:package-identity$/,
    );
  } finally {
    rmSync(scratchRoot, { recursive: true, force: true });
  }
});

it("records the observed Vite module-preload helper separately from the JS graph", () => {
  const emitted = [];
  const plugin = bundledNoticesPlugin({ siteRoot });
  plugin.generateBundle.call(
    {
      emitFile(asset) {
        emitted.push(asset);
      },
      getModuleInfo() {
        return null;
      },
    },
    {},
    {
      main: {
        type: "chunk",
        modules: { [removedScrollBarModule]: {} },
        code: "",
      },
      runtime: {
        type: "chunk",
        modules: { "\0vite/modulepreload-polyfill.js": {} },
        code: "",
      },
    },
  );
  const inventory = JSON.parse(emitted.find((asset) => asset.fileName === "third-party-modules.json").source);
  assert.deepEqual(inventory.explicitInputs.map((input) => input.kind), ["css", "css", "generated-runtime"]);
  assert.match(
    emitted.find((asset) => asset.fileName === "THIRD-PARTY-NOTICES.txt").source,
    /## vite@8\.2\.4 \(MIT; generated-runtime input\)/,
  );
  const viteInput = JSON.parse(emitted.find((asset) => asset.fileName === "third-party-modules.json").source)
    .explicitInputs.find((input) => input.kind === "generated-runtime");
  assert.equal(viteInput.name, "vite");
  assert.match(
    emitted.find((asset) => asset.fileName === "THIRD-PARTY-NOTICES.txt").source,
    /Copyright \(c\) 2019-present, VoidZero Inc\. and Vite contributors/,
  );
});

it("attributes every allowlisted virtual runtime to its locked owner", () => {
  const virtualIds = [
    "vite/modulepreload-polyfill",
    "\0vite/modulepreload-polyfill.js",
    "\0vite/preload-helper.js",
    "\0vite/dynamic-import-helper.js",
    "\0vite/wasm-helper.js",
    "\0rolldown/runtime.js",
  ];
  const model = collectBundledNoticeModel(virtualIds, { siteRoot });
  assert.deepEqual(model.observedVirtualModules, [...virtualIds].sort());
  assert.deepEqual(
    model.explicitInputs.map(({ name, version, kind }) => ({ name, version, kind })),
    [
      { name: "@knowledge-forge-ai/shadcn-theme-terminal-nova", version: "0.2.0", kind: "css" },
      { name: "tailwindcss", version: "4.3.4", kind: "css" },
      { name: "vite", version: "8.2.4", kind: "generated-runtime" },
      { name: "rolldown", version: "1.2.6", kind: "generated-runtime" },
    ],
  );
  assert.deepEqual(
    model.explicitInputs.find((input) => input.name === "rolldown").notices.map(({ file }) => file),
    ["LICENSE", "THIRD-PARTY-LICENSE"],
  );
});

it("does not attribute generic helper-like text to Vite", () => {
  const emitted = [];
  const plugin = bundledNoticesPlugin({ siteRoot });
  plugin.generateBundle.call(
    {
      emitFile(asset) {
        emitted.push(asset);
      },
      getModuleInfo() {
        return null;
      },
    },
    {},
    {
      main: {
        type: "chunk",
        code: 'document.createElement("link").relList; MutationObserver; "modulepreload";',
        modules: { [removedScrollBarModule]: {} },
      },
    },
  );
  const inventory = JSON.parse(
    emitted.find((asset) => asset.fileName === "third-party-modules.json").source,
  );
  assert.deepEqual(inventory.explicitInputs.map((input) => input.kind), ["css", "css"]);
});

it("fails closed when an explicit package identity or notice is wrong or absent", () => {
  for (const fixtureOptions of [
    { themeVersion: "0.3.0" },
    { includeNotices: false },
    { tailwindVersion: "4.2.3" },
    { includeTailwindNotice: false },
  ]) {
    const { scratchRoot } = makeExplicitInputFixture(fixtureOptions);
    try {
      assert.throws(
        () => collectBundledNoticeModel([], { siteRoot: scratchRoot }),
        fixtureOptions.includeNotices === false || fixtureOptions.includeTailwindNotice === false
          ? /BUNDLED_NOTICE_UNAVAILABLE:license-text/
          : /BUNDLED_NOTICE_UNAVAILABLE:explicit-input-admission/,
      );
    } finally {
      rmSync(scratchRoot, { recursive: true, force: true });
    }
  }
});

it("fails closed when the explicit Vite runtime identity or license is wrong", () => {
  for (const fixtureOptions of [{ viteVersion: "8.2.3" }, { includeViteNotice: false }]) {
    const { scratchRoot } = makeExplicitInputFixture(fixtureOptions);
    try {
      assert.throws(
        () => collectBundledNoticeModel([], { siteRoot: scratchRoot, includeGeneratedRuntime: true }),
        fixtureOptions.includeViteNotice === false
          ? /BUNDLED_NOTICE_UNAVAILABLE:license-text/
          : /BUNDLED_NOTICE_UNAVAILABLE:explicit-input-admission/,
      );
    } finally {
      rmSync(scratchRoot, { recursive: true, force: true });
    }
  }
});

it("fails closed when the explicit Rolldown runtime identity or license is wrong", () => {
  for (const fixtureOptions of [{ rolldownVersion: "1.0.0-rc.9" }, { includeRolldownNotice: false }]) {
    const { scratchRoot } = makeExplicitInputFixture(fixtureOptions);
    try {
      assert.throws(
        () => collectBundledNoticeModel(["\0rolldown/runtime.js"], { siteRoot: scratchRoot }),
        fixtureOptions.includeRolldownNotice === false
          ? /BUNDLED_NOTICE_UNAVAILABLE:license-text/
          : /BUNDLED_NOTICE_UNAVAILABLE:explicit-input-admission/,
      );
    } finally {
      rmSync(scratchRoot, { recursive: true, force: true });
    }
  }
});

it("rejects a tampered portable fallback without using sibling closure evidence", () => {
  const scratchRoot = mkdtempSync(join(tmpdir(), "cttn-bundled-notices-"));
  const tamperedEvidenceRoot = join(scratchRoot, "react-remove-scroll-bar");
  cpSync(portableEvidenceRoot, tamperedEvidenceRoot, { recursive: true });
  try {
    writeFileSync(join(tamperedEvidenceRoot, "LICENSE.txt"), "tampered\n");
    assert.throws(
      () =>
        collectBundledNoticeModel([removedScrollBarModule], {
          siteRoot,
          evidenceRoot: tamperedEvidenceRoot,
        }),
      /BUNDLED_NOTICE_UNAVAILABLE:fallback-integrity/,
    );
  } finally {
    rmSync(scratchRoot, { recursive: true, force: true });
  }
});

it("fails closed when an explicit CSS package has no installed license", () => {
  const { scratchRoot } = makeExplicitInputFixture({ includeTailwindNotice: false });
  try {
    assert.throws(
      () => collectBundledNoticeModel([], { siteRoot: scratchRoot }),
      /BUNDLED_NOTICE_UNAVAILABLE:license-text/,
    );
  } finally {
    rmSync(scratchRoot, { recursive: true, force: true });
  }
});

it("Vite output hook emits exactly the two fixed public notice assets", () => {
  const emitted = [];
  const plugin = bundledNoticesPlugin({ siteRoot });
  plugin.generateBundle.call(
    {
      emitFile(asset) {
        emitted.push(asset);
      },
      getModuleInfo() {
        return null;
      },
    },
    {},
    {
      main: {
        type: "chunk",
        modules: {
          [removedScrollBarModule]: {},
          [themeStylesheetModule]: {},
        },
      },
    },
  );
  assert.deepEqual(
    emitted.map((asset) => asset.fileName),
    ["THIRD-PARTY-NOTICES.txt", "third-party-modules.json"],
  );
  assert.match(emitted[0].source, /react-remove-scroll-bar@2\.3\.8/);
  assert.doesNotMatch(emitted[0].source, /\/Users\//);
});
});
