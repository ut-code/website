import { resolve } from "node:path";
import type { CreatePagesArgs } from "gatsby";

const projectTemplate = resolve("./src/templates/project.tsx");
const articleTemplate = resolve("./src/templates/article.tsx");

// eslint-disable-next-line import/prefer-default-export
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
    }
  `);
  if (!data) throw new Error("ページ一覧が取得できませんでした。");

  for (const project of data.projects.nodes) {
    if (!project.frontmatter?.slug)
      throw new Error(
        `プロジェクト: ${project.internal.contentFilePath} の slug が設定されていません。`
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
        `投稿: ${article.internal.contentFilePath} の slug が設定されていません。`
      );
    actions.createPage({
      path: `/articles/${article.frontmatter.slug}`,
      component: `${articleTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
      context: { id: article.id },
    });
  }
}
