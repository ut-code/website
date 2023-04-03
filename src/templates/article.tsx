import React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import nullthrows from "nullthrows";
import { FiUser } from "react-icons/fi";
import { format } from "date-fns";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import CommonHead from "../components/CommonHead";
import JoinUsCTA from "../components/JoinUsCTA";

export default function ArticlePage({
  data,
  children,
}: PageProps<Queries.ArticlePageQuery>) {
  const author = data.mdx?.frontmatter?.author?.childMdx?.frontmatter;
  const imageData =
    data.mdx?.frontmatter?.image?.childImageSharp?.gatsbyImageData;

  return (
    <>
      <GlobalHeader />
      <time className="block mt-12 lg:mt-24 text-center text-gray-500">
        {format(
          new Date(
            nullthrows(
              data.mdx?.frontmatter?.date,
              "日付が指定されていません。"
            )
          ),
          "yyyy-MM-dd HH:mm"
        )}
      </time>
      <h1 className="max-w-screen-md mx-auto mt-2 px-4 text-3xl md:text-4xl text-center">
        {data.mdx?.frontmatter?.title}
      </h1>
      {author && (
        <div className="flex gap-4 items-center max-w-sm mx-auto px-4 mt-4 lg:mt-8">
          <div className="w-14 h-14 rounded-full overflow-clip bg-gray-200">
            {author.image?.childImageSharp?.gatsbyImageData ? (
              <GatsbyImage
                alt="著者の写真"
                image={author.image?.childImageSharp?.gatsbyImageData}
                className="w-full h-full"
              />
            ) : (
              <FiUser className="w-full h-full scale-50 text-gray-500" />
            )}
          </div>
          <div className="flex-1">
            <div className="text-lg">{author.title}</div>
            <div className="text-sm text-gray-800">{author.description}</div>
          </div>
        </div>
      )}
      {imageData && (
        <div className="mt-6 text-center lg:mt-12 lg:px-8">
          <GatsbyImage
            className="w-full max-w-screen-lg max-h-[500px] lg:rounded-2xl lg:overflow-clip lg:isolate"
            alt="イメージ画像"
            image={imageData}
          />
        </div>
      )}
      <div className="mt-6 lg:mt-12 px-4">
        <div className="prose mx-auto">{children}</div>
      </div>
      <JoinUsCTA
        title="ut.code(); に参加する準備はできましたか？"
        className="mt-24"
      />
      <GlobalFooter />
    </>
  );
}

export function Head({ data }: HeadProps<Queries.ArticlePageQuery>) {
  const title = nullthrows(
    data.mdx?.frontmatter?.title,
    "タイトルが指定されていません"
  );
  const date = new Date(
    nullthrows(data.mdx?.frontmatter?.date, "日付が指定されていません")
  );
  return (
    <CommonHead
      title={title}
      description={data.mdx?.excerpt ?? undefined}
      image={
        data.mdx?.frontmatter?.image?.childImageSharp?.resize?.src ?? undefined
      }
      linkedData={{
        "@type": "Article",
        headline: title,
        datePublished: date.toISOString(),
      }}
    />
  );
}

export const query = graphql`
  query ArticlePage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              transformOptions: { cropFocus: CENTER }
            )
            resize(width: 1920, height: 1080, fit: INSIDE) {
              src
            }
          }
        }
        author {
          childMdx {
            frontmatter {
              title
              description
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 160
                    height: 160
                    transformOptions: { cropFocus: ATTENTION }
                  )
                }
              }
            }
          }
        }
      }
      excerpt(pruneLength: 100)
    }
  }
`;
