import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { BUILD_RECEIPT, createBuildReceipt, expectedDist, readTree, verifySourceInventory } from "./verify-lib.mjs";

/** Compile dist with the declared TypeScript and bind it to the verified source inventory. */
const usage = "Usage: node tools/build.mjs [--typescript <absolute node_modules/typescript directory>]";
const root = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
if (args.length && (args.length !== 2 || args[0] !== "--typescript" || !args[1].startsWith("/"))) throw new Error(usage);
const typescript = args[1] ?? join(root, "node_modules/typescript");
const version = JSON.parse(readFileSync(join(typescript, "package.json"), "utf8")).version;
const provenance = verifySourceInventory(readTree(root));
const expected = new Set(expectedDist(provenance).map(path => path.slice(5)));
if (existsSync(join(root, "dist"))) {
  const stale = readdirSync(join(root, "dist")).filter(name => !expected.has(name));
  if (stale.length) throw new Error(`Unexpected dist members: ${stale.join(", ")}`);
}
execFileSync(process.execPath, [join(typescript, "bin/tsc"), "-p", "tsconfig.json"], { cwd: root, stdio: "inherit" });
const files = readTree(root);
const receipt = createBuildReceipt(files, provenance, version);
writeFileSync(join(root, BUILD_RECEIPT), JSON.stringify(receipt, null, 2) + "\n");
console.log(JSON.stringify({ schema: "cttn.build-result-v1", typescript: version, distInventoryDigest: receipt.inventoryDigest, members: receipt.files.length }));
