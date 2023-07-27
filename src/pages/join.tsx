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
          <p>ut.code(); にご興味をお持ちいただきありがとうございます。</p>
          <h2>ut.code(); への参加をご希望の方へ</h2>
          <p>
            ut.code(); へのご参加は、Slack
            ワークスペースへの参加をもって完了となります。
          </p>
          <p>
            ut.code(); の活動は基本的にはプロジェクト単位なので、Slack
            ワークスペースの参加時点では特に活動はありません。
            <code>#general</code>{" "}
            チャンネル等でのイベントや新規プロジェクトの告知を利用するか、ご興味のあるプロジェクトを探して参加してください。
          </p>
          <p>
            ut.code();
            は、活動の透明性を重視しています。全てのチャンネルはパブリックチャンネルとなっており、現在活動しているプロジェクトの情報は
            Slack のチャンネル一覧からいつでも確認できます。
          </p>
          <p>
            学外の方や小学生から社会人の方まで、幅広く受け入れを行っておりますので、お気軽にご参加ください。
          </p>
          <p>学内生でサークル参加希望の方は以下のボタンからお進みください。</p>
          <p>
            <div className="not-prose">
              <ActionButton to="https://sites.google.com/g.ecc.u-tokyo.ac.jp/utcode">
                Slack ワークスペースへのリンク
              </ActionButton>
            </div>
          </p>
          <p>
            学外の方でサークル参加希望の方は、ut.code();
            の公式メールアドレスからご連絡ください。
          </p>
          <p>
            <div className="not-prose">
              <ActionButton to="/contact/">ut.code(); の連絡先</ActionButton>
            </div>
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
