import { type ImageFunction, reference } from "astro:content";
import { z } from "astro:schema";
import { TZDate } from "@date-fns/tz";

export type Article = z.infer<ReturnType<typeof CreateArticleSchema>>;
export type Member = z.infer<ReturnType<typeof CreateMemberSchema>>;
export type Project = z.infer<ReturnType<typeof CreateProjectSchema>>;

export const CreateArticleSchema = ({ image }: { image: ImageFunction }) =>
  z
    .object({
      // base
      title: z.string(),
      date: z
        .date()
        .transform((date) => new TZDate(date).withTimeZone("Asia/Tokyo")),
      author: reference("members").optional(),
      categories: z.array(z.string()).optional(),
      // 画像系
      image: image(),
      fit: z.enum(["cover", "contain", "fill", "none"]).optional(),
      position: z.enum(["center", "top", "bottom", "left", "right"]).optional(),
      bg_color: z.string().optional(),
    })
    .refine(
      (self) => {
        const bad = self.fit === "contain" && self.bg_color === undefined;
        return !bad;
      },
      {
        message: "fit: contain の場合、 bg_color を指定する必要があります",
        path: ["bg_color"],
      },
    );

export const CreateProjectSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
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
    joinYear: z.number(),
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
