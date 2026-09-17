# Adding learning entries

This guide explains how to add a new WEB ANALIZER learning to **web-library**.

## What every entry needs

| Field | Purpose |
| --- | --- |
| `id` | URL-safe slug (`aurora-hero`) → `/entries/aurora-hero` |
| `title` | Short display name |
| `description` | One or two sentences for the grid card |
| `category` | `hero` \| `layout` \| `pricing` \| `navigation` \| `forms` \| `other` |
| `tags` | String array for browsing (`["hero", "cta"]`) |
| `preview` | Key mapping to a live preview component |
| `code.astro` | Snippet / island to reuse in **Astro** |
| `code.next` | Same pattern for **Next.js** (App Router / React TSX) |
| `prompt` | AI prompt to recreate from image/video |

The catalog UI is Astro. Stored `code.next` is a **reference target** for projects like SYVEX — not executed by this site.

## Steps

### 1. Create a live preview

Add an Astro component under `src/components/previews/`, e.g. `MyPatternPreview.astro`.

Keep it self-contained (Tailwind classes inline). Prefer original patterns — do not paste proprietary UI from 21st.dev or similar.

### 2. Extend the preview key (if new)

In `src/lib/types.ts`, add the key to the `preview` union on `LearningEntry`:

```ts
preview: "aurora-hero" | "feature-bento" | "pricing-card" | "my-pattern";
```

Wire it in:

- `src/components/EntryCard.astro`
- `src/pages/entries/[id].astro`

### 3. Append the entry

In `src/lib/entries.ts`:

```ts
{
  id: "my-pattern",
  title: "My Pattern",
  description: "What this learning teaches at a glance.",
  category: "layout",
  tags: ["grid", "editorial"],
  preview: "my-pattern",
  code: {
    astro: `---
// MyPattern.astro
---
<section class="...">...</section>
`,
    next: `export function MyPattern() {
  return (
    <section className="...">...</section>
  );
}
`,
  },
  prompt: `Describe the visual pattern so an agent can recreate it
from a screenshot or video. Include stack, layout rules,
palette, and what to avoid.`,
}
```

### 4. Dual-target tips

- **`code.astro`**: use Astro frontmatter (`---`), HTML attrs (`class`), and optional islands only if interaction is required.
- **`code.next`**: React function component, `className`, App Router–friendly (no Pages Router APIs). Suitable to paste into a Next.js repo like SYVEX.
- Keep visual parity between both snippets and the live preview so comparison in the WEB ANALIZER loop stays honest.

### 5. Prompt quality

A useful prompt usually includes:

- Stack (Astro **or** Next.js + Tailwind)
- Brand / headline / CTA copy
- Layout constraints (full-bleed, no floating badges, one job per section)
- Palette and typography cues
- Explicit “do not” list (cards in hero, purple glow defaults, etc.)

Refine prompts when the implementation drifts from the source image/video — that refinement is part of the library’s job.

### 6. Verify

```bash
npm run build
npm run preview
```

Open `/` and `/entries/<id>`, switch tabs, and confirm **Copiar** works for Astro code, Next.js code, and prompt.

## Categories

Labels (Spanish UI) live in `CATEGORY_LABELS` inside `src/lib/types.ts`. Add a category there if you introduce a new one.
