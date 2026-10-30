import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
export const sourceRoot = fileURLToPath(new URL("./source/", import.meta.url));
export const sttnPath = join(sourceRoot, "sttn/v0.4/terminal-nova.theme.json");
export const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");
const sha512 = bytes => "sha512-" + createHash("sha512").update(bytes).digest("base64");
const json = value => JSON.stringify(value, null, 2) + "\n";
const read = path => readFileSync(join(sourceRoot, path), "utf8");
const byPath = (a, b) => a.localeCompare(b, "en");
const record = (path, content) => ({ path, size: Buffer.byteLength(content), sha256: sha256(content) });

/** Regular files below root as sorted POSIX paths; links and special files are rejected. */
export function listFiles(root, prefix = "") {
  const out = [];
  for (const name of readdirSync(join(root, prefix))) {
    const path = prefix ? `${prefix}/${name}` : name;
    const stat = lstatSync(join(root, path));
    if (stat.isDirectory()) out.push(...listFiles(root, path));
    else if (stat.isFile()) out.push(path);
    else throw new Error(`Unsupported file type: ${path}`);
  }
  return out.sort(byPath);
}

/** Every file that can change composed bytes: the producer code and all packaged source inputs. */
export function producerInventory(root = repositoryRoot) {
  const paths = ["tools/compose-lib.mjs", "tools/compose.mjs", ...listFiles(join(root, "tools/source")).map(path => `tools/source/${path}`)].sort(byPath);
  const files = paths.map(path => record(path, readFileSync(join(root, path))));
  return { files, digest: sha256("cttn.producer-inventory-v1\n" + JSON.stringify(files)) };
}

const composer = () => {
  const metadata = JSON.parse(read("package-metadata.json"));
  return { package: metadata.name, version: metadata.version, role: "standalone-public-producer", tool: "tools/compose-lib.mjs",
    sourceSha256: sha256(readFileSync(fileURLToPath(import.meta.url))), producerInventoryDigest: producerInventory().digest };
};

/** Verify the closed source inventory; compilation outputs are qualified separately. */
export function verifyCandidate(files) {
  const provenance = JSON.parse(String(files.get("provenance.json")));
  if (provenance.schema !== "cttn.package-provenance-v1") throw new Error("Unknown CTTN provenance schema");
  if (sha256("cttn.package-inventory-v1\n" + JSON.stringify(provenance.files)) !== provenance.inventoryDigest) throw new Error("Candidate inventory digest mismatch");
  const paths = provenance.files.map(member => member.path);
  if (new Set(paths).size !== paths.length || JSON.stringify([...files.keys()].filter(path => path !== "provenance.json").sort()) !== JSON.stringify([...paths].sort())) throw new Error("Candidate member inventory mismatch");
  for (const member of provenance.files) {
    const bytes = files.get(member.path);
    if (Buffer.byteLength(bytes) !== member.size || sha256(bytes) !== member.sha256) throw new Error(`Candidate member digest mismatch: ${member.path}`);
  }
  return provenance;
}

/**
 * Load the exact published engine archives named in tools/source/engines.json.
 * Archives are verified by SHA-256 and SHA-512 before extraction into a fresh directory.
 */
export async function loadEngines(archivePaths, workRoot = tmpdir()) {
  const declared = JSON.parse(read("engines.json"));
  if (declared.schema !== "cttn.engine-archives-v1") throw new Error("Unknown engine archive schema");
  const work = mkdtempSync(join(workRoot, "cttn-engines-"));
  const engines = { archives: [], work };
  for (const engine of declared.engines) {
    const path = archivePaths[engine.role];
    if (typeof path !== "string" || !path.startsWith("/")) throw new Error(`Absolute ${engine.role} archive path required`);
    const bytes = readFileSync(path);
    if (sha256(bytes) !== engine.sha256 || sha512(bytes) !== engine.integrity) throw new Error(`${engine.role} archive does not match ${engine.package}@${engine.version}`);
    const target = join(work, engine.role);
    mkdirSync(target);
    execFileSync("tar", ["-xzf", path, "-C", target, "--no-same-owner"], { stdio: "pipe" });
    listFiles(target);
    const manifest = JSON.parse(readFileSync(join(target, "package/package.json"), "utf8"));
    if (manifest.name !== engine.package || manifest.version !== engine.version) throw new Error(`${engine.role} archive manifest identity mismatch`);
    engines[engine.role] = await import(pathToFileURL(join(target, "package", engine.entry)).href);
    engines.archives.push({ package: engine.package, version: engine.version, sha256: engine.sha256, integrity: engine.integrity });
  }
  if (engines.solar.COMPILER_NAME !== declared.engines[0].package || engines.solar.COMPILER_VERSION !== declared.engines[0].version) throw new Error("Solar engine self-identity mismatch");
  if (engines.loom.COMPILER_PACKAGE !== declared.engines[1].package || engines.loom.COMPILER_VERSION !== declared.engines[1].version) throw new Error("Loom engine self-identity mismatch");
  return engines;
}

/** Resolve colour meaning rather than token reference names or package identity. */
export function compatibilityRows(before, after) {
  const rows = [];
  for (const family of ["cyan", "orange"]) for (const mode of ["light", "dark"]) {
    for (const role of Object.keys(before.accentVariants[family][mode]).sort()) {
      const oldValue = before.tokenSets[before.accentVariants[family].tokenSet][before.accentVariants[family][mode][role]];
      const newValue = after.tokenSets[after.accentVariants[family].tokenSet][after.accentVariants[family][mode][role]];
      rows.push({ family, mode, role, sttn: oldValue, cttn: newValue, outcome: oldValue === newValue ? "equal" : "divergent",
        reason: oldValue === newValue ? "Resolved STTN value preserved" : role === "hairline" ? "Paired border maps to both hairline and border; CTTN chooses STTN border" : "Undeclared divergence" });
    }
  }
  return rows;
}

