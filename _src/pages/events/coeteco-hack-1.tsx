import React, { ReactNode } from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/GlobalHeader";
import CommonHead from "../../components/CommonHead";
import image from "../../images/coeteco-hack-1.png";

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
    <div className="flex flex-col items-center space-y-12 px-5 md:flex-row md:justify-between md:space-y-0">
      <AIAndEducationLogo className="h-full w-full md:w-72" />

      <div className="w-full max-w-xs text-2xl md:text-xl">
        <div className="text-left">参加者でチームを組み</div>
        <div className="py-3 text-center">
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
    <section className="items-left flex flex-col space-y-2 text-left md:flex-row md:space-y-0 md:space-x-10">
      <h3 className="w-full self-start rounded-full bg-lime-700 px-6 py-2 font-semibold text-white md:w-24 md:px-4 md:text-center">
        {title}
      </h3>
      <div className="flex w-full items-center px-6 md:px-0">{children}</div>
    </section>
  );
}

function EventSummarySection() {
  return (
    <section className="space-y-8 rounded-3xl bg-lime-100 p-5">
      <h2 className="text-center text-3xl font-bold text-lime-700">
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
              className="my-2 ml-4 w-full self-end border-0 md:my-0 md:h-48 md:w-64"
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
        className="items-center space-y-2 bg-lime-300 px-4 py-2 text-center text-lime-800"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%, 0 0)",
        }}
      >
        <div className="text-2xl font-bold">賞金総額 28 万円！</div>
        <ul className="mx-auto flex max-w-md justify-around">
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
    <div className="flex flex-col items-center space-y-12 px-5 md:flex-row md:justify-between md:space-y-0">
      <div className="w-full max-w-sm text-xl">
        <div className="text-left">
          アイデアを
          <span className="inline-block -rotate-12 px-1 py-2 text-2xl underline decoration-lime-200 decoration-8 underline-offset-1">
            カタチ
          </span>
          にする喜びを
        </div>
        <div className="text-right">味わってみませんか？</div>
      </div>
      <div className="space-y-2 text-center">
        <a
          href="https://forms.gle/w6KVjyqAtrPKhW5z6"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full rounded-full bg-amber-500 px-8 py-4 text-xl font-semibold text-white hover:scale-105 hover:bg-amber-600 hover:shadow-lg md:w-64"
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
      <main className="container mx-auto max-w-3xl px-4 py-24">
        <article className="space-y-12">
          <h1 className="text-center text-4xl">コエテコ Hack #1</h1>

          <StaticImage
            alt=""
            src="../../images/coeteco-hack-1.png"
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
