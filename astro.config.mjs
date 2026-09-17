// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Static-friendly catalog for WEB ANALIZER learnings.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
