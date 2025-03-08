// Content Collections
// https://docs.astro.build/en/guides/content-collections/
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { ArticleSchema, MemberSchema } from "./schema.ts";

const articles = defineCollection({
  loader: glob({ base: "./contents/articles", pattern: "*/index.mdx" }),
  schema: ArticleSchema,
});

const members = defineCollection({
  loader: glob({ base: "./contents/members", pattern: "*/index.{md,mdx}" }),
  schema: MemberSchema,
});

export const collections = { articles, members };
