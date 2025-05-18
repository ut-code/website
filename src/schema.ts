import { type ImageFunction, reference } from "astro:content";
import { z } from "astro:schema";
import { kinds } from "+contents/project-kinds";
import { TZDate } from "@date-fns/tz";

export type Article = z.infer<ReturnType<typeof CreateArticleSchema>>;
export type Member = z.infer<ReturnType<typeof CreateMemberSchema>>;
export type Project = z.infer<ReturnType<typeof CreateProjectSchema>>;

const Thumbnail = ({ image }: { image: ImageFunction }) =>
  z.object({
    src: image(),
    position: Position.default("center"),
    fit: Fit.default("cover"),
    bg: z.string().optional(),
  });

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
      thumbnail: Thumbnail({ image }),
    })
    .refine(
      (self) => {
        const bad =
          self.thumbnail.fit === "contain" && self.thumbnail.bg === undefined;
        return !bad;
      },
      {
        message: "fit: contain の場合、 bg_color を指定する必要があります",
        path: ["thumbnail", "bg"],
      },
    );

export type Kind = (typeof kinds)[number]["frontmatter"];
export const CreateProjectSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    app: z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().url(),
      // 各プロパティは必要に応じて追加
      platform: z.enum(["web", "mobile", "desktop", "cli"]),
      domain: z.enum(["app", "game", "tool", "site", "lib"]),
    }),
    kind: z.enum(kinds.map((kind) => kind.frontmatter) as [Kind, ...Kind[]]),
    status: z.enum([
      "plan", // プラン段階
      "under-development", // 開発中 (未リリース)
      "released", // リリース済み
      "stable", // アクティブな開発は停止
      "finished", // 開発停止、動いてはいる
      "dead", // 開発停止、もう動かない
    ]),
    order: z.number().optional(),
    date: z.date(),
    thumbnail: Thumbnail({ image }),
    tags: z.array(z.string()).optional().default([]),
    social: z
      .object({
        github: z.string().url().optional(),
        youtube: z.string().url().optional(),
        website: z.string().url().optional(),
        twitter: z.string().url().optional(),
      })
      .optional(),
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

export type Banner = {
  shown: boolean;
  kind: "notify" | "error";
  long: string;
  short: string;
  link: string;
  linkText?: string;
};
