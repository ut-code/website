import { reference, type ImageFunction } from "astro:content";
import { z } from "astro:schema";

export type Article = z.infer<ReturnType<typeof CreateArticleSchema>>;
export type Member = z.infer<ReturnType<typeof CreateMemberSchema>>;
export type Project = z.infer<ReturnType<typeof CreateProjectSchema>>;

export const CreateArticleSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    // excerpt: z.string().nullable(),
    // longExcerpt: z.string().nullable(),
    date: z.date(),
    slug: z.string().nullable(),
    title: z.string().nullable(),
    image: image(),
    categories: z.array(z.string()).optional(),
    author: reference("members"),
  });

export const CreateProjectSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number().optional(),
    date: z.date(),
    image: image(),
    description: z.string(),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    youtube: z.string().url().optional(),
    website: z.string().url().optional(),
  });

export const CreateMemberSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    nameJa: z.string(),
    nameEn: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    website: z.string().url().optional(),
    "theme-light": z.string().optional(),
    faceImage: image(),
    upperBodyImage: image(),
  });

// ヘッダーのスタイリングに使われています
export enum Focus {
  none = 0,
  projects = 1,
  articles = 2,
  members = 3,
  join = 4,
  contact = 5,
}
