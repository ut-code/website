// Content Collections
// https://docs.astro.build/en/guides/content-collections/
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import {
  CreateArticleSchema,
  CreateMemberSchema,
  CreateProjectSchema,
} from "./schema.ts";

const articles = defineCollection({
  loader: glob({ base: "./contents/articles", pattern: "**/index.{md,mdx}" }),
  schema: CreateArticleSchema,
});

const members = defineCollection({
  loader: glob({ base: "./contents/members", pattern: "**/index.{md,mdx}" }),
  schema: CreateMemberSchema,
});
const projects = defineCollection({
  loader: glob({ base: "./contents/projects", pattern: "**/*.{md,mdx}" }),
  schema: CreateProjectSchema,
});

export const collections = {
  articles,
  members,
  projects,
};
