# CTTN brand and source-UI inventory

This inventory covers the small site-owned identity files and points to the
source record for adapted UI components. CTTN uses a text wordmark in the
interface; it does not use or modify Nova Ingot artwork.

## Site-owned text assets

| File | Role | Treatment | SHA-256 |
| --- | --- | --- | --- |
| `../favicon.svg` | Browser and bookmark icon | Original text-only “C” on a dark surface | `98e499422df4d83efd67425d123adc612eb5f4538067a39490412f5fe56cd696` |
| `cttn-social.svg` | Editable Open Graph and Twitter preview source | Original text-only CTTN / product description card | `84444e3927d1fb379f4bcf56a77f952a69686ea9880a2f83796d30a0d7a9724b` |
| `cttn-social.png` | Open Graph and Twitter delivery asset | Deterministic 1200×630 PNG, 29,483 bytes, rasterized from `cttn-social.svg` | `9d33d53a193b19362f1bade354390051a378d76cb7b2ecc3b633b29193a8fab5` |

The files above are intentionally separate from Terminal Nova's four
approved identity copies used by the STTN documentation demo. The maintained
[brand guidance](https://github.com/Knowledge-Forge-AI/theme-forge-terminal-nova/blob/461d9add96ed6c04b341e31305697a9046eed1a8/README-BRAND.md)
is the source of identity-use strategy; this inventory does not add legal
terms or grant artwork permissions.

The PNG is a mechanical metadata-delivery raster of the editable SVG. The
Sharp renderer's Apache-2.0 software terms apply to that tool, not as a new
artwork or wordmark license; the existing identity guidance remains unchanged.

## Source UI assets

CTTN's six adapted source components are:

- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/table.tsx`

Their upstream revision, source URLs, upstream hashes, consumer hashes and
the retained shadcn/ui MIT notice are recorded in
[SOURCE-ASSETS.json](https://github.com/Knowledge-Forge-AI/shadcn-theme-terminal-nova/blob/main/SOURCE-ASSETS.json)
and [THIRD-PARTY-NOTICES.md](https://github.com/Knowledge-Forge-AI/shadcn-theme-terminal-nova/blob/main/THIRD-PARTY-NOTICES.md).
UI source attribution is a software matter and does not describe the text
wordmark.

Public contact for identity questions: sam.lair@knowledge-forge.ai.
