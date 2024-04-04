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
          <h2>参加方法</h2>
          <p>
            ut.code(); へのご参加は、Slack
            ワークスペースへの参加をもって完了となります。
          </p>
          <p>
            学外の方や小学生から社会人の方まで、幅広く受け入れを行っておりますので、お気軽にご参加ください。
          </p>
          <p>
            学内生でサークル参加希望の方は次のボタンからお進みください。
            大学が提供する Google Workspace アカウントでのログインが必要です。
          </p>
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
          <h2>Slack 参加後の流れ</h2>
          <h3>Slack の使い方</h3>
          <p>ut.code(); は Slack を用いてコミュニケーションを行っています。</p>
          <p>
            まずは、Slack の <code>#300_自己紹介</code>{" "}
            チャンネルで自己紹介をしましょう！
          </p>
          <p>
            <code>#000_general</code>{" "}
            では全体へのお知らせが流れています。このチャンネルだけは常にチェックするようにしましょう。
          </p>
          <p>
            <code>#041_question</code>{" "}
            チャンネルでは自由に質問をすることができます。プログラミングに限定せず、履修の相談など様々な質問が行われているので積極的に活用しましょう。
          </p>
          <p>
            <code>#010_random</code>{" "}
            チャンネルでは自由に好きなことを話すことができます。おもしろいものを見つけたり、他の人に共有したいことがある場合はぜひこちらに投稿してください。
          </p>
          <p>
            ut.code();
            は、活動の透明性を重視しているため、全てのチャンネルはパブリックチャンネルとなっています。チャンネル一覧からすべてのチャンネルを確認できますので、気になるチャンネルがあればお気軽にご参加ください。
          </p>
          <h3>活動の流れ</h3>
          <p>
            ut.code();
            は学習・交流・開発の3つの柱で活動しています。まず講習会などで基本的なことを学び、その後にプロジェクトに参加して実践的な開発をするという流れになっています。また、不定期で各種イベントも開催しています。講習会や各種イベントについては、
            <code>#000_general</code>{" "}
            チャンネルで随時お知らせしていますので、こちらをチェックしてください。
          </p>
          <p>まず、学習方法としては各種ゼミや講習会を開催しています。</p>
          <ul>
            <li>
              <div>全ゼミ/自主ゼミ</div>
              <div>
                毎学期全ゼミ/自主ゼミを開講しています。全ゼミ/自主ゼミでは、プログラミングの基礎から応用まで
                Web
                開発に必要なことを一通り学ぶことができます。最新の全ゼミの情報は、
                <a
                  href="/articles/2024-s-specialized-seminar-announcement/"
                  target="_blank"
                  rel="noreferrer"
                >
                  こちら
                </a>
                から。
              </div>
            </li>
            <li>
              <div>新歓講習会</div>
              <div>
                新歓の時期には、プログラミングを基礎から学べる新歓講習会を行っています。最新の新歓講習会の情報は、
                <a
                  href="/articles/2024-welcome-events/"
                  target="_blank"
                  rel="noreferrer"
                >
                  こちら
                </a>
                から。
              </div>
            </li>
            <li>
              <div>ut.code(); Learn</div>
              <div>
                <a
                  href="https://learn.utcode.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ut.code(); Learn
                </a>
                という独自に開発した教材があります。こちらを利用して学習することもできます。
              </div>
            </li>
          </ul>
          <p>
            プログラミングの上達には実践が必須です。ある程度学習した後は、各プロジェクトに参加して共同開発の経験を積みましょう。プロジェクトに入りながら学習することも可能です。プロジェクトについては、常にメンバーを募集しているため、Slack
            のチャンネルで気になるプロジェクトがある場合はお気軽にご参加ください。
          </p>
          <ul>
            <li>
              <div>五月祭/駒場祭プロジェクト</div>
              <div>
                五月祭プロジェクトは、毎年2月から5月にかけて活動しています。駒場祭プロジェクトは、8月から11月にかけて活動しています。五月祭/駒場祭プロジェクトは、初心者でも参加しやすいのでおすすめです。
              </div>
            </li>
            <li>
              <div>常設プロジェクト</div>
              <div>
                常設プロジェクトでは長い期間をかけて開発をしています。現在では10個以上のプロジェクトがあります。こちらも常にメンバーを募集しています。
              </div>
            </li>
          </ul>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return <CommonHead title="ut.code(); に参加する" />;
}
