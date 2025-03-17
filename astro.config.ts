import { defineConfig } from "astro/config";

import tailwind from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
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
      },
    }),
    mdx(),
    sitemap(),
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
