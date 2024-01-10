import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import nullthrows from "nullthrows";
import GlobalFooter from "@components/GlobalFooter";
import GlobalHeader from "@components/GlobalHeader";
import CommonHead from "@components/CommonHead";
import JoinUsCTA from "@components/JoinUsCTA";

export default function ArticlesPage({
  data,
}: PageProps<Queries.MembersPageQuery>) {
  return (
    <>
      <GlobalHeader />
      <StaticImage
        alt=""
        src="../images/members-header.jpg"
        class="w-full h-[500px]"
        objectPosition="center 20%"
      />
      <main className="container isolate mx-auto -mt-[300px] px-4 py-16">
        <h1 className="relative w-max px-4 py-2 bg-black bg-opacity-80 text-white text-6xl">
          メンバー
          <div
            aria-hidden
            className="absolute top-0 right-full h-full w-[9999px] bg-black bg-opacity-80"
          />
        </h1>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {data.allMdx.nodes.map((member) => (
            <li key={member.id} className="relative">
              <Link
                to={`/members/${member.frontmatter?.slug}`}
                className="block hover:brightness-90 drop-shadow-lg"
              >
                <GatsbyImage
                  alt={`${member.frontmatter?.nameJa} の写真`}
                  image={nullthrows(
                    member.frontmatter?.upperBodyImage?.childImageSharp
                      ?.gatsbyImageData,
                    "写真が設定されていません"
                  )}
                  className="w-full max-h-[400px]"
                  objectPosition="center 30%"
                />
                <div className="absolute bottom-0 w-full pt-12 pb-6 px-6 bg-gradient-to-b from-transparent to-black text-white">
                  <p className="text-3xl">{member.frontmatter?.nameJa}</p>
                  <p className="text-md">{member.frontmatter?.nameEn}</p>
                  <p className="mt-2 text-xs leading-normal">
                    {member.frontmatter?.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-gray-600">
          このページは準備中です。ほとんどのメンバーの情報は反映されていません。
        </p>
      </main>
      <JoinUsCTA title="愉快な仲間が皆さんをお待ちしています！" />
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return <CommonHead title="メンバー" description="私たちの仲間" />;
}

export const query = graphql`
  query MembersPage {
    allMdx(
      filter: {
        internal: { contentFilePath: { glob: "**/contents/members/**" } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          slug
          nameJa
          nameEn
          description
          upperBodyImage {
            childImageSharp {
              gatsbyImageData(width: 600, height: 800)
            }
          }
        }
      }
    }
  }
`;
