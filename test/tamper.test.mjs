import assert from "node:assert/strict";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { readTree, scanForLeaks, sha256, verifyComposition, verifyTree } from "../tools/verify-lib.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const pristine = readTree(root);
const copy = () => new Map([...pristine].map(([path, bytes]) => [path, Buffer.from(bytes)]));
const edit = (files, path, change) => files.set(path, Buffer.from(change(String(files.get(path)))));
const packageTree = () => {
  const provenance = JSON.parse(String(pristine.get("provenance.json")));
  const receipt = JSON.parse(String(pristine.get("build-receipt.json")));
  const keep = new Set([...provenance.files, ...receipt.files].map(member => member.path).concat("provenance.json", "build-receipt.json"));
  return new Map([...copy()].filter(([path]) => keep.has(path)));
};
/** A forger who rewrites provenance records and digest to match tampered bytes. */
const reforge = files => {
  const provenance = JSON.parse(String(files.get("provenance.json")));
  provenance.files = provenance.files.map(({ path }) => ({ path, size: files.get(path).length, sha256: sha256(files.get(path)) }));
  provenance.inventoryDigest = sha256("cttn.package-inventory-v1\n" + JSON.stringify(provenance.files));
  files.set("provenance.json", Buffer.from(JSON.stringify(provenance, null, 2) + "\n"));
  return provenance;
};

test("pristine repository and package trees verify", () => {
  assert.equal(verifyTree(copy(), "repository").status, "passed");
  assert.equal(verifyTree(packageTree(), "package").status, "passed");
});

test("source member byte tamper", () => {
  const files = copy();
  edit(files, "styles/theme.css", css => css.replace("#69d3e4", "#69d3e5"));
  assert.throws(() => verifyTree(files, "repository"), /Source member digest mismatch: styles\/theme.css/);
});

test("provenance record tamper without digest update", () => {
  const files = copy();
  edit(files, "provenance.json", text => text.replace(/"size": \d+/, '"size": 1'));
  assert.throws(() => verifyTree(files, "package"), /Source inventory digest mismatch/);
});

test("reforged provenance is caught by generator lineage and build receipt", () => {
  const files = copy();
  edit(files, "styles/theme.css", css => css.replace("#69d3e4", "#69d3e5"));
  const provenance = reforge(files);
  assert.throws(() => verifyComposition(files, provenance), /neither generated unchanged nor a recorded change: styles\/theme.css/);
  assert.throws(() => verifyTree(files, "package"), /neither generated unchanged/);
});

test("composition cannot exclude members from lineage accounting", () => {
  const files = copy();
  edit(files, "styles/theme.css", css => css.replace("#69d3e4", "#69d3e5"));
  edit(files, "composition.json", text => text.replace('"inventoryExcludes": [', '"inventoryExcludes": [\n    "styles/theme.css",'));
  assert.throws(() => verifyComposition(files, reforge(files)), /Unexpected composition inventory excludes/);
});

test("undeclared STTN divergence is rejected even with reforged hashes", () => {
  const files = copy();
  edit(files, "reports/sttn-compatibility.json", text => text.replace('"outcome": "equal",\n      "reason": "Resolved STTN value preserved"', '"outcome": "divergent",\n      "reason": "Undeclared divergence"'));
  edit(files, "composition.json", text => {
    const composition = JSON.parse(text);
    composition.changes.find(change => change.path === "reports/sttn-compatibility.json").afterSha256 = sha256(files.get("reports/sttn-compatibility.json"));
    return JSON.stringify(composition, null, 2) + "\n";
  });
  assert.throws(() => verifyComposition(files, reforge(files)), /Undeclared STTN divergence/);
});

test("missing and extra members", () => {
  const missing = copy();
  missing.delete("LICENSE");
  assert.throws(() => verifyTree(missing, "repository"), /Missing source member: LICENSE/);
  const extraPackage = packageTree();
  extraPackage.set("tools/compose-lib.mjs", pristine.get("tools/compose-lib.mjs"));
  assert.throws(() => verifyTree(extraPackage, "package"), /Unclassified package members: tools\/compose-lib.mjs/);
  const extraRepository = copy();
  extraRepository.set("evidence/review.json", Buffer.from("{}"));
  assert.throws(() => verifyTree(extraRepository, "repository"), /Unclassified repository members: evidence\/review.json/);
});

test("compiled output tamper and stale compiled members", () => {
  const files = copy();
  edit(files, "dist/status.js", js => js.replace("Healthy", "Fine"));
  assert.throws(() => verifyTree(files, "package"), /Build receipt mismatch: files/);
  const stale = packageTree();
  stale.set("dist/extra.js", Buffer.from("export {};\n"));
  assert.throws(() => verifyTree(stale, "package"), /Unclassified package members: dist\/extra.js$/);
  const receipt = copy();
  edit(receipt, "build-receipt.json", text => text.replace('"version": "7.0.2"', '"version": "7.0.3"'));
  assert.throws(() => verifyTree(receipt, "package"), /TypeScript 7.0.3 differs from declared 7.0.2/);
});

test("producer and engine binding tamper", () => {
  const producer = copy();
  edit(producer, "tools/compose-lib.mjs", text => text + "\n");
  assert.throws(() => verifyTree(producer, "repository"), /Producer member digest mismatch: tools\/compose-lib.mjs/);
  const engines = copy();
  edit(engines, "tools/source/engines.json", text => text.replace("65070c34", "75070c34"));
  assert.throws(() => verifyTree(engines, "repository"), /Producer member digest mismatch: tools\/source\/engines.json/);
  const added = copy();
  added.set("tools/source/extra.json", Buffer.from("{}"));
  assert.throws(() => verifyTree(added, "repository"), /Producer file set differs/);
});

test("public-safety scan rejects private paths and credentials", () => {
  assert.doesNotThrow(() => scanForLeaks(pristine));
  // Fixtures are assembled at runtime so this file itself passes the scan.
  for (const leak of [["see ", "Users", "someone", "project"].join("/"), ["from ", "home", "runner"].join("/"), "npm_" + "a".repeat(36), "ghp_" + "b".repeat(36), "-----BEGIN OPENSSH " + "PRIVATE KEY-----"])
    assert.throws(() => scanForLeaks(new Map([["README.md", Buffer.from(leak)]])), /Private or credential-like content/);
});
