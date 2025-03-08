import { z } from "astro:schema";

export type Article = z.infer<typeof ArticleSchema>;
export type Member = z.infer<typeof MemberSchema>;

export const ArticleSchema = z.object({
  // excerpt: z.string().nullable(),
  // longExcerpt: z.string().nullable(),
  date: z.date().nullable(),
  slug: z.string().nullable(),
  title: z.string().nullable(),
  image: z.string().optional(),
});

export const MemberSchema = z.object({
  nameJa: z.string(),
  nameEn: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  github: z.string().optional(),
});
