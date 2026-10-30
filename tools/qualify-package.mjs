import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, lstatSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { expectedDist, readTree, sha256, verifyBuildReceipt, verifyTree } from "./verify-lib.mjs";

const usage = "Usage: node tools/qualify-package.mjs --out <absolute-absent-directory> --typescript <absolute node_modules/typescript directory> [--npm-cli <absolute npm-cli.js>] [--root <absolute repository>]";
const args = process.argv.slice(2);
const options = { root: fileURLToPath(new URL("../", import.meta.url)) };
const flags = { "--out": "out", "--typescript": "typescript", "--npm-cli": "npmCli", "--root": "root" };
for (let i = 0; i < args.length; i += 2) {
  if (!(args[i] in flags) || !args[i + 1]?.startsWith("/")) throw new Error(usage);
  options[flags[args[i]]] = resolve(args[i + 1]);
}
if (!options.out || !options.typescript) throw new Error(usage);
if (existsSync(options.out)) throw new Error("Qualification output must be absent");
for (let p = dirname(options.out); p !== "/"; p = dirname(p)) if (existsSync(p) && lstatSync(p).isSymbolicLink()) throw new Error("Symlink output ancestor");

const name = "@knowledge-forge-ai/shadcn-theme-terminal-nova";
const tsc = join(options.typescript, "bin/tsc");
const tscVersion = JSON.parse(readFileSync(join(options.typescript, "package.json"), "utf8")).version;
const run = (command, argv, cwd, env = process.env) => execFileSync(command, argv, { cwd, env, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 120000 });
const npm = (argv, cwd, env) => options.npmCli ? run(process.execPath, [options.npmCli, ...argv], cwd, env) : run("npm", argv, cwd, env);
const integrity = bytes => "sha512-" + createHash("sha512").update(bytes).digest("base64");

mkdirSync(options.out, { recursive: true });
const candidate = join(options.out, "candidate");
const source = readTree(options.root);
const repository = verifyTree(source, "repository");
for (const [path, bytes] of source) { mkdirSync(dirname(join(candidate, path)), { recursive: true }); writeFileSync(join(candidate, path), bytes); }
const provenance = JSON.parse(String(source.get("provenance.json")));

// 1. Compiled output is reproducible from the verified source with the declared compiler.
for (const path of expectedDist(provenance)) rmSync(join(candidate, path));
run(process.execPath, [tsc, "-p", "tsconfig.json"], candidate);
const rebuilt = verifyBuildReceipt(readTree(candidate), provenance);

// 2. Normal npm packing runs prepack (npm run build -> tsc 7.0.2); a second pack skips scripts.
// Lifecycle scripts resolve npm and tsc from PATH; pin both to the selected toolchain.
const shims = join(options.out, "bin");
mkdirSync(shims);
if (options.npmCli) writeFileSync(join(shims, "npm"), `#!/bin/sh\nexec '${process.execPath}' '${options.npmCli}' "$@"\n`, { mode: 0o755 });
const marker = join(options.out, "prepack-tsc.log");
writeFileSync(join(shims, "tsc"), `#!/bin/sh\necho "tsc $*" >> '${marker}'\nexec '${process.execPath}' '${tsc}' "$@"\n`, { mode: 0o755 });
const env = { ...process.env, PATH: [shims, dirname(process.execPath), process.env.PATH].join(":") };
const tscInvocations = () => existsSync(marker) ? readFileSync(marker, "utf8").split("\n").filter(Boolean).length : 0;
const packs = [];
for (const [label, extra, invocations] of [["prepack", [], 1], ["ignore-scripts", ["--ignore-scripts"], 1]]) {
  const destination = join(options.out, `pack-${label}`);
  mkdirSync(destination);
  const [pack] = JSON.parse(npm(["pack", "--json", ...extra, "--pack-destination", destination, "--cache", join(options.out, "npm-cache")], candidate, env));
  assert.equal(tscInvocations(), invocations, `${label}: unexpected prepack tsc invocation count`);
  const bytes = readFileSync(join(destination, pack.filename));
  assert.equal(pack.integrity, integrity(bytes));
  packs.push({ label, pack, bytes });
}
verifyBuildReceipt(readTree(candidate), provenance);
assert.ok(packs[0].bytes.equals(packs[1].bytes), "npm pack is not byte-identical with and without prepack");
const { pack, bytes } = packs[0];

// 3. Exact packed member set, from the archive bytes themselves.
const listing = run("tar", ["-tvzf", join(options.out, "pack-prepack", pack.filename)], options.out).trim().split("\n")
  .map(line => line.trim().split(/\s+/)).map(fields => ({ mode: fields[0], path: fields.at(-1) }));
assert.ok(listing.every(entry => entry.path.startsWith("package/") && entry.mode.startsWith("-")), "Archive contains a non-file or out-of-root member");
const packed = listing.map(entry => entry.path.slice("package/".length)).sort();
const expected = [...provenance.files.map(member => member.path), "provenance.json", "build-receipt.json", ...expectedDist(provenance)].sort();
assert.deepEqual(packed, expected);
assert.deepEqual(pack.files.map(file => file.path).sort(), expected);

