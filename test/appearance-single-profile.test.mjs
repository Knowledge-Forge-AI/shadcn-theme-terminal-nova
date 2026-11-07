import assert from "node:assert/strict";
import { readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { compileAppearanceCollection, compileBoundAppearanceProfile, sha256 } from "../tools/appearance-catalog-lib.mjs";
import { loadEngines, sourceRoot } from "../tools/compose-lib.mjs";

const solarArchive = process.env.CTTN_SOLAR_TGZ;
const loomArchive = process.env.CTTN_LOOM_TGZ;
const testWorkRoot = process.env.CTTN_TEST_TMPDIR ?? tmpdir();
if (!solarArchive || !loomArchive) throw new Error("Set CTTN_SOLAR_TGZ and CTTN_LOOM_TGZ");

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
const appearanceInputs = {
  catalogSource: sourceCatalogSource,
  catalog: sourceCatalog,
  declaredEngines,
  templateSource,
  profiles: profileInputs,
};
const acceptedCollectionDigest = "d9f94a7f5ce0730098d840e409ca588caefc2e05c45fbec02d749d25f418fb51";
const json = value => JSON.stringify(value, null, 2) + "\n";
let engines;
let collection;

before(async () => {
  engines = await loadEngines({ solar: solarArchive, loom: loomArchive }, testWorkRoot);
  collection = compileAppearanceCollection(engines, appearanceInputs);
});

after(() => engines && rmSync(engines.work, { recursive: true, force: true }));

function assertAcceptedCollection(files, inventory) {
  assert.equal(files.size, 93);
  assert.equal(inventory.members.length, 92);
  assert.equal(inventory.digest, acceptedCollectionDigest);
  assert.equal(sha256(`theme-forge.generated-appearance-inventory.v1\n${json(inventory.members)}`), acceptedCollectionDigest);
  assert.equal(files.get("inventory.json"), json(inventory));
  const filePaths = [...files.keys()].filter(path => path !== "inventory.json").sort();
  const inventoryPaths = inventory.members.map(member => member.path).sort();
  assert.deepEqual(filePaths, inventoryPaths);
  for (const member of inventory.members) {
    const content = files.get(member.path);
    assert.equal(typeof content, "string", member.path);
    assert.equal(Buffer.byteLength(content), member.bytes, member.path);
    assert.equal(sha256(content), member.sha256, member.path);
  }
}

function assertSingleMatches(id, single, files) {
  const expected = (path) => files.get(`${id}/${path}`);
  assert.equal(single.solarResult.css, expected("cttn.css"), `${id}/cttn.css`);
  assert.equal(single.extension.css, expected("appearance-extensions.css"), `${id}/appearance-extensions.css`);
  assert.equal(json(single.extension.report), expected("application-extension.mapping.json"), `${id}/application-extension.mapping.json`);
  assert.equal(single.applicationCss, expected("application.css"), `${id}/application.css`);
  assert.equal(single.loomResult.css, expected("sttn.css"), `${id}/sttn.css`);
  assert.equal(json(single.loomMapping.catalog), expected("sttn.catalog.json"), `${id}/sttn.catalog.json`);
  assert.equal(json(single.solarMapping.report), expected("solar.mapping.json"), `${id}/solar.mapping.json`);
  assert.equal(json(single.loomMapping.report), expected("loom.mapping.json"), `${id}/loom.mapping.json`);
  for (const [path, css] of single.loomResult.styles) assert.equal(css, expected(path), `${id}/${path}`);
}

test("each bound profile recipe is byte-identical to the accepted collection digest and collection", () => {
  assertAcceptedCollection(collection.files, collection.inventory);
  for (const declaration of sourceCatalog.profiles) {
    const supplied = profileInputs.find(profile => profile.id === declaration.id);
    const bound = engines.solar.bindSourceProfileV2(supplied.source);
    const single = compileBoundAppearanceProfile(
      { solar: engines.solar, loom: engines.loom },
      bound,
      {
        templateSource,
        familyBindings: sourceCatalog.familyBindings,
        applicationBaselineLayer: sourceCatalog.applicationBaselineLayer,
      },
    );
    assert.equal(single.profile.name, declaration.id);
    assertSingleMatches(declaration.id, single, collection.files);

    const family = collection.catalog.families.find(candidate => candidate.id === declaration.id);
    assert.deepEqual(family.applicationExtension, single.extension.report);
    assert.deepEqual(family.solarMapping, single.solarMapping.report.summary);
    assert.deepEqual(family.loomMapping, single.loomMapping.report.summary);
    assert.deepEqual(family.targetDisposition.profileDerivedRoles, single.roleDisposition.profileDerivedRoles);
    assert.deepEqual(family.targetDisposition.templateRetainedRoles, single.roleDisposition.templateRetainedRoles);
  }
});

test("the bound recipe validates the exact shared template, family bindings, and application layer", () => {
  const bound = engines.solar.bindSourceProfileV2(profileInputs[0].source);
  const options = {
    templateSource,
    familyBindings: sourceCatalog.familyBindings,
    applicationBaselineLayer: sourceCatalog.applicationBaselineLayer,
  };
  assert.throws(
    () => compileBoundAppearanceProfile({ solar: engines.solar, loom: engines.loom }, bound, {
      ...options,
      templateSource: templateSource.replace('"name": "terminal-nova"', '"name": "other-template"'),
    }),
    /Unexpected STTN template identity/,
  );
  assert.throws(
    () => compileBoundAppearanceProfile({ solar: engines.solar, loom: engines.loom }, bound, {
      ...options,
      familyBindings: { ...sourceCatalog.familyBindings, extra: "system-sans" },
    }),
    /Unexpected Loom family binding keys/,
  );
  assert.throws(
    () => compileBoundAppearanceProfile({ solar: engines.solar, loom: engines.loom }, bound, {
      ...options,
      applicationBaselineLayer: "wrong-layer",
    }),
    /Unexpected application baseline layer/,
  );
});
