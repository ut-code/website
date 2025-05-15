import { type CollectionEntry, getCollection, getEntry } from "astro:content";
import type { Kind } from "./schema.ts";

export async function getProjects(kind: Kind | "all") {
  return (await getCollection("projects"))
    .filter((project) => kind === "all" || project.data.kind === kind)
    .sort((a, b) => {
      const a_order = a.data.order ?? Number.POSITIVE_INFINITY;
      const b_order = b.data.order ?? Number.POSITIVE_INFINITY;
      if (a_order !== b_order) {
        return a_order - b_order;
      }
      return b.data.date.getTime() - a.data.date.getTime();
    });
}

export async function getArticles(options?: {
  where?: (article: CollectionEntry<"articles">) => boolean;
}) {
  let articles = (await getCollection("articles")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  if (options?.where) {
    articles = articles.filter(options.where);
  }
  return articles;
}

export async function getMembers() {
  const members = await getCollection("members");
  return members.sort((m1, m2) => m2.data.joinYear - m1.data.joinYear);
}

export async function getMember(id: string) {
  const member = await getEntry("members", id);
  if (!member)
    throw new Error(`member search error: member not found for ${id}`);
  return member;
}
