import type { Plugin } from "vite";

export interface BundledNotice {
  file: string;
  text: string;
}

export interface BundledPackageRecord {
  name: string;
  version: string;
  license: string;
  modules: string[];
  notices: BundledNotice[];
}

export interface BundledExplicitInput {
  kind: string;
  identifier: string;
  name: string;
  version: string;
  license: string;
  notices: BundledNotice[];
}

export interface BundledSourceAdaptation {
  name: string;
  revision: string;
  license: string;
  components: string[];
}

export interface BundledNoticeModel {
  schema: string;
  observedVirtualModules: string[];
  bundledModules: BundledPackageRecord[];
  explicitInputs: BundledExplicitInput[];
  sourceAdaptations: BundledSourceAdaptation[];
}

export interface BundledNoticeOptions {
  siteRoot?: string;
  evidenceRoot?: string;
  includeGeneratedRuntime?: boolean;
  includeViteRuntime?: boolean;
  includeRolldownRuntime?: boolean;
}

export const portableEvidenceRoot: string;

export function collectBundledNoticeModel(
  moduleIds: Iterable<string>,
  options?: BundledNoticeOptions,
): BundledNoticeModel;

export function renderBundledNotices(model: BundledNoticeModel): string;

export function serializeBundledModules(model: BundledNoticeModel): string;

export function bundledNoticesPlugin(options?: BundledNoticeOptions): Plugin;
