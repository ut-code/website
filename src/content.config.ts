// Content Collections
// https://docs.astro.build/en/guides/content-collections/
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const articles = defineCollection({
  loader: glob({ base: "./contents/articles", pattern: "*/index.mdx" }),
  /* ... */
});

const members = defineCollection({
  loader: glob({ base: "./contents/members", pattern: "*/index.{md,mdx}" }),
  schema: z.object({
    nameJa: z.string(),
    nameEn: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    github: z.string().optional(),
  }),
});

export const collections = { articles, members };
