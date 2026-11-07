# Third-party notices

## shadcn/ui

This site includes source adaptations of the following shadcn/ui registry components from revision `d549251bab2e57dbf72f7c909d6458c02c43f529`:

- `button.tsx` — upstream SHA-256 `79dd6f75f8136394442202d6b8b922fb269eaad0a5dba579397c9d5b41f893bb`
- `card.tsx` — upstream SHA-256 `ef8305b12c3112dab42a4708b41b1ebcc042fa5ab4c20f039da8d45b09ed5059`
- `dialog.tsx` — upstream SHA-256 `2ade6074e5fad0a4eb171ead44c43d3301a3c83d186d7236fb1fdbea80ee556b`
- `input.tsx` — upstream SHA-256 `0c9457181f6ddc80969bcf854e92c362903a55b6e889fbef3fd85343ecc4af5b`
- `label.tsx` — upstream SHA-256 `344bde38b8531615dbf8e14af3895517c24d8ef6ce56ddeda7e2e6fe4b5d0c00`
- `table.tsx` — upstream SHA-256 `bd1a9fc83a5a2149e504038e274bb7e5a0351af59f6896df52ac4d5b439695ac`

The exact upstream URLs, original hashes and adapted consumer hashes are recorded in `SOURCE-ASSETS.json`. The consumer adaptations replace the unified Radix imports with the matching direct `@radix-ui/react-slot`, `@radix-ui/react-label`, and `@radix-ui/react-dialog` imports; re-export `cn` from the approved `cn` package through `src/lib/utils.ts`; use an original inline close glyph; and remove optional animation utilities. Component structure and behavior remain shadcn-derived.

The pinned shadcn source is distributed under the MIT license:

```text
MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Other dependencies

React, ReactDOM, Vite, Tailwind CSS, Rolldown, `class-variance-authority`, `cn`, and the direct Radix primitives remain package-managed dependencies. The build emits their applicable complete license and notice text in `THIRD-PARTY-NOTICES.txt`, with bundled package-module records under `bundledModules` plus separate CSS/runtime inputs in `third-party-modules.json`. Inspect both emitted files before publication. This site does not copy an icon package, animation package, shadcn CLI, forms framework, or native bridge.

The published `@knowledge-forge-ai/shadcn-theme-terminal-nova` package is consumed through its exported `./styles/theme.css` stylesheet. Family CSS under `/appearances` is generated project input and is not a third-party library notice.
