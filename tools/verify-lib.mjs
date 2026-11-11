import { createHash } from "node:crypto";
import { lstatSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Standalone verifier. It shares no code with the producer (tools/compose-lib.mjs), so a
 * modified producer cannot vouch for its own output. Identity domains:
 *   source inventory   sha256("cttn.package-inventory-v1\n" + JSON.stringify(provenance.files))
 *   producer inventory sha256("cttn.producer-inventory-v1\n" + JSON.stringify(records))
 *   compiled inventory sha256("cttn.dist-inventory-v1\n" + JSON.stringify(records))
 *   generator          sha256("tfss.package-inventory-v1\n" + JSON.stringify(records))  (Solar Sail)
 */
export const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");
const byPath = (a, b) => a.localeCompare(b, "en");
const codePointCompare = (left, right) => {
  const a = Array.from(left, character => character.codePointAt(0));
  const b = Array.from(right, character => character.codePointAt(0));
  const length = Math.min(a.length, b.length);
  for (let index = 0; index < length; index += 1) {
    if (a[index] !== b[index]) return a[index] - b[index];
  }
  return a.length - b.length;
};
const appearanceByPath = (a, b) => codePointCompare(a.path, b.path);
const record = (path, bytes) => ({ path, size: Buffer.byteLength(bytes), sha256: sha256(bytes) });
const digest = (domain, records) => sha256(`${domain}\n` + JSON.stringify(records));
const appearanceRecord = (path, bytes) => ({ path, bytes: Buffer.byteLength(bytes), sha256: sha256(bytes) });
const appearanceDigest = (schema, members) => sha256(`${schema}\n` + JSON.stringify(members));
const generatedAppearanceDigest = (schema, members) => sha256(`${schema}\n` + JSON.stringify(members, null, 2) + "\n");
const fail = message => { throw new Error(message); };
const parse = (files, path) => {
  if (!files.has(path)) fail(`Missing ${path}`);
  return JSON.parse(String(files.get(path)));
};

export const BUILD_RECEIPT = "build-receipt.json";
export const ENGINE_PACKAGES = ["@knowledge-forge-ai/theme-forge-solar-sail", "@knowledge-forge-ai/theme-forge-stellar-loom"];
/** Repository infrastructure that is neither composed, compiled nor a producer input. */
export const SUPPORT_FILES = [".github/workflows/verify.yml", ".gitignore", "test/composition.test.mjs", "test/package.test.mjs", "test/tamper.test.mjs",
  "tools/build.mjs", "tools/qualify-package.mjs", "tools/toolchain.json", "tools/verify-lib.mjs", "tools/verify.mjs",
  "docs/unreleased-soft-light-palettes.md", "docs/soft-light-contrast.json"];
const APPEARANCE_PRODUCER_FILES = ["tools/appearance-catalog-lib.mjs", "tools/compose-appearances.mjs"];
const APPEARANCE_SUPPORT_FILES = ["test/appearance-catalog.test.mjs", "test/appearance-package-integration.test.mjs", "test/appearance-single-profile.test.mjs"];
/** Closed first-party site/workflow inventory. Every member is explicit; no site/** glob is admitted. */
export const REPOSITORY_SITE_FILES = Object.freeze([
  ".github/workflows/cttn-pages.yml",
  "site/LICENSE",
  "site/README.md",
  "site/SOURCE-ASSETS.json",
  "site/THIRD-PARTY-NOTICES.md",
  "site/index.html",
  "site/package-lock.json",
  "site/package.json",
  "site/public/404.html",
  "site/public/appearances/anime/cttn.css",
  "site/public/appearances/catalog.json",
  "site/public/appearances/developer/cttn.css",
  "site/public/appearances/gamer/cttn.css",
  "site/public/appearances/graphic-designer/cttn.css",
  "site/public/appearances/nebular/cttn.css",
  "site/public/appearances/profiles/anime.profile.json",
  "site/public/appearances/profiles/developer.profile.json",
  "site/public/appearances/profiles/gamer.profile.json",
  "site/public/appearances/profiles/graphic-designer.profile.json",
  "site/public/appearances/profiles/nebular.profile.json",
  "site/public/appearances/profiles/terminal-nova.profile.json",
  "site/public/appearances/provenance.json",
  "site/public/appearances/source-profiles.json",
  "site/public/appearances/terminal-nova/cttn.css",
  "site/public/brand/BRAND-ASSETS.md",
  "site/public/brand/README-BRAND.md",
  "site/public/brand/cttn-social.png",
  "site/public/brand/cttn-social.svg",
  "site/public/favicon.svg",
  "site/public/robots.txt",
  "site/specimen.html",
  "site/src/App.tsx",
  "site/src/catalog.ts",
  "site/src/components/ui/button.tsx",
  "site/src/components/ui/card.tsx",
  "site/src/components/ui/dialog.tsx",
  "site/src/components/ui/input.tsx",
  "site/src/components/ui/label.tsx",
  "site/src/components/ui/table.tsx",
  "site/src/lib/utils.ts",
  "site/src/main.tsx",
  "site/src/specimen-entry.tsx",
  "site/src/specimen-main.tsx",
  "site/src/specimen.css",
  "site/src/styles.css",
  "site/src/test/consumer.test.tsx",
  "site/src/vite-env.d.ts",
  "site/tools/bundled-notices.d.mts",
  "site/tools/bundled-notices.mjs",
  "site/tools/license-evidence/react-remove-scroll-bar/LICENSE.txt",
  "site/tools/license-evidence/react-remove-scroll-bar/evidence.json",
  "site/tools/license-evidence/react-remove-scroll-bar/hash-receipt.json",
  "site/tools/native-build-preflight-lib.cjs",
  "site/tools/native-build-preflight.cjs",
  "site/tools/test/bundled-notices.test.mjs",
  "site/tools/test/native-build-preflight.node-test.cjs",
  "site/tsconfig.json",
  "site/vite.config.ts",
]);
if (REPOSITORY_SITE_FILES.length !== 58 || new Set(REPOSITORY_SITE_FILES).size !== REPOSITORY_SITE_FILES.length) {
  throw new Error("Maintained repository site inventory must contain 58 unique paths");
}
const IGNORED_ROOTS = new Set([".git", "node_modules"]);
const LEAK_PATTERNS = [/\/(Users|home|private\/var)\/[A-Za-z]/, /agent[-]scratch/, /triad[-]20\d\d/, /[.]serena\b/, /-----BEGIN [A-Z ]*PRIVATE KEY/,
  /\bnpm_[A-Za-z0-9]{36}\b/, /\bgh[pousr]_[A-Za-z0-9]{36}\b/];

/** All regular files below root except .git and node_modules; links and special files fail. */
export function readTree(root) {
  const files = new Map();
  const walk = prefix => {
    for (const name of readdirSync(prefix ? join(root, prefix) : root)) {
      if (!prefix && IGNORED_ROOTS.has(name)) continue;
      const path = prefix ? `${prefix}/${name}` : name;
      const stat = lstatSync(join(root, path));
      if (stat.isDirectory()) walk(path);
      else if (stat.isFile()) files.set(path, readFileSync(join(root, path)));
      else fail(`Unsupported file type: ${path}`);
    }
  };
  walk("");
  return files;
}

/** Closed composed-source inventory, recomputed from bytes. */
export function verifySourceInventory(files) {
  const provenance = parse(files, "provenance.json");
  if (provenance.schema !== "cttn.package-provenance-v1") fail("Unknown CTTN provenance schema");
  if (digest("cttn.package-inventory-v1", provenance.files) !== provenance.inventoryDigest) fail("Source inventory digest mismatch");
  const paths = provenance.files.map(member => member.path);
  if (new Set(paths).size !== paths.length || paths.includes("provenance.json")) fail("Source inventory paths are not unique");
  if (JSON.stringify(paths) !== JSON.stringify([...paths].sort(byPath))) fail("Source inventory is not in canonical order");
  for (const member of provenance.files) {
    if (!files.has(member.path)) fail(`Missing source member: ${member.path}`);
    if (JSON.stringify(record(member.path, files.get(member.path))) !== JSON.stringify(member)) fail(`Source member digest mismatch: ${member.path}`);
  }
  return provenance;
}

const APPEARANCE_FAMILY_IDS = ["terminal-nova", "nebular", "developer", "graphic-designer", "anime", "gamer"];
const APPEARANCE_STYLE_NAMES = ["accent", "base", "code", "compat", "layers", "overrides", "tokens"];
const APPEARANCE_SOURCE_PATHS = [
  "tools/source/appearance-catalog/catalog.json",
  "tools/source/engines.json",
  "tools/source/sttn/v0.4/terminal-nova.theme.json",
  "tools/source/terminal-nova.profile.json",
  ...APPEARANCE_FAMILY_IDS.filter(id => id !== "terminal-nova").map(id => `tools/source/appearance-catalog/${id}.profile.json`),
];

function appearancePackagePaths(reportsRoot = "reports/appearances") {
  return [
    ...APPEARANCE_FAMILY_IDS.map(id => `styles/appearances/${id}.css`),
    ...APPEARANCE_FAMILY_IDS.map(id => `styles/appearances-sttn/${id}.css`),
    ...APPEARANCE_FAMILY_IDS.map(id => `styles/appearances-application/${id}.css`),
    ...APPEARANCE_FAMILY_IDS.map(id => `${reportsRoot}/appearance-extensions/${id}.css`),
    ...APPEARANCE_FAMILY_IDS.flatMap(id => [
      `${reportsRoot}/mappings/${id}/application-extension.mapping.json`,
      `${reportsRoot}/mappings/${id}/solar.mapping.json`,
      `${reportsRoot}/mappings/${id}/loom.mapping.json`,
    ]),
    ...APPEARANCE_FAMILY_IDS.map(id => `${reportsRoot}/sttn-catalogs/${id}.json`),
    `${reportsRoot}/catalog.json`,
    `${reportsRoot}/inventory.json`,
    `${reportsRoot}/source/catalog.json`,
    `${reportsRoot}/source/engines.json`,
    `${reportsRoot}/source/sttn/v0.4/terminal-nova.theme.json`,
    `${reportsRoot}/source/inventory.json`,
    ...APPEARANCE_FAMILY_IDS.map(id => `${reportsRoot}/source/profiles/${id}.profile.json`),
    "src/appearance-baselines.ts",
    "src/appearance-catalog.ts",
  ];
}

function isAppearanceRootPath(path) {
  return path.startsWith("styles/appearances/")
    || path.startsWith("styles/appearances-sttn/")
    || path.startsWith("styles/appearances-application/")
    || path.startsWith("reports/appearances/")
    || path === "src/appearance-baselines.ts"
    || path === "src/appearance-catalog.ts";
}

function appearanceSourceProjectionPath(path, reportsRoot) {
  const prefix = "tools/source/";
  if (!path.startsWith(prefix)) fail(`Unexpected appearance source identity path: ${path}`);
  const relative = path.slice(prefix.length);
  if (relative === "appearance-catalog/catalog.json") return `${reportsRoot}/source/catalog.json`;
  if (relative === "engines.json") return `${reportsRoot}/source/engines.json`;
  if (relative === "sttn/v0.4/terminal-nova.theme.json") return `${reportsRoot}/source/sttn/v0.4/terminal-nova.theme.json`;
  if (relative === "terminal-nova.profile.json") return `${reportsRoot}/source/profiles/terminal-nova.profile.json`;
  if (/^appearance-catalog\/(?:nebular|developer|graphic-designer|anime|gamer)\.profile\.json$/.test(relative)) {
    return `${reportsRoot}/source/profiles/${relative.slice("appearance-catalog/".length)}`;
  }
  fail(`Unexpected appearance source inventory path: ${path}`);
}

function assertAppearanceRecord(records, path, bytes, label) {
  const actual = appearanceRecord(path, bytes);
  if (JSON.stringify(actual) !== JSON.stringify(records.get(path))) fail(`${label} digest mismatch: ${path}`);
}

function parseGeneratedObject(source, prefix, suffix, label) {
  const text = String(source);
  if (!text.startsWith(prefix) || !text.endsWith(suffix)) fail(`${label} has unexpected generated wrapper`);
  try {
    return JSON.parse(text.slice(prefix.length, -suffix.length));
  } catch (error) {
    fail(`${label} is not valid generated JSON: ${error.message}`);
  }
}

// Independent copy of the producer's closed pinned-Solar framing check. This
// intentionally accepts only the reviewed Tailwind preamble shape.
const SOLAR_TAILWIND_PREAMBLE = /^\/\* Generated by Theme Forge Solar Sail — Tailwind CSS v4 & shadcn\/ui application theme \*\/\n@custom-variant dark \(&:is\(\.dark \*\)\);\n\n@theme inline \{[\s\S]*?\n\}\n\n/;

function splitSolarApplicationCss(css, label) {
  if (typeof css !== "string") fail(`${label} CSS must be text`);
  const match = css.match(SOLAR_TAILWIND_PREAMBLE);
  if (!match?.[0]) fail(`${label} has unexpected Tailwind application preamble`);
  const preamble = match[0];
  const body = css.slice(preamble.length);
  if (!body.startsWith(":root")) fail(`${label} has unexpected Tailwind application body`);
  if (/@(?:custom-variant|theme)\b/.test(body)) fail(`${label} Tailwind directives are nested in the layered body`);
  return { preamble, body };
}

/**
 * Independently verify the optional six-family appearance projection. This
 * uses only package bytes and built-in hashing/parsing; it deliberately does
 * not import or call the producer.
 */
export function verifyAppearanceIntegration(files, integration, compositionEngines = undefined) {
  if (!integration || integration.schema !== "cttn.appearance-package-integration-v1") fail("Unknown appearance integration schema");
  const reportsRoot = integration.reportsRoot;
  if (reportsRoot !== "reports/appearances") fail("Unexpected appearance reports root");
  const expectedPackagePaths = appearancePackagePaths(reportsRoot).sort(codePointCompare);
  const actualPackagePaths = [...files.keys()].filter(isAppearanceRootPath).sort(codePointCompare);
  if (JSON.stringify(actualPackagePaths) !== JSON.stringify(expectedPackagePaths)) fail("Appearance package path closure mismatch");
  const reportCatalogPath = `${reportsRoot}/catalog.json`;
  const reportInventoryPath = `${reportsRoot}/inventory.json`;
  const reportSourceInventoryPath = `${reportsRoot}/source/inventory.json`;
  const generatedCatalog = parse(files, reportCatalogPath);
  const generatedInventory = parse(files, reportInventoryPath);
  const sourceInventory = parse(files, reportSourceInventoryPath);
  if (JSON.stringify(generatedCatalog.sourceIdentity) !== JSON.stringify(integration.sourceIdentity)) fail("Appearance source identity differs from generated catalog");
  if (JSON.stringify(generatedInventory) !== JSON.stringify(integration.generatedInventory)) fail("Appearance generated inventory differs from integration record");
  if (JSON.stringify(sourceInventory) !== JSON.stringify(integration.sourceInventory)) fail("Appearance source inventory differs from integration record");

  const familyIds = generatedCatalog.families?.map(family => family.id);
  if (JSON.stringify(familyIds) !== JSON.stringify(APPEARANCE_FAMILY_IDS)) fail("Appearance family identities are not the closed six-family set");
  if (new Set(familyIds).size !== familyIds.length) fail("Appearance family identities are duplicated");

  if (sourceInventory.schema !== "theme-forge.appearance-source-inventory.v1") fail("Unknown appearance source inventory schema");
  const sourcePaths = (sourceInventory.members ?? []).map(member => member.path);
  if (sourcePaths.some(path => !/^[a-z0-9._/-]+$/.test(path))) fail("Appearance source inventory contains a non-lowercase ASCII path");
  const expectedSourcePaths = [...APPEARANCE_SOURCE_PATHS].sort(codePointCompare);
  if (JSON.stringify([...new Set(sourcePaths)].sort(codePointCompare)) !== JSON.stringify(expectedSourcePaths)
    || sourcePaths.length !== expectedSourcePaths.length) fail("Appearance source path closure mismatch");
  const localeSourcePaths = [...sourcePaths].sort((left, right) => left.localeCompare(right, "en"));
  const codePointSourcePaths = [...sourcePaths].sort(codePointCompare);
  if (JSON.stringify(localeSourcePaths) !== JSON.stringify(codePointSourcePaths)) fail("Appearance source ordering charset mismatch");
  const sourceRecords = new Map();
  for (const member of sourceInventory.members ?? []) {
    const reportPath = appearanceSourceProjectionPath(member.path, reportsRoot);
    if (sourceRecords.has(member.path)) fail(`Duplicate appearance source inventory member: ${member.path}`);
    const bytes = files.get(reportPath);
    if (bytes === undefined) fail(`Missing distributed appearance source: ${reportPath}`);
    sourceRecords.set(member.path, record(member.path, bytes));
  }
  const recomputedSourceMembers = [...sourceRecords.values()].sort(appearanceByPath);
  if (JSON.stringify(recomputedSourceMembers) !== JSON.stringify(sourceInventory.members)) fail("Appearance source inventory members mismatch");
  if (sourceInventory.digest !== appearanceDigest(sourceInventory.schema, recomputedSourceMembers)) fail("Appearance source inventory digest mismatch");

  const identity = integration.sourceIdentity;
  if (identity.schema !== "theme-forge.appearance-catalog-source-identity.v1" || identity.pathBase !== "repository-root") fail("Appearance source identity path base is not closed");
  const identityRecords = [
    [identity.catalog, `${reportsRoot}/source/catalog.json`, "tools/source/appearance-catalog/catalog.json"],
    [identity.template, `${reportsRoot}/source/sttn/v0.4/terminal-nova.theme.json`, "tools/source/sttn/v0.4/terminal-nova.theme.json"],
    ...(identity.profiles ?? []).map(profile => [profile, `${reportsRoot}/source/profiles/${profile.id}.profile.json`, profile.id === "terminal-nova" ? "tools/source/terminal-nova.profile.json" : `tools/source/appearance-catalog/${profile.id}.profile.json`]),
  ];
  if (!Array.isArray(identity.profiles) || JSON.stringify(identity.profiles.map(profile => profile.id)) !== JSON.stringify(APPEARANCE_FAMILY_IDS)) fail("Appearance source identity profile set mismatch");
  for (const [recorded, path, expectedIdentityPath] of identityRecords) {
    if (!recorded || recorded.path !== expectedIdentityPath) fail(`Appearance source identity path mismatch: ${path}`);
    const bytes = files.get(path);
    if (bytes === undefined || recorded.bytes !== Buffer.byteLength(bytes) || recorded.sha256 !== sha256(bytes)) fail(`Appearance raw source identity mismatch: ${path}`);
  }
  const engineSource = JSON.parse(String(files.get(`${reportsRoot}/source/engines.json`)));
  const declaredEngines = engineSource.engines.map(({ role, package: name, version, sha256: digestValue, integrity }) => ({ role, package: name, version, sha256: digestValue, integrity }));
  const identityEngines = (identity.engines ?? []).map(({ role, package: name, version, sha256: digestValue, integrity }) => ({ role, package: name, version, sha256: digestValue, integrity }));
  if (JSON.stringify(identityEngines) !== JSON.stringify(declaredEngines)) fail("Appearance engine identity differs from distributed declarations");
  if (compositionEngines !== undefined) {
    // The established composition schema identifies roles by its fixed package
    // list, while the distributed declarations above also carry explicit roles.
    const sharedIdentity = ({ package: name, version, sha256: digestValue, integrity }) => ({ package: name, version, sha256: digestValue, integrity });
    const composedEngines = (compositionEngines ?? []).map(sharedIdentity);
    if (JSON.stringify(identityEngines.map(sharedIdentity)) !== JSON.stringify(composedEngines)) fail("Appearance engine identity differs from composition engines");
  }

  const profileHashes = new Map((identity.profiles ?? []).map(profile => [profile.id, profile.sha256]));
  for (const family of generatedCatalog.families ?? []) {
    if (family.sourceSha256 !== profileHashes.get(family.id)) fail(`Appearance family source hash binding mismatch: ${family.id}`);
    const disposition = family.targetDisposition;
    if (!Array.isArray(disposition?.profileDerivedRoles) || !Array.isArray(disposition?.templateRetainedRoles) || !Array.isArray(disposition?.loomNotApplied)) fail(`Appearance Loom disposition is incomplete: ${family.id}`);
    if (disposition.roleComparison?.method !== "resolved-value-comparison-to-declared-template" || disposition.roleComparison?.causalProvenance !== false) fail(`Appearance Loom role comparison disclosure is incomplete: ${family.id}`);
    if (disposition.hoistDisposition?.status !== "hoisted" || disposition.hoistDisposition?.preamble !== "solar-tailwind-v4-preamble") fail(`Appearance application preamble disposition is incomplete: ${family.id}`);
  }

  if (generatedInventory.schema !== "theme-forge.generated-appearance-inventory.v1") fail("Unknown generated appearance inventory schema");
  if (JSON.stringify(generatedInventory.members) !== JSON.stringify([...generatedInventory.members].sort(appearanceByPath))) fail("Generated appearance inventory is not in code-point order");
  if (generatedInventory.digest !== generatedAppearanceDigest(generatedInventory.schema, generatedInventory.members)) fail("Generated appearance inventory digest mismatch");
  const generatedRecords = new Map(generatedInventory.members.map(member => [member.path, member]));
  if (generatedRecords.size !== generatedInventory.members.length) fail("Generated appearance inventory has duplicate members");

  const consumerFiles = integration.consumerFiles;
  const expectedCttn = APPEARANCE_FAMILY_IDS.map(id => `styles/appearances/${id}.css`);
  const expectedSttn = APPEARANCE_FAMILY_IDS.map(id => `styles/appearances-sttn/${id}.css`);
  const expectedApplication = APPEARANCE_FAMILY_IDS.map(id => `styles/appearances-application/${id}.css`);
  if (JSON.stringify(consumerFiles?.cttnStyles) !== JSON.stringify(expectedCttn)) fail("Appearance CTTN output paths are not exact");
  if (JSON.stringify(consumerFiles?.sttnStyles) !== JSON.stringify(expectedSttn)) fail("Appearance STTN output paths are not exact");
  if (JSON.stringify(consumerFiles?.applicationStyles) !== JSON.stringify(expectedApplication)) fail("Appearance application output paths are not exact");
  if (consumerFiles?.applicationBaselines !== "src/appearance-baselines.ts" || consumerFiles?.catalog !== "src/appearance-catalog.ts") fail("Appearance runtime output paths are not exact");

  const projections = [
    ["catalog.json", reportCatalogPath],
    ["runtime-baselines.ts", consumerFiles.applicationBaselines],
  ];
  for (const [id, index] of APPEARANCE_FAMILY_IDS.map((id, index) => [id, index])) {
    projections.push(
      [`${id}/cttn.css`, expectedCttn[index]],
      [`${id}/sttn.css`, expectedSttn[index]],
      [`${id}/application.css`, expectedApplication[index]],
      [`${id}/appearance-extensions.css`, `${reportsRoot}/appearance-extensions/${id}.css`],
      [`${id}/application-extension.mapping.json`, `${reportsRoot}/mappings/${id}/application-extension.mapping.json`],
      [`${id}/solar.mapping.json`, `${reportsRoot}/mappings/${id}/solar.mapping.json`],
      [`${id}/loom.mapping.json`, `${reportsRoot}/mappings/${id}/loom.mapping.json`],
      [`${id}/sttn.catalog.json`, `${reportsRoot}/sttn-catalogs/${id}.json`],
    );
  }
  const projectedGenerated = new Set(projections.map(([generatedPath]) => generatedPath));
  const expectedBundledStyles = APPEARANCE_FAMILY_IDS.flatMap(id => APPEARANCE_STYLE_NAMES.map(name => `${id}/styles/${name}.css`)).sort(codePointCompare);
  const actualUnprojected = generatedInventory.members.map(member => member.path).filter(path => !projectedGenerated.has(path));
  if (JSON.stringify(actualUnprojected) !== JSON.stringify(expectedBundledStyles)) fail("Appearance generated member projection set mismatch");
  for (const [generatedPath, packagePath] of projections) {
    const generated = generatedRecords.get(generatedPath);
    if (!generated) fail(`Missing declared generated appearance member: ${generatedPath}`);
    const bytes = files.get(packagePath);
    if (bytes === undefined) fail(`Missing appearance package projection: ${packagePath}`);
    if (generated.bytes !== Buffer.byteLength(bytes) || generated.sha256 !== sha256(bytes)) fail(`Appearance package projection mismatch: ${packagePath}`);
  }

  for (const [index, id] of APPEARANCE_FAMILY_IDS.entries()) {
    const cttnCss = String(files.get(expectedCttn[index]));
    const { preamble, body } = splitSolarApplicationCss(cttnCss, `Appearance ${id} Solar CSS`);
    const extensionCss = String(files.get(`${reportsRoot}/appearance-extensions/${id}.css`));
    const expectedApplicationCss = `${preamble}@layer theme-forge-application-baseline {\n${body}\n${extensionCss}\n}\n`;
    if (String(files.get(expectedApplication[index])) !== expectedApplicationCss) fail(`Appearance application CSS layer structure mismatch: ${id}`);
  }

  const baselines = parseGeneratedObject(files.get(consumerFiles.applicationBaselines), "/** Generated from the shared paired profiles; regenerate with the catalog producer. */\nexport const applicationBaselines = /*#__PURE__*/ Object.freeze(", ");\n", "Application runtime baselines");
  if (JSON.stringify(Object.keys(baselines)) !== JSON.stringify(APPEARANCE_FAMILY_IDS)) fail("Application runtime baseline family set mismatch");
  for (const [index, id] of APPEARANCE_FAMILY_IDS.entries()) {
    const applicationCss = files.get(expectedApplication[index]);
    if (baselines[id] !== String(applicationCss)) fail(`Application runtime baseline mismatch: ${id}`);
  }
  const catalogSource = parseGeneratedObject(files.get(consumerFiles.catalog), "/** Generated from the shared six-family appearance catalog; regenerate with the catalog producer. */\nexport const appearanceCatalog = /*#__PURE__*/ Object.freeze(", " as const);\nexport default appearanceCatalog;\n", "Appearance runtime catalog");
  if (JSON.stringify(catalogSource) !== JSON.stringify(generatedCatalog)) fail("Application catalog projection mismatch");
  return { schema: "cttn.appearance-verification-v1", status: "passed", families: familyIds, generatedInventoryDigest: generatedInventory.digest, sourceInventoryDigest: sourceInventory.digest };
}

/** Composition record: generator lineage, every change, engine and producer identity. */
export function verifyComposition(files, provenance) {
  const composition = parse(files, "composition.json");
  const pkg = parse(files, "package.json");
  if (composition.schema !== "cttn.composition-v2") fail("Unknown CTTN composition schema");
  if (pkg.name !== provenance.packageName || pkg.version !== provenance.packageVersion) fail("Package identity differs from provenance");
  if (composition.composer.package !== pkg.name || composition.composer.version !== pkg.version || composition.composer.role !== "standalone-public-producer") fail("Composer identity is not this standalone package");
  if (JSON.stringify(provenance.producer) !== JSON.stringify(composition.composer)) fail("Provenance producer differs from composition composer");
  const producer = composition.producerInventory;
  if (digest("cttn.producer-inventory-v1", producer.files) !== producer.digest || producer.digest !== composition.composer.producerInventoryDigest) fail("Producer inventory digest mismatch");
  const tool = producer.files.find(member => member.path === composition.composer.tool);
  if (!tool || tool.sha256 !== composition.composer.sourceSha256) fail("Composer source hash is not in the producer inventory");
  const engines = composition.engines;
  if (!Array.isArray(engines) || JSON.stringify(engines.map(engine => engine.package)) !== JSON.stringify(ENGINE_PACKAGES)) fail("Unexpected composition engines");
  for (const engine of engines) if (!/^[0-9a-f]{64}$/.test(engine.sha256) || !/^sha512-[A-Za-z0-9+/]{86}==$/.test(engine.integrity)) fail(`Engine archive is not bound: ${engine.package}`);
  if (provenance.generator.package !== engines[0].package || provenance.generator.version !== engines[0].version) fail("Generator differs from the bound Solar Sail archive");
  if (provenance.generatorProvenancePath !== "reports/solar-sail.provenance.json") fail("Unexpected generator provenance path");
  const generatorBytes = files.get(provenance.generatorProvenancePath);
  if (!generatorBytes || sha256(generatorBytes) !== composition.generatorProvenanceSha256) fail("Generator provenance hash mismatch");
  const generator = JSON.parse(String(generatorBytes));
  if (generator.schema !== "tfss.package-provenance-v1" || digest("tfss.package-inventory-v1", generator.files) !== generator.inventoryDigest) fail("Generator inventory digest mismatch");
  if (JSON.stringify(generator.producer) !== JSON.stringify(provenance.generator)) fail("Generator identity mismatch");
  if (JSON.stringify(composition.inventoryExcludes) !== JSON.stringify(["composition.json", "provenance.json"])) fail("Unexpected composition inventory excludes");
  const changes = new Map(composition.changes.map(change => [change.path, change]));
  if (changes.size !== composition.changes.length) fail("Duplicate composition change");
  const generated = new Map(generator.files.map(member => [member.path, member]));
  for (const member of provenance.files) {
    if (composition.inventoryExcludes.includes(member.path)) continue;
    const change = changes.get(member.path);
    const before = generated.get(member.path);
    if (change) {
      if (change.afterSha256 !== member.sha256) fail(`Composition change does not match member: ${member.path}`);
      if (change.action === "replaced" ? !before || before.sha256 !== change.beforeSha256 : before || change.beforeSha256 !== null) fail(`Composition change lineage mismatch: ${member.path}`);
    } else if (!before || before.sha256 !== member.sha256) fail(`Member is neither generated unchanged nor a recorded change: ${member.path}`);
  }
  const present = new Set(provenance.files.map(member => member.path));
  for (const path of changes.keys()) if (!present.has(path)) fail(`Recorded change has no member: ${path}`);
  for (const path of generated.keys()) if (!present.has(path) && !changes.has(path)) fail(`Generated member silently removed: ${path}`);
  if (sha256(files.get("loom-counterpart/terminal-nova.loom.theme.json")) !== composition.counterpartSha256) fail("Loom counterpart hash mismatch");
  const compatibility = parse(files, "reports/sttn-compatibility.json");
  if (compatibility.sttnSourceSha256 !== composition.sttnSourceSha256) fail("STTN source hash mismatch");
  const templatePath = "reports/appearances/source/sttn/v0.4/terminal-nova.theme.json";
  if (sha256(files.get(templatePath)) !== composition.sttnSourceSha256) fail("Compatibility template source binding differs");
  const template = parse(files, templatePath);
  const counterpart = parse(files, "loom-counterpart/terminal-nova.loom.theme.json");
  const profilePath = "reports/appearances/source/profiles/terminal-nova.profile.json";
  const profileIdentity = composition.appearanceIntegration?.sourceIdentity?.profiles?.find(profile => profile.id === "terminal-nova");
  if (!profileIdentity || sha256(files.get(profilePath)) !== profileIdentity.sha256) fail("Compatibility profile source binding differs");
  const profile = parse(files, profilePath);
  const expectedRows = [];
  for (const family of ["cyan", "orange"]) for (const mode of ["light", "dark"]) {
    for (const role of Object.keys(template.accentVariants[family][mode]).sort()) {
      const resolveRole = catalog => {
        const variant = catalog.accentVariants[family];
        return catalog.tokenSets[variant.tokenSet][variant[mode][role]];
      };
      const before = resolveRole(template), after = resolveRole(counterpart);
      const lightRoles = { "accent-base": family === "cyan" ? "primaryAction" : "highlight", link: family === "cyan" ? "primaryAction" : "highlight", focus: family === "cyan" ? "focus" : "highlight", border: "border", hairline: "border", card: "surface", page: "canvas", raised: "elevatedSurface", muted: "mutedText", body: "canvasText" };
      const sourceRole = mode === "light" ? lightRoles[role] : undefined;
      const declared = sourceRole && profile.color.light[sourceRole] === after;
      const row = { family, mode, role, sttn: before, cttn: after, outcome: before === after ? "equal" : "divergent",
        reason: before === after ? "Resolved STTN value preserved" : declared ? "Shared light profile revision" : role === "hairline" && after === template.tokenSets[template.accentVariants[family].tokenSet][template.accentVariants[family][mode].border] ? "Paired border maps to both hairline and border; CTTN chooses STTN border" : "Undeclared divergence" };
      if (row.reason === "Undeclared divergence") fail(`Undeclared STTN divergence: ${family}/${mode}/${role}`);
      if (row.reason === "Shared light profile revision") row.sourcePath = `color.light.${sourceRole}`;
      expectedRows.push(row);
    }
  }
  if (JSON.stringify(compatibility.rows) !== JSON.stringify(expectedRows)) fail("Compatibility report differs from authenticated inputs");
  const hasAppearanceMembers = [...files.keys()].some(isAppearanceRootPath);
  const hasAppearanceRecord = composition.appearanceIntegration !== undefined;
  if (hasAppearanceMembers !== hasAppearanceRecord) fail("Appearance integration record/member presence mismatch");
  if (hasAppearanceRecord) verifyAppearanceIntegration(files, composition.appearanceIntegration, engines);
  return composition;
}

/** Expected compiler members derive from composed src/*.ts; nothing else may appear in dist. */
export function expectedDist(provenance) {
  return provenance.files.map(member => member.path).filter(path => /^src\/[^/]+\.ts$/.test(path) && !path.endsWith(".d.ts"))
    .flatMap(path => { const stem = path.slice(4, -3); return [`dist/${stem}.d.ts`, `dist/${stem}.js`]; }).sort(byPath);
}

export function createBuildReceipt(files, provenance, typescriptVersion) {
  const pkg = parse(files, "package.json");
  if (typescriptVersion !== pkg.devDependencies.typescript) fail(`TypeScript ${typescriptVersion} differs from declared ${pkg.devDependencies.typescript}`);
  const records = expectedDist(provenance).map(path => files.has(path) ? record(path, files.get(path)) : fail(`Missing compiled member: ${path}`));
  return { schema: "cttn.build-receipt-v1", packageName: pkg.name, packageVersion: pkg.version,
    sourceInventoryDigest: provenance.inventoryDigest, provenanceSha256: sha256(files.get("provenance.json")),
    compiler: { package: "typescript", version: typescriptVersion, command: "tsc -p tsconfig.json", tsconfigSha256: sha256(files.get("tsconfig.json")) },
    files: records, inventoryDigest: digest("cttn.dist-inventory-v1", records) };
}

/** Compiled output is a separate domain bound to the exact source inventory. */
export function verifyBuildReceipt(files, provenance) {
  const receipt = parse(files, BUILD_RECEIPT);
  if (receipt.schema !== "cttn.build-receipt-v1") fail("Unknown CTTN build receipt schema");
  const expected = createBuildReceipt(files, provenance, receipt.compiler?.version);
  if (JSON.stringify(receipt) !== JSON.stringify(expected)) {
    for (const key of Object.keys(expected)) if (JSON.stringify(receipt[key]) !== JSON.stringify(expected[key])) fail(`Build receipt mismatch: ${key}`);
    fail("Build receipt has unexpected fields");
  }
  return receipt;
}

/** Repository-only: the packaged producer and source inputs exactly match the composition record. */
export function verifyProducer(files, composition) {
  const recorded = composition.producerInventory.files;
  const actual = [...files.keys()].filter(path => path === "tools/compose-lib.mjs" || path === "tools/compose.mjs" || APPEARANCE_PRODUCER_FILES.includes(path) || path.startsWith("tools/source/")).sort(byPath);
  if (JSON.stringify(actual) !== JSON.stringify(recorded.map(member => member.path))) fail("Producer file set differs from composition record");
  for (const member of recorded) if (JSON.stringify(record(member.path, files.get(member.path))) !== JSON.stringify(member)) fail(`Producer member digest mismatch: ${member.path}`);
  const engines = parse(files, "tools/source/engines.json").engines.map(({ package: name, version, sha256: hash, integrity }) => ({ package: name, version, sha256: hash, integrity }));
  if (JSON.stringify(engines) !== JSON.stringify(composition.engines)) fail("Composition engines differ from tools/source/engines.json");
}

export function scanForLeaks(files) {
  for (const [path, bytes] of files) {
    const text = bytes.toString("utf8");
    for (const pattern of LEAK_PATTERNS) if (pattern.test(text)) fail(`Private or credential-like content in ${path}: ${pattern}`);
  }
}

/**
 * mode "package": an unpacked npm archive. mode "repository": the source repository.
 * Both are closed: every file must be classified.
 */
export function verifyTree(files, mode) {
  if (mode !== "package" && mode !== "repository") fail("Mode must be package or repository");
  const provenance = verifySourceInventory(files);
  const composition = verifyComposition(files, provenance);
  const appearanceVerification = composition.appearanceIntegration
    ? verifyAppearanceIntegration(files, composition.appearanceIntegration, composition.engines)
    : null;
  const receipt = verifyBuildReceipt(files, provenance);
  const allowed = new Set([...provenance.files.map(member => member.path), "provenance.json", BUILD_RECEIPT, ...receipt.files.map(member => member.path)]);
  if (mode === "repository") {
    verifyProducer(files, composition);
    for (const member of composition.producerInventory.files) allowed.add(member.path);
    for (const path of REPOSITORY_SITE_FILES) {
      if (files.has(path)) allowed.add(path);
      else fail(`Missing repository site member: ${path}`);
    }
    for (const path of SUPPORT_FILES) if (files.has(path)) allowed.add(path); else fail(`Missing repository support file: ${path}`);
    if (composition.producerInventory.files.some(member => APPEARANCE_PRODUCER_FILES.includes(member.path))) {
      for (const path of APPEARANCE_SUPPORT_FILES) if (files.has(path)) allowed.add(path); else fail(`Missing appearance support file: ${path}`);
    }
  }
  const unexpected = [...files.keys()].filter(path => !allowed.has(path));
  if (unexpected.length) fail(`Unclassified ${mode} members: ${unexpected.join(", ")}`);
  if (mode === "package" && files.size !== allowed.size) fail("Package member set is incomplete");
  scanForLeaks(files);
  return { schema: "cttn.verification-v1", mode, status: "passed", packageName: provenance.packageName, packageVersion: provenance.packageVersion,
    sourceInventoryDigest: provenance.inventoryDigest, provenanceSha256: sha256(files.get("provenance.json")),
    distInventoryDigest: receipt.inventoryDigest, producerInventoryDigest: composition.producerInventory.digest,
    engines: composition.engines, appearance: appearanceVerification
      ? { generatedInventoryDigest: appearanceVerification.generatedInventoryDigest, sourceInventoryDigest: appearanceVerification.sourceInventoryDigest }
      : null,
    members: files.size };
}
