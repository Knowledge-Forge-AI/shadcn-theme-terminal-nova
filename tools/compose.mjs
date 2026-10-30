import { rmSync } from "node:fs";
import { loadEngines, writeCandidate } from "./compose-lib.mjs";
const usage = "Usage: node tools/compose.mjs --solar <solar-sail-0.3.0.tgz> --loom <stellar-loom-0.5.0.tgz> --out <absolute-absent-directory>";
const args = process.argv.slice(2);
const options = {};
for (let i = 0; i < args.length; i += 2) {
  if (!["--solar", "--loom", "--out"].includes(args[i]) || args[i + 1] === undefined || args[i].slice(2) in options) throw new Error(usage);
  options[args[i].slice(2)] = args[i + 1];
}
if (Object.keys(options).length !== 3) throw new Error(usage);
const engines = await loadEngines({ solar: options.solar, loom: options.loom });
try {
  const result = await writeCandidate(engines, options.out);
  console.log(JSON.stringify({ schema: "cttn.compose-result-v1", members: result.files.size, inventoryDigest: result.provenance.inventoryDigest }));
} finally {
  rmSync(engines.work, { recursive: true, force: true });
}
