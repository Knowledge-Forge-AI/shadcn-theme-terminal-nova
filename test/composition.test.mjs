import assert from "node:assert/strict";
import { readFileSync, rmSync } from "node:fs";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import { composeCandidate, loadEngines, sha256, sttnPath } from "../tools/compose-lib.mjs";
import { readTree } from "../tools/verify-lib.mjs";

// Requires the exact published engine archives (see README "Reproducible composition").
const solarArchive = process.env.CTTN_SOLAR_TGZ;
const loomArchive = process.env.CTTN_LOOM_TGZ;
if (!solarArchive || !loomArchive) throw new Error("Set CTTN_SOLAR_TGZ and CTTN_LOOM_TGZ to the Solar Sail 0.3.0 and Stellar Loom 0.5.0 archives");
const root = fileURLToPath(new URL("../", import.meta.url));
const tree = readTree(root);
const text = path => String(tree.get(path));
let engines;
let composed;
before(async () => { engines = await loadEngines({ solar: solarArchive, loom: loomArchive }); composed = composeCandidate(engines); });
after(() => engines && rmSync(engines.work, { recursive: true, force: true }));

test("engine archives are bound by hash and role", async () => {
  await assert.rejects(loadEngines({ solar: loomArchive, loom: solarArchive }), /solar archive does not match/);
  await assert.rejects(loadEngines({ solar: "relative.tgz", loom: loomArchive }), /Absolute solar archive path/);
  assert.deepEqual(engines.archives.map(a => `${a.package}@${a.version}`), ["@knowledge-forge-ai/theme-forge-solar-sail@0.3.0", "@knowledge-forge-ai/theme-forge-stellar-loom@0.5.0"]);
});

test("composition is deterministic and byte-identical to the committed members", () => {
  const again = composeCandidate(engines).files;
  assert.deepEqual([...again.keys()], [...composed.files.keys()]);
  for (const [path, content] of composed.files) {
    assert.equal(again.get(path), content, path);
    assert.ok(Buffer.from(content).equals(tree.get(path)), `committed ${path} differs from replay`);
  }
});

test("composer identity is the actual standalone producer", () => {
  const composition = JSON.parse(text("composition.json"));
  assert.deepEqual(composition.composer, { package: "@knowledge-forge-ai/shadcn-theme-terminal-nova", version: "0.1.0", role: "standalone-public-producer",
    tool: "tools/compose-lib.mjs", sourceSha256: sha256(tree.get("tools/compose-lib.mjs")), producerInventoryDigest: composition.producerInventory.digest });
  assert.deepEqual(composition.engines.map(e => e.sha256), ["65070c3478a1d55476c1b09fbe1dcadfdf7c3d3aa54a154bc9ac9e299411f415", "4e7a7d436c09ba111f5dca8101876c6e085ad15859d96bab8f728c5669880b5f"]);
});

test("a changed profile changes the bound source identity", () => {
  const profile = text("tools/source/terminal-nova.profile.json").replace('"#69d3e4"', '"#69d3e5"');
  const changed = composeCandidate(engines, profile);
  assert.notEqual(JSON.parse(changed.files.get("composition.json")).sourceProfileSha256, JSON.parse(text("composition.json")).sourceProfileSha256);
  assert.notEqual(changed.provenance.inventoryDigest, composed.provenance.inventoryDigest);
});

test("statuses, code presentation and declared STTN divergences are preserved", () => {
  assert.equal(text("src/status.ts"), text("tools/source/status.ts"));
  for (const key of ["healthy", "degraded", "error", "permission-denied", "loading", "empty"]) assert.match(text("src/status.ts"), new RegExp(`^  "?${key}"?: \\{ label`, "m"));
  assert.match(text("src/index.ts"), /export \{ statuses, type ConsoleState \} from "\.\/status\.js";\n$/);
  const sttn = JSON.parse(readFileSync(sttnPath, "utf8"));
  assert.deepEqual(JSON.parse(text("loom-counterpart/terminal-nova.loom.theme.json")).codePresentation, sttn.codePresentation);
  const divergent = JSON.parse(text("reports/sttn-compatibility.json")).rows.filter(row => row.outcome !== "equal");
  assert.deepEqual(divergent.map(row => `${row.family}/${row.mode}/${row.role}`), ["cyan/light/hairline", "cyan/dark/hairline"]);
});

test("theme semantics: cyan primary, amber accent, dark class variant", () => {
  const theme = JSON.parse(text("theme.json"));
  assert.equal(theme.palette.light.primary, "#126475");
  assert.equal(theme.palette.dark.primary, "#69d3e4");
  assert.equal(theme.palette.light.accent, "#9c3e0b");
  assert.equal(theme.palette.dark.accent, "#ff8a3d");
  assert.match(text("styles/theme.css"), /@custom-variant dark \(&:is\(\.dark \*\)\);/);
});
