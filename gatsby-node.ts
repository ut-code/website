import { resolve } from "node:path";
import type { CreatePagesArgs, CreateSchemaCustomizationArgs } from "gatsby";

const projectTemplate = resolve("./src/templates/project.tsx");
const articleTemplate = resolve("./src/templates/article.tsx");
const memberTemplate = resolve("./src/templates/member.tsx");

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { data } = await graphql<Queries.CreatePagesQuery>(`
    query CreatePages {
      projects: allMdx(
        filter: {
          internal: { contentFilePath: { glob: "**/contents/projects/**" } }
        }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      articles: allMdx(
        filter: {
          internal: { contentFilePath: { glob: "**/contents/articles/**" } }
        }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      members: allMdx(
        filter: {
          internal: { contentFilePath: { glob: "**/contents/members/**" } }
        }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);
  if (!data) throw new Error("ページ一覧が取得できませんでした。");

  for (const project of data.projects.nodes) {
    if (!project.frontmatter?.slug)
      throw new Error(
        `プロジェクト: ${project.internal.contentFilePath} の slug が設定されていません。`,
      );
    actions.createPage({
      path: `/projects/${project.frontmatter.slug}`,
      component: `${projectTemplate}?__contentFilePath=${project.internal.contentFilePath}`,
      context: { id: project.id },
    });
  }

  for (const article of data.articles.nodes) {
    if (!article.frontmatter?.slug)
      throw new Error(
        `投稿: ${article.internal.contentFilePath} の slug が設定されていません。`,
      );
    actions.createPage({
      path: `/articles/${article.frontmatter.slug}`,
      component: `${articleTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
      context: { id: article.id },
    });
  }

  for (const member of data.members.nodes) {
    if (!member.frontmatter?.slug)
      throw new Error(
        `投稿: ${member.internal.contentFilePath} の slug が設定されていません。`,
      );
    actions.createPage({
      path: `/members/${member.frontmatter.slug}`,
      component: `${memberTemplate}?__contentFilePath=${member.internal.contentFilePath}`,
      context: { id: member.id },
    });
  }
}

export function createSchemaCustomization({
  actions,
}: CreateSchemaCustomizationArgs) {
  actions.createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      author: Mdx @link(by: "frontmatter.slug")
      posts: [Mdx] @link(by: "frontmatter.author", from: "frontmatter.slug")
    }
  `);
}
