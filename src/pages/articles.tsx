import { type PageProps, graphql } from "gatsby";
import React from "react";
import ArticleList from "../components/ArticleList";
import CommonHead from "../components/CommonHead";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";

export default function ArticlesPage({
  data,
}: PageProps<Queries.ArticlesPageQuery>) {
  return (
    <>
      <GlobalHeader />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl text-center">すべての記事</h1>
        <ArticleList className="mt-16" articles={data.allMdx.nodes} />
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return (
    <CommonHead title="すべての記事" description="ut.code(); からの最新情報" />
  );
}

export const query = graphql`
  query ArticlesPage {
    allMdx(
      filter: {
        internal: { contentFilePath: { glob: "**/contents/articles/**" } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        ...ArticleListArticle
      }
    }
  }
`;
