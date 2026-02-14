import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anupam0401.github.io',
  base: '/Dhanrakshak-web/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
