export type ThemeMode = "light" | "dark";
export const FAMILY_IDS = ["terminal-nova", "nebular", "developer", "graphic-designer", "anime", "gamer"] as const;
export type FamilyId = typeof FAMILY_IDS[number];

export interface AppearanceFamily {
  id: FamilyId;
  label: string;
  review: string;
  description: string;
}

export const FALLBACK_FAMILIES: AppearanceFamily[] = [
  {
    id: "terminal-nova",
    label: "Terminal Nova",
    review: "Development preview",
    description: "Warm ivory light and charcoal dark surfaces with cyan actions and orange accents.",
  },
  {
    id: "nebular",
    label: "Nebular",
    review: "Development preview",
    description: "A cool, luminous application pairing prepared for the same component contract.",
  },
  {
    id: "developer",
    label: "Developer",
    review: "Development preview",
    description: "A restrained cool workbench visual candidate for focused component work.",
  },
  {
    id: "graphic-designer",
    label: "Graphic Designer",
    review: "Development preview",
    description: "A neutral document-inspection visual candidate with deliberate surface contrast.",
  },
  {
    id: "anime",
    label: "Anime",
    review: "Development preview",
    description: "A lavender and rose visual candidate for expressive component studies.",
  },
  {
    id: "gamer",
    label: "Gamer",
    review: "Development preview",
    description: "An energetic geometry visual candidate for high-signal interactive surfaces.",
  },
];

export function appearanceCssUrl(family: FamilyId): string {
  return `/appearances/${family}/cttn.css`;
}

export function appearanceProfileUrl(family: FamilyId): string {
  return `/appearances/profiles/${family}.profile.json`;
}

export function specimenUrl(family: FamilyId, mode: ThemeMode): string {
  return `/specimen.html?family=${encodeURIComponent(family)}&mode=${mode}`;
}

function isFamilyId(value: unknown): value is FamilyId {
  return FAMILY_IDS.includes(value as FamilyId);
}

export async function loadAppearanceFamilies(): Promise<AppearanceFamily[]> {
  try {
    const response = await fetch("/appearances/catalog.json", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return FALLBACK_FAMILIES;
    const payload = (await response.json()) as { families?: unknown };
    if (!Array.isArray(payload.families)) return FALLBACK_FAMILIES;

    const discovered = payload.families.flatMap((entry): AppearanceFamily[] => {
      if (!entry || typeof entry !== "object") return [];
      const candidate = entry as Record<string, unknown>;
      if (!isFamilyId(candidate.id) || typeof candidate.label !== "string") return [];
      return [{
        id: candidate.id,
        label: candidate.label,
        review: typeof candidate.review === "string" ? candidate.review : "Development preview",
        description: typeof candidate.description === "string"
          ? candidate.description
          : FALLBACK_FAMILIES.find((family) => family.id === candidate.id)?.description ?? "Coordinated theme preview.",
      }];
    });

    return FALLBACK_FAMILIES.map((fallback) => discovered.find((family) => family.id === fallback.id) ?? fallback);
  } catch {
    return FALLBACK_FAMILIES;
  }
}

export async function loadAppearanceCss(family: FamilyId): Promise<string | null> {
  try {
    const response = await fetch(appearanceCssUrl(family), { cache: "no-store" });
    return response.ok ? await response.text() : null;
  } catch {
    return null;
  }
}

export function cssExcerpt(css: string | null, family: FamilyId, mode: ThemeMode): string {
  const previewNotice = "/* Development preview input; this page does not imply package runtime selection. */";
  if (!css) {
    return `/* ${family} · ${mode} · generated asset pending */\n${previewNotice}\n\n/* Generated CTTN roles are loaded from /appearances/${family}/cttn.css. */`;
  }

  const lines = css.split(/\r?\n/);
  const start = lines.findIndex((line) => line.includes(mode === "dark" ? "data-theme='dark'" : ":root {"));
  const excerpt = (start >= 0 ? lines.slice(start, start + 16) : lines.slice(0, 16)).join("\n");
  return `/* ${family} · ${mode} · generated CTTN excerpt */\n${previewNotice}\n\n${excerpt}`;
}
