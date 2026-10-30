/** Mock console states: text and glyphs remain meaningful without colour. */
export declare const statuses: {
    readonly healthy: {
        readonly label: "Healthy";
        readonly glyph: "check";
        readonly symbol: "✓";
        readonly color: "var(--chart-3)";
    };
    readonly degraded: {
        readonly label: "Degraded";
        readonly glyph: "warning";
        readonly symbol: "△";
        readonly color: "var(--chart-2)";
    };
    readonly error: {
        readonly label: "Error";
        readonly glyph: "cross";
        readonly symbol: "×";
        readonly color: "var(--destructive)";
    };
    readonly "permission-denied": {
        readonly label: "Permission denied";
        readonly glyph: "lock";
        readonly symbol: "⊘";
        readonly color: "var(--chart-5)";
    };
    readonly loading: {
        readonly label: "Loading";
        readonly glyph: "progress";
        readonly symbol: "…";
        readonly color: "var(--chart-1)";
    };
    readonly empty: {
        readonly label: "Empty";
        readonly glyph: "dash";
        readonly symbol: "—";
        readonly color: "var(--chart-4)";
    };
};
export type ConsoleState = keyof typeof statuses;
