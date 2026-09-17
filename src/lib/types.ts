export type EntryKind = "feature" | "template";

export type EntryCategory =
  | "hero"
  | "layout"
  | "pricing"
  | "navigation"
  | "forms"
  | "page"
  | "other";

/** Dual-target reference snippets stored with each learning. */
export interface EntryCode {
  /** Astro component / island snippet for this catalog or other Astro apps */
  astro: string;
  /** Next.js App Router (React/TSX) variant — e.g. for SYVEX landing */
  next: string;
}

export interface LearningEntry {
  /** URL-safe unique id, e.g. "aurora-hero" */
  id: string;
  title: string;
  description: string;
  /** Gallery bucket: Features (blocks) vs Templates (fuller pages) */
  kind: EntryKind;
  category: EntryCategory;
  tags: string[];
  /** Live preview component key — maps to src/components/previews/* */
  preview:
    | "aurora-hero"
    | "feature-bento"
    | "pricing-card"
    | "soft-navbar"
    | "studio-landing"
    | "waitlist-page";
  code: EntryCode;
  /** AI prompt to recreate/replicate from image or video */
  prompt: string;
}

export const KIND_LABELS: Record<EntryKind, string> = {
  feature: "Feature",
  template: "Template",
};

export const CATEGORY_LABELS: Record<EntryCategory, string> = {
  hero: "Hero",
  layout: "Layout",
  pricing: "Pricing",
  navigation: "Navegación",
  forms: "Formularios",
  page: "Página",
  other: "Otros",
};
