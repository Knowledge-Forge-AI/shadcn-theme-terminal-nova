/** Generated from the shared six-family appearance catalog; regenerate with the catalog producer. */
export declare const appearanceCatalog: Readonly<{
    readonly schema: "theme-forge.appearance-catalog-candidate.v1";
    readonly status: "source-and-consumer-preparation; no release or visual acceptance";
    readonly defaultFamily: "nebular";
    readonly modes: readonly ["light", "dark"];
    readonly engines: readonly [{
        readonly role: "solar";
        readonly package: "@knowledge-forge-ai/theme-forge-solar-sail";
        readonly version: "0.3.0";
        readonly sha256: "65070c3478a1d55476c1b09fbe1dcadfdf7c3d3aa54a154bc9ac9e299411f415";
    }, {
        readonly role: "loom";
        readonly package: "@knowledge-forge-ai/theme-forge-stellar-loom";
        readonly version: "0.5.0";
        readonly sha256: "4e7a7d436c09ba111f5dca8101876c6e085ad15859d96bab8f728c5669880b5f";
    }];
    readonly sttnTemplateSha256: "436e278cdbe3a37e06048504df3897d65230318f17b7ebd754060c2866703324";
    readonly sourceIdentity: {
        readonly schema: "theme-forge.appearance-catalog-source-identity.v1";
        readonly pathBase: "repository-root";
        readonly catalog: {
            readonly path: "tools/source/appearance-catalog/catalog.json";
            readonly bytes: 1595;
            readonly sha256: "5d06b5803a0c68e2dc1c979a5ace407eb417c5358372c2f96319a112945a1a01";
        };
        readonly template: {
            readonly path: "tools/source/sttn/v0.4/terminal-nova.theme.json";
            readonly bytes: 11161;
            readonly sha256: "436e278cdbe3a37e06048504df3897d65230318f17b7ebd754060c2866703324";
        };
        readonly profiles: readonly [{
            readonly id: "terminal-nova";
            readonly path: "tools/source/terminal-nova.profile.json";
            readonly bytes: 3123;
            readonly sha256: "fe3c5e92ef17171bb018356e72d31e825291d81bb225a167885adea5dcf330bf";
        }, {
            readonly id: "nebular";
            readonly path: "tools/source/appearance-catalog/nebular.profile.json";
            readonly bytes: 3134;
            readonly sha256: "fbe0dd3e46ca587f15e3ff221cf24b23e16321b7cca32c28bd1a7d31c20f9c88";
        }, {
            readonly id: "developer";
            readonly path: "tools/source/appearance-catalog/developer.profile.json";
            readonly bytes: 4734;
            readonly sha256: "7b873b36bf4f0d141e70b72a11dbc6dac7f8250de0b2479b84fe014d629597a8";
        }, {
            readonly id: "graphic-designer";
            readonly path: "tools/source/appearance-catalog/graphic-designer.profile.json";
            readonly bytes: 4742;
            readonly sha256: "a8e06be7ebda519fcc2181d7daa8f4dbb86ca473cc3245ea710af27ba0c56232";
        }, {
            readonly id: "anime";
            readonly path: "tools/source/appearance-catalog/anime.profile.json";
            readonly bytes: 4731;
            readonly sha256: "af5a25686b15935226937209e2e4d020a3a5db229bd087dcc82637128ec6edda";
        }, {
            readonly id: "gamer";
            readonly path: "tools/source/appearance-catalog/gamer.profile.json";
            readonly bytes: 4724;
            readonly sha256: "f5880e7d49d6f8f3550c7ad2f338b0fc6036c7b70f053534da1947428cd4a303";
        }];
        readonly engines: readonly [{
            readonly role: "solar";
            readonly package: "@knowledge-forge-ai/theme-forge-solar-sail";
            readonly version: "0.3.0";
            readonly sha256: "65070c3478a1d55476c1b09fbe1dcadfdf7c3d3aa54a154bc9ac9e299411f415";
            readonly integrity: "sha512-UFXyo3upUlj7x7eCMn9Aay9OlvnDhNZ4recQhl9YWA2OSAKnjNQGJZBfbYS6Q0XUO+nZY+oEG1Nvu3xAOuo8vg==";
            readonly sha512: "sha512-UFXyo3upUlj7x7eCMn9Aay9OlvnDhNZ4recQhl9YWA2OSAKnjNQGJZBfbYS6Q0XUO+nZY+oEG1Nvu3xAOuo8vg==";
        }, {
            readonly role: "loom";
            readonly package: "@knowledge-forge-ai/theme-forge-stellar-loom";
            readonly version: "0.5.0";
            readonly sha256: "4e7a7d436c09ba111f5dca8101876c6e085ad15859d96bab8f728c5669880b5f";
            readonly integrity: "sha512-1tgZbcrBCxLZj0rkhCX7XnEVUCAmecS2FefY7TPnjP9o82vSjKnj3h6g3DX/QT7u3CWn+pXfPzQokrlrp6Q8iQ==";
            readonly sha512: "sha512-1tgZbcrBCxLZj0rkhCX7XnEVUCAmecS2FefY7TPnjP9o82vSjKnj3h6g3DX/QT7u3CWn+pXfPzQokrlrp6Q8iQ==";
        }];
    };
    readonly families: readonly [{
        readonly id: "terminal-nova";
        readonly label: "Terminal Nova";
        readonly review: "Published shared source; new consumer integration pending";
        readonly sourceSha256: "fe3c5e92ef17171bb018356e72d31e825291d81bb225a167885adea5dcf330bf";
        readonly canonicalDigest: "9711b4ba1e4183f313b4ecb941e50e826654574b08fedeb6361cba76f890c078";
        readonly solarMapping: {
            readonly totalSemanticLeaves: 78;
            readonly consumed: 68;
            readonly normalized: 0;
            readonly overridden: 0;
            readonly targetSpecific: 4;
            readonly unsupported: 6;
            readonly generatedDefaultsCount: 0;
        };
        readonly loomMapping: {
            readonly totalSemanticLeaves: 78;
            readonly consumed: 30;
            readonly normalized: 5;
            readonly overridden: 0;
            readonly targetSpecific: 26;
            readonly unsupported: 17;
            readonly generatedDefaultsCount: 3;
        };
        readonly applicationExtension: {
            readonly schema: "theme-forge.application-appearance-extension.v1";
            readonly entries: readonly [{
                readonly sourcePath: "typography.ui.family";
                readonly target: "--tf-appearance-font-ui";
                readonly value: "monospace";
            }, {
                readonly sourcePath: "radius.surface";
                readonly target: "--tf-appearance-radius-surface";
                readonly value: "4px";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#d8f2f3";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#104552";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#14333c";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#c0f0f5";
            }];
            readonly scope: "Explicit application-only roles supplementary to the authentic Solar mapping; not claimed as Solar support";
        };
        readonly diagnostics: {
            readonly solar: readonly [];
            readonly loom: readonly [];
        };
        readonly targetDisposition: {
            readonly solar: readonly [{
                readonly sourcePath: "color.dark.selection";
                readonly sourceValue: "#14333c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly sourceValue: "#c0f0f5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly sourceValue: "#d8f2f3";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly sourceValue: "#104552";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.surface";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.defaultAccent";
                readonly sourceValue: "orange";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.primaryFamily";
                readonly sourceValue: "cyan";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.secondaryFamily";
                readonly sourceValue: "orange";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.tokenSetKey";
                readonly sourceValue: "forge-console";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.ui.family";
                readonly sourceValue: "monospace";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }];
            readonly loom: readonly [{
                readonly sourcePath: "color.dark.danger";
                readonly sourceValue: "#f87171";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.dangerText";
                readonly sourceValue: "#111318";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.elevatedSurfaceText";
                readonly sourceValue: "#eee9e3";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.fieldBorder";
                readonly sourceValue: "#50535d";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.highlightText";
                readonly sourceValue: "#111318";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryAction";
                readonly sourceValue: "#262a33";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryActionText";
                readonly sourceValue: "#eee9e3";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.surfaceText";
                readonly sourceValue: "#eee9e3";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.danger";
                readonly sourceValue: "#b42318";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.dangerText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.elevatedSurfaceText";
                readonly sourceValue: "#262a33";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.fieldBorder";
                readonly sourceValue: "#9d9187";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.highlightText";
                readonly sourceValue: "#fff8f0";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryAction";
                readonly sourceValue: "#eee4da";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryActionText";
                readonly sourceValue: "#262a33";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.surfaceText";
                readonly sourceValue: "#262a33";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.control";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart1";
                readonly sourceValue: "#69d3e4";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart2";
                readonly sourceValue: "#ff8a3d";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart3";
                readonly sourceValue: "#7dd3a0";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart4";
                readonly sourceValue: "#b9b4ad";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart5";
                readonly sourceValue: "#c6b2f3";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebar";
                readonly sourceValue: "#15181e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccent";
                readonly sourceValue: "#3a231c";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccentForeground";
                readonly sourceValue: "#ffcfad";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarBorder";
                readonly sourceValue: "#50535d";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarForeground";
                readonly sourceValue: "#eee9e3";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimary";
                readonly sourceValue: "#69d3e4";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimaryForeground";
                readonly sourceValue: "#111318";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarRing";
                readonly sourceValue: "#69d3e4";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart1";
                readonly sourceValue: "#126475";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart2";
                readonly sourceValue: "#9c3e0b";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart3";
                readonly sourceValue: "#146534";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart4";
                readonly sourceValue: "#625a55";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart5";
                readonly sourceValue: "#524598";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebar";
                readonly sourceValue: "#f5ede5";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccent";
                readonly sourceValue: "#ffeadc";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccentForeground";
                readonly sourceValue: "#612909";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarBorder";
                readonly sourceValue: "#9d9187";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarForeground";
                readonly sourceValue: "#262a33";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimary";
                readonly sourceValue: "#126475";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimaryForeground";
                readonly sourceValue: "#fff8f0";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarRing";
                readonly sourceValue: "#126475";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }];
            readonly profileDerivedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["hairline"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["hairline"];
            }];
            readonly templateRetainedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }];
            readonly roleComparison: {
                readonly method: "resolved-value-comparison-to-declared-template";
                readonly derivedMeaning: "Inferred profile-derived roles are resolved values differing from the admitted source variant; equal values are template-retained";
                readonly causalProvenance: false;
            };
            readonly loomNotApplied: readonly [{
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.border";
                readonly sourceValue: "#50535d";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.hairline;accentVariants.cyan.dark.border;chrome.dark.border;chrome.dark.tabBarBorder;chrome.dark.activeTabBorder;chrome.dark.copyButtonBorder";
                readonly targetValue: "#50535d";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvas";
                readonly sourceValue: "#111318";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.page;chrome.dark.background;chrome.dark.activeTabBackground";
                readonly targetValue: "#111318";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvasText";
                readonly sourceValue: "#eee9e3";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.body;syntax.dark.variable;chrome.dark.foreground;chrome.dark.activeTabForeground;chrome.dark.terminalTitlebarForeground";
                readonly targetValue: "#eee9e3";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.focus";
                readonly sourceValue: "#69d3e4";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.focus;chrome.dark.focus";
                readonly targetValue: "#69d3e4";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.highlight";
                readonly sourceValue: "#ff8a3d";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.orange.dark.accent-base;accentVariants.orange.dark.link;accentVariants.orange.dark.focus;syntax.dark.number;syntax.dark.constant;syntax.dark.attribute";
                readonly targetValue: "#ff8a3d";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedSurface";
                readonly sourceValue: "#262a33";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.terminalTitlebarBackground";
                readonly targetValue: "#262a33";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedText";
                readonly sourceValue: "#b9b4ad";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.muted;syntax.dark.comment;syntax.dark.punctuation;chrome.dark.copyButtonForeground";
                readonly targetValue: "#b9b4ad";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryAction";
                readonly sourceValue: "#69d3e4";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.accent-base;accentVariants.cyan.dark.link;syntax.dark.string;syntax.dark.keyword;syntax.dark.function;syntax.dark.type;syntax.dark.tag;chrome.dark.tooltipSuccessBackground";
                readonly targetValue: "#69d3e4";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryActionText";
                readonly sourceValue: "#111318";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.tooltipSuccessForeground";
                readonly targetValue: "#111318";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.surface";
                readonly sourceValue: "#191c23";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.card;chrome.dark.tabBarBackground";
                readonly targetValue: "#191c23";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.border";
                readonly sourceValue: "#9d9187";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.hairline;accentVariants.cyan.light.border;chrome.light.border;chrome.light.tabBarBorder;chrome.light.activeTabBorder;chrome.light.copyButtonBorder";
                readonly targetValue: "#9d9187";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvas";
                readonly sourceValue: "#fff8f0";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.page;chrome.light.background;chrome.light.activeTabBackground";
                readonly targetValue: "#fff8f0";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvasText";
                readonly sourceValue: "#262a33";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.body;syntax.light.variable;chrome.light.foreground;chrome.light.activeTabForeground;chrome.light.terminalTitlebarForeground";
                readonly targetValue: "#262a33";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.focus";
                readonly sourceValue: "#126475";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.focus;chrome.light.focus";
                readonly targetValue: "#126475";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.highlight";
                readonly sourceValue: "#9c3e0b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.orange.light.accent-base;accentVariants.orange.light.link;accentVariants.orange.light.focus;syntax.light.number;syntax.light.constant;syntax.light.attribute";
                readonly targetValue: "#9c3e0b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedSurface";
                readonly sourceValue: "#eee4da";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.terminalTitlebarBackground";
                readonly targetValue: "#eee4da";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedText";
                readonly sourceValue: "#625a55";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.muted;syntax.light.comment;syntax.light.punctuation;chrome.light.copyButtonForeground";
                readonly targetValue: "#625a55";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryAction";
                readonly sourceValue: "#126475";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.accent-base;accentVariants.cyan.light.link;syntax.light.string;syntax.light.keyword;syntax.light.function;syntax.light.type;syntax.light.tag;chrome.light.tooltipSuccessBackground";
                readonly targetValue: "#126475";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryActionText";
                readonly sourceValue: "#fff8f0";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.tooltipSuccessForeground";
                readonly targetValue: "#fff8f0";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.surface";
                readonly sourceValue: "#fffdfa";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.card;chrome.light.tabBarBackground";
                readonly targetValue: "#fffdfa";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "tabs.activeIndicator";
                readonly targetValue: "accent";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "frame";
                readonly targetValue: "editor";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "copy";
                readonly targetValue: "standard";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }];
            readonly codePresentation: "Existing STTN code presentation retained; the separately returned syntax model is not silently substituted";
            readonly authoredSyntax: {
                readonly status: "not-declared";
                readonly applied: false;
                readonly sourcePath: null;
                readonly disclosure: "No authored syntax palette is declared by this profile";
            };
            readonly loomVariants: {
                readonly retainedLegacy: readonly ["cyan", "orange"];
                readonly neededCurrent: readonly ["cyan", "orange"];
                readonly disclosure: "Legacy cyan/orange Loom variants remain in the catalog; current profile variants are added or selected without removing them";
            };
            readonly hoistDisposition: {
                readonly status: "hoisted";
                readonly preamble: "solar-tailwind-v4-preamble";
                readonly source: "Pinned Solar Sail application CSS";
                readonly layeredBody: "Solar :root/.dark rules plus the explicit application extension";
                readonly disclosure: "The pinned Solar Tailwind preamble is retained byte-for-byte before the neutral application layer; only its rule body and application extension are layered";
            };
        };
    }, {
        readonly id: "nebular";
        readonly label: "Nebular";
        readonly review: "Purple/gold visual candidate; owner visual review pending";
        readonly sourceSha256: "fbe0dd3e46ca587f15e3ff221cf24b23e16321b7cca32c28bd1a7d31c20f9c88";
        readonly canonicalDigest: "4a197986f2668c9b16dd559952084eea47453925536bddbc2ed104ffbb1a3384";
        readonly solarMapping: {
            readonly totalSemanticLeaves: 78;
            readonly consumed: 68;
            readonly normalized: 0;
            readonly overridden: 0;
            readonly targetSpecific: 4;
            readonly unsupported: 6;
            readonly generatedDefaultsCount: 0;
        };
        readonly loomMapping: {
            readonly totalSemanticLeaves: 78;
            readonly consumed: 30;
            readonly normalized: 5;
            readonly overridden: 0;
            readonly targetSpecific: 26;
            readonly unsupported: 17;
            readonly generatedDefaultsCount: 3;
        };
        readonly applicationExtension: {
            readonly schema: "theme-forge.application-appearance-extension.v1";
            readonly entries: readonly [{
                readonly sourcePath: "typography.ui.family";
                readonly target: "--tf-appearance-font-ui";
                readonly value: "system-ui";
            }, {
                readonly sourcePath: "radius.surface";
                readonly target: "--tf-appearance-radius-surface";
                readonly value: "12px";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#e5d5ff";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#3a2362";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#493464";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#f4eaff";
            }];
            readonly scope: "Explicit application-only roles supplementary to the authentic Solar mapping; not claimed as Solar support";
        };
        readonly diagnostics: {
            readonly solar: readonly [];
            readonly loom: readonly [];
        };
        readonly targetDisposition: {
            readonly solar: readonly [{
                readonly sourcePath: "color.dark.selection";
                readonly sourceValue: "#493464";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly sourceValue: "#f4eaff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly sourceValue: "#e5d5ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly sourceValue: "#3a2362";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.surface";
                readonly sourceValue: "12px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.defaultAccent";
                readonly sourceValue: "purple";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.primaryFamily";
                readonly sourceValue: "purple";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.secondaryFamily";
                readonly sourceValue: "gold";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.tokenSetKey";
                readonly sourceValue: "nebular";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.ui.family";
                readonly sourceValue: "system-ui";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }];
            readonly loom: readonly [{
                readonly sourcePath: "color.dark.danger";
                readonly sourceValue: "#ff9b9b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.dangerText";
                readonly sourceValue: "#311119";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.elevatedSurfaceText";
                readonly sourceValue: "#eee8f8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.fieldBorder";
                readonly sourceValue: "#8b77a8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.highlightText";
                readonly sourceValue: "#2c1b08";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryAction";
                readonly sourceValue: "#302541";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryActionText";
                readonly sourceValue: "#eee8f8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.surfaceText";
                readonly sourceValue: "#eee8f8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.danger";
                readonly sourceValue: "#b42335";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.dangerText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.elevatedSurfaceText";
                readonly sourceValue: "#252039";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.fieldBorder";
                readonly sourceValue: "#8f7fa9";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.highlightText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryAction";
                readonly sourceValue: "#e9e2f5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryActionText";
                readonly sourceValue: "#32264a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.surfaceText";
                readonly sourceValue: "#252039";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.control";
                readonly sourceValue: "8px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart1";
                readonly sourceValue: "#c9adff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart2";
                readonly sourceValue: "#e9c274";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart3";
                readonly sourceValue: "#82d5b7";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart4";
                readonly sourceValue: "#c1b4d2";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart5";
                readonly sourceValue: "#ff9b9b";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebar";
                readonly sourceValue: "#1b1427";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccent";
                readonly sourceValue: "#49391d";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccentForeground";
                readonly sourceValue: "#f5dfb0";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarBorder";
                readonly sourceValue: "#66567e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarForeground";
                readonly sourceValue: "#eee8f8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimary";
                readonly sourceValue: "#c9adff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimaryForeground";
                readonly sourceValue: "#241437";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarRing";
                readonly sourceValue: "#c9adff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart1";
                readonly sourceValue: "#6741b8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart2";
                readonly sourceValue: "#805b16";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart3";
                readonly sourceValue: "#157359";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart4";
                readonly sourceValue: "#79688e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart5";
                readonly sourceValue: "#b4474e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebar";
                readonly sourceValue: "#f0ebf9";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccent";
                readonly sourceValue: "#ebd9ad";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccentForeground";
                readonly sourceValue: "#593e0b";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarBorder";
                readonly sourceValue: "#b5a9cc";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarForeground";
                readonly sourceValue: "#252039";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimary";
                readonly sourceValue: "#6741b8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimaryForeground";
                readonly sourceValue: "#ffffff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarRing";
                readonly sourceValue: "#6741b8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }];
            readonly profileDerivedRoles: readonly [{
                readonly variant: "gold";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }, {
                readonly variant: "gold";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }, {
                readonly variant: "purple";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "body", "border", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }, {
                readonly variant: "purple";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }];
            readonly templateRetainedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "gold";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "gold";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "purple";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "card", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }, {
                readonly variant: "purple";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }];
            readonly roleComparison: {
                readonly method: "resolved-value-comparison-to-declared-template";
                readonly derivedMeaning: "Inferred profile-derived roles are resolved values differing from the admitted source variant; equal values are template-retained";
                readonly causalProvenance: false;
            };
            readonly loomNotApplied: readonly [{
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.border";
                readonly sourceValue: "#66567e";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.hairline;accentVariants.purple.dark.border;chrome.dark.border;chrome.dark.tabBarBorder;chrome.dark.activeTabBorder;chrome.dark.copyButtonBorder";
                readonly targetValue: "#66567e";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvas";
                readonly sourceValue: "#151020";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.page;chrome.dark.background;chrome.dark.activeTabBackground";
                readonly targetValue: "#151020";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvasText";
                readonly sourceValue: "#eee8f8";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.body;syntax.dark.variable;chrome.dark.foreground;chrome.dark.activeTabForeground;chrome.dark.terminalTitlebarForeground";
                readonly targetValue: "#eee8f8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.focus";
                readonly sourceValue: "#c9adff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.focus;chrome.dark.focus";
                readonly targetValue: "#c9adff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.highlight";
                readonly sourceValue: "#e9c274";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.gold.dark.accent-base;accentVariants.gold.dark.link;accentVariants.gold.dark.focus;syntax.dark.number;syntax.dark.constant;syntax.dark.attribute";
                readonly targetValue: "#e9c274";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedSurface";
                readonly sourceValue: "#302541";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.terminalTitlebarBackground";
                readonly targetValue: "#302541";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedText";
                readonly sourceValue: "#c1b4d2";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.muted;syntax.dark.comment;syntax.dark.punctuation;chrome.dark.copyButtonForeground";
                readonly targetValue: "#c1b4d2";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryAction";
                readonly sourceValue: "#c9adff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.accent-base;accentVariants.purple.dark.link;syntax.dark.string;syntax.dark.keyword;syntax.dark.function;syntax.dark.type;syntax.dark.tag;chrome.dark.tooltipSuccessBackground";
                readonly targetValue: "#c9adff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryActionText";
                readonly sourceValue: "#241437";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.tooltipSuccessForeground";
                readonly targetValue: "#241437";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.surface";
                readonly sourceValue: "#21182f";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.card;chrome.dark.tabBarBackground";
                readonly targetValue: "#21182f";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.border";
                readonly sourceValue: "#b5a9cc";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.hairline;accentVariants.purple.light.border;chrome.light.border;chrome.light.tabBarBorder;chrome.light.activeTabBorder;chrome.light.copyButtonBorder";
                readonly targetValue: "#b5a9cc";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvas";
                readonly sourceValue: "#f8f6ff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.page;chrome.light.background;chrome.light.activeTabBackground";
                readonly targetValue: "#f8f6ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvasText";
                readonly sourceValue: "#252039";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.body;syntax.light.variable;chrome.light.foreground;chrome.light.activeTabForeground;chrome.light.terminalTitlebarForeground";
                readonly targetValue: "#252039";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.focus";
                readonly sourceValue: "#6741b8";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.focus;chrome.light.focus";
                readonly targetValue: "#6741b8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.highlight";
                readonly sourceValue: "#805b16";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.gold.light.accent-base;accentVariants.gold.light.link;accentVariants.gold.light.focus;syntax.light.number;syntax.light.constant;syntax.light.attribute";
                readonly targetValue: "#805b16";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedSurface";
                readonly sourceValue: "#ede8f6";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.terminalTitlebarBackground";
                readonly targetValue: "#ede8f6";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedText";
                readonly sourceValue: "#675d78";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.muted;syntax.light.comment;syntax.light.punctuation;chrome.light.copyButtonForeground";
                readonly targetValue: "#675d78";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryAction";
                readonly sourceValue: "#6741b8";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.accent-base;accentVariants.purple.light.link;syntax.light.string;syntax.light.keyword;syntax.light.function;syntax.light.type;syntax.light.tag;chrome.light.tooltipSuccessBackground";
                readonly targetValue: "#6741b8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryActionText";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.tooltipSuccessForeground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.surface";
                readonly sourceValue: "#fffdfa";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.card;chrome.light.tabBarBackground";
                readonly targetValue: "#fffdfa";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "tabs.activeIndicator";
                readonly targetValue: "accent";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "frame";
                readonly targetValue: "editor";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "copy";
                readonly targetValue: "standard";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }];
            readonly codePresentation: "Existing STTN code presentation retained; the separately returned syntax model is not silently substituted";
            readonly authoredSyntax: {
                readonly status: "not-declared";
                readonly applied: false;
                readonly sourcePath: null;
                readonly disclosure: "No authored syntax palette is declared by this profile";
            };
            readonly loomVariants: {
                readonly retainedLegacy: readonly ["cyan", "orange"];
                readonly neededCurrent: readonly ["purple", "gold"];
                readonly disclosure: "Legacy cyan/orange Loom variants remain in the catalog; current profile variants are added or selected without removing them";
            };
            readonly hoistDisposition: {
                readonly status: "hoisted";
                readonly preamble: "solar-tailwind-v4-preamble";
                readonly source: "Pinned Solar Sail application CSS";
                readonly layeredBody: "Solar :root/.dark rules plus the explicit application extension";
                readonly disclosure: "The pinned Solar Tailwind preamble is retained byte-for-byte before the neutral application layer; only its rule body and application extension are layered";
            };
        };
    }, {
        readonly id: "developer";
        readonly label: "Developer";
        readonly review: "Restrained cool workbench visual candidate; owner visual review pending";
        readonly sourceSha256: "7b873b36bf4f0d141e70b72a11dbc6dac7f8250de0b2479b84fe014d629597a8";
        readonly canonicalDigest: "6141a33313456e0b688b6fe343aded7a04294fde0e6c366822e9a3b18c60dcc2";
        readonly solarMapping: {
            readonly totalSemanticLeaves: 127;
            readonly consumed: 69;
            readonly normalized: 0;
            readonly overridden: 2;
            readonly targetSpecific: 4;
            readonly unsupported: 52;
            readonly generatedDefaultsCount: 0;
        };
        readonly loomMapping: {
            readonly totalSemanticLeaves: 127;
            readonly consumed: 61;
            readonly normalized: 11;
            readonly overridden: 0;
            readonly targetSpecific: 26;
            readonly unsupported: 29;
            readonly generatedDefaultsCount: 1;
        };
        readonly applicationExtension: {
            readonly schema: "theme-forge.application-appearance-extension.v1";
            readonly entries: readonly [{
                readonly sourcePath: "typography.ui.family";
                readonly target: "--tf-appearance-font-ui";
                readonly value: "monospace";
            }, {
                readonly sourcePath: "radius.surface";
                readonly target: "--tf-appearance-radius-surface";
                readonly value: "4px";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#cfe7f2";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#123047";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#234a60";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#d8f4ff";
            }];
            readonly scope: "Explicit application-only roles supplementary to the authentic Solar mapping; not claimed as Solar support";
        };
        readonly diagnostics: {
            readonly solar: readonly [];
            readonly loom: readonly [];
        };
        readonly targetDisposition: {
            readonly solar: readonly [{
                readonly sourcePath: "code.copy";
                readonly sourceValue: "standard";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.frame";
                readonly sourceValue: "editor";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.attribute";
                readonly sourceValue: "#f2d38b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.comment";
                readonly sourceValue: "#a8b5c2";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.constant";
                readonly sourceValue: "#cab6ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.function";
                readonly sourceValue: "#8fc7ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.keyword";
                readonly sourceValue: "#ff9bc7";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.number";
                readonly sourceValue: "#e7b66a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.punctuation";
                readonly sourceValue: "#afc0cf";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.string";
                readonly sourceValue: "#79d9d5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.tag";
                readonly sourceValue: "#ff9e9e";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.type";
                readonly sourceValue: "#8ae5b5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.variable";
                readonly sourceValue: "#e6edf5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.attribute";
                readonly sourceValue: "#655a00";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.comment";
                readonly sourceValue: "#5b6b7a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.constant";
                readonly sourceValue: "#6b42a5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.function";
                readonly sourceValue: "#1c5a99";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.keyword";
                readonly sourceValue: "#7e285d";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.number";
                readonly sourceValue: "#925c00";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.punctuation";
                readonly sourceValue: "#4e5c6b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.string";
                readonly sourceValue: "#0f6b75";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.tag";
                readonly sourceValue: "#9b2c2c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.type";
                readonly sourceValue: "#146c4b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.variable";
                readonly sourceValue: "#1d2733";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.active";
                readonly sourceValue: "#3c556c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.hover";
                readonly sourceValue: "#30455a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly sourceValue: "#234a60";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly sourceValue: "#d8f4ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.active";
                readonly sourceValue: "#c7d9ea";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.hover";
                readonly sourceValue: "#d8e7f3";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly sourceValue: "#cfe7f2";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly sourceValue: "#123047";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.borderStyle";
                readonly sourceValue: "solid";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.emphasis";
                readonly sourceValue: "raised";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "focus.offset";
                readonly sourceValue: "2px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "focus.width";
                readonly sourceValue: "2px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.prominence";
                readonly sourceValue: "balanced";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.overlay";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.surface";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "reading.measure";
                readonly sourceValue: "46rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "spacing.base";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "spacing.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.defaultAccent";
                readonly sourceValue: "cyan";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.primaryFamily";
                readonly sourceValue: "cyan";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.secondaryFamily";
                readonly sourceValue: "orange";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.tokenSetKey";
                readonly sourceValue: "forge-console";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.body.lineHeight";
                readonly sourceValue: 1.55;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.body.size";
                readonly sourceValue: "16px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.code.lineHeight";
                readonly sourceValue: 1.55;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.code.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.lineHeight";
                readonly sourceValue: 1.25;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.size";
                readonly sourceValue: "1.4rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.family";
                readonly sourceValue: "monospace";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.lineHeight";
                readonly sourceValue: 1.35;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }];
            readonly loom: readonly [{
                readonly sourcePath: "color.dark.active";
                readonly sourceValue: "#3c556c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.danger";
                readonly sourceValue: "#f87171";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.dangerText";
                readonly sourceValue: "#250b0b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.elevatedSurfaceText";
                readonly sourceValue: "#f2f6fa";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.fieldBorder";
                readonly sourceValue: "#5a7088";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.highlightText";
                readonly sourceValue: "#0c2728";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.hover";
                readonly sourceValue: "#30455a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryAction";
                readonly sourceValue: "#26384a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryActionText";
                readonly sourceValue: "#e6edf5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.surfaceText";
                readonly sourceValue: "#e6edf5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.active";
                readonly sourceValue: "#c7d9ea";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.danger";
                readonly sourceValue: "#b42318";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.dangerText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.elevatedSurfaceText";
                readonly sourceValue: "#1d2733";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.fieldBorder";
                readonly sourceValue: "#93a4b8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.highlightText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.hover";
                readonly sourceValue: "#d8e7f3";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryAction";
                readonly sourceValue: "#e4ebf3";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryActionText";
                readonly sourceValue: "#1d2733";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.surfaceText";
                readonly sourceValue: "#1d2733";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.emphasis";
                readonly sourceValue: "raised";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.prominence";
                readonly sourceValue: "balanced";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.control";
                readonly sourceValue: "2px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.overlay";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "reading.measure";
                readonly sourceValue: "46rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart1";
                readonly sourceValue: "#65b4d7";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart2";
                readonly sourceValue: "#72d2c6";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart3";
                readonly sourceValue: "#8ae5b5";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart4";
                readonly sourceValue: "#a8b5c2";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart5";
                readonly sourceValue: "#cab6ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebar";
                readonly sourceValue: "#111b27";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccent";
                readonly sourceValue: "#30455a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccentForeground";
                readonly sourceValue: "#d8f4ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarBorder";
                readonly sourceValue: "#415367";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarForeground";
                readonly sourceValue: "#e6edf5";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimary";
                readonly sourceValue: "#65b4d7";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimaryForeground";
                readonly sourceValue: "#0b1b28";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarRing";
                readonly sourceValue: "#65b4d7";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart1";
                readonly sourceValue: "#245a84";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart2";
                readonly sourceValue: "#0e7490";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart3";
                readonly sourceValue: "#2f855a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart4";
                readonly sourceValue: "#526275";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart5";
                readonly sourceValue: "#6b42a5";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebar";
                readonly sourceValue: "#e9eff5";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccent";
                readonly sourceValue: "#d8e7f3";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccentForeground";
                readonly sourceValue: "#123047";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarBorder";
                readonly sourceValue: "#b8c5d3";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarForeground";
                readonly sourceValue: "#1d2733";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimary";
                readonly sourceValue: "#245a84";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimaryForeground";
                readonly sourceValue: "#ffffff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarRing";
                readonly sourceValue: "#245a84";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.code.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "typography.heading.size";
                readonly sourceValue: "1.4rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "typography.ui.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }];
            readonly profileDerivedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }];
            readonly templateRetainedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }];
            readonly roleComparison: {
                readonly method: "resolved-value-comparison-to-declared-template";
                readonly derivedMeaning: "Inferred profile-derived roles are resolved values differing from the admitted source variant; equal values are template-retained";
                readonly causalProvenance: false;
            };
            readonly loomNotApplied: readonly [{
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.copy";
                readonly sourceValue: "standard";
                readonly classification: "consumed";
                readonly reason: "Native code presentation";
                readonly targetPath: "copy";
                readonly targetValue: "standard";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.frame";
                readonly sourceValue: "editor";
                readonly classification: "consumed";
                readonly reason: "Native code presentation";
                readonly targetPath: "frame";
                readonly targetValue: "editor";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.attribute";
                readonly sourceValue: "#f2d38b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.attribute";
                readonly targetValue: "#f2d38b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.comment";
                readonly sourceValue: "#a8b5c2";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.comment";
                readonly targetValue: "#a8b5c2";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.constant";
                readonly sourceValue: "#cab6ff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.constant";
                readonly targetValue: "#cab6ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.function";
                readonly sourceValue: "#8fc7ff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.function";
                readonly targetValue: "#8fc7ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.keyword";
                readonly sourceValue: "#ff9bc7";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.keyword";
                readonly targetValue: "#ff9bc7";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.number";
                readonly sourceValue: "#e7b66a";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.number";
                readonly targetValue: "#e7b66a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.punctuation";
                readonly sourceValue: "#afc0cf";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.punctuation";
                readonly targetValue: "#afc0cf";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.string";
                readonly sourceValue: "#79d9d5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.string";
                readonly targetValue: "#79d9d5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.tag";
                readonly sourceValue: "#ff9e9e";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.tag";
                readonly targetValue: "#ff9e9e";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.type";
                readonly sourceValue: "#8ae5b5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.type";
                readonly targetValue: "#8ae5b5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.variable";
                readonly sourceValue: "#e6edf5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.variable";
                readonly targetValue: "#e6edf5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.attribute";
                readonly sourceValue: "#655a00";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.attribute";
                readonly targetValue: "#655a00";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.comment";
                readonly sourceValue: "#5b6b7a";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.comment";
                readonly targetValue: "#5b6b7a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.constant";
                readonly sourceValue: "#6b42a5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.constant";
                readonly targetValue: "#6b42a5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.function";
                readonly sourceValue: "#1c5a99";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.function";
                readonly targetValue: "#1c5a99";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.keyword";
                readonly sourceValue: "#7e285d";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.keyword";
                readonly targetValue: "#7e285d";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.number";
                readonly sourceValue: "#925c00";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.number";
                readonly targetValue: "#925c00";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.punctuation";
                readonly sourceValue: "#4e5c6b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.punctuation";
                readonly targetValue: "#4e5c6b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.string";
                readonly sourceValue: "#0f6b75";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.string";
                readonly targetValue: "#0f6b75";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.tag";
                readonly sourceValue: "#9b2c2c";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.tag";
                readonly targetValue: "#9b2c2c";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.type";
                readonly sourceValue: "#146c4b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.type";
                readonly targetValue: "#146c4b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.variable";
                readonly sourceValue: "#1d2733";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.variable";
                readonly targetValue: "#1d2733";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.border";
                readonly sourceValue: "#415367";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.hairline;accentVariants.cyan.dark.border;chrome.dark.border;chrome.dark.tabBarBorder;chrome.dark.activeTabBorder;chrome.dark.copyButtonBorder";
                readonly targetValue: "#415367";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvas";
                readonly sourceValue: "#0f1722";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.page;chrome.dark.background;chrome.dark.activeTabBackground";
                readonly targetValue: "#0f1722";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvasText";
                readonly sourceValue: "#e6edf5";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.body;syntax.dark.variable;chrome.dark.foreground;chrome.dark.activeTabForeground;chrome.dark.terminalTitlebarForeground";
                readonly targetValue: "#e6edf5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.focus";
                readonly sourceValue: "#65b4d7";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.focus;chrome.dark.focus";
                readonly targetValue: "#65b4d7";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.highlight";
                readonly sourceValue: "#72d2c6";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.dark.accent-base;accentVariants.orange.dark.link;accentVariants.orange.dark.focus;syntax.dark.number;syntax.dark.constant;syntax.dark.attribute";
                readonly targetValue: "#72d2c6";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedSurface";
                readonly sourceValue: "#233246";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.terminalTitlebarBackground";
                readonly targetValue: "#233246";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedText";
                readonly sourceValue: "#b0becc";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.muted;syntax.dark.comment;syntax.dark.punctuation;chrome.dark.copyButtonForeground";
                readonly targetValue: "#b0becc";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryAction";
                readonly sourceValue: "#65b4d7";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.accent-base;accentVariants.cyan.dark.link;syntax.dark.string;syntax.dark.keyword;syntax.dark.function;syntax.dark.type;syntax.dark.tag;chrome.dark.tooltipSuccessBackground";
                readonly targetValue: "#65b4d7";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryActionText";
                readonly sourceValue: "#0b1b28";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.tooltipSuccessForeground";
                readonly targetValue: "#0b1b28";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.surface";
                readonly sourceValue: "#172230";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.card;chrome.dark.tabBarBackground";
                readonly targetValue: "#172230";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.border";
                readonly sourceValue: "#b8c5d3";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.hairline;accentVariants.cyan.light.border;chrome.light.border;chrome.light.tabBarBorder;chrome.light.activeTabBorder;chrome.light.copyButtonBorder";
                readonly targetValue: "#b8c5d3";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvas";
                readonly sourceValue: "#f4f7fb";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.page;chrome.light.background;chrome.light.activeTabBackground";
                readonly targetValue: "#f4f7fb";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvasText";
                readonly sourceValue: "#1d2733";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.body;syntax.light.variable;chrome.light.foreground;chrome.light.activeTabForeground;chrome.light.terminalTitlebarForeground";
                readonly targetValue: "#1d2733";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.focus";
                readonly sourceValue: "#245a84";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.focus;chrome.light.focus";
                readonly targetValue: "#245a84";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.highlight";
                readonly sourceValue: "#0e7490";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.light.accent-base;accentVariants.orange.light.link;accentVariants.orange.light.focus;syntax.light.number;syntax.light.constant;syntax.light.attribute";
                readonly targetValue: "#0e7490";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedSurface";
                readonly sourceValue: "#e9eff5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.terminalTitlebarBackground";
                readonly targetValue: "#e9eff5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedText";
                readonly sourceValue: "#526275";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.muted;syntax.light.comment;syntax.light.punctuation;chrome.light.copyButtonForeground";
                readonly targetValue: "#526275";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryAction";
                readonly sourceValue: "#245a84";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.accent-base;accentVariants.cyan.light.link;syntax.light.string;syntax.light.keyword;syntax.light.function;syntax.light.type;syntax.light.tag;chrome.light.tooltipSuccessBackground";
                readonly targetValue: "#245a84";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryActionText";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.tooltipSuccessForeground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.surface";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.card;chrome.light.tabBarBackground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "tabs.activeIndicator";
                readonly targetValue: "accent";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }];
            readonly codePresentation: "Existing STTN code presentation retained; the separately returned syntax model is not silently substituted";
            readonly authoredSyntax: {
                readonly status: "unsupported";
                readonly applied: false;
                readonly sourcePath: "code.syntax";
                readonly disclosure: "Authored syntax palette is retained as a candidate but is not applied to the retained STTN code presentation";
            };
            readonly loomVariants: {
                readonly retainedLegacy: readonly ["cyan", "orange"];
                readonly neededCurrent: readonly ["cyan", "orange"];
                readonly disclosure: "Legacy cyan/orange Loom variants remain in the catalog; current profile variants are added or selected without removing them";
            };
            readonly hoistDisposition: {
                readonly status: "hoisted";
                readonly preamble: "solar-tailwind-v4-preamble";
                readonly source: "Pinned Solar Sail application CSS";
                readonly layeredBody: "Solar :root/.dark rules plus the explicit application extension";
                readonly disclosure: "The pinned Solar Tailwind preamble is retained byte-for-byte before the neutral application layer; only its rule body and application extension are layered";
            };
        };
    }, {
        readonly id: "graphic-designer";
        readonly label: "Graphic Designer";
        readonly review: "Neutral document-inspection visual candidate; owner visual review pending";
        readonly sourceSha256: "a8e06be7ebda519fcc2181d7daa8f4dbb86ca473cc3245ea710af27ba0c56232";
        readonly canonicalDigest: "8e16dfff530b1f91dd0436eb21013c619f3192b1fe11e6157e40cc15ce7ba4da";
        readonly solarMapping: {
            readonly totalSemanticLeaves: 127;
            readonly consumed: 69;
            readonly normalized: 0;
            readonly overridden: 2;
            readonly targetSpecific: 4;
            readonly unsupported: 52;
            readonly generatedDefaultsCount: 0;
        };
        readonly loomMapping: {
            readonly totalSemanticLeaves: 127;
            readonly consumed: 61;
            readonly normalized: 10;
            readonly overridden: 0;
            readonly targetSpecific: 26;
            readonly unsupported: 30;
            readonly generatedDefaultsCount: 1;
        };
        readonly applicationExtension: {
            readonly schema: "theme-forge.application-appearance-extension.v1";
            readonly entries: readonly [{
                readonly sourcePath: "typography.ui.family";
                readonly target: "--tf-appearance-font-ui";
                readonly value: "system-ui";
            }, {
                readonly sourcePath: "radius.surface";
                readonly target: "--tf-appearance-radius-surface";
                readonly value: "6px";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#d8e8f2";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#24394a";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#2e4c60";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#e2f3ff";
            }];
            readonly scope: "Explicit application-only roles supplementary to the authentic Solar mapping; not claimed as Solar support";
        };
        readonly diagnostics: {
            readonly solar: readonly [];
            readonly loom: readonly [];
        };
        readonly targetDisposition: {
            readonly solar: readonly [{
                readonly sourcePath: "code.copy";
                readonly sourceValue: "minimal";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.frame";
                readonly sourceValue: "editor";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.attribute";
                readonly sourceValue: "#e8d49b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.comment";
                readonly sourceValue: "#aeb8c0";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.constant";
                readonly sourceValue: "#c8b8ee";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.function";
                readonly sourceValue: "#a7cbea";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.keyword";
                readonly sourceValue: "#e5a9c3";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.number";
                readonly sourceValue: "#e4c07a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.punctuation";
                readonly sourceValue: "#b3bdc6";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.string";
                readonly sourceValue: "#8fd3d5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.tag";
                readonly sourceValue: "#f1a6a6";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.type";
                readonly sourceValue: "#9ddbb5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.variable";
                readonly sourceValue: "#eceff1";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.attribute";
                readonly sourceValue: "#6a5a22";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.comment";
                readonly sourceValue: "#65707b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.constant";
                readonly sourceValue: "#5d4e8a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.function";
                readonly sourceValue: "#305e85";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.keyword";
                readonly sourceValue: "#7c3f61";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.number";
                readonly sourceValue: "#8a5a00";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.punctuation";
                readonly sourceValue: "#55606b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.string";
                readonly sourceValue: "#2e6b74";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.tag";
                readonly sourceValue: "#914141";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.type";
                readonly sourceValue: "#3a6b53";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.variable";
                readonly sourceValue: "#20252b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.active";
                readonly sourceValue: "#515b66";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.hover";
                readonly sourceValue: "#424a53";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly sourceValue: "#2e4c60";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly sourceValue: "#e2f3ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.active";
                readonly sourceValue: "#ccd6df";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.hover";
                readonly sourceValue: "#dde4ea";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly sourceValue: "#d8e8f2";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly sourceValue: "#24394a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.borderStyle";
                readonly sourceValue: "solid";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.emphasis";
                readonly sourceValue: "flat";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "focus.offset";
                readonly sourceValue: "3px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "focus.width";
                readonly sourceValue: "2px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.density";
                readonly sourceValue: "spacious";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.prominence";
                readonly sourceValue: "quiet";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.overlay";
                readonly sourceValue: "8px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.surface";
                readonly sourceValue: "6px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "reading.measure";
                readonly sourceValue: "50rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "spacing.base";
                readonly sourceValue: "8px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "spacing.density";
                readonly sourceValue: "spacious";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.defaultAccent";
                readonly sourceValue: "cyan";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.primaryFamily";
                readonly sourceValue: "cyan";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.secondaryFamily";
                readonly sourceValue: "orange";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.tokenSetKey";
                readonly sourceValue: "forge-console";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.body.lineHeight";
                readonly sourceValue: 1.6;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.body.size";
                readonly sourceValue: "16px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.code.lineHeight";
                readonly sourceValue: 1.55;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.code.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.lineHeight";
                readonly sourceValue: 1.25;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.size";
                readonly sourceValue: "1.4rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.family";
                readonly sourceValue: "system-ui";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.lineHeight";
                readonly sourceValue: 1.4;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }];
            readonly loom: readonly [{
                readonly sourcePath: "color.dark.active";
                readonly sourceValue: "#515b66";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.danger";
                readonly sourceValue: "#ff8c8c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.dangerText";
                readonly sourceValue: "#310e0e";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.elevatedSurfaceText";
                readonly sourceValue: "#f6f7f8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.fieldBorder";
                readonly sourceValue: "#69737e";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.highlightText";
                readonly sourceValue: "#2a2114";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.hover";
                readonly sourceValue: "#424a53";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryAction";
                readonly sourceValue: "#353a40";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryActionText";
                readonly sourceValue: "#eceff1";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.surfaceText";
                readonly sourceValue: "#eceff1";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.active";
                readonly sourceValue: "#ccd6df";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.danger";
                readonly sourceValue: "#b42318";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.dangerText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.elevatedSurfaceText";
                readonly sourceValue: "#20252b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.fieldBorder";
                readonly sourceValue: "#8e99a5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.highlightText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.hover";
                readonly sourceValue: "#dde4ea";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryAction";
                readonly sourceValue: "#e3e6ea";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryActionText";
                readonly sourceValue: "#20252b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.surfaceText";
                readonly sourceValue: "#20252b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.emphasis";
                readonly sourceValue: "flat";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.density";
                readonly sourceValue: "spacious";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.prominence";
                readonly sourceValue: "quiet";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.control";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.overlay";
                readonly sourceValue: "8px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "reading.measure";
                readonly sourceValue: "50rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart1";
                readonly sourceValue: "#9bc7e6";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart2";
                readonly sourceValue: "#d8b576";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart3";
                readonly sourceValue: "#9ddbb5";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart4";
                readonly sourceValue: "#b8c0c8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart5";
                readonly sourceValue: "#c8b8ee";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebar";
                readonly sourceValue: "#202328";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccent";
                readonly sourceValue: "#424a53";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccentForeground";
                readonly sourceValue: "#e2f3ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarBorder";
                readonly sourceValue: "#4d555e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarForeground";
                readonly sourceValue: "#eceff1";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimary";
                readonly sourceValue: "#9bc7e6";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimaryForeground";
                readonly sourceValue: "#16232e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarRing";
                readonly sourceValue: "#9bc7e6";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart1";
                readonly sourceValue: "#3f5f7a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart2";
                readonly sourceValue: "#7a5c28";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart3";
                readonly sourceValue: "#3a6b53";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart4";
                readonly sourceValue: "#59616b";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart5";
                readonly sourceValue: "#5d4e8a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebar";
                readonly sourceValue: "#eceef1";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccent";
                readonly sourceValue: "#dde4ea";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccentForeground";
                readonly sourceValue: "#24394a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarBorder";
                readonly sourceValue: "#b9c0c8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarForeground";
                readonly sourceValue: "#20252b";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimary";
                readonly sourceValue: "#3f5f7a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimaryForeground";
                readonly sourceValue: "#ffffff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarRing";
                readonly sourceValue: "#3f5f7a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.code.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "typography.heading.family";
                readonly sourceValue: "serif";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.size";
                readonly sourceValue: "1.4rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "typography.ui.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }];
            readonly profileDerivedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }];
            readonly templateRetainedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }];
            readonly roleComparison: {
                readonly method: "resolved-value-comparison-to-declared-template";
                readonly derivedMeaning: "Inferred profile-derived roles are resolved values differing from the admitted source variant; equal values are template-retained";
                readonly causalProvenance: false;
            };
            readonly loomNotApplied: readonly [{
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.copy";
                readonly sourceValue: "minimal";
                readonly classification: "consumed";
                readonly reason: "Native code presentation";
                readonly targetPath: "copy";
                readonly targetValue: "minimal";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.frame";
                readonly sourceValue: "editor";
                readonly classification: "consumed";
                readonly reason: "Native code presentation";
                readonly targetPath: "frame";
                readonly targetValue: "editor";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.attribute";
                readonly sourceValue: "#e8d49b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.attribute";
                readonly targetValue: "#e8d49b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.comment";
                readonly sourceValue: "#aeb8c0";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.comment";
                readonly targetValue: "#aeb8c0";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.constant";
                readonly sourceValue: "#c8b8ee";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.constant";
                readonly targetValue: "#c8b8ee";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.function";
                readonly sourceValue: "#a7cbea";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.function";
                readonly targetValue: "#a7cbea";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.keyword";
                readonly sourceValue: "#e5a9c3";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.keyword";
                readonly targetValue: "#e5a9c3";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.number";
                readonly sourceValue: "#e4c07a";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.number";
                readonly targetValue: "#e4c07a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.punctuation";
                readonly sourceValue: "#b3bdc6";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.punctuation";
                readonly targetValue: "#b3bdc6";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.string";
                readonly sourceValue: "#8fd3d5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.string";
                readonly targetValue: "#8fd3d5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.tag";
                readonly sourceValue: "#f1a6a6";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.tag";
                readonly targetValue: "#f1a6a6";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.type";
                readonly sourceValue: "#9ddbb5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.type";
                readonly targetValue: "#9ddbb5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.variable";
                readonly sourceValue: "#eceff1";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.variable";
                readonly targetValue: "#eceff1";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.attribute";
                readonly sourceValue: "#6a5a22";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.attribute";
                readonly targetValue: "#6a5a22";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.comment";
                readonly sourceValue: "#65707b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.comment";
                readonly targetValue: "#65707b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.constant";
                readonly sourceValue: "#5d4e8a";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.constant";
                readonly targetValue: "#5d4e8a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.function";
                readonly sourceValue: "#305e85";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.function";
                readonly targetValue: "#305e85";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.keyword";
                readonly sourceValue: "#7c3f61";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.keyword";
                readonly targetValue: "#7c3f61";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.number";
                readonly sourceValue: "#8a5a00";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.number";
                readonly targetValue: "#8a5a00";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.punctuation";
                readonly sourceValue: "#55606b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.punctuation";
                readonly targetValue: "#55606b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.string";
                readonly sourceValue: "#2e6b74";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.string";
                readonly targetValue: "#2e6b74";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.tag";
                readonly sourceValue: "#914141";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.tag";
                readonly targetValue: "#914141";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.type";
                readonly sourceValue: "#3a6b53";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.type";
                readonly targetValue: "#3a6b53";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.variable";
                readonly sourceValue: "#20252b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.variable";
                readonly targetValue: "#20252b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.border";
                readonly sourceValue: "#4d555e";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.hairline;accentVariants.cyan.dark.border;chrome.dark.border;chrome.dark.tabBarBorder;chrome.dark.activeTabBorder;chrome.dark.copyButtonBorder";
                readonly targetValue: "#4d555e";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvas";
                readonly sourceValue: "#1b1d20";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.page;chrome.dark.background;chrome.dark.activeTabBackground";
                readonly targetValue: "#1b1d20";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvasText";
                readonly sourceValue: "#eceff1";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.body;syntax.dark.variable;chrome.dark.foreground;chrome.dark.activeTabForeground;chrome.dark.terminalTitlebarForeground";
                readonly targetValue: "#eceff1";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.focus";
                readonly sourceValue: "#9bc7e6";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.focus;chrome.dark.focus";
                readonly targetValue: "#9bc7e6";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.highlight";
                readonly sourceValue: "#d8b576";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.dark.accent-base;accentVariants.orange.dark.link;accentVariants.orange.dark.focus;syntax.dark.number;syntax.dark.constant;syntax.dark.attribute";
                readonly targetValue: "#d8b576";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedSurface";
                readonly sourceValue: "#30343a";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.terminalTitlebarBackground";
                readonly targetValue: "#30343a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedText";
                readonly sourceValue: "#b8c0c8";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.muted;syntax.dark.comment;syntax.dark.punctuation;chrome.dark.copyButtonForeground";
                readonly targetValue: "#b8c0c8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryAction";
                readonly sourceValue: "#9bc7e6";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.accent-base;accentVariants.cyan.dark.link;syntax.dark.string;syntax.dark.keyword;syntax.dark.function;syntax.dark.type;syntax.dark.tag;chrome.dark.tooltipSuccessBackground";
                readonly targetValue: "#9bc7e6";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryActionText";
                readonly sourceValue: "#16232e";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.tooltipSuccessForeground";
                readonly targetValue: "#16232e";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.surface";
                readonly sourceValue: "#25282c";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.dark.card;chrome.dark.tabBarBackground";
                readonly targetValue: "#25282c";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.border";
                readonly sourceValue: "#b9c0c8";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.hairline;accentVariants.cyan.light.border;chrome.light.border;chrome.light.tabBarBorder;chrome.light.activeTabBorder;chrome.light.copyButtonBorder";
                readonly targetValue: "#b9c0c8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvas";
                readonly sourceValue: "#f2f3f5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.page;chrome.light.background;chrome.light.activeTabBackground";
                readonly targetValue: "#f2f3f5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvasText";
                readonly sourceValue: "#20252b";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.body;syntax.light.variable;chrome.light.foreground;chrome.light.activeTabForeground;chrome.light.terminalTitlebarForeground";
                readonly targetValue: "#20252b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.focus";
                readonly sourceValue: "#3f5f7a";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.focus;chrome.light.focus";
                readonly targetValue: "#3f5f7a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.highlight";
                readonly sourceValue: "#7a5c28";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.light.accent-base;accentVariants.orange.light.link;accentVariants.orange.light.focus;syntax.light.number;syntax.light.constant;syntax.light.attribute";
                readonly targetValue: "#7a5c28";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedSurface";
                readonly sourceValue: "#eceef1";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.terminalTitlebarBackground";
                readonly targetValue: "#eceef1";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedText";
                readonly sourceValue: "#59616b";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.muted;syntax.light.comment;syntax.light.punctuation;chrome.light.copyButtonForeground";
                readonly targetValue: "#59616b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryAction";
                readonly sourceValue: "#3f5f7a";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.accent-base;accentVariants.cyan.light.link;syntax.light.string;syntax.light.keyword;syntax.light.function;syntax.light.type;syntax.light.tag;chrome.light.tooltipSuccessBackground";
                readonly targetValue: "#3f5f7a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryActionText";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.tooltipSuccessForeground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.surface";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.cyan.light.card;chrome.light.tabBarBackground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "tabs.activeIndicator";
                readonly targetValue: "accent";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }];
            readonly codePresentation: "Existing STTN code presentation retained; the separately returned syntax model is not silently substituted";
            readonly authoredSyntax: {
                readonly status: "unsupported";
                readonly applied: false;
                readonly sourcePath: "code.syntax";
                readonly disclosure: "Authored syntax palette is retained as a candidate but is not applied to the retained STTN code presentation";
            };
            readonly loomVariants: {
                readonly retainedLegacy: readonly ["cyan", "orange"];
                readonly neededCurrent: readonly ["cyan", "orange"];
                readonly disclosure: "Legacy cyan/orange Loom variants remain in the catalog; current profile variants are added or selected without removing them";
            };
            readonly hoistDisposition: {
                readonly status: "hoisted";
                readonly preamble: "solar-tailwind-v4-preamble";
                readonly source: "Pinned Solar Sail application CSS";
                readonly layeredBody: "Solar :root/.dark rules plus the explicit application extension";
                readonly disclosure: "The pinned Solar Tailwind preamble is retained byte-for-byte before the neutral application layer; only its rule body and application extension are layered";
            };
        };
    }, {
        readonly id: "anime";
        readonly label: "Anime";
        readonly review: "Lavender/rose visual candidate; owner visual review pending";
        readonly sourceSha256: "af5a25686b15935226937209e2e4d020a3a5db229bd087dcc82637128ec6edda";
        readonly canonicalDigest: "480d7524ad96017a3d613bbaed35a7756a4d58cf43a951078941859d818d847a";
        readonly solarMapping: {
            readonly totalSemanticLeaves: 127;
            readonly consumed: 69;
            readonly normalized: 0;
            readonly overridden: 2;
            readonly targetSpecific: 4;
            readonly unsupported: 52;
            readonly generatedDefaultsCount: 0;
        };
        readonly loomMapping: {
            readonly totalSemanticLeaves: 127;
            readonly consumed: 61;
            readonly normalized: 10;
            readonly overridden: 0;
            readonly targetSpecific: 26;
            readonly unsupported: 30;
            readonly generatedDefaultsCount: 1;
        };
        readonly applicationExtension: {
            readonly schema: "theme-forge.application-appearance-extension.v1";
            readonly entries: readonly [{
                readonly sourcePath: "typography.ui.family";
                readonly target: "--tf-appearance-font-ui";
                readonly value: "system-ui";
            }, {
                readonly sourcePath: "radius.surface";
                readonly target: "--tf-appearance-radius-surface";
                readonly value: "12px";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#e8d4f2";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#3b2354";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#53336b";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#f9e7ff";
            }];
            readonly scope: "Explicit application-only roles supplementary to the authentic Solar mapping; not claimed as Solar support";
        };
        readonly diagnostics: {
            readonly solar: readonly [];
            readonly loom: readonly [];
        };
        readonly targetDisposition: {
            readonly solar: readonly [{
                readonly sourcePath: "code.copy";
                readonly sourceValue: "standard";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.frame";
                readonly sourceValue: "editor";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.attribute";
                readonly sourceValue: "#f2d48d";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.comment";
                readonly sourceValue: "#c5aecb";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.constant";
                readonly sourceValue: "#d6b9ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.function";
                readonly sourceValue: "#bda8ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.keyword";
                readonly sourceValue: "#ff9fc8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.number";
                readonly sourceValue: "#f1c77c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.punctuation";
                readonly sourceValue: "#cbb8cf";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.string";
                readonly sourceValue: "#ffb2d2";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.tag";
                readonly sourceValue: "#ff9cae";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.type";
                readonly sourceValue: "#9ce1bd";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.variable";
                readonly sourceValue: "#f8eff8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.attribute";
                readonly sourceValue: "#7b5c1a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.comment";
                readonly sourceValue: "#735f78";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.constant";
                readonly sourceValue: "#6842a0";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.function";
                readonly sourceValue: "#5b4c9b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.keyword";
                readonly sourceValue: "#a12f70";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.number";
                readonly sourceValue: "#8b5a17";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.punctuation";
                readonly sourceValue: "#66586b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.string";
                readonly sourceValue: "#8a3e74";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.tag";
                readonly sourceValue: "#a23c55";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.type";
                readonly sourceValue: "#2f765e";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.variable";
                readonly sourceValue: "#2b2031";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.active";
                readonly sourceValue: "#5c3b70";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.hover";
                readonly sourceValue: "#4a315d";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly sourceValue: "#53336b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly sourceValue: "#f9e7ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.active";
                readonly sourceValue: "#e1c1da";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.hover";
                readonly sourceValue: "#edd5e8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly sourceValue: "#e8d4f2";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly sourceValue: "#3b2354";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.borderStyle";
                readonly sourceValue: "solid";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.emphasis";
                readonly sourceValue: "raised";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "focus.offset";
                readonly sourceValue: "3px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "focus.width";
                readonly sourceValue: "3px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.prominence";
                readonly sourceValue: "strong";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.overlay";
                readonly sourceValue: "16px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.surface";
                readonly sourceValue: "12px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "reading.measure";
                readonly sourceValue: "48rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "spacing.base";
                readonly sourceValue: "8px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "spacing.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.defaultAccent";
                readonly sourceValue: "purple";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.primaryFamily";
                readonly sourceValue: "purple";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.secondaryFamily";
                readonly sourceValue: "rose";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.tokenSetKey";
                readonly sourceValue: "forge-console";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.body.lineHeight";
                readonly sourceValue: 1.6;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.body.size";
                readonly sourceValue: "16px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.code.lineHeight";
                readonly sourceValue: 1.55;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.code.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.lineHeight";
                readonly sourceValue: 1.2;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.size";
                readonly sourceValue: "1.6rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.family";
                readonly sourceValue: "system-ui";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.lineHeight";
                readonly sourceValue: 1.4;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.size";
                readonly sourceValue: "0.95rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }];
            readonly loom: readonly [{
                readonly sourcePath: "color.dark.active";
                readonly sourceValue: "#5c3b70";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.danger";
                readonly sourceValue: "#ff9aab";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.dangerText";
                readonly sourceValue: "#330d16";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.elevatedSurfaceText";
                readonly sourceValue: "#fff5fb";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.fieldBorder";
                readonly sourceValue: "#80618f";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.highlightText";
                readonly sourceValue: "#341020";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.hover";
                readonly sourceValue: "#4a315d";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryAction";
                readonly sourceValue: "#3a2848";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryActionText";
                readonly sourceValue: "#f8eff8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.surfaceText";
                readonly sourceValue: "#f8eff8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.active";
                readonly sourceValue: "#e1c1da";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.danger";
                readonly sourceValue: "#b4233c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.dangerText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.elevatedSurfaceText";
                readonly sourceValue: "#2b2031";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.fieldBorder";
                readonly sourceValue: "#a887a9";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.highlightText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.hover";
                readonly sourceValue: "#edd5e8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryAction";
                readonly sourceValue: "#f3e4f0";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryActionText";
                readonly sourceValue: "#3a2740";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.surfaceText";
                readonly sourceValue: "#2b2031";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.emphasis";
                readonly sourceValue: "raised";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.prominence";
                readonly sourceValue: "strong";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.control";
                readonly sourceValue: "8px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.overlay";
                readonly sourceValue: "16px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "reading.measure";
                readonly sourceValue: "48rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart1";
                readonly sourceValue: "#d6a8ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart2";
                readonly sourceValue: "#f28db9";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart3";
                readonly sourceValue: "#9ce1bd";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart4";
                readonly sourceValue: "#c5aecb";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart5";
                readonly sourceValue: "#f1c77c";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebar";
                readonly sourceValue: "#241a2e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccent";
                readonly sourceValue: "#4a315d";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccentForeground";
                readonly sourceValue: "#f9e7ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarBorder";
                readonly sourceValue: "#624a72";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarForeground";
                readonly sourceValue: "#f8eff8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimary";
                readonly sourceValue: "#d6a8ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimaryForeground";
                readonly sourceValue: "#251231";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarRing";
                readonly sourceValue: "#d6a8ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart1";
                readonly sourceValue: "#7a4fa3";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart2";
                readonly sourceValue: "#b83e72";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart3";
                readonly sourceValue: "#2f765e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart4";
                readonly sourceValue: "#735f78";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart5";
                readonly sourceValue: "#8b5a17";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebar";
                readonly sourceValue: "#f0e7f0";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccent";
                readonly sourceValue: "#edd5e8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccentForeground";
                readonly sourceValue: "#3b2354";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarBorder";
                readonly sourceValue: "#cdb7cc";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarForeground";
                readonly sourceValue: "#2b2031";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimary";
                readonly sourceValue: "#7a4fa3";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimaryForeground";
                readonly sourceValue: "#ffffff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarRing";
                readonly sourceValue: "#7a4fa3";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.code.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "typography.heading.family";
                readonly sourceValue: "serif";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.size";
                readonly sourceValue: "1.6rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "typography.ui.size";
                readonly sourceValue: "0.95rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }];
            readonly profileDerivedRoles: readonly [{
                readonly variant: "purple";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }, {
                readonly variant: "purple";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }, {
                readonly variant: "rose";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }, {
                readonly variant: "rose";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }];
            readonly templateRetainedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "accent-high", "accent-low", "body", "border", "card", "code", "focus", "hairline", "header", "inline-code", "inverted", "link", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "purple";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }, {
                readonly variant: "purple";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }, {
                readonly variant: "rose";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "rose";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }];
            readonly roleComparison: {
                readonly method: "resolved-value-comparison-to-declared-template";
                readonly derivedMeaning: "Inferred profile-derived roles are resolved values differing from the admitted source variant; equal values are template-retained";
                readonly causalProvenance: false;
            };
            readonly loomNotApplied: readonly [{
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.copy";
                readonly sourceValue: "standard";
                readonly classification: "consumed";
                readonly reason: "Native code presentation";
                readonly targetPath: "copy";
                readonly targetValue: "standard";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.frame";
                readonly sourceValue: "editor";
                readonly classification: "consumed";
                readonly reason: "Native code presentation";
                readonly targetPath: "frame";
                readonly targetValue: "editor";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.attribute";
                readonly sourceValue: "#f2d48d";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.attribute";
                readonly targetValue: "#f2d48d";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.comment";
                readonly sourceValue: "#c5aecb";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.comment";
                readonly targetValue: "#c5aecb";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.constant";
                readonly sourceValue: "#d6b9ff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.constant";
                readonly targetValue: "#d6b9ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.function";
                readonly sourceValue: "#bda8ff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.function";
                readonly targetValue: "#bda8ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.keyword";
                readonly sourceValue: "#ff9fc8";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.keyword";
                readonly targetValue: "#ff9fc8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.number";
                readonly sourceValue: "#f1c77c";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.number";
                readonly targetValue: "#f1c77c";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.punctuation";
                readonly sourceValue: "#cbb8cf";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.punctuation";
                readonly targetValue: "#cbb8cf";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.string";
                readonly sourceValue: "#ffb2d2";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.string";
                readonly targetValue: "#ffb2d2";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.tag";
                readonly sourceValue: "#ff9cae";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.tag";
                readonly targetValue: "#ff9cae";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.type";
                readonly sourceValue: "#9ce1bd";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.type";
                readonly targetValue: "#9ce1bd";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.variable";
                readonly sourceValue: "#f8eff8";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.variable";
                readonly targetValue: "#f8eff8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.attribute";
                readonly sourceValue: "#7b5c1a";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.attribute";
                readonly targetValue: "#7b5c1a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.comment";
                readonly sourceValue: "#735f78";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.comment";
                readonly targetValue: "#735f78";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.constant";
                readonly sourceValue: "#6842a0";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.constant";
                readonly targetValue: "#6842a0";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.function";
                readonly sourceValue: "#5b4c9b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.function";
                readonly targetValue: "#5b4c9b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.keyword";
                readonly sourceValue: "#a12f70";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.keyword";
                readonly targetValue: "#a12f70";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.number";
                readonly sourceValue: "#8b5a17";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.number";
                readonly targetValue: "#8b5a17";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.punctuation";
                readonly sourceValue: "#66586b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.punctuation";
                readonly targetValue: "#66586b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.string";
                readonly sourceValue: "#8a3e74";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.string";
                readonly targetValue: "#8a3e74";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.tag";
                readonly sourceValue: "#a23c55";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.tag";
                readonly targetValue: "#a23c55";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.type";
                readonly sourceValue: "#2f765e";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.type";
                readonly targetValue: "#2f765e";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.variable";
                readonly sourceValue: "#2b2031";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.variable";
                readonly targetValue: "#2b2031";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.border";
                readonly sourceValue: "#624a72";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.hairline;accentVariants.purple.dark.border;chrome.dark.border;chrome.dark.tabBarBorder;chrome.dark.activeTabBorder;chrome.dark.copyButtonBorder";
                readonly targetValue: "#624a72";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvas";
                readonly sourceValue: "#1c1424";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.page;chrome.dark.background;chrome.dark.activeTabBackground";
                readonly targetValue: "#1c1424";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvasText";
                readonly sourceValue: "#f8eff8";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.purple.dark.body;syntax.dark.variable;chrome.dark.foreground;chrome.dark.activeTabForeground;chrome.dark.terminalTitlebarForeground";
                readonly targetValue: "#f8eff8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.focus";
                readonly sourceValue: "#d6a8ff";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.purple.dark.focus;chrome.dark.focus";
                readonly targetValue: "#d6a8ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.highlight";
                readonly sourceValue: "#f28db9";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.rose.dark.accent-base;accentVariants.rose.dark.link;accentVariants.rose.dark.focus;syntax.dark.number;syntax.dark.constant;syntax.dark.attribute";
                readonly targetValue: "#f28db9";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedSurface";
                readonly sourceValue: "#35243f";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.terminalTitlebarBackground";
                readonly targetValue: "#35243f";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedText";
                readonly sourceValue: "#cbb8cf";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.purple.dark.muted;syntax.dark.comment;syntax.dark.punctuation;chrome.dark.copyButtonForeground";
                readonly targetValue: "#cbb8cf";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryAction";
                readonly sourceValue: "#d6a8ff";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.purple.dark.accent-base;accentVariants.purple.dark.link;syntax.dark.string;syntax.dark.keyword;syntax.dark.function;syntax.dark.type;syntax.dark.tag;chrome.dark.tooltipSuccessBackground";
                readonly targetValue: "#d6a8ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryActionText";
                readonly sourceValue: "#251231";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.tooltipSuccessForeground";
                readonly targetValue: "#251231";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.surface";
                readonly sourceValue: "#281b33";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.dark.card;chrome.dark.tabBarBackground";
                readonly targetValue: "#281b33";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.border";
                readonly sourceValue: "#cdb7cc";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.hairline;accentVariants.purple.light.border;chrome.light.border;chrome.light.tabBarBorder;chrome.light.activeTabBorder;chrome.light.copyButtonBorder";
                readonly targetValue: "#cdb7cc";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvas";
                readonly sourceValue: "#fff7fc";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.page;chrome.light.background;chrome.light.activeTabBackground";
                readonly targetValue: "#fff7fc";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvasText";
                readonly sourceValue: "#2b2031";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.purple.light.body;syntax.light.variable;chrome.light.foreground;chrome.light.activeTabForeground;chrome.light.terminalTitlebarForeground";
                readonly targetValue: "#2b2031";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.focus";
                readonly sourceValue: "#7a4fa3";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.purple.light.focus;chrome.light.focus";
                readonly targetValue: "#7a4fa3";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.highlight";
                readonly sourceValue: "#b83e72";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.rose.light.accent-base;accentVariants.rose.light.link;accentVariants.rose.light.focus;syntax.light.number;syntax.light.constant;syntax.light.attribute";
                readonly targetValue: "#b83e72";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedSurface";
                readonly sourceValue: "#f0e7f0";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.terminalTitlebarBackground";
                readonly targetValue: "#f0e7f0";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedText";
                readonly sourceValue: "#6b5870";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.purple.light.muted;syntax.light.comment;syntax.light.punctuation;chrome.light.copyButtonForeground";
                readonly targetValue: "#6b5870";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryAction";
                readonly sourceValue: "#7a4fa3";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.purple.light.accent-base;accentVariants.purple.light.link;syntax.light.string;syntax.light.keyword;syntax.light.function;syntax.light.type;syntax.light.tag;chrome.light.tooltipSuccessBackground";
                readonly targetValue: "#7a4fa3";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryActionText";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.tooltipSuccessForeground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.surface";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.purple.light.card;chrome.light.tabBarBackground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "tabs.activeIndicator";
                readonly targetValue: "accent";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }];
            readonly codePresentation: "Existing STTN code presentation retained; the separately returned syntax model is not silently substituted";
            readonly authoredSyntax: {
                readonly status: "unsupported";
                readonly applied: false;
                readonly sourcePath: "code.syntax";
                readonly disclosure: "Authored syntax palette is retained as a candidate but is not applied to the retained STTN code presentation";
            };
            readonly loomVariants: {
                readonly retainedLegacy: readonly ["cyan", "orange"];
                readonly neededCurrent: readonly ["purple", "rose"];
                readonly disclosure: "Legacy cyan/orange Loom variants remain in the catalog; current profile variants are added or selected without removing them";
            };
            readonly hoistDisposition: {
                readonly status: "hoisted";
                readonly preamble: "solar-tailwind-v4-preamble";
                readonly source: "Pinned Solar Sail application CSS";
                readonly layeredBody: "Solar :root/.dark rules plus the explicit application extension";
                readonly disclosure: "The pinned Solar Tailwind preamble is retained byte-for-byte before the neutral application layer; only its rule body and application extension are layered";
            };
        };
    }, {
        readonly id: "gamer";
        readonly label: "Gamer";
        readonly review: "Energetic geometry visual candidate; owner visual review pending";
        readonly sourceSha256: "f5880e7d49d6f8f3550c7ad2f338b0fc6036c7b70f053534da1947428cd4a303";
        readonly canonicalDigest: "2cf8ace76c49e717bc1e803e3553a7823127d015f1a90b582c34b5e53c96fbd0";
        readonly solarMapping: {
            readonly totalSemanticLeaves: 127;
            readonly consumed: 69;
            readonly normalized: 0;
            readonly overridden: 2;
            readonly targetSpecific: 4;
            readonly unsupported: 52;
            readonly generatedDefaultsCount: 0;
        };
        readonly loomMapping: {
            readonly totalSemanticLeaves: 127;
            readonly consumed: 61;
            readonly normalized: 11;
            readonly overridden: 0;
            readonly targetSpecific: 26;
            readonly unsupported: 29;
            readonly generatedDefaultsCount: 1;
        };
        readonly applicationExtension: {
            readonly schema: "theme-forge.application-appearance-extension.v1";
            readonly entries: readonly [{
                readonly sourcePath: "typography.ui.family";
                readonly target: "--tf-appearance-font-ui";
                readonly value: "monospace";
            }, {
                readonly sourcePath: "radius.surface";
                readonly target: "--tf-appearance-radius-surface";
                readonly value: "8px";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#d3e6fa";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#0b3b66";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly target: "--tf-appearance-selection";
                readonly value: "#1f4f6d";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly target: "--tf-appearance-selection-text";
                readonly value: "#e1f5ff";
            }];
            readonly scope: "Explicit application-only roles supplementary to the authentic Solar mapping; not claimed as Solar support";
        };
        readonly diagnostics: {
            readonly solar: readonly [];
            readonly loom: readonly [];
        };
        readonly targetDisposition: {
            readonly solar: readonly [{
                readonly sourcePath: "code.copy";
                readonly sourceValue: "standard";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.frame";
                readonly sourceValue: "terminal";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.attribute";
                readonly sourceValue: "#f4d17b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.comment";
                readonly sourceValue: "#aebbd0";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.constant";
                readonly sourceValue: "#cbb4ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.function";
                readonly sourceValue: "#80d2ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.keyword";
                readonly sourceValue: "#ff92c5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.number";
                readonly sourceValue: "#ffc769";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.punctuation";
                readonly sourceValue: "#b8c7d9";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.string";
                readonly sourceValue: "#7ce0dc";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.tag";
                readonly sourceValue: "#ff9b9b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.type";
                readonly sourceValue: "#8ce5ae";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.dark.variable";
                readonly sourceValue: "#f1f4f8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.attribute";
                readonly sourceValue: "#795813";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.comment";
                readonly sourceValue: "#5e6d80";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.constant";
                readonly sourceValue: "#6441a5";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.function";
                readonly sourceValue: "#155e96";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.keyword";
                readonly sourceValue: "#9c2f65";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.number";
                readonly sourceValue: "#915700";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.punctuation";
                readonly sourceValue: "#526176";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.string";
                readonly sourceValue: "#126a76";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.tag";
                readonly sourceValue: "#a33c3c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.type";
                readonly sourceValue: "#2f7658";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "code.syntax.light.variable";
                readonly sourceValue: "#131a24";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.active";
                readonly sourceValue: "#465a72";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.hover";
                readonly sourceValue: "#35445a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selection";
                readonly sourceValue: "#1f4f6d";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.selectionText";
                readonly sourceValue: "#e1f5ff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.active";
                readonly sourceValue: "#c3d5e6";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.hover";
                readonly sourceValue: "#d8e4f0";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selection";
                readonly sourceValue: "#d3e6fa";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.selectionText";
                readonly sourceValue: "#0b3b66";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.borderStyle";
                readonly sourceValue: "solid";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.emphasis";
                readonly sourceValue: "raised";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "focus.offset";
                readonly sourceValue: "3px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "focus.width";
                readonly sourceValue: "3px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.prominence";
                readonly sourceValue: "strong";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.overlay";
                readonly sourceValue: "12px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.surface";
                readonly sourceValue: "8px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "reading.measure";
                readonly sourceValue: "48rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "spacing.base";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "spacing.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.defaultAccent";
                readonly sourceValue: "orange";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.primaryFamily";
                readonly sourceValue: "orange";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.secondaryFamily";
                readonly sourceValue: "cyan";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.loom.tokenSetKey";
                readonly sourceValue: "forge-console";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.body.lineHeight";
                readonly sourceValue: 1.55;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.body.size";
                readonly sourceValue: "16px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.code.lineHeight";
                readonly sourceValue: 1.5;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.code.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.lineHeight";
                readonly sourceValue: 1.2;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.heading.size";
                readonly sourceValue: "1.5rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.family";
                readonly sourceValue: "monospace";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.lineHeight";
                readonly sourceValue: 1.35;
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "typography.ui.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }];
            readonly loom: readonly [{
                readonly sourcePath: "color.dark.active";
                readonly sourceValue: "#465a72";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.danger";
                readonly sourceValue: "#ff8a8a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.dangerText";
                readonly sourceValue: "#310b0b";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.elevatedSurfaceText";
                readonly sourceValue: "#f7fafc";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.fieldBorder";
                readonly sourceValue: "#62758c";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.highlightText";
                readonly sourceValue: "#271a05";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.hover";
                readonly sourceValue: "#35445a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryAction";
                readonly sourceValue: "#2a3546";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.secondaryActionText";
                readonly sourceValue: "#f1f4f8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.dark.surfaceText";
                readonly sourceValue: "#f1f4f8";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.active";
                readonly sourceValue: "#c3d5e6";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.danger";
                readonly sourceValue: "#b42318";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.dangerText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.elevatedSurfaceText";
                readonly sourceValue: "#131a24";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.fieldBorder";
                readonly sourceValue: "#7e91a7";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.highlightText";
                readonly sourceValue: "#ffffff";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.hover";
                readonly sourceValue: "#d8e4f0";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryAction";
                readonly sourceValue: "#e1eaf4";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.secondaryActionText";
                readonly sourceValue: "#1d2a3a";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "color.light.surfaceText";
                readonly sourceValue: "#131a24";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "elevation.emphasis";
                readonly sourceValue: "raised";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.density";
                readonly sourceValue: "comfortable";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "navigation.prominence";
                readonly sourceValue: "strong";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.control";
                readonly sourceValue: "4px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "radius.overlay";
                readonly sourceValue: "12px";
                readonly classification: "unsupported";
                readonly reason: "No native representation in this adapter";
            }, {
                readonly sourcePath: "reading.measure";
                readonly sourceValue: "48rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart1";
                readonly sourceValue: "#f05a9d";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart2";
                readonly sourceValue: "#ffb84a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart3";
                readonly sourceValue: "#8ce5ae";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart4";
                readonly sourceValue: "#aebbd0";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.chart5";
                readonly sourceValue: "#cbb4ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebar";
                readonly sourceValue: "#121722";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccent";
                readonly sourceValue: "#35445a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarAccentForeground";
                readonly sourceValue: "#e1f5ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarBorder";
                readonly sourceValue: "#455468";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarForeground";
                readonly sourceValue: "#f1f4f8";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimary";
                readonly sourceValue: "#f05a9d";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarPrimaryForeground";
                readonly sourceValue: "#260d1d";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.dark.sidebarRing";
                readonly sourceValue: "#68c7ff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart1";
                readonly sourceValue: "#c13d74";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart2";
                readonly sourceValue: "#a65f0e";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart3";
                readonly sourceValue: "#2f7658";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart4";
                readonly sourceValue: "#56657a";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.chart5";
                readonly sourceValue: "#6441a5";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebar";
                readonly sourceValue: "#e8eef5";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccent";
                readonly sourceValue: "#d8e4f0";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarAccentForeground";
                readonly sourceValue: "#0b3b66";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarBorder";
                readonly sourceValue: "#aebccb";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarForeground";
                readonly sourceValue: "#131a24";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimary";
                readonly sourceValue: "#c13d74";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarPrimaryForeground";
                readonly sourceValue: "#ffffff";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "targetOverrides.solarSail.palette.light.sidebarRing";
                readonly sourceValue: "#155e96";
                readonly classification: "target-specific";
                readonly reason: "Retained for another adapter";
            }, {
                readonly sourcePath: "typography.code.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "typography.heading.size";
                readonly sourceValue: "1.5rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }, {
                readonly sourcePath: "typography.ui.size";
                readonly sourceValue: "0.9rem";
                readonly classification: "unsupported";
                readonly reason: "Relative length retained; no assumed root conversion";
            }];
            readonly profileDerivedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "focus", "link"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-base", "body", "border", "card", "focus", "hairline", "link", "muted", "page", "raised", "selection-background", "selection-text"];
            }];
            readonly templateRetainedRoles: readonly [{
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "cyan";
                readonly sourceVariant: "cyan";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "body", "border", "card", "code", "hairline", "header", "inline-code", "inverted", "muted", "navigation", "page", "panel", "raised", "secondary", "selection-background", "selection-text", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "light";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }, {
                readonly variant: "orange";
                readonly sourceVariant: "orange";
                readonly mode: "dark";
                readonly roles: readonly ["accent-high", "accent-low", "code", "header", "inline-code", "inverted", "navigation", "panel", "secondary", "sidebar"];
            }];
            readonly roleComparison: {
                readonly method: "resolved-value-comparison-to-declared-template";
                readonly derivedMeaning: "Inferred profile-derived roles are resolved values differing from the admitted source variant; equal values are template-retained";
                readonly causalProvenance: false;
            };
            readonly loomNotApplied: readonly [{
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.copy";
                readonly sourceValue: "standard";
                readonly classification: "consumed";
                readonly reason: "Native code presentation";
                readonly targetPath: "copy";
                readonly targetValue: "standard";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.frame";
                readonly sourceValue: "terminal";
                readonly classification: "consumed";
                readonly reason: "Native code presentation";
                readonly targetPath: "frame";
                readonly targetValue: "terminal";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.attribute";
                readonly sourceValue: "#f4d17b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.attribute";
                readonly targetValue: "#f4d17b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.comment";
                readonly sourceValue: "#aebbd0";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.comment";
                readonly targetValue: "#aebbd0";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.constant";
                readonly sourceValue: "#cbb4ff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.constant";
                readonly targetValue: "#cbb4ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.function";
                readonly sourceValue: "#80d2ff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.function";
                readonly targetValue: "#80d2ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.keyword";
                readonly sourceValue: "#ff92c5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.keyword";
                readonly targetValue: "#ff92c5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.number";
                readonly sourceValue: "#ffc769";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.number";
                readonly targetValue: "#ffc769";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.punctuation";
                readonly sourceValue: "#b8c7d9";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.punctuation";
                readonly targetValue: "#b8c7d9";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.string";
                readonly sourceValue: "#7ce0dc";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.string";
                readonly targetValue: "#7ce0dc";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.tag";
                readonly sourceValue: "#ff9b9b";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.tag";
                readonly targetValue: "#ff9b9b";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.type";
                readonly sourceValue: "#8ce5ae";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.type";
                readonly targetValue: "#8ce5ae";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.dark.variable";
                readonly sourceValue: "#f1f4f8";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.dark.variable";
                readonly targetValue: "#f1f4f8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.attribute";
                readonly sourceValue: "#795813";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.attribute";
                readonly targetValue: "#795813";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.comment";
                readonly sourceValue: "#5e6d80";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.comment";
                readonly targetValue: "#5e6d80";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.constant";
                readonly sourceValue: "#6441a5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.constant";
                readonly targetValue: "#6441a5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.function";
                readonly sourceValue: "#155e96";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.function";
                readonly targetValue: "#155e96";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.keyword";
                readonly sourceValue: "#9c2f65";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.keyword";
                readonly targetValue: "#9c2f65";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.number";
                readonly sourceValue: "#915700";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.number";
                readonly targetValue: "#915700";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.punctuation";
                readonly sourceValue: "#526176";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.punctuation";
                readonly targetValue: "#526176";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.string";
                readonly sourceValue: "#126a76";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.string";
                readonly targetValue: "#126a76";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.tag";
                readonly sourceValue: "#a33c3c";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.tag";
                readonly targetValue: "#a33c3c";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.type";
                readonly sourceValue: "#2f7658";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.type";
                readonly targetValue: "#2f7658";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "code.syntax.light.variable";
                readonly sourceValue: "#131a24";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "syntax.light.variable";
                readonly targetValue: "#131a24";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.border";
                readonly sourceValue: "#455468";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.orange.dark.hairline;accentVariants.orange.dark.border;chrome.dark.border;chrome.dark.tabBarBorder;chrome.dark.activeTabBorder;chrome.dark.copyButtonBorder";
                readonly targetValue: "#455468";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvas";
                readonly sourceValue: "#0e1118";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.orange.dark.page;chrome.dark.background;chrome.dark.activeTabBackground";
                readonly targetValue: "#0e1118";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.canvasText";
                readonly sourceValue: "#f1f4f8";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.dark.body;syntax.dark.variable;chrome.dark.foreground;chrome.dark.activeTabForeground;chrome.dark.terminalTitlebarForeground";
                readonly targetValue: "#f1f4f8";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.focus";
                readonly sourceValue: "#68c7ff";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.dark.focus;chrome.dark.focus";
                readonly targetValue: "#68c7ff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.highlight";
                readonly sourceValue: "#ffb84a";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.dark.accent-base;accentVariants.cyan.dark.link;accentVariants.cyan.dark.focus;syntax.dark.number;syntax.dark.constant;syntax.dark.attribute";
                readonly targetValue: "#ffb84a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedSurface";
                readonly sourceValue: "#273243";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.terminalTitlebarBackground";
                readonly targetValue: "#273243";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.mutedText";
                readonly sourceValue: "#b7c3d4";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.dark.muted;syntax.dark.comment;syntax.dark.punctuation;chrome.dark.copyButtonForeground";
                readonly targetValue: "#b7c3d4";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryAction";
                readonly sourceValue: "#f05a9d";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.dark.accent-base;accentVariants.orange.dark.link;syntax.dark.string;syntax.dark.keyword;syntax.dark.function;syntax.dark.type;syntax.dark.tag;chrome.dark.tooltipSuccessBackground";
                readonly targetValue: "#f05a9d";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.primaryActionText";
                readonly sourceValue: "#260d1d";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.dark.tooltipSuccessForeground";
                readonly targetValue: "#260d1d";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.dark.surface";
                readonly sourceValue: "#171c26";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.orange.dark.card;chrome.dark.tabBarBackground";
                readonly targetValue: "#171c26";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.border";
                readonly sourceValue: "#aebccb";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.orange.light.hairline;accentVariants.orange.light.border;chrome.light.border;chrome.light.tabBarBorder;chrome.light.activeTabBorder;chrome.light.copyButtonBorder";
                readonly targetValue: "#aebccb";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvas";
                readonly sourceValue: "#f6f8fb";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.orange.light.page;chrome.light.background;chrome.light.activeTabBackground";
                readonly targetValue: "#f6f8fb";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.canvasText";
                readonly sourceValue: "#131a24";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.light.body;syntax.light.variable;chrome.light.foreground;chrome.light.activeTabForeground;chrome.light.terminalTitlebarForeground";
                readonly targetValue: "#131a24";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.focus";
                readonly sourceValue: "#155e96";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.light.focus;chrome.light.focus";
                readonly targetValue: "#155e96";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.highlight";
                readonly sourceValue: "#a65f0e";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.cyan.light.accent-base;accentVariants.cyan.light.link;accentVariants.cyan.light.focus;syntax.light.number;syntax.light.constant;syntax.light.attribute";
                readonly targetValue: "#a65f0e";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedSurface";
                readonly sourceValue: "#e8eef5";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.terminalTitlebarBackground";
                readonly targetValue: "#e8eef5";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.mutedText";
                readonly sourceValue: "#56657a";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.light.muted;syntax.light.comment;syntax.light.punctuation;chrome.light.copyButtonForeground";
                readonly targetValue: "#56657a";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryAction";
                readonly sourceValue: "#c13d74";
                readonly classification: "consumed";
                readonly reason: "At least one projection remains consumed; explicit refinement or override replaced another projection";
                readonly targetPath: "accentVariants.orange.light.accent-base;accentVariants.orange.light.link;syntax.light.string;syntax.light.keyword;syntax.light.function;syntax.light.type;syntax.light.tag;chrome.light.tooltipSuccessBackground";
                readonly targetValue: "#c13d74";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.primaryActionText";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "chrome.light.tooltipSuccessForeground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "mapping-entry";
                readonly sourcePath: "color.light.surface";
                readonly sourceValue: "#ffffff";
                readonly classification: "consumed";
                readonly reason: "Hex spelling projection";
                readonly targetPath: "accentVariants.orange.light.card;chrome.light.tabBarBackground";
                readonly targetValue: "#ffffff";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }, {
                readonly kind: "report-default";
                readonly sourcePath: null;
                readonly sourceValue: null;
                readonly classification: "adapter-default";
                readonly reason: "Adapter default";
                readonly targetPath: "tabs.activeIndicator";
                readonly targetValue: "accent";
                readonly consumerDelivery: "not-applied-to-retained-sttn-code-presentation";
            }];
            readonly codePresentation: "Existing STTN code presentation retained; the separately returned syntax model is not silently substituted";
            readonly authoredSyntax: {
                readonly status: "unsupported";
                readonly applied: false;
                readonly sourcePath: "code.syntax";
                readonly disclosure: "Authored syntax palette is retained as a candidate but is not applied to the retained STTN code presentation";
            };
            readonly loomVariants: {
                readonly retainedLegacy: readonly ["cyan", "orange"];
                readonly neededCurrent: readonly ["orange", "cyan"];
                readonly disclosure: "Legacy cyan/orange Loom variants remain in the catalog; current profile variants are added or selected without removing them";
            };
            readonly hoistDisposition: {
                readonly status: "hoisted";
                readonly preamble: "solar-tailwind-v4-preamble";
                readonly source: "Pinned Solar Sail application CSS";
                readonly layeredBody: "Solar :root/.dark rules plus the explicit application extension";
                readonly disclosure: "The pinned Solar Tailwind preamble is retained byte-for-byte before the neutral application layer; only its rule body and application extension are layered";
            };
        };
    }];
}>;
export default appearanceCatalog;
