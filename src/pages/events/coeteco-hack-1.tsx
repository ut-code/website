import React, { ReactNode } from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFooter from "@components/GlobalFooter";
import GlobalHeader from "@components/GlobalHeader";
import CommonHead from "@components/CommonHead";
import image from "@images/coeteco-hack-1.png";

function AIAndEducationLogo(props: { className?: string }) {
  const { className } = props;

  return (
    <svg
      width="520"
      height="250"
      viewBox="0 0 520 250"
      className={className}
      role="presentation"
      aria-hidden
    >
      <path
        d="M40 0C17.9086 0 0 17.9086 0 40V210C0 232.091 17.9086 250 40 250H210C232.091 250 250 232.091 250 210V204.381C210.537 199.46 180 165.796 180 125C180 84.2038 210.537 50.5399 250 45.619V40C250 17.9086 232.091 0 210 0H40Z"
        className="fill-lime-400"
      />
      <text x="95" y="150" fontSize="70px" fontStyle="italic" fill="white">
        AI
      </text>
      <path
        d="M310 0C287.909 0 270 17.9086 270 40V65.8296C266.748 65.284 263.407 65 260 65C226.863 65 200 91.8629 200 125C200 158.137 226.863 185 260 185C263.407 185 266.748 184.716 270 184.17V210C270 232.091 287.909 250 310 250H480C502.091 250 520 232.091 520 210V40C520 17.9086 502.091 0 480 0H310Z"
        className="fill-sky-400"
      />
      <text x="325" y="150" fontSize="70px" fontStyle="italic" fill="white">
        教育
      </text>
    </svg>
  );
}

function EventBannerSection() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center space-y-12 md:space-y-0 px-5">
      <AIAndEducationLogo className="w-full h-full md:w-72" />

      <div className="w-full max-w-xs text-2xl md:text-xl">
        <div className="text-left">参加者でチームを組み</div>
        <div className="text-center py-3">
          <div className="underline decoration-lime-200 decoration-8 underline-offset-1">
            最新の AI 技術を用いて
          </div>
          <div className="underline decoration-sky-200 decoration-8 underline-offset-1">
            教育現場の課題に
          </div>
        </div>
        <div className="text-right">挑みます！</div>
      </div>
    </div>
  );
}

function EventInfoItem(props: { title: string; children: ReactNode }) {
  const { title, children } = props;

  return (
    <section className="flex flex-col md:flex-row text-left items-left space-y-2 md:space-y-0 md:space-x-10">
      <h3 className="self-start bg-lime-700 font-semibold text-white md:text-center w-full md:w-24 rounded-full px-6 md:px-4 py-2">
        {title}
      </h3>
      <div className="flex w-full px-6 md:px-0 items-center">{children}</div>
    </section>
  );
}

function EventSummarySection() {
  return (
    <section className="bg-lime-100 p-5 space-y-8 rounded-3xl">
      <h2 className="text-lime-700 font-bold text-3xl text-center">
        イベント概要
      </h2>

      <div className="space-y-4">
        <EventInfoItem title="場所">
          <div className="flex flex-col md:flex-row">
            <div>
              <div>GMO インターネットグループ グループ本社 GMO Yours</div>
              <div className="text-sm">
                東京都渋谷区桜丘町 26 番 1 号 セルリアンタワー 11 階
              </div>
            </div>
            <iframe
              className="self-end w-full md:w-64 md:h-48 border-0 ml-4 my-2 md:my-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3241.833135217821!2d139.6968959!3d35.6564826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b570563e8d9%3A0x6167df231171fe9a!2sGMO%20Yours!5e0!3m2!1sja!2sjp!4v1700378302591!5m2!1sja!2sjp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GMO インターネットグループ グループ本社 GMO Yours の地図"
              aria-hidden
            />
          </div>
        </EventInfoItem>
        <EventInfoItem title="日程">
          <time>2023 年 12 月 9 日（土）・ 10 日（日）15:00 ～ 22:00</time>
        </EventInfoItem>
        <EventInfoItem title="対象者">高校生、大学生、大学院生</EventInfoItem>
        <EventInfoItem title="参加費">無料</EventInfoItem>
      </div>

      <div
        className="bg-lime-300 text-lime-800 text-center items-center px-4 py-2 space-y-2"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%, 0 0)",
        }}
      >
        <div className="text-2xl font-bold">賞金総額 28 万円！</div>
        <ul className="flex justify-around max-w-md mx-auto">
          <li className="text-sm">1 位: 16 万円</li>
          <li className="text-sm">2 位: 8 万円</li>
          <li className="text-sm">3 位: 4 万円</li>
        </ul>
      </div>
    </section>
  );
}

function ParticipationCTASection() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center space-y-12 md:space-y-0 px-5">
      <div className="text-xl w-full max-w-sm">
        <div className="text-left">
          アイデアを
          <span className="text-2xl underline decoration-lime-200 decoration-8 underline-offset-1 inline-block px-1 py-2 -rotate-12">
            カタチ
          </span>
          にする喜びを
        </div>
        <div className="text-right">味わってみませんか？</div>
      </div>
      <div className="text-center space-y-2">
        <a
          href="https://forms.gle/w6KVjyqAtrPKhW5z6"
          target="_blank"
          rel="noreferrer"
          className="bg-amber-500 font-semibold text-white text-xl w-full md:w-64 rounded-full inline-block px-8 py-4 hover:bg-amber-600 hover:shadow-lg hover:scale-105"
          aria-label="イベントへの申し込みフォームへ"
        >
          お申し込みはこちら
        </a>
        <div className="text-red-500">
          <time dateTime="2023-12-01T17:00+09:00">
            12 月 1 日（金）17:00 〆
          </time>
        </div>
      </div>
    </div>
  );
}

export default function CoetecoHackOnePage() {
  return (
    <>
      <GlobalHeader />
      <main className="container mx-auto px-4 py-24 max-w-3xl">
        <article className="space-y-12">
          <h1 className="text-4xl text-center">コエテコ Hack #1</h1>

          <StaticImage
            alt=""
            src="@images/coeteco-hack-1.png"
            class="w-full rounded-3xl"
          />

          <EventBannerSection />

          <EventSummarySection />

          <ParticipationCTASection />
        </article>
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return (
    <CommonHead
      title="コエテコ Hack #1 特設ページ"
      description="ut.code(); と GMO メディア株式会社が共催して、AI × 教育をテーマにハッカソンを開催します。"
      image={image}
    />
  );
}
