# Adding learning entries

Guide for adding a WEB ANALIZER learning to **web-library**.

## Galleries

Every entry belongs to one gallery via `kind`:

| `kind` | Gallery route | Use for |
| --- | --- | --- |
| `feature` | `/features` | Components / blocks (hero, nav, pricing card, bento…) |
| `template` | `/templates` | Fuller pages / compositions (landing, waitlist…) |

Home (`/`) surfaces a few of each; the galleries list everything.

## What every entry needs

| Field | Purpose |
| --- | --- |
| `id` | URL-safe slug → `/entries/<id>` |
| `title` | Display name on cards and detail |
| `description` | One or two sentences |
| `kind` | `feature` \| `template` |
| `category` | `hero` \| `layout` \| `pricing` \| `navigation` \| `forms` \| `page` \| `other` |
| `tags` | Browsing hints |
| `preview` | Key for the live preview component |
| `code.astro` | Snippet for **Astro** |
| `code.next` | Same pattern for **Next.js** (App Router / React TSX) |
| `prompt` | AI prompt to recreate from image/video |

The catalog UI is Astro. Stored `code.next` is a **reference target** (e.g. SYVEX) — not executed by this site.

## Steps

### 1. Create a live preview

Add `src/components/previews/MyPatternPreview.astro` (self-contained Tailwind). Original patterns only — do not paste proprietary UI from 21st.dev.

### 2. Register the preview key

In `src/lib/types.ts`, extend the `preview` union. Wire it in `src/components/EntryPreview.astro`.

### 3. Append the entry

In `src/lib/entries.ts`:

```ts
{
  id: "my-pattern",
  title: "My Pattern",
  description: "What this learning teaches at a glance.",
  kind: "feature", // or "template"
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
  return <section className="...">...</section>;
}
`,
  },
  prompt: `Describe the visual pattern so an agent can recreate it
from a screenshot or video...`,
}
```

### 4. Dual-target tips

- **`code.astro`**: Astro frontmatter, `class`, islands only if needed.
- **`code.next`**: React component, `className`, App Router–friendly.
- Keep visual parity with the live preview.

### 5. Prompt quality

Include stack, brand/copy, layout rules, palette, and explicit “do not” list. Refine when the implementation drifts from the source image/video.

### 6. Verify

```bash
npm run build
npm run preview
```

Check Home, `/features` or `/templates`, and `/entries/<id>` — tabs + Copiar for Astro, Next.js, and Prompt.

## Shell UX notes

- Light theme is default; dark mode toggles via the header (persisted).
- Do not treat the site as a dark-only docs catalog — galleries should feel browsable like a component marketplace.
