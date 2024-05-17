import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  adapter: netlify(),
  integrations: [tailwind()]
});