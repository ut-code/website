import React from "react";
import clsx from "clsx";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { format } from "date-fns";
import nullthrows from "nullthrows";
import noImage from "@images/no-image.svg";

export default function ArticleList({
  variant = "normal",
  articles,
  className,
}: {
  variant?: "normal" | "compact";
  articles: ReadonlyArray<Queries.ArticleListArticleFragment>;
  className?: string;
}) {
  return (
    <ul
      className={clsx(
        "grid grid-flow-dense md:grid-cols-2 gap-9",
        variant === "normal" && "lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {articles.map((article, i) => {
        const isFeatured = variant === "normal" && i % 11 === 0; // 11 記事ごとに大きく表示する
        const additionalProps = isFeatured
          ? {
              imageData:
                article.frontmatter?.image?.childImageSharp
                  ?.largeGatsbyImageData,
              cellClassName: "md:col-span-2 md:row-span-2",
              imageClassName: "h-[350px] md:h-[450px]",
              excerpt: article.longExcerpt,
            }
          : {
              imageData:
                article.frontmatter?.image?.childImageSharp?.gatsbyImageData,
              cellClassName: "",
              imageClassName: "h-[200px]",
              excerpt: article.excerpt,
            };
        return (
          <li key={article.id} className="contents">
            <Link
              to={`/articles/${article.frontmatter?.slug}/`}
              className={clsx(
                "block hover:opacity-80",
                additionalProps.cellClassName
              )}
            >
              <div
                className={clsx(
                  "w-full h-48 object-cover rounded-xl overflow-clip isolate",
                  additionalProps.imageClassName
                )}
              >
                {additionalProps.imageData ? (
                  <GatsbyImage
                    alt="カバー画像"
                    image={additionalProps.imageData}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    alt="画像なし"
                    src={noImage}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="mt-4">
                <time className="block text-gray-500 text-sm">
                  {format(
                    new Date(
                      nullthrows(article.frontmatter?.date, "日付が未設定")
                    ),
                    "yyyy/MM/dd HH:mm"
                  )}
                </time>
                <h3 className="text-lg font-bold">
                  {article.frontmatter?.title}
                </h3>
                <p className="prose max-w-none mt-2">
                  {additionalProps.excerpt}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export const query = graphql`
  fragment ArticleListArticle on Mdx {
    id
    frontmatter {
      date
      slug
      title
      image {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            transformOptions: { fit: INSIDE }
          )
          largeGatsbyImageData: gatsbyImageData(
            width: 1200
            height: 800
            transformOptions: { fit: INSIDE }
          )
        }
      }
    }
    excerpt(pruneLength: 60)
    longExcerpt: excerpt(pruneLength: 200)
  }
`;
