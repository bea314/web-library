import type { LearningEntry } from "./types";

export const entries: LearningEntry[] = [
  {
    id: "aurora-hero",
    title: "Aurora Hero",
    description:
      "Hero de pantalla completa con atmósfera en capas, marca tipográfica fuerte y CTAs mínimos.",
    category: "hero",
    tags: ["hero", "gradiente", "tipografía", "cta"],
    preview: "aurora-hero",
    code: {
      astro: `---
// AuroraHero.astro — drop into any Astro page/layout
---

<section class="relative min-h-[70vh] overflow-hidden bg-[#0b1220] text-white">
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0"
    style="background: radial-gradient(ellipse 80% 60% at 20% 20%, rgba(56,189,248,0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 15%, rgba(251,146,60,0.28), transparent 50%), radial-gradient(ellipse 60% 40% at 60% 90%, rgba(52,211,153,0.2), transparent 45%);"
  ></div>
  <div class="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-end gap-4 px-6 pb-16 pt-24">
    <p class="text-sm tracking-[0.2em] text-sky-300/90 uppercase">Norte Studio</p>
    <h1 class="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
      Diseño que respira con la luz del día
    </h1>
    <p class="max-w-md text-base leading-relaxed text-slate-300">
      Un hero de pantalla completa con atmósfera en capas y tipografía expresiva
      — sin tarjetas ni overlays flotantes.
    </p>
    <div class="flex flex-wrap gap-3 pt-2">
      <a class="rounded-md bg-sky-400 px-4 py-2 text-sm font-medium text-slate-950" href="#">
        Ver proyectos
      </a>
      <a class="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium" href="#">
        Contacto
      </a>
    </div>
  </div>
</section>
`,
      next: `export function AuroraHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[#0b1220] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(56,189,248,0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 15%, rgba(251,146,60,0.28), transparent 50%), radial-gradient(ellipse 60% 40% at 60% 90%, rgba(52,211,153,0.2), transparent 45%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-end gap-4 px-6 pb-16 pt-24">
        <p className="text-sm tracking-[0.2em] text-sky-300/90 uppercase">
          Norte Studio
        </p>
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Diseño que respira con la luz del día
        </h1>
        <p className="max-w-md text-base leading-relaxed text-slate-300">
          Un hero de pantalla completa con atmósfera en capas y tipografía
          expresiva — sin tarjetas ni overlays flotantes.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a className="rounded-md bg-sky-400 px-4 py-2 text-sm font-medium text-slate-950">
            Ver proyectos
          </a>
          <a className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
`,
    },
    prompt: `Crea un hero de landing (React/Next.js App Router TSX o Astro + Tailwind).

Marca: "Norte Studio" como señal tipográfica principal (no solo nav).
Headline: "Diseño que respira con la luz del día".
Una frase de apoyo corta. Dos CTAs: primario cielo y secundario outline.

Visual: fondo oscuro (#0b1220) a pantalla completa (o min-h 70vh) con tres radial-gradients sutiles (sky, naranja, emerald) como atmósfera. Sin cards, sin badges flotantes, sin stats. Tipografía display expresiva. Composición de un solo bloque en el primer viewport.
`,
  },
  {
    id: "feature-bento",
    title: "Feature Bento",
    description:
      "Mosaico de capacidades con una historia clara: celda grande + acentos de tono.",
    category: "layout",
    tags: ["bento", "features", "grid", "layout"],
    preview: "feature-bento",
    code: {
      astro: `---
const items = [
  {
    title: "Señal clara",
    body: "Una columna ancha para la idea principal del producto.",
    span: "sm:col-span-2 sm:row-span-2",
    tone: "bg-[#12261f] text-[#d8f3e4]",
  },
  {
    title: "Ritmo",
    body: "Bloques cortos que marcan contraste.",
    span: "",
    tone: "bg-[#1a2332] text-[#c5d4e8]",
  },
  {
    title: "Detalle",
    body: "Un acento tipográfico y color local.",
    span: "",
    tone: "bg-[#2a2118] text-[#f3e6d4]",
  },
  {
    title: "Flujo",
    body: "El bento guía la mirada sin cards con sombra.",
    span: "sm:col-span-2",
    tone: "bg-[#1e1a28] text-[#e4dcef]",
  },
];
---

<section class="bg-[#0e1218] px-6 py-16 text-white">
  <div class="mx-auto max-w-5xl">
    <p class="text-xs tracking-[0.18em] text-emerald-400/90 uppercase">Capacidades</p>
    <h2 class="mt-2 text-3xl font-semibold">Un mosaico con una sola historia</h2>
    <div class="mt-8 grid auto-rows-[minmax(120px,auto)] grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <article class={\`flex flex-col justify-between rounded-lg p-5 \${item.tone} \${item.span}\`}>
          <h3 class="text-lg font-semibold">{item.title}</h3>
          <p class="mt-3 text-sm leading-relaxed opacity-85">{item.body}</p>
        </article>
      ))}
    </div>
  </div>
</section>
`,
      next: `const items = [
  {
    title: "Señal clara",
    body: "Una columna ancha para la idea principal del producto.",
    span: "sm:col-span-2 sm:row-span-2",
    tone: "bg-[#12261f] text-[#d8f3e4]",
  },
  {
    title: "Ritmo",
    body: "Bloques cortos que marcan contraste.",
    span: "",
    tone: "bg-[#1a2332] text-[#c5d4e8]",
  },
  {
    title: "Detalle",
    body: "Un acento tipográfico y color local.",
    span: "",
    tone: "bg-[#2a2118] text-[#f3e6d4]",
  },
  {
    title: "Flujo",
    body: "El bento guía la mirada sin cards con sombra.",
    span: "sm:col-span-2",
    tone: "bg-[#1e1a28] text-[#e4dcef]",
  },
];

export function FeatureBento() {
  return (
    <section className="bg-[#0e1218] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.18em] text-emerald-400/90 uppercase">
          Capacidades
        </p>
        <h2 className="mt-2 text-3xl font-semibold">
          Un mosaico con una sola historia
        </h2>
        <div className="mt-8 grid auto-rows-[minmax(120px,auto)] grid-cols-1 gap-3 sm:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className={\`flex flex-col justify-between rounded-lg p-5 \${item.tone} \${item.span}\`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-85">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
    },
    prompt: `Crea una sección "feature bento" en Astro o Next.js (App Router) + Tailwind.

Una sola historia: título "Un mosaico con una sola historia" y eyebrow "Capacidades".
Grid 3 columnas en desktop: una celda grande (2x2) + dos celdas medianas + una ancha inferior.
Cada celda con tono de color distinto (verde bosque, azul noche, marrón cálido, púrpura suave) — NO sombras multi-capa ni pills.
Fondo #0e1218. Textos cortos. Sin iconos emoji. El bento debe leerse como un mosaico, no como un dashboard de cards genéricas.
`,
  },
  {
    id: "pricing-card",
    title: "Pricing Card",
    description:
      "Tarjeta de precio única sobre fondo en degradé suave — interacción clara, tipografía editorial.",
    category: "pricing",
    tags: ["pricing", "card", "cta", "editorial"],
    preview: "pricing-card",
    code: {
      astro: `---
const bullets = ["Hasta 50 entradas", "Export de prompts", "Vista previa en vivo"];
---

<section
  class="flex min-h-[420px] items-center justify-center bg-[linear-gradient(160deg,#f7f3ec_0%,#e8efe9_55%,#d9e4f0_100%)] px-6 py-16"
>
  <div class="w-full max-w-sm border border-[#1c2a24]/20 bg-[#fcfaf6]/90 p-6 shadow-[0_20px_50px_-28px_rgba(28,42,36,0.45)] backdrop-blur-sm">
    <p class="text-xs tracking-[0.2em] text-[#3d6b55] uppercase">Plan Estudio</p>
    <div class="mt-3 flex items-baseline gap-1">
      <span class="text-4xl font-semibold text-[#1c2a24]">€29</span>
      <span class="text-sm text-[#1c2a24]/70">/ mes</span>
    </div>
    <p class="mt-3 text-sm leading-relaxed text-[#1c2a24]/80">
      Para equipos pequeños que publican learnings semanales y necesitan
      referencia visual rápida.
    </p>
    <ul class="mt-5 space-y-2 text-sm text-[#1c2a24]">
      {bullets.map((line) => (
        <li class="flex gap-2">
          <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3d6b55]"></span>
          {line}
        </li>
      ))}
    </ul>
    <a
      href="#"
      class="mt-6 block w-full bg-[#1c2a24] px-4 py-2.5 text-center text-sm font-medium text-[#f7f3ec]"
    >
      Empezar
    </a>
  </div>
</section>
`,
      next: `export function PricingCard() {
  const bullets = [
    "Hasta 50 entradas",
    "Export de prompts",
    "Vista previa en vivo",
  ];

  return (
    <section className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(160deg,#f7f3ec_0%,#e8efe9_55%,#d9e4f0_100%)] px-6 py-16">
      <div className="w-full max-w-sm border border-[#1c2a24]/20 bg-[#fcfaf6]/90 p-6 shadow-[0_20px_50px_-28px_rgba(28,42,36,0.45)] backdrop-blur-sm">
        <p className="text-xs tracking-[0.2em] text-[#3d6b55] uppercase">
          Plan Estudio
        </p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-semibold text-[#1c2a24]">€29</span>
          <span className="text-sm text-[#1c2a24]/70">/ mes</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#1c2a24]/80">
          Para equipos pequeños que publican learnings semanales y necesitan
          referencia visual rápida.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-[#1c2a24]">
          {bullets.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3d6b55]" />
              {line}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-6 w-full bg-[#1c2a24] px-4 py-2.5 text-sm font-medium text-[#f7f3ec]"
        >
          Empezar
        </button>
      </div>
    </section>
  );
}
`,
    },
    prompt: `Crea una tarjeta de pricing única en Astro o Next.js (App Router) + Tailwind.

Plan: "Plan Estudio", precio €29 / mes, tres bullets, CTA "Empezar".
Fondo de sección: degradé suave crema → verde pálido → azul pálido (no flat white).
La card es el contenedor de interacción (borde sutil, sin radius exagerado, sin glow).
Paleta bosque oscuro (#1c2a24) + acento #3d6b55. Tipografía editorial, tracking en el eyebrow.
Una sola card centrada — no grid de tres planes.
`,
  },
];

export function getEntry(id: string): LearningEntry | undefined {
  return entries.find((entry) => entry.id === id);
}

export function getEntriesByCategory(): Map<string, LearningEntry[]> {
  const map = new Map<string, LearningEntry[]>();
  for (const entry of entries) {
    const list = map.get(entry.category) ?? [];
    list.push(entry);
    map.set(entry.category, list);
  }
  return map;
}
