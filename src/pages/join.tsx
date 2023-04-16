import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import CommonHead from "../components/CommonHead";
import ActionButton from "../components/ActionButton";

export default function JoinPage() {
  // スパム対策
  const [emailAddress, setEmailAddress] = useState<string | null>(null);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setEmailAddress(`contact${String.fromCharCode(64)}utcode.net`);
    }, 1000 * 3);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <GlobalHeader />
      <div className="container mx-auto px-4 pt-16 pb-12">
        <h1 className="text-4xl">ut.code(); に参加する</h1>
      </div>
      <StaticImage alt="" src="../images/join-header.jpg" class="w-full h-48" />
      <main className="container mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <p>
            ut.code(); にご興味をお持ちいただきありがとうございます。 ut.code();
            へのご参加は、Slack ワークスペースへの参加をもって完了となります。
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
          <h2>Slack ワークスペースに参加する</h2>
          <p>以下のサイトにワークスペースへのリンクが記載されています。</p>
          <p>
            <div className="not-prose">
              <ActionButton to="https://sites.google.com/g.ecc.u-tokyo.ac.jp/utcode">
                Slack ワークスペースへのリンク
              </ActionButton>
            </div>
          </p>
          <ul>
            <li>
              サイトを閲覧するためにはECCSクラウドメールでログインしてください。
            </li>
            <li>
              学外の方で入会希望の方は個別に対応いたしますので、以下の連絡手段からご連絡ください。
            </li>
          </ul>
          <h2>コンタクト</h2>
          <h3>Twitter で連絡する</h3>
          <div className="not-prose">
            <ActionButton to="https://twitter.com/utokyo_code">
              ut.code(); 公式 Twitter
            </ActionButton>
          </div>
          <h3>LINE で連絡する</h3>
          <div className="not-prose">
            <ActionButton to="https://line.me/ti/p/%40nlr3843e">
              ut.code(); 公式 LINE
            </ActionButton>
          </div>
          <h3>メールで連絡する</h3>
          <p>
            メールでの入会希望の方は下に記載のメールアドレスをご利用ください。しばらく待っても表示されない方はほかの方法をご利用ください。
          </p>
          <p>
            {emailAddress ? (
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            ) : (
              "読み込み中です..."
            )}
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
