import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://songhaepark.com',
  output: 'static',
  // Force trailing-slash URLs everywhere so canonical/hreflang/internal links
  // stay consistent and Google does not index /ko and /ko/ as two pages.
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ko',
    locales: ['zh', 'en', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
