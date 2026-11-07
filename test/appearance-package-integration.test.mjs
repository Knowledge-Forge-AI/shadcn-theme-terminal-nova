import assert from "node:assert/strict";
import { existsSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { compileAppearanceCollection, sha256 } from "../tools/appearance-catalog-lib.mjs";
import { composeCandidate, loadEngines, repositoryRoot, sourceRoot, verifyCandidate } from "../tools/compose-lib.mjs";
import { readTree, verifyAppearanceIntegration, verifyComposition, verifyTree } from "../tools/verify-lib.mjs";

const solarArchive = process.env.CTTN_SOLAR_TGZ;
const loomArchive = process.env.CTTN_LOOM_TGZ;
const testWorkRoot = process.env.CTTN_TEST_TMPDIR ?? tmpdir();
if (!solarArchive || !loomArchive) throw new Error("Set CTTN_SOLAR_TGZ and CTTN_LOOM_TGZ");

const sourcePackage = JSON.parse(readFileSync(join(sourceRoot, "../../package.json"), "utf8"));
const sourceCatalogSource = readFileSync(join(sourceRoot, "appearance-catalog/catalog.json"), "utf8");
const sourceCatalog = JSON.parse(sourceCatalogSource);
const declaredEngines = JSON.parse(readFileSync(join(sourceRoot, "engines.json"), "utf8"));
const templateSource = readFileSync(join(sourceRoot, "sttn/v0.4/terminal-nova.theme.json"), "utf8");
const profileInputs = sourceCatalog.profiles.map(profile => ({
  id: profile.id,
  sourcePath: profile.source,
  label: profile.label,
  review: profile.review,
  source: readFileSync(join(sourceRoot, "appearance-catalog", profile.source), "utf8"),
}));
const appearanceInputs = { catalogSource: sourceCatalogSource, catalog: sourceCatalog, declaredEngines, templateSource, profiles: profileInputs };
const familyIds = ["terminal-nova", "nebular", "developer", "graphic-designer", "anime", "gamer"];
let engines;
let first;
let second;

before(async () => {
  engines = await loadEngines({ solar: solarArchive, loom: loomArchive }, testWorkRoot);
  first = composeCandidate(engines);
  second = composeCandidate(engines);
});

after(() => engines && rmSync(engines.work, { recursive: true, force: true }));

test("package composition is deterministic and remains closed", () => {
  assert.deepEqual([...first.files.keys()], [...second.files.keys()]);
  for (const [path, content] of first.files) assert.equal(content, second.files.get(path), path);
  const provenance = verifyCandidate(first.files);
  assert.equal(provenance.inventoryDigest, first.provenance.inventoryDigest);
  assert.equal(first.files.has("package-lock.json"), false);
  assert.equal(first.files.has("node_modules"), false);
});

test("appearance source identity and reports are distributed", () => {
  const generatedCatalog = JSON.parse(first.files.get("reports/appearances/catalog.json"));
  const sourceInventory = JSON.parse(first.files.get("reports/appearances/source/inventory.json"));
  assert.deepEqual(generatedCatalog.sourceIdentity, first.appearance.catalog.sourceIdentity);
  assert.equal(generatedCatalog.sourceIdentity.catalog.sha256, sha256(sourceCatalogSource));
  assert.deepEqual(generatedCatalog.families.map(family => family.id), familyIds);
  assert.deepEqual(sourceInventory, first.appearanceSourceInventory);
  for (const id of familyIds) {
    assert.ok(first.files.has(`reports/appearances/source/profiles/${id}.profile.json`));
    assert.ok(first.files.has(`reports/appearances/mappings/${id}/solar.mapping.json`));
    assert.ok(first.files.has(`reports/appearances/mappings/${id}/loom.mapping.json`));
  }
});

test("consumer files expose all six CTTN/STTN styles and runtime data", () => {
  for (const id of familyIds) {
    const cttn = first.files.get(`styles/appearances/${id}.css`);
    const sttn = first.files.get(`styles/appearances-sttn/${id}.css`);
    const application = first.files.get(`styles/appearances-application/${id}.css`);
    assert.match(cttn, /:root\[data-theme='dark'\]/);
    assert.match(sttn, /:root\[data-theme='light'\]/);
    assert.equal(application, first.appearance.applicationBaselines[id]);
  }
  const index = first.files.get("src/index.ts");
  assert.match(index, /applicationBaselines/);
  assert.match(index, /appearanceCatalog/);
  assert.match(first.files.get("src/appearance-baselines.ts"), /export const applicationBaselines = \/\*#__PURE__\*\/ Object\.freeze\(/);
  assert.match(first.files.get("src/appearance-catalog.ts"), /export const appearanceCatalog = \/\*#__PURE__\*\/ Object\.freeze\(/);
  const composition = JSON.parse(first.files.get("composition.json"));
  assert.equal(composition.appearanceIntegration.reportsRoot, "reports/appearances");
  assert.equal(composition.appearanceIntegration.consumerFiles.cttnStyles.length, 6);
  assert.equal(composition.appearanceIntegration.consumerFiles.sttnStyles.length, 6);
  assert.deepEqual(composition.appearanceIntegration.consumerFiles.applicationStyles, familyIds.map(id => `styles/appearances-application/${id}.css`));
  assert.deepEqual(verifyAppearanceIntegration(first.files, composition.appearanceIntegration, composition.engines).families, familyIds);
  const wrongEngines = composition.engines.map((engine, index) => index === 0 ? { ...engine, sha256: "0".repeat(64) } : engine);
  assert.throws(() => verifyAppearanceIntegration(first.files, composition.appearanceIntegration, wrongEngines), /Appearance engine identity differs from composition engines/);
});

test("existing package manifest metadata is unchanged", () => {
  const candidatePackage = JSON.parse(first.files.get("package.json"));
  assert.deepEqual(candidatePackage, sourcePackage);
  assert.equal(candidatePackage.version, "0.2.0");
  assert.equal(candidatePackage.exports["./styles/*"], "./styles/*");
  assert.equal(candidatePackage.files.includes("reports"), true);
  assert.equal(candidatePackage.files.includes("src"), true);
});

test("the frozen compiler input binding remains equivalent to the integration input", () => {
  const direct = compileAppearanceCollection(engines, appearanceInputs);
  assert.deepEqual(direct.catalog.sourceIdentity, first.appearance.catalog.sourceIdentity);
  assert.equal(direct.inventory.digest, first.appearance.inventory.digest);
});

test("independent appearance verification catches static, source, and runtime mismatches", () => {
  const composition = JSON.parse(first.files.get("composition.json"));
  const tamperedCss = new Map(first.files);
  tamperedCss.set("styles/appearances/gamer.css", Buffer.from(`${tamperedCss.get("styles/appearances/gamer.css")}\n/* mismapped */\n`));
  assert.throws(() => verifyAppearanceIntegration(tamperedCss, composition.appearanceIntegration), /Appearance package projection mismatch/);

  const tamperedSource = new Map(first.files);
  tamperedSource.set("reports/appearances/source/profiles/gamer.profile.json", Buffer.from(String(tamperedSource.get("reports/appearances/source/profiles/gamer.profile.json")).replace("#c13d74", "#c13d75")));
  assert.throws(() => verifyAppearanceIntegration(tamperedSource, composition.appearanceIntegration), /Appearance (source inventory members mismatch|raw source identity mismatch)/);

  const tamperedRuntime = new Map(first.files);
  tamperedRuntime.set("src/appearance-baselines.ts", Buffer.from(String(tamperedRuntime.get("src/appearance-baselines.ts")).replace("#c13d74", "#c13d75")));
  assert.throws(() => verifyAppearanceIntegration(tamperedRuntime, composition.appearanceIntegration), /(?:Appearance package projection mismatch|Application runtime baseline mismatch)/);

  const missingRecord = new Map(first.files);
  const withoutRecord = { ...composition };
  delete withoutRecord.appearanceIntegration;
  missingRecord.set("composition.json", JSON.stringify(withoutRecord));
  assert.throws(() => verifyComposition(missingRecord, first.provenance), /Appearance integration record\/member presence mismatch/);

  const extraMember = new Map(first.files);
  extraMember.set("styles/appearances/unlisted.css", Buffer.from("/* unlisted */\n"));
  assert.throws(() => verifyAppearanceIntegration(extraMember, composition.appearanceIntegration), /Appearance package path closure mismatch/);

  const unknownPreamble = new Map(first.files);
  const unknownCttn = String(unknownPreamble.get("styles/appearances/gamer.css"))
    .replace("/* Generated by Theme Forge Solar Sail", "/* Unreviewed application preamble");
  unknownPreamble.set("styles/appearances/gamer.css", Buffer.from(unknownCttn));
  const unknownInventory = JSON.parse(String(unknownPreamble.get("reports/appearances/inventory.json")));
  const unknownMember = unknownInventory.members.find(member => member.path === "gamer/cttn.css");
  unknownMember.bytes = Buffer.byteLength(unknownCttn);
  unknownMember.sha256 = sha256(unknownCttn);
  unknownInventory.digest = sha256("theme-forge.generated-appearance-inventory.v1\n" + JSON.stringify(unknownInventory.members, null, 2) + "\n");
  unknownPreamble.set("reports/appearances/inventory.json", JSON.stringify(unknownInventory, null, 2) + "\n");
  const unknownIntegration = structuredClone(composition.appearanceIntegration);
  unknownIntegration.generatedInventory = unknownInventory;
  assert.throws(() => verifyAppearanceIntegration(unknownPreamble, unknownIntegration), /unexpected Tailwind application preamble/);

  const aliasedSource = new Map(first.files);
  const aliasInventory = JSON.parse(String(aliasedSource.get("reports/appearances/source/inventory.json")));
  const terminalMember = aliasInventory.members.find(member => member.path === "tools/source/terminal-nova.profile.json");
  terminalMember.path = "tools/source/appearance-catalog/terminal-nova.profile.json";
  aliasInventory.members.sort((left, right) => left.path.localeCompare(right.path, "en"));
  aliasInventory.digest = sha256("theme-forge.appearance-source-inventory.v1\n" + JSON.stringify(aliasInventory.members));
  aliasedSource.set("reports/appearances/source/inventory.json", JSON.stringify(aliasInventory, null, 2) + "\n");
  const aliasedIntegration = { ...composition.appearanceIntegration, sourceInventory: aliasInventory };
  assert.throws(() => verifyAppearanceIntegration(aliasedSource, aliasedIntegration), /Appearance source path closure mismatch/);
});

test("the independent verifier still accepts the installed published CTTN 0.1.0 package", { skip: !existsSync(process.env.CTTN_PUBLISHED_PACKAGE_ROOT ?? join(repositoryRoot, "../cttn-site/node_modules/@knowledge-forge-ai/shadcn-theme-terminal-nova")) }, () => {
  const packageRoot = process.env.CTTN_PUBLISHED_PACKAGE_ROOT ?? join(repositoryRoot, "../cttn-site/node_modules/@knowledge-forge-ai/shadcn-theme-terminal-nova");
  const published = readTree(packageRoot);
  const result = verifyTree(published, "package");
  assert.equal(result.status, "passed");
  assert.equal(result.packageVersion, "0.1.0");
  assert.equal(result.appearance, null);
  assert.equal(JSON.parse(String(published.get("composition.json"))).appearanceIntegration, undefined);
});
