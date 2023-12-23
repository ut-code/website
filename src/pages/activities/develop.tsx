import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FiBox } from "react-icons/fi";
import ActivityPageTemplate from "../../components/ActivityPageTemplate";
import CommonHead from "../../components/CommonHead";

export default function ActivityLearnPage() {
  return (
    <ActivityPageTemplate.Layout type="開発">
      <StaticImage
        alt="開発の様子"
        className={ActivityPageTemplate.coverImageClassName}
        src="../../images/activity-develop.jpg"
      />
      <ActivityPageTemplate.Title Icon={FiBox}>
        開発する
      </ActivityPageTemplate.Title>
      <ActivityPageTemplate.Summary>
        {/* eslint-disable prettier/prettier */}
        <p>ut.code(); では、社会をより良い方向へ導くことを目指し、様々なプロダクトを開発しています。ut.code(); 開発するプロダクトを「プロジェクト」と呼び、通常の活動はプロジェクトが基本単位となっています。プロジェクトのアイデア出しから実際の開発、チームメンバーとのコミュニケーション方法など、様々なノウハウが蓄積されています。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Summary>
      <ActivityPageTemplate.Section
        title="プロジェクト"
        renderImage={(className) => (
          <StaticImage
            alt="共同作業の様子"
            className={className}
            src="../../images/activity-develop-project.jpg"
          />
        )}
        linkLabel="すべてのプロジェクト"
        linkTo="/projects/"
        edge="left"
      >
        {/* eslint-disable prettier/prettier */}
        <p>プロジェクトは、ut.code(); 内のチームにより開発されるソフトウェアの単位で、多くはそれぞれ独立した Slack チャンネル、Notion ページ、Google Drive フォルダを持っています。成果物はオープンソースにすることが推奨されており、<a href="https://github.com/ut-code" target="_blank" rel="noreferrer">GitHub</a> 上で公開されています。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
      <ActivityPageTemplate.Section
        title="ブレインストーミング"
        renderImage={(className) => (
          <StaticImage
            alt="2022 年度大忘年会の様子"
            className={className}
            src="../../images/activity-develop-brainstorming.jpg"
          />
        )}
        linkLabel="大忘年会を開催しました"
        linkTo="/articles/kick-off-party-2023-report/"
        edge="right"
      >
        {/* eslint-disable prettier/prettier */}
        <p>ソフトウェアは、作り始める前にしっかりとアイデアを練り上げることが重要です。ut.code(); では、プロジェクトの実施の前にブレインストーミング会を実施し、多くの人から作りたいプロダクトについてのアイデアに対するフィードバックを得る機会を提供しています。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
      <ActivityPageTemplate.Section
        title="定例ミーティング"
        renderImage={(className) => (
          <StaticImage
            alt="定例ミーティングのイメージ"
            className={className}
            src="../../images/activity-develop-meeting.jpg"
          />
        )}
        linkLabel="すべてのプロジェクト"
        linkTo="/projects/"
        edge="left"
      >
        {/* eslint-disable prettier/prettier */}
        <p>プロジェクトが動き始めた後、重要になってくるのは継続です。ut.code(); では、すべてのプロジェクトで週 1 度の定例ミーティングを実施することを推奨しています。テスト期間など、時間がとりづらい時期でも、週に 1 度、ほんの少しだけ実施中のプロジェクトに意識を向けることにより、プロジェクトの成功率を大きく高めることができます。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
    </ActivityPageTemplate.Layout>
  );
}

export function Head() {
  return <CommonHead title="ut.code(); で開発する" />;
}
