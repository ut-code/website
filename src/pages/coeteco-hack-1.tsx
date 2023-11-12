/* eslint-disable prettier/prettier */
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import CommonHead from "../components/CommonHead";
import ActionButton from "../components/ActionButton";

export default function CoetecoHackathonPage() {
  return (
    <>
      <GlobalHeader />
      <div className="container mx-auto px-4 pt-16 pb-12">
        <h1 className="text-4xl">コエテコ Hack#1</h1>
      </div>
      <StaticImage
        alt=""
        src="../images/coeteco-hack-1.png"
        class="w-full h-48"
      />
      <main className="container mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <h2>コエテコ Hack#1 とは</h2>
          <p>
            本イベントは、「コエテコ byGMO」と「ut.code();」が共催する、高校生・大学生・大学院生を対象としたハッカソンイベントです。
          </p>
          <p>
            「AI×教育」をテーマとしたプロダクトの制作を、4人1組のチームになって挑戦していただきます。
          </p>
          <p>
            最終日にはコンペティションを行い、上位3チームには賞金が授与されます。
          </p>
          <h2>『コエテコ Hack#1』の概要</h2>
          <h3>開催日時</h3>
          <p>2023年12月9日 (土)・10日 (日) 15:00 ~ 22:00</p>
          <h3>開催場所</h3>
          <p>GMOインターネットグループ本社 渋谷セルリアンタワー 11階コミュニケーションスペース「GMO Yours」</p>
          <p>(東京都渋谷区桜丘町 26-1 セルリアンタワー11F)</p>
          <h3>賞金</h3>
          <p>総額 28 万円</p>
          <ul>
            <li>1位: 16万円</li>
            <li>2位: 8万円</li>
            <li>3位: 4万円</li>
          </ul>
          <h3>参加対象</h3>
          <p>高校生、大学生、大学院生</p>
          <h3>参加費</h3>
          <p>無料</p>
          <h3>定員</h3>
          <p>50名 (抽選)</p>
          <h3>申し込み方法</h3>
          <p>下記より必要事項を入力してお申し込みください。</p>
          <h3>締切</h3>
          <p className="font-bold">12月1日 (金) 17:00</p>
          <p>
            <div className="not-prose">
              <ActionButton to="https://forms.gle/w6KVjyqAtrPKhW5z6">
                参加申し込みフォーム
              </ActionButton>
            </div>
          </p>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return <CommonHead title="コエテコ Hack#1 特設ページ" />;
}
