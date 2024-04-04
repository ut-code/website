import React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FiGithub, FiGlobe, FiLayers } from "react-icons/fi";
import nullthrows from "nullthrows";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import CommonHead from "../components/CommonHead";
import JoinUsCTA from "../components/JoinUsCTA";
import ActionButton from "../components/ActionButton";

export default function ProjectPage({
  data,
  children,
}: PageProps<Queries.ProjectPageQuery>) {
  return (
    <>
      <GlobalHeader />
      <main>
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-4 lg:max-w-screen-lg lg:mx-auto lg:py-12 lg:px-4">
          <GatsbyImage
            className="w-full h-64 md:h-96 lg:w-[600px] lg:h-[400px] lg:rounded-2xl"
            alt="プロジェクト画像"
            image={nullthrows(
              data.mdx?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
              "画像が指定されていません。"
            )}
          />
          <div className="container px-4 mt-8 mx-auto lg:flex-1 lg:mx-0">
            <p className="flex items-center gap-1 text-gray-600">
              <FiLayers />
              <span>Project</span>
            </p>
            <h1 className="mt-2 text-3xl lg:text-5xl">
              {data.mdx?.frontmatter?.title}
            </h1>
            {data.mdx?.frontmatter?.tags && (
              <ul className="flex flex-wrap gap-2 mt-4 lg:mt-6">
                {data.mdx.frontmatter.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 border border-current rounded-full text-sm leading-relaxed lg:text-base"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {data.mdx?.frontmatter?.github && (
              <div className="flex gap-4 mt-6 text-4xl">
                {data.mdx?.frontmatter?.github && (
                  <a
                    href={data.mdx.frontmatter.github}
                    target="_blank"
                    className="-m-1 p-1 rounded-xl hover:bg-gray-100"
                    rel="noreferrer"
                    aria-label="GitHubを見る"
                  >
                    <FiGithub />
                  </a>
                )}
              </div>
            )}
            {data.mdx?.frontmatter?.website && (
              <ActionButton
                to={data.mdx.frontmatter.website}
                className="mt-6 mb-6"
              >
                <FiGlobe className="inline-block w-6 h-6 mr-2" />
                <span>{data.mdx.frontmatter.title} へ</span>
              </ActionButton>
            )}
          </div>
        </div>
        <div className="container mt-6 mx-auto px-4 lg:max-w-screen-lg">
          <div className="prose max-w-none p-4 rounded-lg bg-gray-100">
            {data.mdx?.frontmatter?.description}
          </div>
          <div className="mt-8 prose max-w-none">{children}</div>
        </div>
      </main>
      <JoinUsCTA
        className="mt-8"
        title={`ut.code(); で ${data.mdx?.frontmatter?.title} を開発しませんか？`}
      />
      <GlobalFooter />
    </>
  );
}

export function Head({ data }: HeadProps<Queries.ProjectPageQuery>) {
  const title = nullthrows(
    data.mdx?.frontmatter?.title,
    "タイトルが指定されていません"
  );
  return (
    <CommonHead
      title={title}
      description={data.mdx?.excerpt ?? undefined}
      image={
        data.mdx?.frontmatter?.image?.childImageSharp?.resize?.src ?? undefined
      }
      linkedData={{ "@type": "Product", name: title }}
    />
  );
}

export const query = graphql`
  query ProjectPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        tags
        github
        website
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 800
              transformOptions: { fit: INSIDE, cropFocus: CENTER }
            )
            resize(width: 1920, height: 1080, fit: INSIDE) {
              src
            }
          }
        }
      }
      excerpt(pruneLength: 100)
    }
  }
`;
