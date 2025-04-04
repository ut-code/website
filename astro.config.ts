import { defineConfig } from "astro/config";

import tailwind from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
// import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  site: "https://utcode.net",
  vite: {
    plugins: [
      tailwind(),
      // visualizer({ emitFile: true, filename: "stats.html" }),
    ],
  },

  integrations: [
    icon({
      include: {
        feather: ["*"],
        flowbite: ["*"],
      },
    }),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "ja",
        locales: {
          ja: "ja-JP",
        },
      },
    }),
    svelte(),
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  image: {
    // experimentalLayout: "responsive",
  },
  experimental: {
    clientPrerender: true,
    // responsiveImages: true,
    contentIntellisense: true,
  },
});
