import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import ActivityPageTemplate from "../../components/ActivityPageTemplate";
import CommonHead from "../../components/CommonHead";

export default function ActivityLearnPage() {
  return (
    <ActivityPageTemplate.Layout type="学習">
      <StaticImage
        alt="新歓体験会の様子"
        className={ActivityPageTemplate.coverImageClassName}
        src="../../images/activity-learn.jpg"
      />
      <ActivityPageTemplate.Title Icon={FiBookOpen}>
        学習する
      </ActivityPageTemplate.Title>
      <ActivityPageTemplate.Summary>
        {/* eslint-disable prettier/prettier */}
        <p>ut.code(); は、全ての人にソフトウェア開発の魅力を伝えるべく、教材の作成から教育活動までを一貫して行っています。充実した教材、気軽に質問できる環境、切磋琢磨する仲間、この３つの柱により、初心者からでも自分だけのソフトウェア開発ができるようにサポートします。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Summary>
      <ActivityPageTemplate.Section
        title="ut.code(); Learn"
        renderImage={(className) => (
          <StaticImage
            alt="ut.code(); Learn のスクリーンショット"
            className={className}
            src="../../images/activity-learn-utcode-learn.jpg"
          />
        )}
        linkLabel="詳しく見る"
        linkTo="/projects/utcode-learn/"
        edge="left"
      >
        {/* eslint-disable prettier/prettier */}
        <p>ut.code(); Learn は、ut.code(); の内部向けの教材です。はじめの一歩から実際の Web システム開発までに必要な知識と、多くの演習問題から構成されています。</p>
        <p>一般的な教材と異なり、網羅的な説明を避け、詳細は演習問題中に自力で調べられるようヒントを設ける形式になっています。これにより、カリキュラム終了後に自走できる基礎を確立することができます。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
      <ActivityPageTemplate.Section
        title="全ゼミ / 自主ゼミ「モダン Web システム開発入門」"
        renderImage={(className) => (
          <StaticImage
            alt=""
            className={className}
            src="../../images/activity-learn-specialized-seminar.jpg"
          />
        )}
        linkLabel="2024 年度 S セメスター全ゼミ開講のお知らせ"
        linkTo="/articles/2024-s-specialized-seminar-announcement/"
        edge="right"
      >
        {/* eslint-disable prettier/prettier */}
        <p>ut.code(); Learn を教材に、駒場キャンパスで講義形式で Web システム開発を学ぶことのできる自主ゼミです。自学自習のペース配分が苦手でも、毎週の参加と課題により学習を進めることができます。</p>
        <p>ut.code(); の新歓イベントを兼ねていますが、ゼミのみへの参加も、ゼミなしでの ut.code(); への入会も歓迎しています。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
      <ActivityPageTemplate.Section
        title="はじめてのプログラミング教室"
        renderImage={(className) => (
          <StaticImage
            alt=""
            className={className}
            src="../../images/activity-learn-festival.png"
          />
        )}
        linkLabel="第 74 回駒場祭参加報告"
        linkTo="/articles/komaba-festival-74-day3/"
        edge="left"
      >
        {/* eslint-disable prettier/prettier */}
        <p>例年 5 月に開催される五月祭、11 月に開催される駒場祭にそれぞれ出展しています。様々な企画を用意していますが、その中でも「はじめてのプログラミング教室」は、プログラムに触れたことのない方でもアルゴリズムの力に触れることのできる企画となっています。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
    </ActivityPageTemplate.Layout>
  );
}

export function Head() {
  return <CommonHead title="ut.code(); で学習する" />;
}
