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
export declare const themeSpec: ThemeSpecification;
export declare const themeCss = "./styles/theme.css";
export default themeSpec;
export { statuses, type ConsoleState } from "./status.js";
