import { defineConfig } from 'astro/config';

// Set SITE_URL and BASE_PATH when publishing under a different domain or folder.
export default defineConfig({
  site: process.env.SITE_URL || 'https://k129453497-byte.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
