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
const record = (path, bytes) => ({ path, size: Buffer.byteLength(bytes), sha256: sha256(bytes) });
const digest = (domain, records) => sha256(`${domain}\n` + JSON.stringify(records));
const fail = message => { throw new Error(message); };
const parse = (files, path) => {
  if (!files.has(path)) fail(`Missing ${path}`);
  return JSON.parse(String(files.get(path)));
};

export const BUILD_RECEIPT = "build-receipt.json";
export const ENGINE_PACKAGES = ["@knowledge-forge-ai/theme-forge-solar-sail", "@knowledge-forge-ai/theme-forge-stellar-loom"];
/** Repository infrastructure that is neither composed, compiled nor a producer input. */
export const SUPPORT_FILES = [".github/workflows/verify.yml", ".gitignore", "test/composition.test.mjs", "test/package.test.mjs", "test/tamper.test.mjs",
  "tools/build.mjs", "tools/qualify-package.mjs", "tools/toolchain.json", "tools/verify-lib.mjs", "tools/verify.mjs"];
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
  for (const row of compatibility.rows) if (row.outcome !== "equal" && row.reason === "Undeclared divergence") fail(`Undeclared STTN divergence: ${row.family}/${row.mode}/${row.role}`);
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
  const actual = [...files.keys()].filter(path => path === "tools/compose-lib.mjs" || path === "tools/compose.mjs" || path.startsWith("tools/source/")).sort(byPath);
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
  const receipt = verifyBuildReceipt(files, provenance);
  const allowed = new Set([...provenance.files.map(member => member.path), "provenance.json", BUILD_RECEIPT, ...receipt.files.map(member => member.path)]);
  if (mode === "repository") {
    verifyProducer(files, composition);
    for (const member of composition.producerInventory.files) allowed.add(member.path);
    for (const path of SUPPORT_FILES) if (files.has(path)) allowed.add(path); else fail(`Missing repository support file: ${path}`);
  }
  const unexpected = [...files.keys()].filter(path => !allowed.has(path));
  if (unexpected.length) fail(`Unclassified ${mode} members: ${unexpected.join(", ")}`);
  if (mode === "package" && files.size !== allowed.size) fail("Package member set is incomplete");
  scanForLeaks(files);
  return { schema: "cttn.verification-v1", mode, status: "passed", packageName: provenance.packageName, packageVersion: provenance.packageVersion,
    sourceInventoryDigest: provenance.inventoryDigest, provenanceSha256: sha256(files.get("provenance.json")),
    distInventoryDigest: receipt.inventoryDigest, producerInventoryDigest: composition.producerInventory.digest,
    engines: composition.engines, members: files.size };
}
