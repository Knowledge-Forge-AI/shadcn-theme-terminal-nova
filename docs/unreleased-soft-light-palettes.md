# Unreleased colored light palettes

This development branch revises the shared paired profiles without releasing a
package. No version, dependency, lockfile or published artifact changes.

The six light canvases are sage (Terminal Nova), lavender (Nebular), dusty blue
(Developer), warm sand (Graphic Designer), rose (Anime) and sea glass (Gamer).
Light text, surfaces and borders remain explicit profile roles. All six profiles’
action/highlight colors are deepened to retain readable foreground contrast.

The pinned Solar and Loom engines remain unchanged. CTTN and application output
use their existing profile mapping. Starlight receives a disclosed producer
adaptation of thirteen light surface/text/border roles after engine mapping and
before compilation. It changes only existing light tokens, refusing dark-role,
unrelated-role or conflicting aliases; the template token bound is preserved.
The catalog records both original engine and adapted catalog hashes. Engine
mapping reports remain the engine's own reports, not a claim that Solar gained
new role support.

The resulting shared inventory digest is
`d172e64015c2f3af32b8824924f2e3472925ce3fa6950442dd9e580a71490b19`.
All twelve focused deterministic, bound-profile and refusal tests pass. All
136 profile text/control and accent-on-surface checks meet their stated
thresholds. The full matrix is in [soft-light-contrast.json](soft-light-contrast.json).
Its 192 compiled Starlight accent pairs include 16 failures confined to optional
retained cyan/orange variants of Nebular and Anime on muted surfaces. Current
profile-selected variants pass; this adaptation introduces user-visible contrast debt on selectable legacy
variants (via the existing data-accent attribute), which must be resolved or explicitly
disposed before future release qualification.
All six profiles compare nonempty compiled non-light token/rule partitions
against genuine unadapted mapper output; source dark values remain unchanged. The old Terminal
Nova dark field-border contrast debt remains; this is not a blanket accessibility
or native qualification claim. Authored syntax mapping limitations remain.

The website deployment keeps published specimen bytes separate from these
unreleased profiles. Future STTN/package synchronization and native application
qualification must use this exact collection before a product release. Nebular's
corresponding development branch carries the existing adapter's projection.
No registry upload, release tag, product deployment or installer change is part
of this branch. Rollback is removal of these development commits.

The native app suite/typecheck was not run for this generated-source branch.
Code-block backgrounds, syntax configuration and compiled code CSS retain the
existing template; code frames and inline code can inherit the revised ambient
borders/surfaces. This does not claim identical computed code-frame decoration.

Known source-only limits: the adaptation introduces contrast debt in retained
legacy cyan/orange Starlight variants of Nebular and Anime; these variants remain
selectable in generated CSS. Anime focus against its active surface is also
below 3:1 (approximately 2.93). Dispose these before any merge/release decision.
The stronger shared border/field/hairline hierarchy is intentional in this
revision. The static contrast report uses WCAG sRGB linearization, relative
luminance coefficients 0.2126/0.7152/0.0722, and (Lmax+0.05)/(Lmin+0.05); it is
not an exhaustive audit of every component, chart or state.

Starlight secondary is a foreground/heading role and maps to canvasText,
not a background. Root-profile compatibility rows are independently recomputed
from the bound original template, paired source and actual counterpart; missing,
relabeled or inconsistent rows fail. Complete composed-source inventory and
independent composition verification pass. A built-package verifier still
requires the normal build receipt; no build or native result is asserted.

Target boundary: the thirteen-role Starlight adaptation applies to the six
appearance-catalog exports. The root `loom-counterpart/terminal-nova.loom.theme.json`
is a separate compatibility artifact, not that appearance export. It retains
template navigation/header/sidebar/panel/secondary/inline-code roles for cyan;
orange additionally retains template border/card/hairline/muted/page/raised.
The exact difference set is pinned in the composition test. Do not use that
partly revised counterpart as the fully adapted family stylesheet. Root and
opt-in appearance outputs are deliberately not asserted identical.

For this development diff, the recorded public-baseline comparison proves all
six source dark palettes/overrides and all six projected application dark blocks
equal their prior public values. This is independent of the adaptation-only
regression test. CTTN's contrast JSON carries those hashes and public blob IDs.
All accent deepening is light-only. Anime focus/active is an additional explicit
failing pair outside the 136 passing profile checks, not part of that total.
