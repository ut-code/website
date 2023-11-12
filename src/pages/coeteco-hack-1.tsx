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
        <h1 className="text-4xl">コエテコハッカソン 特設ページ</h1>
      </div>
      <StaticImage
        alt=""
        src="../images/coeteco-hackathon.png"
        class="w-full h-48"
      />
      <main className="container mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <p>
            本イベントは、高校生・大学生・大学院生を対象に参加者を募集します。「AI×教育」をテーマに、教育
            現場における課題を最新の AI
            技術を使って解決するプロダクトの制作を、4 人 1
            組のチームになって挑戦
            していただきます。最終日にはコンペティションを行い、上位 3
            チームには賞金が授与されます。 『コエテコ Hack#1』は、「コエテコ
            byGMO」と「ut.code();」の継続的な協力の第一歩として開催
            し、今後も定期的に実施していく予定です。
          </p>
          <p>
            <div className="not-prose">
              <ActionButton to="">
                {/* TODO: リンク先を追加 */}
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
  return <CommonHead title="コエテコハッカソン 特設ページ" />;
}
