import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import {
  FiArrowRight,
  FiBookOpen,
  FiBox,
  FiMessageSquare,
} from "react-icons/fi";
import { StaticImage } from "gatsby-plugin-image";
import GlobalHeader from "../components/GlobalHeader";
import ActionButton from "../components/ActionButton";
import GlobalFooter from "../components/GlobalFooter";
import ProjectList from "../components/ProjectList";
import ArticleList from "../components/ArticleList";
import CommonHead from "../components/CommonHead";

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <h2 className="text-center text-4xl">{title}</h2>
      {subtitle && (
        <h3 className="mt-2 text-center text-sm text-gray-500">{subtitle}</h3>
      )}
    </>
  );
}

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  return (
    <>
      <div
        className="h-screen grid grid-flow-col"
        style={{ gridTemplateRows: "max-content minmax(0, 1fr)" }}
      >
        <GlobalHeader />
        <div style={{ gridArea: "2 / 1" }}>
          <StaticImage
            alt="活動の様子"
            className="w-full h-full object-cover"
            src="../images/hero.jpg"
          />
        </div>
        <div
          className="relative bg-black/20 flex items-center"
          style={{ gridArea: "2 / 1" }}
        >
          <div className="container mx-auto px-4">
            <div className="bg-white max-w-lg p-8">
              <h1 className="text-2xl md:text-3xl">
                <span className="inline-block">東京大学の</span>
                <span className="inline-block">ソフトウェア開発</span>
                <span className="inline-block">コミュニティ</span>
              </h1>
              <div className="prose mt-3">
                <p>
                  ut.code(); は、2019
                  年設立の東京大学のソフトウェアエンジニアリングコミュニティです。
                </p>
              </div>
              <ActionButton to="/join/" className="mt-4">
                JOIN US
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <SectionHeader title="Activities" subtitle="活動内容" />
          <div className="mt-8 p-6 md:p-8 bg-white rounded-xl">
            <ul className="flex flex-col gap-12 lg:flex-row">
              {[
                {
                  key: "learn",
                  title: "学習",
                  description:
                    "プログラミングに初めて取り組む皆さんに向け、学習会を開催しています。また、初心者からでも実際にサービスを開発できるよう、学習カリキュラムをオープンソースで公開しています。",
                  Icon: FiBookOpen,
                },
                {
                  key: "share",
                  title: "交流",
                  description:
                    "定期的なイベントの開催により、メンバー同士の交流を深めています。集中して開発を行う合宿や、新しいサービス開発のアイデアを出し合うブレインストーミング大会などを行っています。",
                  Icon: FiMessageSquare,
                },
                {
                  key: "develop",
                  title: "開発",
                  description:
                    "大学や社会をより良くするソフトウェアを一緒に開発しましょう。切磋琢磨した仲間はかけがえのないものになるはずです。開発したソフトウェアの多くは GitHub で公開しています。",
                  Icon: FiBox,
                },
              ].map((activity) => (
                <li key={activity.key} className="lg:flex-1">
                  <div className="w-max p-2 bg-black text-white rounded-md">
                    <activity.Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-3 text-2xl">{activity.title}</h3>
                  <div className="mt-2">
                    <p className="prose max-w-none">{activity.description}</p>
                  </div>
                  <Link
                    className="mt-2 flex items-center gap-1 hover:underline"
                    to={`/activities/${activity.key}/`}
                  >
                    <span>Learn more</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <iframe
          title="ut.code(); 紹介動画"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]"
          src="https://www.youtube-nocookie.com/embed/R9bC7bue_4Y?rel=0"
          allow="picture-in-picture; web-share"
          allowFullScreen
        />
      </section>
      <section>
        <div className="container mx-auto px-4 py-12">
          <SectionHeader title="Projects" subtitle="実施中のプロジェクト" />
          <ProjectList className="mt-10" projects={data.latestProjects.nodes} />
          <ActionButton to="/projects/" className="mt-8 ml-auto">
            すべてのプロジェクト
          </ActionButton>
        </div>
      </section>
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-8 flex gap-12 items-center">
          <div className="flex-grow self-center">
            <h1 className="text-4xl leading-snug">
              <span className="inline-block">未来の</span>
              <span className="inline-block">ソフトウェアを</span>
              <br />
              <span>デザインしよう</span>
            </h1>
            <p className="mt-3 text-gray-300 leading-loose">
              <span className="inline-block">
                ut.code(); で一緒にワクワクするソフトウェアを作りませんか？
              </span>
              <span className="inline-block">
                初心者から実務経験者、学年を問わずどなたでも大歓迎です。
              </span>
            </p>
            <ActionButton to="/join/" variant="dark" className="mt-8">
              JOIN US
            </ActionButton>
          </div>
          <div className="hidden lg:block self-stretch flex-shrink">
            <StaticImage
              alt="背景"
              src="../images/lab-cafe.jpg"
              width={600}
              className="w-full h-full object-cover rounded-3xl overflow-clip"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-12">
          <SectionHeader title="News" subtitle="最新情報" />
          <ArticleList className="mt-10" articles={data.latestArticles.nodes} />
          <ActionButton to="/articles/" className="mt-8 ml-auto">
            すべての記事
          </ActionButton>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto py-12">
          <SectionHeader title="About us" subtitle="団体概要" />
          <ul className="grid lg:grid-cols-2 gap-x-8 mt-8 text-lg text-gray-800">
            {[
              { title: "団体名", content: "ut.code();" },
              { title: "構成人数", content: "20 名程度 (アクティブ)" },
              { title: "部室", content: "駒場キャンパス学生会館 313B 教室" },
              { title: "Twitter", content: "@utokyo_code" },
              { title: "LINE", content: "@nlr3843e" },
              { title: "活動場所", content: "部室, KOMAD, その他施設" },
              { title: "所属", content: "東京大学工学部丁友会 (2022 年度)" },
            ].map(({ title, content }) => (
              <li
                key={title}
                className="flex gap-4 border-b border-gray-400 px-6 py-3"
              >
                <div className="w-24">{title}</div>
                <div className="flex-1">{content}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-8 py-12">
          <SectionHeader title="ご寄付のお願い" />
          <div className="prose max-w-none mt-8 text-center">
            <p>
              <span className="inline-block">
                現在、ut.code(); の活動費は寄付によって賄われています。
              </span>
              <span className="inline-block">
                弊団体の継続的な活動のため、ぜひご寄付にご協力ください。
              </span>
            </p>
          </div>
          <ActionButton to="/donation/" className="mt-8 mx-auto">
            寄付する
          </ActionButton>
        </div>
      </section>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return (
    <CommonHead
      title={null}
      description="ut.code(); は 2019 年設立の東京大学のソフトウェアエンジニアリングコミュニティです。"
    />
  );
}

export const query = graphql`
  query IndexPage {
    latestProjects: allMdx(
      filter: {
        internal: { contentFilePath: { glob: "**/contents/projects/**" } }
      }
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      nodes {
        ...ProjectListProject
      }
    }
    latestArticles: allMdx(
      filter: {
        internal: { contentFilePath: { glob: "**/contents/articles/**" } }
      }
      sort: { frontmatter: { date: DESC } }
      limit: 9
    ) {
      nodes {
        ...ArticleListArticle
      }
    }
  }
`;
