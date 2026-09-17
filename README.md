# web-library

Living web-learning library for **WEB ANALIZER** — a **21st.dev-like** gallery experience (preview + copy), built as a clean **Astro** site.

Show a webpage (image or video) → describe it → implement the learning here → compare to the source → accumulate Features & Templates → refine prompts over time.

## Product UX

| Area | What you get |
| --- | --- |
| **Home** | Landing with hero, nav, and shortcuts into galleries |
| **Features** | Components / blocks gallery |
| **Templates** | Fuller page compositions gallery |
| **Entry detail** | Live **Vista previa** + **Código Astro** · **Código Next.js** · **Prompt** (each with Copiar) |

Light theme by default; use the header toggle for dark mode (preference saved in `localStorage`).

## Architecture

| Layer | Stack |
| --- | --- |
| **Catalog UI (this app)** | **Astro** + TypeScript + Tailwind — static-friendly |
| **Stored learning code** | Dual targets: **`code.astro`** + **`code.next`** (Next.js App Router / React TSX) |
| **Also stored** | Live preview, AI prompt, `kind` (`feature` \| `template`), category + tags |

The shell stays Astro on purpose. Each entry’s Next.js snippet is a **reference** for reuse elsewhere (e.g. SYVEX landing), not the app runtime.

UX inspiration: 21st.dev (galleries + preview + copy). Samples here are original — do not copy proprietary third-party code.

## WEB ANALIZER loop

1. Bea shows a webpage (image or video)
2. Agent describes it
3. A Cursor cloud agent implements the learning **in this repo**
4. Results are visualized here and compared to the source
5. Features & Templates accumulate as references
6. Prompts get refined so future recreations from a web image/video are more useful

## Run locally

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

```bash
npm run build    # static output → dist/
npm run preview  # preview the production build
```

## Browse

- `/` — landing + teaser grids
- `/features` — dense Features gallery (3-col preview cards)
- `/templates` — dense Templates gallery
- Click a card → **detail modal** (blurred backdrop, preview, Copy Astro / Next.js / Prompt)
- `/entries/[id]` — deep link opens the same modal chrome over the gallery

## Add a learning

See **[docs/ADDING-ENTRIES.md](docs/ADDING-ENTRIES.md)**.

Short path:

1. Add a preview under `src/components/previews/`
2. Append an entry in `src/lib/entries.ts` with `kind`, `code.astro`, `code.next`, and `prompt`
3. Register the preview key in `src/lib/types.ts` + `EntryPreview.astro`
4. `npm run build` to verify
