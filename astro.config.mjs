// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://makusu-dev.github.io',
  base: '/maxime-jeannin',
  integrations: [preact()]
});