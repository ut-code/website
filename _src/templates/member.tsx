import React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import nullthrows from "nullthrows";
import Color from "color";
import clsx from "clsx";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import CommonHead from "../components/CommonHead";
import JoinUsCTA from "../components/JoinUsCTA";
import ArticleList from "../components/ArticleList";

export default function MemberPage({
  data,
  children,
}: PageProps<Queries.MemberPageQuery>) {
  const dominantColor = new Color(
    data.mdx?.frontmatter?.upperBodyImage?.childImageSharp?.gatsbyImageData
      .backgroundColor ?? "white",
    "hex",
  );
  const isDark = dominantColor.isDark();
  const backgroundColorHex = isDark
    ? dominantColor.darken(0.4).toString()
    : dominantColor.lighten(0.4).toString();

  const socialButtonClassName = clsx(
    "-m-1 p-1 rounded-xl",
    isDark ? "hover:brightness-90" : "hover:brightness-110",
  );

  return (
    <>
      <GlobalHeader />
      <main>
        <div
          className={clsx(isDark && "text-white")}
          style={{
            backgroundColor: backgroundColorHex,
          }}
        >
          <div className="mx-auto flex max-w-3xl items-center lg:max-w-5xl">
            <div className="flex-grow px-4 py-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl">
                {data.mdx?.frontmatter?.nameJa}
              </h1>
              <h2 className="text-md mt-1 md:mt-4 md:text-xl lg:text-2xl">
                {data.mdx?.frontmatter?.nameEn}
              </h2>
              <div className="mt-4 flex gap-4 text-4xl md:mt-6">
                {data.mdx?.frontmatter?.github && (
                  <a
                    href={`https://github.com/${data.mdx.frontmatter.github}`}
                    target="_blank"
                    className={socialButtonClassName}
                    rel="noreferrer"
                    aria-label="GitHubを見る"
                  >
                    <FiGithub />
                  </a>
                )}
                {data.mdx?.frontmatter?.twitter && (
                  <a
                    href={`https://twitter.com/${data.mdx.frontmatter.twitter}`}
                    target="_blank"
                    className={socialButtonClassName}
                    rel="noreferrer"
                    aria-label="X (旧 Twitter) を見る"
                  >
                    <FaXTwitter />
                  </a>
                )}
                {data.mdx?.frontmatter?.website && (
                  <a
                    href={data.mdx.frontmatter.website}
                    target="_blank"
                    className={socialButtonClassName}
                    rel="noreferrer"
                    aria-label="ウェブサイトを見る"
                  >
                    <FiGlobe />
                  </a>
                )}
              </div>
              <hr className="my-4 hidden border-current sm:block md:my-6 lg:my-8" />
              <p className="sm:text-md mt-6 text-xs sm:mt-0 lg:text-lg">
                {data.mdx?.frontmatter?.description}
              </p>
            </div>
            <div className="mr-4 w-1/3 min-w-[150px] flex-none overflow-clip rounded-full sm:hidden">
              <GatsbyImage
                alt="メンバー顔写真"
                image={nullthrows(
                  data.mdx?.frontmatter?.faceImage?.childImageSharp
                    ?.gatsbyImageData,
                  "メンバーの顔写真が指定されていません。",
                )}
                className="h-full w-full"
              />
            </div>
            <div className="hidden flex-none sm:block">
              <GatsbyImage
                className="w-[250px] md:w-[300px] lg:w-[400px]"
                alt="メンバー写真"
                image={nullthrows(
                  data.mdx?.frontmatter?.upperBodyImage?.childImageSharp
                    ?.gatsbyImageData,
                  "画像が指定されていません。",
                )}
              />
            </div>
          </div>
        </div>
        <div className="prose mx-auto max-w-screen-md px-4 py-12">
          {children}
          {data.allMdx.nodes.length > 0 && (
            <>
              <h2>{data.mdx?.frontmatter?.nameJa} の記事</h2>
              <div className="not-prose mt-4">
                <ArticleList variant="compact" articles={data.allMdx.nodes} />
              </div>
            </>
          )}
        </div>
      </main>
      <JoinUsCTA className="mt-8">
        ut.code(); で{data.mdx?.frontmatter?.nameJa} に会いましょう
      </JoinUsCTA>
      <GlobalFooter />
    </>
  );
}

export function Head({ data }: HeadProps<Queries.MemberPageQuery>) {
  const nameJa = nullthrows(
    data.mdx?.frontmatter?.nameJa,
    "名前が指定されていません",
  );
  const nameEn = nullthrows(
    data.mdx?.frontmatter?.nameEn,
    "英語名が指定されていません",
  );
  return (
    <CommonHead
      title={nameJa}
      description={data.mdx?.excerpt ?? undefined}
      image={
        data.mdx?.frontmatter?.upperBodyImage?.childImageSharp?.resize?.src ??
        undefined
      }
      linkedData={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: nameJa,
          alternateName: nameEn,
          image: data.mdx?.frontmatter?.upperBodyImage?.publicURL ?? undefined,
        },
      }}
    />
  );
}

export const query = graphql`
  query MemberPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        nameJa
        nameEn
        description
        tags
        github
        twitter
        website
        faceImage {
          childImageSharp {
            gatsbyImageData(
              width: 400
              height: 400
              transformOptions: { fit: INSIDE }
            )
          }
        }
        upperBodyImage {
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 600
              height: 900
              transformOptions: { fit: INSIDE }
            )
            resize(width: 1920, height: 1080, fit: INSIDE) {
              src
            }
          }
        }
      }
      excerpt(pruneLength: 100)
    }
    allMdx(
      filter: {
        internal: { contentFilePath: { glob: "**/contents/articles/**" } }
        frontmatter: { author: { id: { eq: $id } } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        ...ArticleListArticle
      }
    }
  }
`;
