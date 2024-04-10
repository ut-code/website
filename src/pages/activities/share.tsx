import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import ActivityPageTemplate from "../../components/ActivityPageTemplate";
import CommonHead from "../../components/CommonHead";

export default function ActivityLearnPage() {
  return (
    <ActivityPageTemplate.Layout type="交流">
      <StaticImage
        alt="新歓体験会の様子"
        className={ActivityPageTemplate.coverImageClassName}
        src="../../images/activity-share.jpg"
      />
      <ActivityPageTemplate.Title Icon={FiMessageSquare}>
        交流する
      </ActivityPageTemplate.Title>
      <ActivityPageTemplate.Summary>
        {/* eslint-disable prettier/prettier */}
        <p>ソフトウェア開発のために必要な技術は増加の一途をたどっており、ひとつのソフトウェアのために投資されるエネルギーも拡大し続けています。現代の開発者にとって、多くの関係者と密にコミュニケーションをとり、互いの足りない部分を補い合うことは、大切な技術のひとつです。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Summary>
      <ActivityPageTemplate.Section
        title="作業会"
        renderImage={(className) => (
          <StaticImage
            alt="土曜作業会の様子"
            className={className}
            src="../../images/activity-share-weekly-meetup.jpg"
          />
        )}
        linkLabel="冬の活動報告"
        linkTo="/articles/2022-winter-report/"
        edge="right"
      >
        {/* eslint-disable prettier/prettier */}
        <p>大学の長期休暇は 2 か月にも及ぶため、ソフトウェア開発プロジェクトを実施するには絶好の機会です。しかし、長い休暇を有意義に使うために自らを律することは容易ではありません。</p>
        <p>ut.code(); では、長期休暇の期間中、週末を利用して作業会を開催しています。所属するプロジェクトの打ち合わせに使ったり、普段は交流のない他のプロジェクトの人と繋がりを持ったりできるでしょう。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
      <ActivityPageTemplate.Section
        title="五月祭・駒場祭"
        renderImage={(className) => (
          <StaticImage
            alt="2022 年度駒場祭グランプリ受賞式の様子"
            className={className}
            src="../../images/activity-share-festival.jpg"
          />
        )}
        linkLabel="駒場祭参加報告"
        linkTo="/articles/komaba-grand-prix/"
        edge="left"
      >
        {/* eslint-disable prettier/prettier */}
        <p>東京大学の主要な学園祭である五月祭・駒場祭に、ut.code(); も出展しています。参加者にソフトウェア開発の魅力を知ってもらうことを目標に掲げる企画で、例年たくさんの方からご好評をいただいています。</p>
        <p>ut.code(); のメンバーにとっては、通常より短い期間で実施するプロジェクトでもあり、身に着けた技術での腕試しや、開発チームのリーダーとしての経験を得るための場になっています。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
      <ActivityPageTemplate.Section
        title="合宿"
        renderImage={(className) => (
          <StaticImage
            alt="2023 年度夏合宿の様子"
            className={className}
            src="../../images/activity-share-camp.jpg"
          />
        )}
        linkLabel="夏合宿開催の報告"
        linkTo="/articles/2023-summer-camp/"
        edge="right"
      >
        {/* eslint-disable prettier/prettier */}
        <p>ソフトウェア開発には長い時間がかかります。大学生活には時間的余裕があるとはいえ、集中して開発に取り組むのはなかなか難しいのが現実です。</p>
        <p>ut.code(); の合宿は、慌ただしい日常生活をしばらくの間抜け出し、全力で開発を行う合宿です。帰ってきた後には一回り成長した自分を実感できることでしょう。</p>
        {/* eslint-enable prettier/prettier */}
      </ActivityPageTemplate.Section>
    </ActivityPageTemplate.Layout>
  );
}

export function Head() {
  return <CommonHead title="ut.code(); で交流する" />;
}
