import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";

const SITE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PORTABLE_EVIDENCE_ROOT = resolve(
  SITE_ROOT,
  "tools",
  "license-evidence",
  "react-remove-scroll-bar",
);
const FALLBACK_PACKAGE = "react-remove-scroll-bar";
const FALLBACK_VERSION = "2.3.8";
const FALLBACK_INTEGRITY =
  "sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==";
const FALLBACK_LICENSE_SHA256 =
  "a79aae0c0f21990d9d963bb3c5a79cdcea9a46f8523ba55c58d7fe776b6ebc84";
const FALLBACK_REPOSITORY = "git+https://github.com/theKashey/react-remove-scroll-bar.git";
const SHADCN_REVISION = "d549251bab2e57dbf72f7c909d6458c02c43f529";
const THEME_CSS_INPUT = Object.freeze({
  kind: "css",
  identifier: "@knowledge-forge-ai/shadcn-theme-terminal-nova/styles/theme.css",
  packageName: "@knowledge-forge-ai/shadcn-theme-terminal-nova",
  version: "0.2.0",
  license: "AGPL-3.0-or-later",
  integrity:
    "sha512-l9RsuPQDw6paqgmKlvKxLzOu4KQdVO+3aQeYFRDv1wKXjFeNMGHra9upAaYymCBS7KeN+m1bcZWK6dIaNpNXRQ==",
  packageRootRelative: "node_modules/@knowledge-forge-ai/shadcn-theme-terminal-nova",
  lockPath: "node_modules/@knowledge-forge-ai/shadcn-theme-terminal-nova",
  moduleRelative: "styles/theme.css",
});
const TAILWIND_CSS_INPUT = Object.freeze({
  kind: "css",
  identifier: "tailwindcss/index.css",
  packageName: "tailwindcss",
  version: "4.3.4",
  license: "MIT",
  integrity:
    "sha512-PCJZTFFdG+sL3gvnP1Do9o6GbkvH2q0p04xSs3f7cSvmAeK+sttG+/7ncK1fdRwKFfC7n+wDDJaOMBSefkI9ow==",
  packageRootRelative: "node_modules/tailwindcss",
  lockPath: "node_modules/tailwindcss",
  moduleRelative: "index.css",
});
const VITE_RUNTIME_INPUT = Object.freeze({
  kind: "generated-runtime",
  identifier: "vite/modulepreload-polyfill",
  packageName: "vite",
  version: "8.2.4",
  license: "MIT",
  integrity:
    "sha512-lfauXnrf2x0p+UoA+wXh0dgFWnUjCyG6Js95KBkgaCwUU9k0DAHI4W6Q0WCx+h+5g+Alce1y4Zi2QjjK0UvGBw==",
  packageRootRelative: "node_modules/vite",
  lockPath: "node_modules/vite",
  virtualIds: [
    "vite/modulepreload-polyfill",
    "\0vite/modulepreload-polyfill.js",
    "\0vite/preload-helper.js",
    "\0vite/dynamic-import-helper.js",
    "\0vite/wasm-helper.js",
  ],
});
const ROLLDOWN_RUNTIME_INPUT = Object.freeze({
  kind: "generated-runtime",
  identifier: "rolldown/runtime.js",
  packageName: "rolldown",
  version: "1.2.6",
  license: "MIT",
  integrity:
    "sha512-vMM4q3aixf46GiF1Kok8jDPFsEpXgFWGjUHXNkNHNm+Y2adXAG2dbX91jkti3i0ZRsOlcmbuzAz1poObSHCmUA==",
  packageRootRelative: "node_modules/rolldown",
  lockPath: "node_modules/rolldown",
  virtualIds: ["\0rolldown/runtime.js"],
});
// These are the Vite 8.2.4/Rolldown 1.2.6 virtual IDs that may occur in the
// emitted module graph. Each ID has one exact locked owner. Unknown virtual
// IDs remain a closed failure: treating an opaque ID as first-party would
// silently omit a package notice.
const KNOWN_VIRTUAL_MODULE_IDS = new Set([
  ...VITE_RUNTIME_INPUT.virtualIds,
  ...ROLLDOWN_RUNTIME_INPUT.virtualIds,
]);
const VITE_RUNTIME_HELPER_START =
  "(function(){let e=document.createElement(`link`).relList;";
const VITE_RUNTIME_HELPER_END = "})()";
const VITE_RUNTIME_HELPER_SHA256 =
  "13ab246dddac41a93ee68125039d1f6f957a7938f523ca8a4b9f59ec3e3807c0";

