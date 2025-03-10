import React from "react";
import { graphql, HeadProps, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import nullthrows from "nullthrows";
import { format } from "date-fns";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import CommonHead from "../components/CommonHead";
import JoinUsCTA from "../components/JoinUsCTA";

export default function ArticlePage({
  data,
  children,
}: PageProps<Queries.ArticlePageQuery>) {
  const author = data.mdx?.frontmatter?.author?.frontmatter;
  const imageData =
    data.mdx?.frontmatter?.image?.childImageSharp?.gatsbyImageData;

  return (
    <>
      <GlobalHeader />
      <time className="mt-12 block text-center text-gray-500 lg:mt-24">
        {format(
          new Date(
            nullthrows(
              data.mdx?.frontmatter?.date,
              "日付が指定されていません。",
            ),
          ),
          "yyyy-MM-dd HH:mm",
        )}
      </time>
      <h1 className="mx-auto mt-2 max-w-screen-md px-4 text-center text-3xl md:text-4xl">
        {data.mdx?.frontmatter?.title}
      </h1>
      {author && (
        <Link
          to={`/members/${author.slug}`}
          className="mx-auto mt-4 flex max-w-sm items-center gap-4 rounded-lg px-4 py-2 hover:bg-gray-100 lg:mt-8"
        >
          <div className="h-14 w-14 overflow-clip rounded-full bg-gray-200">
            <GatsbyImage
              alt="著者の写真"
              image={nullthrows(
                author.faceImage?.childImageSharp?.gatsbyImageData,
                "著者の写真が指定されていません。",
              )}
              className="h-full w-full"
            />
          </div>
          <div className="flex-1">
            <div className="text-lg">{author.nameJa}</div>
            <div className="text-sm text-gray-800">{author.description}</div>
          </div>
        </Link>
      )}
      {imageData && (
        <div className="mt-6 text-center lg:mt-12 lg:px-8">
          <GatsbyImage
            className="max-h-[500px] w-full max-w-screen-lg lg:isolate lg:overflow-clip lg:rounded-2xl"
            alt="イメージ画像"
            image={imageData}
          />
        </div>
      )}
      <div className="mt-6 px-4 lg:mt-12">
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
    "タイトルが指定されていません",
  );
  const date = new Date(
    nullthrows(data.mdx?.frontmatter?.date, "日付が指定されていません"),
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
        "@type": "Article",
        headline: title,
        image: data.mdx?.frontmatter?.image?.publicURL ?? undefined,
        datePublished: date.toISOString(),
        author: data.mdx?.frontmatter?.author?.frontmatter?.nameJa
          ? {
              "@type": "Person",
              name: data.mdx.frontmatter.author.frontmatter.nameJa,
              url: `/members/${data.mdx.frontmatter.author.frontmatter.slug}`,
            }
          : undefined,
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
          publicURL
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
          frontmatter {
            nameJa
            slug
            description
            faceImage {
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
      excerpt(pruneLength: 100)
    }
  }
`;
