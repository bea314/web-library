# web-library

Living web-learning library for **WEB ANALIZER**.

Show a webpage (image or video) → describe it → implement the learning here → compare to the source → accumulate categorized references → refine prompts over time so future recreations from a web image/video are more useful.

## Architecture

| Layer | Stack |
| --- | --- |
| **Catalog UI (this app)** | **Astro** + TypeScript + Tailwind — clean static site |
| **Stored learning code** | Dual targets: **`code.astro`** (Astro snippet/island) + **`code.next`** (Next.js App Router / React TSX) |
| **Also stored** | Live **preview**, AI **prompt**, category + tags |

The shell stays Astro on purpose (lightweight, static-friendly). Each entry’s Next.js snippet is a **reference** for reuse elsewhere (e.g. SYVEX landing), not the app runtime.

UX inspiration: 21st.dev (preview + copy). Samples here are original — do not copy proprietary third-party code.

## WEB ANALIZER loop

1. Bea shows a webpage (image or video)
2. Agent describes it
3. A Cursor cloud agent implements the learning **in this repo**
4. Results are visualized here and compared to the source
5. Categorized examples accumulate as references
6. Prompts get refined so future prompts from a web image/video are more useful

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

- `/` — categorized grid of learnings
- `/entries/[id]` — large **Vista previa** + tabs **Código Astro** | **Código Next.js** | **Prompt**, each with **Copiar** (toast on copy)

## Add a learning

See **[docs/ADDING-ENTRIES.md](docs/ADDING-ENTRIES.md)** for the full guide (data model, preview component, dual code, prompt).

Short path:

1. Add a preview component under `src/components/previews/`
2. Append an entry in `src/lib/entries.ts` with `code.astro`, `code.next`, and `prompt`
3. Register the preview key in `src/lib/types.ts` if needed
4. `npm run build` to verify

## Stack notes

- Astro App Router-style file pages under `src/pages/`
- Tailwind v4 via `@tailwindcss/vite`
- Client JS only for tab switching + clipboard (no React island required for the shell)
