export interface ColorTokens {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1?: string;
  chart2?: string;
  chart3?: string;
  chart4?: string;
  chart5?: string;
  sidebar?: string;
  sidebarForeground?: string;
  sidebarPrimary?: string;
  sidebarPrimaryForeground?: string;
  sidebarAccent?: string;
  sidebarAccentForeground?: string;
  sidebarBorder?: string;
  sidebarRing?: string;
}

export interface ThemeSpecification {
  schemaVersion: "tfss.theme-v1";
  name: string;
  version: string;
  description?: string;
  palette: {
    light: ColorTokens;
    dark: ColorTokens;
  };
  surfaces: {
    radius: string;
    borderWidth?: string;
  };
  typography: {
    fontSans: string;
    fontHeading?: string;
    fontMono?: string;
  };
  sourceProfileSha256?: string;
}

export const themeSpec: ThemeSpecification = {
  "description": "Terminal Nova paired cyan/amber console identity",
  "name": "terminal-nova",
  "palette": {
    "dark": {
      "accent": "#ff8a3d",
      "accentForeground": "#111318",
      "background": "#111318",
      "border": "#50535d",
      "card": "#191c23",
      "cardForeground": "#eee9e3",
      "chart1": "#69d3e4",
      "chart2": "#ff8a3d",
      "chart3": "#7dd3a0",
      "chart4": "#b9b4ad",
      "chart5": "#c6b2f3",
      "destructive": "#f87171",
      "destructiveForeground": "#111318",
      "foreground": "#eee9e3",
      "input": "#50535d",
      "muted": "#262a33",
      "mutedForeground": "#b9b4ad",
      "popover": "#191c23",
      "popoverForeground": "#eee9e3",
      "primary": "#69d3e4",
      "primaryForeground": "#111318",
      "ring": "#69d3e4",
      "secondary": "#262a33",
      "secondaryForeground": "#eee9e3",
      "sidebar": "#15181e",
      "sidebarAccent": "#3a231c",
      "sidebarAccentForeground": "#ffcfad",
      "sidebarBorder": "#50535d",
      "sidebarForeground": "#eee9e3",
      "sidebarPrimary": "#69d3e4",
      "sidebarPrimaryForeground": "#111318",
      "sidebarRing": "#69d3e4"
    },
    "light": {
      "accent": "#9c3e0b",
      "accentForeground": "#fff8f0",
      "background": "#fff8f0",
      "border": "#9d9187",
      "card": "#fffdfa",
      "cardForeground": "#262a33",
      "chart1": "#126475",
      "chart2": "#9c3e0b",
      "chart3": "#146534",
      "chart4": "#625a55",
      "chart5": "#524598",
      "destructive": "#b42318",
      "destructiveForeground": "#ffffff",
      "foreground": "#262a33",
      "input": "#9d9187",
      "muted": "#eee4da",
      "mutedForeground": "#625a55",
      "popover": "#fffdfa",
      "popoverForeground": "#262a33",
      "primary": "#126475",
      "primaryForeground": "#fff8f0",
      "ring": "#126475",
      "secondary": "#eee4da",
      "secondaryForeground": "#262a33",
      "sidebar": "#f5ede5",
      "sidebarAccent": "#ffeadc",
      "sidebarAccentForeground": "#612909",
      "sidebarBorder": "#9d9187",
      "sidebarForeground": "#262a33",
      "sidebarPrimary": "#126475",
      "sidebarPrimaryForeground": "#fff8f0",
      "sidebarRing": "#126475"
    }
  },
  "schemaVersion": "tfss.theme-v1",
  "sourceProfileSha256": "fe3c5e92ef17171bb018356e72d31e825291d81bb225a167885adea5dcf330bf",
  "surfaces": {
    "radius": "4px"
  },
  "typography": {
    "fontHeading": "monospace",
    "fontMono": "monospace",
    "fontSans": "system-ui"
  },
  "version": "0.1.0"
}
;
export const themeCss = "./styles/theme.css";
export default themeSpec;

export { statuses, type ConsoleState } from "./status.js";
