# Shadcn Theme Terminal Nova (CTTN)

Terminal Nova theme for Tailwind CSS v4 and shadcn/ui, published as `@knowledge-forge-ai/shadcn-theme-terminal-nova` from the repository `Knowledge-Forge-AI/shadcn-theme-terminal-nova`.

This TypeScript-first theme compiles to ordinary JavaScript and declarations. Consumers need no runtime TypeScript compiler. Its only peer is Tailwind CSS v4; it has no React, xyflow or other runtime dependency.

```css
@import "tailwindcss";
@import "@knowledge-forge-ai/shadcn-theme-terminal-nova/styles/theme.css";
```

```ts
import { themeSpec, statuses } from "@knowledge-forge-ai/shadcn-theme-terminal-nova";
```

Build with `npm run build` before packing. `prepack` enforces that build for normal npm packing. Dark mode uses the `.dark` class. Status labels and symbols convey meaning independently of colour.

The paired profile produces cyan primary actions and amber accents. The Loom counterpart retains STTN v0.4 code presentation and orange default accent; its cyan hairline uses the paired border value. See reports/sttn-compatibility.json and both mapping reports for explicit divergences and unsupported roles.

## Reproducible composition

The theme source is composed by the published Theme Forge Solar Sail 0.3.0 and Stellar Loom 0.5.0 engines. `composition.json` binds both engine archives by SHA-256 and the producer source inventory; `provenance.json` binds every composed source member; `build-receipt.json` binds the compiled `dist` output to that source inventory. The repository keeps the producer and its inputs under `tools/`; they are not part of the npm package.

```sh
npm pack @knowledge-forge-ai/theme-forge-solar-sail@0.3.0 @knowledge-forge-ai/theme-forge-stellar-loom@0.5.0 --pack-destination /absolute/engines
node tools/verify.mjs --repository --replay --solar /absolute/engines/knowledge-forge-ai-theme-forge-solar-sail-0.3.0.tgz --loom /absolute/engines/knowledge-forge-ai-theme-forge-stellar-loom-0.5.0.tgz
CTTN_SOLAR_TGZ=/absolute/engines/knowledge-forge-ai-theme-forge-solar-sail-0.3.0.tgz CTTN_LOOM_TGZ=/absolute/engines/knowledge-forge-ai-theme-forge-stellar-loom-0.5.0.tgz node --test test/*.test.mjs
```

`node tools/compose.mjs` regenerates the composed members into an absent directory, `node tools/build.mjs` recompiles `dist` with TypeScript 7.0.2 and rewrites `build-receipt.json`, and `node tools/qualify-package.mjs` packs and checks the installed package.

Community license: AGPL-3.0-or-later (LICENSE). Commercial terms are available in COMMERCIAL-LICENSE.md; contact sam.lair@knowledge-forge.ai. Outside contributions require CONTRIBUTING.md and the affirmative CLA.md acknowledgment. Third-party material retains its own licenses and notices.

Browser, visual, assistive-technology, production and distribution qualification are separate gates. This package contains deterministic design output and mock-console status descriptors, not telemetry or cluster integration.
