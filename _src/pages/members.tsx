import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import nullthrows from "nullthrows";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import CommonHead from "../components/CommonHead";
import JoinUsCTA from "../components/JoinUsCTA";

export default function ArticlesPage({
  data,
}: PageProps<Queries.MembersPageQuery>) {
  return (
    <>
      <GlobalHeader />
      <StaticImage
        alt=""
        src="../images/members-header.jpg"
        class="h-[500px] w-full"
        objectPosition="center 20%"
      />
      <main className="isolate container mx-auto -mt-[300px] px-4 py-16">
        <h1 className="bg-opacity-80 relative w-max bg-black px-4 py-2 text-6xl text-white">
          メンバー
          <div
            aria-hidden
            className="bg-opacity-80 absolute top-0 right-full h-full w-[9999px] bg-black"
          />
        </h1>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {data.allMdx.nodes.map((member) => (
            <li key={member.id} className="relative">
              <Link
                to={`/members/${member.frontmatter?.slug}`}
                className="block drop-shadow-lg hover:brightness-90"
              >
                <GatsbyImage
                  alt={`${member.frontmatter?.nameJa} の写真`}
                  image={nullthrows(
                    member.frontmatter?.upperBodyImage?.childImageSharp
                      ?.gatsbyImageData,
                    "写真が設定されていません",
                  )}
                  className="max-h-[400px] w-full"
                  objectPosition="center 30%"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black px-6 pt-12 pb-6 text-white">
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
