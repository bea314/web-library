export type EntryCategory =
  | "hero"
  | "layout"
  | "pricing"
  | "navigation"
  | "forms"
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
  category: EntryCategory;
  tags: string[];
  /** Live preview component path key — maps to src/components/previews/* */
  preview: "aurora-hero" | "feature-bento" | "pricing-card";
  code: EntryCode;
  /** AI prompt to recreate/replicate from image or video */
  prompt: string;
}

export const CATEGORY_LABELS: Record<EntryCategory, string> = {
  hero: "Hero",
  layout: "Layout",
  pricing: "Pricing",
  navigation: "Navegación",
  forms: "Formularios",
  other: "Otros",
};
