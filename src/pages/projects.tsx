import { type PageProps, graphql } from "gatsby";
import React from "react";
import CommonHead from "../components/CommonHead";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage({
  data,
}: PageProps<Queries.ProjectsPageQuery>) {
  return (
    <>
      <GlobalHeader />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl text-center">すべてのプロジェクト</h1>
        <ProjectList className="mt-16" projects={data.allMdx.nodes} />
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return (
    <CommonHead
      title="すべてのプロジェクト"
      description="ut.code(); で開発を行っているプロジェクト一覧です。"
    />
  );
}

export const query = graphql`
  query ProjectsPage {
    allMdx(
      filter: {
        internal: { contentFilePath: { glob: "**/contents/projects/**" } }
      }
      sort: [{ frontmatter: { order: ASC } }, { frontmatter: { date: DESC } }]
    ) {
      nodes {
        ...ProjectListProject
      }
    }
  }
`;
