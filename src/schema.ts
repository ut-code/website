import { type ImageFunction, reference } from "astro:content";
import { z } from "astro:schema";
import { kinds } from "+contents/project-kinds";
import { TZDate } from "@date-fns/tz";

export type Article = z.infer<ReturnType<typeof CreateArticleSchema>>;
export type Member = z.infer<ReturnType<typeof CreateMemberSchema>>;
export type Project = z.infer<ReturnType<typeof CreateProjectSchema>>;

const Position = z.enum(["center", "top", "bottom", "left", "right"]);
const Fit = z.enum(["cover", "contain", "fill", "none"]);
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
      fit: Fit.optional(),
      position: Position.default("center"),
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

export type Kind = (typeof kinds)[number]["frontmatter"];
export const CreateProjectSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
    kind: z.enum(kinds.map((kind) => kind.frontmatter) as [Kind, ...Kind[]]),
    status: z.enum([
      "plan",
      "under-development",
      "released",
      "stable",
      "finished",
      "dead",
    ]),
    order: z.number().optional(),
    date: z.date(),
    image: z.object({
      src: image(),
      position: Position.default("center"),
      fit: Fit.default("cover"),
      bg: z.string().optional().default("whitesmoke"),
    }),
    description: z.string(),
    tags: z.array(z.string()).optional().default([]),
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
  about = 1,
  projects = 2,
  articles = 3,
  members = 4,
  join = 5,
}
