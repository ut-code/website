import React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import nullthrows from "nullthrows";
import Color from "color";
import clsx from "clsx";
import { FiTwitter, FiGithub, FiGlobe } from "react-icons/fi";
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
    "hex"
  );
  const isDark = dominantColor.isDark();
  const backgroundColorHex = isDark
    ? dominantColor.darken(0.4).toString()
    : dominantColor.lighten(0.4).toString();

  const socialButtonClassName = clsx(
    "-m-1 p-1 rounded-xl",
    isDark ? "hover:brightness-90" : "hover:brightness-110"
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
          <div className="flex items-center max-w-3xl lg:max-w-5xl mx-auto">
            <div className="flex-grow px-4 py-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl">
                {data.mdx?.frontmatter?.nameJa}
              </h1>
              <h2 className="mt-1 md:mt-4 text-md md:text-xl lg:text-2xl">
                {data.mdx?.frontmatter?.nameEn}
              </h2>
              <div className="flex gap-4 mt-4 md:mt-6 text-4xl">
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
                    aria-label="Twitterを見る"
                  >
                    <FiTwitter />
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
              <hr className="hidden sm:block my-4 md:my-6 lg:my-8 border-current" />
              <p className="mt-6 text-xs sm:mt-0 sm:text-md lg:text-lg">
                {data.mdx?.frontmatter?.description}
              </p>
            </div>
            <div className="sm:hidden flex-none w-1/3 min-w-[150px] rounded-full overflow-clip mr-4">
              <GatsbyImage
                alt="メンバー顔写真"
                image={nullthrows(
                  data.mdx?.frontmatter?.faceImage?.childImageSharp
                    ?.gatsbyImageData,
                  "メンバーの顔写真が指定されていません。"
                )}
                className="w-full h-full"
              />
            </div>
            <div className="hidden sm:block flex-none">
              <GatsbyImage
                className="w-[250px] md:w-[300px] lg:w-[400px]"
                alt="メンバー写真"
                image={nullthrows(
                  data.mdx?.frontmatter?.upperBodyImage?.childImageSharp
                    ?.gatsbyImageData,
                  "画像が指定されていません。"
                )}
              />
            </div>
          </div>
        </div>
        <div className="prose max-w-screen-md mx-auto px-4 py-12">
          {children}
          {data.allMdx.nodes.length > 0 && (
            <>
              <h2>{data.mdx?.frontmatter?.nameJa} の記事</h2>
              <div className="mt-4 not-prose">
                <ArticleList variant="compact" articles={data.allMdx.nodes} />
              </div>
            </>
          )}
        </div>
      </main>
      <JoinUsCTA
        className="mt-8"
        title={`ut.code(); で ${data.mdx?.frontmatter?.nameJa} に会いましょう`}
      />
      <GlobalFooter />
    </>
  );
}

export function Head({ data }: HeadProps<Queries.MemberPageQuery>) {
  const nameJa = nullthrows(
    data.mdx?.frontmatter?.nameJa,
    "名前が指定されていません"
  );
  const nameEn = nullthrows(
    data.mdx?.frontmatter?.nameEn,
    "英語名が指定されていません"
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
        "@type": "Person",
        name: nameJa,
        alternateName: nameEn,
        image:
          data.mdx?.frontmatter?.upperBodyImage?.childImageSharp?.resize?.src ??
          undefined,
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
