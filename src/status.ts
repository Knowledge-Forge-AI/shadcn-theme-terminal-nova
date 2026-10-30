/** Mock console states: text and glyphs remain meaningful without colour. */
export const statuses = {
  healthy: { label: "Healthy", glyph: "check", symbol: "✓", color: "var(--chart-3)" },
  degraded: { label: "Degraded", glyph: "warning", symbol: "△", color: "var(--chart-2)" },
  error: { label: "Error", glyph: "cross", symbol: "×", color: "var(--destructive)" },
  "permission-denied": { label: "Permission denied", glyph: "lock", symbol: "⊘", color: "var(--chart-5)" },
  loading: { label: "Loading", glyph: "progress", symbol: "…", color: "var(--chart-1)" },
  empty: { label: "Empty", glyph: "dash", symbol: "—", color: "var(--chart-4)" },
} as const;
export type ConsoleState = keyof typeof statuses;