export const portableEvidenceRoot = PORTABLE_EVIDENCE_ROOT;

function normalizedVirtualModuleId(moduleId) {
  if (typeof moduleId !== "string") return null;
  const withoutQuery = moduleId.split("?")[0];
  if (VITE_RUNTIME_INPUT.virtualIds.includes(withoutQuery)) return withoutQuery;
  if (ROLLDOWN_RUNTIME_INPUT.virtualIds.includes(withoutQuery)) return withoutQuery;
  return null;
}

function runtimeInputForVirtualId(moduleId) {
  const virtualId = normalizedVirtualModuleId(moduleId);
  if (!virtualId) return null;
  if (VITE_RUNTIME_INPUT.virtualIds.includes(virtualId)) return VITE_RUNTIME_INPUT;
  if (ROLLDOWN_RUNTIME_INPUT.virtualIds.includes(virtualId)) return ROLLDOWN_RUNTIME_INPUT;
  return null;
}

const SHADCN_MIT_NOTICE = `MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

const SHADCN_COMPONENTS = [
  "button.tsx",
  "card.tsx",
  "dialog.tsx",
  "input.tsx",
  "label.tsx",
  "table.tsx",
];

function closedFailure(category) {
  throw new Error(`BUNDLED_NOTICE_UNAVAILABLE:${category}`);
}

function readJson(path, category) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    closedFailure(category);
  }
}

function sha256(text) {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

function deterministicCompare(left, right) {
  const leftPoints = [...left];
  const rightPoints = [...right];
  const limit = Math.min(leftPoints.length, rightPoints.length);
  for (let index = 0; index < limit; index += 1) {
    const difference = leftPoints[index].codePointAt(0) - rightPoints[index].codePointAt(0);
    if (difference !== 0) return difference;
  }
  return leftPoints.length - rightPoints.length;
}

function moduleAbsolutePath(moduleId) {
  if (typeof moduleId !== "string") return null;
  const withoutQuery = moduleId.split("?")[0];
  if (!withoutQuery.startsWith("file:")) return withoutQuery;
  try {
    return fileURLToPath(withoutQuery);
  } catch {
    closedFailure("module-id");
  }
}

function packageModulePath(moduleId, siteRoot) {
  const absolute = moduleAbsolutePath(moduleId);
  if (!absolute) return null;
  if (!isAbsolute(absolute)) return null;
  const normalized = absolute.replaceAll("\\", "/");
  const marker = "/node_modules/";
  const markerIndex = normalized.lastIndexOf(marker);
  if (markerIndex < 0) return null;
  const suffix = normalized.slice(markerIndex + marker.length);
  const segments = suffix.split("/");
  if (segments.length === 0 || !segments[0]) return null;
  const packageSegmentCount = segments[0].startsWith("@") ? 2 : 1;
  if (segments.length < packageSegmentCount) return null;
  const packageName = segments.slice(0, packageSegmentCount).join("/");
  const packageRoot = normalized.slice(0, markerIndex + marker.length) + packageName;
  const packageRelative = relative(packageRoot, absolute).replaceAll("\\", "/");
  const siteRelative = relative(siteRoot, packageRoot).replaceAll("\\", "/");
  if (!siteRelative.startsWith("node_modules/") || packageRelative.startsWith("../")) {
    return null;
  }
  return { packageName, packageRoot, packageRelative };
}

function firstPartyModulePath(moduleId, siteRoot) {
  const absolute = moduleAbsolutePath(moduleId);
  if (!absolute || !isAbsolute(absolute)) return false;
  const siteRelative = relative(siteRoot, absolute).replaceAll("\\", "/");
  if (
    !siteRelative ||
    siteRelative === ".." ||
    siteRelative.startsWith("../") ||
    siteRelative.split("/").includes("node_modules")
  ) {
    return false;
  }
  return true;
}

function classifyModuleId(moduleId, siteRoot) {
  const virtualId = typeof moduleId === "string" ? moduleId.split("?")[0] : null;
  const runtimeInput = runtimeInputForVirtualId(virtualId);
  if (virtualId && KNOWN_VIRTUAL_MODULE_IDS.has(virtualId) && runtimeInput) {
    return { kind: "known-virtual", runtimeInput };
  }
  const parsed = packageModulePath(moduleId, siteRoot);
  if (parsed) return { kind: "package", parsed };
  if (firstPartyModulePath(moduleId, siteRoot)) return { kind: "first-party" };
  closedFailure("module-id");
}

function packageMetadata(packageRoot, packageName) {
  const metadata = readJson(join(packageRoot, "package.json"), "package-metadata");
  if (metadata.name !== packageName || typeof metadata.version !== "string") {
    closedFailure("package-metadata");
  }
  const license =
    typeof metadata.license === "string"
      ? metadata.license
      : metadata.license && typeof metadata.license.type === "string"
        ? metadata.license.type
        : null;
  if (!license) closedFailure("license-metadata");
  return { name: metadata.name, version: metadata.version, license };
}

function installedLicenseFiles(packageRoot) {
  let entries;
  try {
    entries = readdirSync(packageRoot, { withFileTypes: true });
  } catch {
    closedFailure("license-text");
  }
  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        /^(?:license|notice|copying|unlicense|third-party-license)(?:[._-].*)?$/i.test(entry.name),
    )
    .map((entry) => entry.name)
    .sort(deterministicCompare);
}

function recoveredLicense(packageMetadataValue, evidenceRoot) {
  if (
    packageMetadataValue.name !== FALLBACK_PACKAGE ||
    packageMetadataValue.version !== FALLBACK_VERSION ||
    packageMetadataValue.license !== "MIT"
  ) {
    closedFailure("license-text");
  }
  const evidence = readJson(join(evidenceRoot, "evidence.json"), "fallback-admission");
  const receipt = readJson(join(evidenceRoot, "hash-receipt.json"), "fallback-admission");
  if (
    evidence.schema !== "cttn.license-evidence.v1" ||
    evidence.package?.name !== FALLBACK_PACKAGE ||
    evidence.package?.version !== FALLBACK_VERSION ||
    evidence.package?.license !== "MIT" ||
    evidence.package?.integrity !== FALLBACK_INTEGRITY ||
    evidence.upstream?.repository !== FALLBACK_REPOSITORY ||
    evidence.upstream?.sourceBlobSha1 !== "7c08c3990396ecefd90f99ff5d9a34f26f5b5616" ||
    evidence.upstream?.sourcePath !== "LICENSE" ||
    evidence.upstream?.publisherGitHead !== null ||
    evidence.upstream?.publisherGitHeadStatus !== "unavailable" ||
    evidence.upstream?.releaseRef !== null ||
    evidence.upstream?.releaseRefStatus !== "unavailable" ||
    evidence.admission?.registrySignatureVerified !== true ||
    evidence.admission?.registrySignatureKeyId !==
      "SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA" ||
    evidence.admission?.registryIntegrity !== FALLBACK_INTEGRITY ||
    receipt.schema !== "cttn.license-source-hash.v1" ||
    receipt.sourceFile !== "LICENSE.txt" ||
    receipt.byteLength !== 1093 ||
    receipt.algorithm !== "sha256" ||
    receipt.derivation !== "SHA-256 over the exact UTF-8 bytes of sourceFile" ||
    receipt.sha256 !== FALLBACK_LICENSE_SHA256
  ) {
    closedFailure("fallback-admission");
  }
  const licensePath = join(evidenceRoot, "LICENSE.txt");
  let text;
  try {
    text = readFileSync(licensePath, "utf8");
  } catch {
    closedFailure("fallback-license");
  }
  if (
    Buffer.byteLength(text, "utf8") !== receipt.byteLength ||
    sha256(text) !== FALLBACK_LICENSE_SHA256
  ) {
    closedFailure("fallback-integrity");
  }
  return [{ file: "LICENSE (admitted upstream source blob)", text }];
}

function packageNotice(packageMetadataValue, packageRoot, evidenceRoot) {
  const files = installedLicenseFiles(packageRoot);
  if (files.length === 0) return recoveredLicense(packageMetadataValue, evidenceRoot);
  return files.map((file) => {
    try {
      return { file, text: readFileSync(join(packageRoot, file), "utf8") };
    } catch {
      closedFailure("license-text");
    }
  });
}

function explicitInputRecord(siteRoot, input, evidenceRoot) {
  const packageRoot = resolve(siteRoot, input.packageRootRelative);
  const metadata = packageMetadata(packageRoot, input.packageName);
  const packageLock = readJson(join(siteRoot, "package-lock.json"), "explicit-input-lock");
  const lockRecord = packageLock.packages?.[input.lockPath];
  if (
    !lockRecord ||
    lockRecord.version !== input.version ||
    lockRecord.integrity !== input.integrity ||
    lockRecord.license !== input.license ||
    metadata.version !== input.version ||
    metadata.license !== input.license
  ) {
    closedFailure("explicit-input-admission");
  }
  if (input.moduleRelative) {
    const modulePath = resolve(packageRoot, input.moduleRelative);
    const parsed = packageModulePath(modulePath, siteRoot);
    if (
      !parsed ||
      parsed.packageName !== input.packageName ||
      parsed.packageRelative !== input.moduleRelative
    ) {
      closedFailure("explicit-input-identity");
    }
    try {
      readFileSync(modulePath);
    } catch {
      closedFailure("explicit-input-source");
    }
  }
  return {
    kind: input.kind,
    identifier: input.identifier,
    name: metadata.name,
    version: metadata.version,
    license: metadata.license,
    notices: packageNotice(metadata, packageRoot, evidenceRoot),
  };
}

function collectExplicitInputs(siteRoot, evidenceRoot, { includeViteRuntime, includeRolldownRuntime }) {
  const inputs = [THEME_CSS_INPUT, TAILWIND_CSS_INPUT];
  if (includeViteRuntime) inputs.push(VITE_RUNTIME_INPUT);
  if (includeRolldownRuntime) inputs.push(ROLLDOWN_RUNTIME_INPUT);
  return inputs.map((input) => explicitInputRecord(siteRoot, input, evidenceRoot));
}

export function collectBundledNoticeModel(moduleIds, options = {}) {
  const siteRoot = options.siteRoot ?? SITE_ROOT;
  const evidenceRoot = options.evidenceRoot ?? PORTABLE_EVIDENCE_ROOT;
  const allModuleIds = [...moduleIds];
  const observedVirtualModules = [...new Set(
    allModuleIds.map(normalizedVirtualModuleId).filter(Boolean),
  )].sort(deterministicCompare);
  const includeViteRuntime =
    options.includeViteRuntime === true ||
    options.includeGeneratedRuntime === true ||
    observedVirtualModules.some((id) => VITE_RUNTIME_INPUT.virtualIds.includes(id));
  const includeRolldownRuntime =
    options.includeRolldownRuntime === true ||
    observedVirtualModules.some((id) => ROLLDOWN_RUNTIME_INPUT.virtualIds.includes(id));
  const packages = new Map();
  const rootMap = new Map();
  for (const moduleId of allModuleIds) {
    const classification = classifyModuleId(moduleId, siteRoot);
    if (classification.kind !== "package") continue;
    const { parsed } = classification;
    const recordedRoot = rootMap.get(parsed.packageName);
    if (recordedRoot !== undefined && recordedRoot !== parsed.packageRoot) {
      closedFailure("package-identity");
    }
    rootMap.set(parsed.packageName, parsed.packageRoot);
    let packageRecord = packages.get(parsed.packageName);
    if (!packageRecord) {
      const metadata = packageMetadata(parsed.packageRoot, parsed.packageName);
      packageRecord = {
        name: metadata.name,
        version: metadata.version,
        license: metadata.license,
        packageRoot: parsed.packageRoot,
        modules: new Set(),
      };
      packages.set(parsed.packageName, packageRecord);
    }
    packageRecord.modules.add(
      parsed.packageRelative ? `${parsed.packageName}/${parsed.packageRelative}` : parsed.packageName,
    );
  }
  const entries = [...packages.values()]
    .sort((left, right) => deterministicCompare(left.name, right.name))
    .map((packageRecord) => ({
      name: packageRecord.name,
      version: packageRecord.version,
      license: packageRecord.license,
      modules: [...packageRecord.modules].sort(deterministicCompare),
      notices: packageNotice(
        {
          name: packageRecord.name,
          version: packageRecord.version,
          license: packageRecord.license,
        },
        packageRecord.packageRoot,
        evidenceRoot,
      ),
    }));
  return {
    schema: "cttn.bundled-third-party-modules.v2",
    observedVirtualModules,
    bundledModules: entries,
    explicitInputs: collectExplicitInputs(siteRoot, evidenceRoot, {
      includeViteRuntime,
      includeRolldownRuntime,
    }),
    sourceAdaptations: [
      {
        name: "shadcn/ui source adaptation",
        revision: SHADCN_REVISION,
        license: "MIT",
        components: [...SHADCN_COMPONENTS],
      },
    ],
  };
}

function emittedModuleIds(bundle, pluginContext) {
  const ids = new Set();
  for (const output of Object.values(bundle)) {
    if (output.type !== "chunk") continue;
    for (const moduleId of Object.keys(output.modules)) ids.add(moduleId);
  }
  if (typeof pluginContext?.getModuleInfo !== "function") throw new Error("BUNDLED_NOTICE_UNAVAILABLE:module-graph");
  const pending = [...ids];
  const visited = new Set();
  while (pending.length > 0) {
    const moduleId = pending.pop();
    if (visited.has(moduleId)) continue;
    visited.add(moduleId);
    let info;
    try {
      info = pluginContext.getModuleInfo(moduleId);
    } catch {
      throw new Error("BUNDLED_NOTICE_UNAVAILABLE:module-graph");
    }
    for (const importedId of [...(info?.importedIds ?? []), ...(info?.dynamicallyImportedIds ?? [])]) {
      if (!visited.has(importedId)) {
        ids.add(importedId);
        pending.push(importedId);
      }
    }
  }
  return ids;
}

function hasObservedViteRuntimeSource(bundle) {
  return Object.values(bundle).some((output) => {
    if (output.type !== "chunk" || typeof output.code !== "string") return false;
    let start = output.code.indexOf(VITE_RUNTIME_HELPER_START);
    while (start >= 0) {
      const end = output.code.indexOf(VITE_RUNTIME_HELPER_END, start);
      if (end < 0) return false;
      const helper = output.code.slice(start, end + VITE_RUNTIME_HELPER_END.length);
      if (sha256(helper) === VITE_RUNTIME_HELPER_SHA256) return true;
      start = output.code.indexOf(VITE_RUNTIME_HELPER_START, start + 1);
    }
    return false;
  });
}

function hasKnownViteRuntime(bundle, moduleIds) {
  return (
    [...moduleIds].some((id) => VITE_RUNTIME_INPUT.virtualIds.includes(normalizedVirtualModuleId(id))) ||
    hasObservedViteRuntimeSource(bundle)
  );
}

function hasKnownRolldownRuntime(moduleIds) {
  return [...moduleIds].some((id) => ROLLDOWN_RUNTIME_INPUT.virtualIds.includes(normalizedVirtualModuleId(id)));
}

export function renderBundledNotices(model) {
  const sections = [
    "# Third-party notices for bundled modules, CSS, runtime inputs, and source adaptations",
    "",
    "This file contains complete license/notice text for bundled package modules, explicit CSS and runtime inputs, and the included source adaptation.",
    "",
    "## shadcn/ui source adaptation (MIT)",
    "",
    `Pinned source revision: ${model.sourceAdaptations[0].revision}`,
    `Components: ${model.sourceAdaptations[0].components.join(", ")}`,
    "",
    SHADCN_MIT_NOTICE,
  ];
  for (const packageRecord of model.bundledModules) {
    sections.push("", `## ${packageRecord.name}@${packageRecord.version} (${packageRecord.license})`, "");
    sections.push("Bundled package modules:", ...packageRecord.modules.map((module) => `- ${module}`), "");
    for (const notice of packageRecord.notices) {
      sections.push(`### ${notice.file}`, "", notice.text, "");
    }
  }
  for (const input of model.explicitInputs) {
    sections.push(
      "",
      `## ${input.name}@${input.version} (${input.license}; ${input.kind} input)`,
      "",
      `Input: ${input.identifier}`,
      "",
    );
    for (const notice of input.notices) {
      sections.push(`### ${notice.file}`, "", notice.text, "");
    }
  }
  return `${sections.join("\n").trimEnd()}\n`;
}