/** Engines supplied by the caller (see loadEngines); composition has no provider dependency. */
export function composeCandidate({ solar, loom, archives }, profileSource = read("terminal-nova.profile.json")) {
  const bound = solar.bindSourceProfileV2(profileSource);
  const mapped = bound.mapToSolarSail();
  const sttnSource = readFileSync(sttnPath, "utf8");
  const sttn = JSON.parse(sttnSource);
  const counterpart = bound.mapToStellarLoom({ catalog: sttn });
  // Mapping returns a syntax model separately. Keep published STTN codePresentation.
  if (JSON.stringify(counterpart.catalog.codePresentation) !== JSON.stringify(sttn.codePresentation)) throw new Error("STTN code presentation drift");
  loom.validateThemeCatalog(counterpart.catalog);
  const generated = solar.generateThemePackage({ themeSpec: mapped.specification, metadata: JSON.parse(read("package-metadata.json")), language: "typescript" });
  const reported = [generated.provenance.producer, { package: loom.COMPILER_PACKAGE, version: loom.COMPILER_VERSION }];
  if (!Array.isArray(archives) || archives.length !== 2 || reported.some((engine, i) => engine.package !== archives[i].package || engine.version !== archives[i].version)) throw new Error("Engine archive binding mismatch");
  const original = new Map(generated.files);
  const files = new Map(original);
  for (const name of ["LICENSE", "NOTICE", "COMMERCIAL-LICENSE.md", "CLA.md", "CONTRIBUTING.md"]) files.set(name, read(`legal/${name}`));
  files.set(".github/pull_request_template.md", read("legal/pull_request_template.md"));
  files.set("src/status.ts", read("status.ts"));
  files.set("src/index.ts", String(files.get("src/index.ts")) + '\nexport { statuses, type ConsoleState } from "./status.js";\n');
  const { name, version, private: isPrivate, ...generatedManifest } = JSON.parse(String(files.get("package.json")));
  const pkg = { name, version, private: isPrivate, ...JSON.parse(read("package-publication.json")), ...generatedManifest };
  pkg.scripts.prepack = "npm run build";
  pkg.exports["./status"] = { types: "./dist/status.d.ts", import: "./dist/status.js" };
  pkg.files.push("CLA.md", "CONTRIBUTING.md", ".github/pull_request_template.md", "composition.json", "reports", "loom-counterpart", "build-receipt.json");
  files.set("package.json", json(pkg));
  files.set("README.md", read("README.md"));
  files.set("reports/solar-sail.mapping.json", json(mapped.report));
  files.set("reports/stellar-loom.mapping.json", json(counterpart.report));
  files.set("loom-counterpart/terminal-nova.loom.theme.json", json(counterpart.catalog));
  const compatibility = {
    schema: "cttn.sttn-compatibility-v1", sttnSourceSha256: sha256(sttnSource),
    scope: "Resolved cyan/orange colour roles. Name/version excluded; all other catalog structure is preserved except token references and appended paired tokens.",
    primary: "cyan", defaultAccent: "orange", codePresentation: "Retained from STTN; separately returned adapter syntax is not attached",
    targetDivergences: ["Solar-only danger, field, chart and sidebar roles", "Loom syntax/chrome model is reported but STTN codePresentation is retained", "CTTN primary cyan; Loom default accent orange"],
    rows: compatibilityRows(sttn, counterpart.catalog),
  };
  files.set("reports/sttn-compatibility.json", json(compatibility));
  files.set("reports/solar-sail.provenance.json", original.get("provenance.json"));
  files.delete("provenance.json");
  const changes = [...files].sort(([a], [b]) => byPath(a, b)).filter(([path, content]) => original.get(path) !== content)
    .map(([path, content]) => ({ path, action: original.has(path) ? "replaced" : "added", beforeSha256: original.has(path) ? sha256(original.get(path)) : null, afterSha256: sha256(content) }));
  const producer = producerInventory();
  files.set("composition.json", json({ schema: "cttn.composition-v2", sourceProfileSha256: bound.provenance.rawSourceSha256,
    canonicalDigest: bound.provenance.canonicalDigest, sttnSourceSha256: sha256(sttnSource), generatorProvenanceSha256: sha256(original.get("provenance.json")),
    composer: composer(), producerInventory: producer,
    engines: archives.map(archive => ({ ...archive })),
    counterpartSha256: sha256(files.get("loom-counterpart/terminal-nova.loom.theme.json")), changes,
    inventoryExcludes: ["composition.json", "provenance.json"],
    coordinates: { npm: pkg.name, repository: "Knowledge-Forge-AI/shadcn-theme-terminal-nova", access: pkg.publishConfig.access } }));
  const records = [...files].sort(([a], [b]) => byPath(a, b)).map(([path, content]) => record(path, content));
  const provenance = { ...generated.provenance, schema: "cttn.package-provenance-v1", producer: composer(),
    generator: generated.provenance.producer, generatorProvenancePath: "reports/solar-sail.provenance.json",
    files: records, inventoryDigest: sha256("cttn.package-inventory-v1\n" + JSON.stringify(records)) };
  files.set("provenance.json", json(provenance));
  verifyCandidate(files);
  return { files, mapped, counterpart, compatibility, provenance };
}

export async function writeCandidate(engines, destination) {
  if (typeof destination !== "string" || !destination.startsWith("/")) throw new Error("Use an absolute fresh output directory");
  try { lstatSync(destination); throw new Error("Output must be absent"); } catch (error) { if (error.code !== "ENOENT") throw error; }
  const result = composeCandidate(engines);
  await engines.solar.writePackageFiles(result.files, destination);
  return result;
}
