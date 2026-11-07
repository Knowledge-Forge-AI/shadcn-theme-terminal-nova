import { lstatSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { loadEngines, sourceRoot } from "./compose-lib.mjs";
import { compileAppearanceCollection } from "./appearance-catalog-lib.mjs";

const usage = "Usage: node tools/compose-appearances.mjs --solar <solar-sail-0.3.0.tgz> --loom <stellar-loom-0.5.0.tgz> --out <absolute-absent-directory>";
const args = process.argv.slice(2);
const options = {};
for (let index = 0; index < args.length; index += 2) {
  if (!args[index] || !["--solar", "--loom", "--out"].includes(args[index]) || args[index + 1] === undefined || args[index].slice(2) in options) throw new Error(usage);
  options[args[index].slice(2)] = args[index + 1];
}
if (Object.keys(options).length !== 3 || !isAbsolute(options.out)) throw new Error(usage);

function sourceMember(relativePath) {
  const base = resolve(sourceRoot);
  const candidate = resolve(base, relativePath);
  const relation = relative(base, candidate);
  if (!relation || relation === ".." || relation.startsWith("../") || isAbsolute(relation)) throw new Error(`Source member escaped source root: ${relativePath}`);
  return candidate;
}

function requireAbsentDirectory(path) {
  try {
    lstatSync(path);
    throw new Error("Output must be absent");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

function writeCollection(files, destination) {
  mkdirSync(destination, { recursive: true });
  for (const [path, content] of files) {
    if (!/^[a-z0-9_./-]+$/.test(path) || path.startsWith("/") || path.split("/").some(part => !part || part === "." || part === "..")) throw new Error("Invalid generated member path");
    const target = resolve(destination, path);
    const relation = relative(resolve(destination), target);
    if (!relation || relation === ".." || relation.startsWith("../") || isAbsolute(relation)) throw new Error("Generated member escaped output");
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, content);
  }
}

const output = resolve(options.out);
requireAbsentDirectory(output);
const sourceCatalogPath = sourceMember("appearance-catalog/catalog.json");
const catalogSource = readFileSync(sourceCatalogPath, "utf8");
const sourceCatalog = JSON.parse(catalogSource);
const declaredEngines = JSON.parse(readFileSync(sourceMember("engines.json"), "utf8"));
const catalogMember = relativePath => sourceMember(join("appearance-catalog", relativePath.replace(/^\.\//, "")));
const templateSource = readFileSync(catalogMember(sourceCatalog.sttnTemplate), "utf8");
const profiles = sourceCatalog.profiles.map(profile => ({
  id: profile.id,
  sourcePath: profile.source,
  label: profile.label,
  review: profile.review,
  source: readFileSync(catalogMember(profile.source), "utf8"),
}));

const engines = await loadEngines({ solar: options.solar, loom: options.loom });
try {
  const result = compileAppearanceCollection(engines, { catalog: sourceCatalog, catalogSource, declaredEngines, templateSource, profiles });
  writeCollection(result.files, output);
  console.log(JSON.stringify({ schema: "theme-forge.appearance-collection-compose-v1", output, members: result.files.size, inventoryDigest: result.inventory.digest }));
} finally {
  rmSync(engines.work, { recursive: true, force: true });
}
