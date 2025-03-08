<<<<<<< HEAD
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import CommonHead from "../components/CommonHead";
import ActionButton from "../components/ActionButton";

export default function JoinPage() {
  return (
    <>
      <GlobalHeader />
      <div className="container mx-auto px-4 pt-16 pb-12">
        <h1 className="text-4xl">ut.code(); に参加する</h1>
      </div>
      <StaticImage alt="" src="../images/join-header.jpg" class="w-full h-48" />
      <main className="container mx-auto px-4 py-16">
        <div className="prose max-w-none">
          {/* ut.code(); 新歓情報 */}
          <p>
            ut.code();
            は、プログラミングはもちろん、ものづくりが好きな人、デザインに興味がある人、アイデアを形にしたい人など、幅広い人を歓迎しています！
          </p>
          <h2>🔷 入部について</h2>
          <p>ut.code(); の部員は基本的に大学生・大学院生に限定しています。</p>
          <p>
            ut.code(); では、 部員同士の交流やプロジェクトの連絡は、主に Discord
            で行っています。入部したい場合は、まずは Discord
            に入ってみてください。
          </p>
          <p>
            東大生の方は、次のリンクから Discord に参加できます。大学が提供する
            Google Workspace アカウントでのログインが必要です。
          </p>
          <div className="not-prose">
            <ActionButton to="https://sites.google.com/g.ecc.u-tokyo.ac.jp/utcode/discord-%E6%96%B0%E6%AD%93%E3%81%AE%E6%96%B9%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89">
              参加したい方はこちら
            </ActionButton>
          </div>
          <p>
            学外の方でサークル参加希望の方は、
            <a href="/contact">ut.code(); の公式メールアドレス</a>
            からご連絡ください。
          </p>
          <h2>📅 新歓日程</h2>
          <p>今年の新歓日程は以下のとおりです。</p>
          <p>日時・場所の詳細は確定し次第追加します。</p>
          <ul>
            <li>
              4/7 (月), 11 (金), 16 (水), 18 (金), 23 (水), 25 (金), 30 (水)
              19:00 ~ 21:30 先取り自主勉強会
              <ul>
                <li>駒場学生会館 313 B (部室) で行います！</li>
                <li>
                  いち早くプログラミングを学び、プロジェクトに参加できるスキルをつけよう！
                </li>
                <li>途中参加・途中退出可。</li>
              </ul>
            </li>
            <li>
              4/9 (水) エンジニア系サークル合同新歓
              <ul>
                <li>TSG、UTFF、RoboTech、灯と合同で新歓説明会を開催！</li>
              </ul>
            </li>
            <li>
              4/12 (土) 新歓講習会 (予定)
              <ul>
                <li>
                  授業形式で HTML・CSS・JavaScript の基礎を学び、簡単な Web
                  アプリを公開できるようになります。
                </li>
              </ul>
            </li>
            <li>4/15 (火) エンジニア系サークル合同新歓 (4/9 と同じ内容です)</li>
            <li>4/20 (日) 新歓講習会 (予定) (4/12 と同じ内容です)</li>
          </ul>
          <p>興味がある方は、ぜひ気軽に参加してみてください！</p>
          <h2>💬 コミュニティについて</h2>
          <p>また、 ut.code(); では Slack コミュニティを運営しています。</p>
          <p>
            コミュニティには、どなたでも参加可能 です。一部のプロジェクトでは
            Slack を使ってやりとりをしています。
          </p>
          <p>
            東大生の方は、
            <a href="https://sites.google.com/g.ecc.u-tokyo.ac.jp/utcode/slack">
              こちら
            </a>
            から参加できます。
          </p>

          <p>
            学外で参加希望の方は、 ut.code();
            の公式メールアドレスからご連絡ください。
          </p>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return <CommonHead title="ut.code(); に参加する" />;
}
=======
>>>>>>> 9135235 (complete /members)