export function serializeBundledModules(model) {
  return `${JSON.stringify(
    {
      schema: model.schema,
      observedVirtualModules: [...model.observedVirtualModules].sort(deterministicCompare),
      bundledModules: model.bundledModules.map(({ name, version, license, modules }) => ({
        name,
        version,
        license,
        modules,
      })),
      explicitInputs: model.explicitInputs.map(({ kind, identifier, name, version, license }) => ({
        kind,
        identifier,
        name,
        version,
        license,
      })),
      sourceAdaptations: model.sourceAdaptations,
    },
    null,
    2,
  )}\n`;
}

export function bundledNoticesPlugin(options = {}) {
  return {
    name: "cttn-bundled-notices",
    apply: "build",
    generateBundle(_outputOptions, bundle) {
      const moduleIds = emittedModuleIds(bundle, this);
      const includeViteRuntime = hasKnownViteRuntime(bundle, moduleIds);
      const includeRolldownRuntime = hasKnownRolldownRuntime(moduleIds);
      const model = collectBundledNoticeModel([...moduleIds], {
        ...options,
        includeViteRuntime,
        includeRolldownRuntime,
      });
      this.emitFile({
        type: "asset",
        fileName: "THIRD-PARTY-NOTICES.txt",
        source: renderBundledNotices(model),
      });
      this.emitFile({
        type: "asset",
        fileName: "third-party-modules.json",
        source: serializeBundledModules(model),
      });
    },
  };
}
