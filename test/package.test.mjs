import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { expectedDist, readTree, verifyTree } from "../tools/verify-lib.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const tree = readTree(root);
const pkg = JSON.parse(String(tree.get("package.json")));
const provenance = JSON.parse(String(tree.get("provenance.json")));
// CTTN_NPM_CLI selects an npm-cli.js run by this Node; otherwise npm from PATH.
const npm = argv => process.env.CTTN_NPM_CLI ? execFileSync(process.execPath, [process.env.CTTN_NPM_CLI, ...argv], { cwd: root, encoding: "utf8" }) : execFileSync("npm", argv, { cwd: root, encoding: "utf8" });

test("public package metadata", () => {
  assert.equal(pkg.name, "@knowledge-forge-ai/shadcn-theme-terminal-nova");
  assert.equal(pkg.version, "0.1.0");
  assert.equal(pkg.private, false);
  assert.deepEqual(pkg.publishConfig, { access: "public", registry: "https://registry.npmjs.org/" });
  assert.deepEqual(pkg.repository, { type: "git", url: "git+https://github.com/Knowledge-Forge-AI/shadcn-theme-terminal-nova.git" });
  assert.equal(pkg.license, "AGPL-3.0-or-later");
  assert.equal(pkg.author, "Samuel Leighton Lair <sam.lair@knowledge-forge.ai>");
  assert.equal(pkg.dependencies, undefined);
  assert.deepEqual(pkg.peerDependencies, { tailwindcss: "^4.0.0" });
  assert.deepEqual(pkg.devDependencies, { typescript: "7.0.2" });
  assert.deepEqual(pkg.scripts, { build: "tsc", prepack: "npm run build" });
  assert.deepEqual(Object.keys(pkg.exports), [".", "./styles/*", "./theme.json", "./status"]);
});

test("legal files are the unchanged product sources", () => {
  for (const name of ["LICENSE", "NOTICE", "COMMERCIAL-LICENSE.md", "CLA.md", "CONTRIBUTING.md"]) assert.ok(tree.get(name).equals(tree.get(`tools/source/legal/${name}`)), name);
  assert.ok(tree.get(".github/pull_request_template.md").equals(tree.get("tools/source/legal/pull_request_template.md")));
  assert.match(String(tree.get("LICENSE")), /GNU AFFERO GENERAL PUBLIC LICENSE\s+Version 3/);
});

test("npm pack member set is exactly the composed, compiled and receipt members", () => {
  const destination = mkdtempSync(join(tmpdir(), "cttn-pack-"));
  try {
    const [pack] = JSON.parse(npm(["pack", "--dry-run", "--json", "--ignore-scripts", "--pack-destination", destination, "--cache", join(destination, "cache")]));
    const packed = pack.files.map(file => file.path).sort();
    const expected = [...provenance.files.map(member => member.path), "provenance.json", "build-receipt.json", ...expectedDist(provenance)].sort();
    assert.deepEqual(packed, expected);
    assert.ok(!packed.some(path => path.startsWith("tools/") || path.startsWith("test/")));
    assert.equal(verifyTree(new Map(packed.map(path => [path, tree.get(path)])), "package").status, "passed");
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});
