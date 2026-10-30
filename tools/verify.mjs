import { rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readTree, verifyTree } from "./verify-lib.mjs";

const usage = "Usage: node tools/verify.mjs [--root <absolute-directory>] [--package | --repository] [--replay --solar <tgz> --loom <tgz>]";
const args = process.argv.slice(2);
const options = { root: fileURLToPath(new URL("../", import.meta.url)), mode: "repository", replay: false };
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === "--package" || arg === "--repository") options.mode = arg.slice(2);
  else if (arg === "--replay") options.replay = true;
  else if (["--root", "--solar", "--loom"].includes(arg) && args[i + 1]?.startsWith("/")) options[arg.slice(2)] = args[++i];
  else throw new Error(usage);
}
if (options.replay && (options.mode !== "repository" || !options.solar || !options.loom)) throw new Error(usage);

const files = readTree(options.root);
const result = verifyTree(files, options.mode);
if (options.replay) {
  // Re-run the root's own producer against the exact engine archives; every composed byte must match.
  const producer = await import(pathToFileURL(join(options.root, "tools/compose-lib.mjs")).href);
  const engines = await producer.loadEngines({ solar: options.solar, loom: options.loom });
  try {
    const replayed = producer.composeCandidate(engines).files;
    const expected = JSON.parse(String(files.get("provenance.json"))).files.map(member => member.path).concat("provenance.json").sort();
    if (JSON.stringify([...replayed.keys()].sort()) !== JSON.stringify(expected)) throw new Error("Replay member set differs");
    for (const [path, content] of replayed) if (!Buffer.from(content).equals(files.get(path))) throw new Error(`Replay differs: ${path}`);
  } finally {
    rmSync(engines.work, { recursive: true, force: true });
  }
  result.replay = "byte-identical";
}
console.log(JSON.stringify(result));