// 4. Installed package: closed verification and public metadata.
const consumer = join(options.out, "consumer");
const installed = join(consumer, "node_modules", name);
mkdirSync(installed, { recursive: true });
run("tar", ["-xzf", join(options.out, "pack-prepack", pack.filename), "--strip-components=1", "-C", installed], options.out);
const installedResult = verifyTree(readTree(installed), "package");
const pkg = JSON.parse(readFileSync(join(installed, "package.json"), "utf8"));
assert.equal(pkg.private, false);
assert.deepEqual(pkg.publishConfig, { access: "public", registry: "https://registry.npmjs.org/" });
assert.equal(pkg.repository.url, "git+https://github.com/Knowledge-Forge-AI/shadcn-theme-terminal-nova.git");
assert.equal(pkg.author, "Samuel Leighton Lair <sam.lair@knowledge-forge.ai>");
assert.equal(pkg.license, "AGPL-3.0-or-later");
assert.deepEqual(pkg.dependencies ?? {}, {});
assert.deepEqual(pkg.peerDependencies, { tailwindcss: "^4.0.0" });
assert.deepEqual(pkg.devDependencies, { typescript: "7.0.2" });
assert.equal(existsSync(join(consumer, "node_modules/typescript")), false);

// 5. Node import and framework-free server rendering, with no TypeScript at runtime.
writeFileSync(join(consumer, "package.json"), JSON.stringify({ private: true, type: "module" }) + "\n");
writeFileSync(join(consumer, "consumer.mjs"), `import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import themeDefault, { themeSpec, themeCss, statuses } from "${name}";
import { statuses as direct } from "${name}/status";
import themeJson from "${name}/theme.json" with { type: "json" };
assert.equal(themeDefault, themeSpec);
assert.equal(themeSpec.palette.dark.primary, "#69d3e4");
assert.equal(themeSpec.palette.light.accent, "#9c3e0b");
assert.deepEqual(themeJson, themeSpec);
assert.equal(themeCss, "./styles/theme.css");
assert.equal(statuses, direct);
assert.deepEqual(Object.keys(statuses), ["healthy", "degraded", "error", "permission-denied", "loading", "empty"]);
const css = readFileSync(fileURLToPath(import.meta.resolve("${name}/styles/theme.css")), "utf8");
for (const token of ["@custom-variant dark", "@theme inline", ":root", ".dark", "--chart-5", "--sidebar-ring"]) assert.ok(css.includes(token), token);
console.log("node-import: passed");
`);
writeFileSync(join(consumer, "ssr.mjs"), `import assert from "node:assert/strict";
import { statuses } from "${name}/status";
const escape = text => text.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const render = mode => \`<main class="\${mode}">\${Object.entries(statuses).map(([key, s]) =>
  \`<span data-state="\${key}" style="color:\${s.color}"><span aria-hidden="true">\${escape(s.symbol)}</span> \${escape(s.label)}</span>\`).join("")}</main>\`;
for (const mode of ["light", "dark"]) {
  const html = render(mode);
  const text = html.replace(/<[^>]+>/g, "");
  for (const s of Object.values(statuses)) { assert.ok(text.includes(s.label)); assert.ok(text.includes(s.symbol)); }
  assert.equal(new Set(Object.values(statuses).map(s => s.symbol)).size, 6);
}
console.log("ssr-render: passed");
`);
writeFileSync(join(consumer, "tsconfig.json"), JSON.stringify({ compilerOptions: { target: "ES2023", module: "NodeNext", moduleResolution: "NodeNext", strict: true, noEmit: true, types: [] }, include: ["consumer.ts"] }, null, 2) + "\n");
writeFileSync(join(consumer, "consumer.ts"), `import themeSpec, { statuses, type ConsoleState, type ThemeSpecification } from "${name}";
import { statuses as direct } from "${name}/status";
const spec: ThemeSpecification = themeSpec;
const state: ConsoleState = "permission-denied";
const symbol: "⊘" = statuses[state].symbol;
// @ts-expect-error unknown console state
const missing: ConsoleState = "offline";
const same: typeof statuses = direct;
export { spec, symbol, missing, same };
`);
const nodeImport = run(process.execPath, ["consumer.mjs"], consumer).trim();
const ssr = run(process.execPath, ["ssr.mjs"], consumer).trim();
run(process.execPath, [tsc, "-p", "tsconfig.json"], consumer);

const result = {
  schema: "cttn.package-qualification-v2", status: "passed", scope: "static and Node package qualification; execution provenance is recorded separately; not browser, visual or assistive-technology qualification",
  toolchain: { node: process.version, npm: npm(["--version"], options.out).trim(), lifecycleNpm: run("npm", ["--version"], options.out, env).trim(), typescript: tscVersion },
  repository: { sourceInventoryDigest: repository.sourceInventoryDigest, producerInventoryDigest: repository.producerInventoryDigest, distInventoryDigest: repository.distInventoryDigest, members: repository.members },
  rebuild: { distInventoryDigest: rebuilt.inventoryDigest, matchesReceipt: true },
  archive: { filename: pack.filename, bytes: bytes.length, sha256: sha256(bytes), integrity: pack.integrity, shasum: pack.shasum, entryCount: pack.entryCount, unpackedSize: pack.unpackedSize,
    prepackExecuted: true, identicalWithoutScripts: true, members: pack.files.map(({ path, size, mode }) => ({ path, size, mode })).sort((a, b) => a.path.localeCompare(b.path, "en")) },
  installed: { mode: installedResult.mode, sourceInventoryDigest: installedResult.sourceInventoryDigest, distInventoryDigest: installedResult.distInventoryDigest, provenanceSha256: installedResult.provenanceSha256, members: installedResult.members },
  consumer: { nodeImport, ssr, typescriptConsumer: "passed", runtimeTypescript: false, mandatoryDependencies: [] },
};
writeFileSync(join(options.out, "qualification.json"), JSON.stringify(result, null, 2) + "\n");
console.log(JSON.stringify({ schema: result.schema, status: result.status, archive: { filename: pack.filename, sha256: result.archive.sha256, integrity: pack.integrity, entryCount: pack.entryCount } }));
