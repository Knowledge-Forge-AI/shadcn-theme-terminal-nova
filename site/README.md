# Terminal Nova CTTN site

This is the website and real shadcn/Tailwind consumer for Shadcn Theme Terminal Nova (CTTN). It demonstrates six adapted shadcn/ui components and twelve generated family appearances. The page uses the published Terminal Nova package for its own branding:

```css
@import "tailwindcss";
@import "@knowledge-forge-ai/shadcn-theme-terminal-nova/styles/theme.css";
```

Forms and controls retain demonstration state in memory. They do not submit data, persist preferences, read local files, or invoke a native bridge. Gallery specimens use separate trusted-code iframe documents so their styling does not change the page. These same-origin frames provide CSS isolation; they are not a security boundary for untrusted code and have ordinary same-origin browser privileges.

## Local usage

The approved manifest and lock retain their exact dependency pins. Current build admission supports Apple Silicon with Node 22.23.4 and checks the intended native bindings before execution. Linux dependencies are locked; Linux qualification is pending. Use the controlled local check route for installation, typechecking, tests and builds. The package has no lifecycle scripts.

The main page is `index.html`; `specimen.html?family=terminal-nova&mode=dark` is the direct specimen entry. The six closed family IDs are `terminal-nova`, `nebular`, `developer`, `graphic-designer`, `anime`, and `gamer`; modes are `light` and `dark`.

The root page owns the System/Light/Dark preference control. System mode follows the browser's `prefers-color-scheme` change event and does not write storage. Keyboard focus is visible throughout, and reduced-motion preferences are honored.

## Customization

The root theme is consumed through the package's complete-color roles. Add the same import to an application's CSS, then copy the six site-local shadcn-derived adaptations (MIT, not part of the published npm package) or use your own shadcn components. The role contract includes surfaces, text, controls, focus, destructive state, radius, and font families; no HSL tuple conversion is required.

Generated assets are served locally at `/appearances/catalog.json` and `/appearances/{family}/cttn.css`. Editable source downloads are at `/appearances/profiles/{family}.profile.json`; `/appearances/source-profiles.json` is the sorted public hash/size/schema/name/version manifest for those exact bytes. The family preview and workflow each expose a download for the selected or prepared profile. These remain development-preview inputs; this site does not claim that the installed 0.2.0 package edits or selects the collection. The site's `/appearances` files are generated separately from the package input and bound by the projection receipt to the shared catalog and authenticated engine inputs. The example workflow loads already-generated CSS; it does not run a compiler in the browser. Missing files produce a readable fallback.

The six-family collection is a development candidate. The installed published 0.2.0 package supplies the Terminal Nova root theme used by this site; the site's generated appearance files are produced separately, and package release does not by itself establish acceptance for this consumer site. Source/build checks, rendered browser checks, native qualification, final visual acceptance and deployment are distinct gates.

## Component attribution

Button, Card, Input, Label, Table, and Dialog are adapted from the pinned shadcn/ui sources listed in [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md). The adaptations use direct Radix primitive imports, the local `cn` re-export, an original functional close glyph, and no optional animation or icon package.

The build emits `THIRD-PARTY-NOTICES.txt` and `third-party-modules.json` for bundled dependency notices and source attribution. The inventory's `bundledModules` list contains bundled package-module records; its explicit CSS and generated-runtime inputs remain separate. Their successful generation and inspection are required before publishing a build.

Software and identity use retain their existing terms. This site uses a text wordmark and does not modify or embed Nova Ingot artwork. The [pinned Terminal Nova brand policy](https://github.com/Knowledge-Forge-AI/theme-forge-terminal-nova/blob/461d9add96ed6c04b341e31305697a9046eed1a8/README-BRAND.md) records source identity guidance; it changes no existing software or artwork license grant.
