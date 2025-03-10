import React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FiGithub, FiGlobe, FiLayers, FiYoutube } from "react-icons/fi";
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
        <div className="lg:mx-auto lg:flex lg:max-w-screen-lg lg:flex-row-reverse lg:items-center lg:gap-4 lg:px-4 lg:py-12">
          <GatsbyImage
            className="h-64 w-full md:h-96 lg:h-[400px] lg:w-[600px] lg:rounded-2xl"
            alt="プロジェクト画像"
            image={nullthrows(
              data.mdx?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
              "画像が指定されていません。",
            )}
          />
          <div className="container mx-auto mt-8 px-4 lg:mx-0 lg:flex-1">
            <p className="flex items-center gap-1 text-gray-600">
              <FiLayers />
              <span>Project</span>
            </p>
            <h1 className="mt-2 text-3xl lg:text-5xl">
              {data.mdx?.frontmatter?.title}
            </h1>
            {data.mdx?.frontmatter?.tags && (
              <ul className="mt-4 flex flex-wrap gap-2 lg:mt-6">
                {data.mdx.frontmatter.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-current px-3 text-sm leading-relaxed lg:text-base"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {/* 表示する icon が無いときは、親要素の高さの分間隔が広くなりすぎるので、親要素ごと表示しないようにする。 */}
            {(data.mdx?.frontmatter?.github ||
              data.mdx?.frontmatter?.youtube) && (
              <div className="mt-6 flex gap-4 text-4xl">
                {data.mdx?.frontmatter?.github && (
                  <a
                    href={data.mdx.frontmatter.github}
                    target="_blank"
                    className="-m-1 rounded-xl p-1 hover:bg-gray-100"
                    rel="noreferrer"
                    aria-label="GitHubを見る"
                  >
                    <FiGithub />
                  </a>
                )}
                {data.mdx?.frontmatter?.youtube && (
                  <a
                    href={data.mdx.frontmatter.youtube}
                    target="_blank"
                    className="-m-1 rounded-xl p-1 hover:bg-gray-100"
                    rel="noreferrer"
                    aria-label="YouTubeを見る"
                  >
                    <FiYoutube />
                  </a>
                )}
              </div>
            )}
            {data.mdx?.frontmatter?.website && (
              <ActionButton to={data.mdx.frontmatter.website} className="my-6">
                <FiGlobe className="mr-2 inline-block h-6 w-6" />
                <span>{data.mdx.frontmatter.title} へ</span>
              </ActionButton>
            )}
          </div>
        </div>
        <div className="container mx-auto mt-6 px-4 lg:max-w-screen-lg">
          <div className="prose max-w-none rounded-lg bg-gray-100 p-4">
            {data.mdx?.frontmatter?.description}
          </div>
          <div className="prose mt-8 max-w-none">{children}</div>
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
    "タイトルが指定されていません",
  );
  return (
    <CommonHead
      title={title}
      description={data.mdx?.excerpt ?? undefined}
      image={
        data.mdx?.frontmatter?.image?.childImageSharp?.resize?.src ?? undefined
      }
      linkedData={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: title,
        offers: {
          "@type": "Offer",
          price: "0",
        },
        image: data.mdx?.frontmatter?.image?.publicURL ?? undefined,
        aggregateRating: { "@type": "AggregateRating", reviewCount: 0 },
      }}
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
        youtube
        website
        image {
          publicURL
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
