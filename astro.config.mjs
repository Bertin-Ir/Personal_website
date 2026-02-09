// Astro static export: React islands for interactive demos, Tailwind for styles.
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// For GitHub Pages project site (e.g. username.github.io/Personal_website/), set BASE_PATH in the deploy workflow.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  integrations: [react(), tailwind()],
  output: 'static',
  vite: {
    build: {
      target: 'esnext',
    },
  },
});
