import React, { ReactNode } from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/GlobalHeader";
import CommonHead from "../../components/CommonHead";

function GoogleMapsLogo(props: { className?: string }) {
  const { className } = props;

  return (
    <svg
      viewBox="0 0 2017 1816"
      aria-label="Google マップ"
      className={className}
    >
      <path
        d="M1023 1638l82.8-34.4c-4.6-11.6-18.2-19.6-34.4-19.6-20.7-.1-49.4 18.2-48.4 54m97.2 33.3l31.6 21c-10.2 15.1-34.7 41.1-77.2 41.1-52.6 0-90.6-40.7-90.6-92.6 0-55.1 38.3-92.6 86.1-92.6 43.9 1.5 71.2 29.8 83.5 69.4l-124 51.2c9.5 18.6 24.2 28.1 44.9 28.1 20.6 0 35-10.2 45.5-25.6m-201 56.5h40.7v-272H919zm-66.4-86.7c0-32.6-21.8-56.5-49.5-56.5-28 0-51.6 23.9-51.6 56.5 0 32.3 23.5 55.8 51.6 55.8 27.8 0 49.5-23.5 49.5-55.8zm35.8-87.3v166c0 68.4-40.3 96.5-88 96.5-44.9 0-71.9-30.2-82.1-54.7l35.4-14.7c6.3 15.1 21.8 33 46.7 33 45.5-5.17 49.5-34.6 49.5-67.7h-1.5c-9.1 11.2-26.7 21.1-48.8 21.1-46.3 0-88.8-40.3-88.8-92.3 0-52.3 42.4-93 88.8-93 22.1 0 39.7 9.8 48.8 20.7h1.4v-15.1c0-.1 38.6-.1 38.6-.1zm-444 87c0-33.3-23.8-56.1-51.3-56.1-27.6 0-51.3 22.8-51.3 56.1 0 33 23.8 56.1 51.3 56.1s51.3-23.2 51.3-56.1m40 0c0 53.3-41 92.6-91.3 92.6s-91.3-39.3-91.3-92.6c0-53.7 41-92.6 91.3-92.6s91.3 38.9 91.3 92.6m165 0c0-33.3-23.8-56.1-51.3-56.1-27.6 0-51.3 22.8-51.3 56.1 0 33 23.8 56.1 51.3 56.1s51.3-23.2 51.3-56.1m40 0c0 53.3-41 92.6-91.3 92.6s-91.3-39.3-91.3-92.6c0-53.7 41-92.6 91.3-92.6s91.3 38.9 91.3 92.6m-544 92.6c-79.2 0-146-64.6-146-144 0-79.3 66.7-144 146-144 43.9 0 75.1 17.2 98.6 39.7l-27.7 27.7c-16.8-15.8-39.6-28.1-70.9-28.1-57.9 0-103 46.7-103 104 0 57.9 45.3 104 103 104 37.5 0 58.9-15.1 72.6-28.8 11.2-11.2 18.6-27.4 21.4-49.5h-94v-39.3h132c1.4 7 2.1 15.4 2.1 24.5 0 29.5-8.1 66-34 91.9-25.2 26.5-57.5 40.6-100 40.6"
        fill="#5f6368"
        fillRule="evenodd"
      />
      <path
        d="M1249.14 1725.74v-241.806h31.228l83.978 147.278h1.266l83.978-147.278h31.228v241.806H1449.6l1.266-183.992h-1.266l-75.538 132.508h-18.146l-75.538-132.508h-1.266c2.304 61.2 1.266 122.802 1.266 183.992zm329.16 4.22c-17.724 0-32.072-5.064-43.888-15.192s-17.724-23.632-17.724-40.1c0-18.146 7.174-32.072 21.1-42.2s31.228-15.192 51.484-15.192c18.146 0 33.338 3.376 44.732 10.128-.303-35.1-24.56-44.732-43.466-44.732-17.85.848-33.338 8.313-39.668 24.054l-28.274-12.238c3.798-9.706 11.394-19 22.788-27.43s26.164-12.66 44.732-12.66c21.1 0 38.824 6.33 52.75 18.568s21.1 29.962 21.1 52.328v100.014h-29.54v-22.788c-13.8 17.302-32.452 27.05-56.126 27.43zm55.704-76.804c-18.188-13.842-56.126-15.572-73.85-1.266-13.926 13.504-15.403 31.608-.844 42.2 35.195 22.577 75.96-12.576 74.694-40.934zm151.076 76.804c-12.66 0-24.054-2.532-33.76-8.018s-17.302-12.238-22.366-20.256h-1.688l1.266 22.788v73.006h-30.806v-238.43h29.54v22.788h1.266c5.064-8.018 12.238-14.77 22.366-20.256s21.522-8.018 33.76-8.018c21.522 0 39.668 8.44 55.282 25.32s23.2 37.98 23.2 62.878-7.596 45.998-23.2 62.878c-15.192 16.88-33.76 25.32-54.86 25.32zm-5.064-28.696c14.348 0 26.586-5.486 37.136-16.458s15.614-25.32 15.614-43.466-5.064-32.494-15.614-43.466-22.788-16.458-37.136-16.458c-14.77 0-27.008 5.486-37.136 16.036-10.128 10.972-15.192 25.32-15.192 43.466s5.064 32.916 15.192 43.466c10.128 11.816 22.366 16.88 37.136 16.88zm173.864 28.696c-18.568 0-33.76-4.642-45.576-13.504-12.238-8.862-20.678-20.256-26.586-33.76l27.852-11.394c8.862 20.678 23.632 31.228 44.732 31.228 9.706 0 17.724-2.1 23.632-6.33 6.33-4.22 9.284-9.706 9.284-16.88 0-10.972-7.596-18.146-22.788-21.944l-33.338-8.018c-10.55-2.532-20.678-8.018-29.962-15.192s-14.348-17.724-14.348-30.384c0-14.77 6.33-26.586 19.412-35.448 13.082-9.284 28.274-13.504 45.998-13.504 14.77 0 27.852 3.376 39.246 10.128s19.834 16.036 24.476 28.696l-27.008 10.972c-5.908-14.77-18.568-21.944-37.98-21.944-9.284 0-16.88 2.1-23.2 5.908s-9.284 8.862-9.284 15.614c0 9.284 7.174 16.036 21.944 19.412l32.916 7.596c15.614 3.798 27.008 9.706 34.604 18.568s10.972 18.568 10.972 29.54c0 14.77-5.908 27.43-18.146 37.136-11.816 8.44-27.43 13.504-46.842 13.504z"
        fill="#63666a"
      />
      <path
        d="M831 909.9c37.9 47.4 76.5 107 96.7 143 24.6 46.8 34.8 78.4 53.1 135 10.7 31 20.9 40.4 42.3 40.4 23.4 0 34.1-15.8 42.3-40.4 17.1-53.1 30.3-93.5 51.2-132 80.6-152 212-260 286-408 0 0 48.7-90.4 48.7-217 0-118-48-200-48-200l-572 680z"
        fill="#34a853"
      />
      <path
        d="M637 631.9c46.1 105 134 197 194 278l318-377s-44.9 58.8-126 58.8c-90.4 0-164-72-164-163 0-62.6 37.3-106 37.3-106-234 34.8-221 91.5-260 309z"
        fill="#fbbc04"
      />
      <path
        d="M1153 19.6c106 34.1 196 106 250 211l-254 303s37.3-43.6 37.3-106c0-92.9-78.4-163-163-163-80.3 0-126 58.1-126 58.1 19.5-44.4 221-288 256-303z"
        fill="#4285f4"
      />
      <path
        d="M695 152.9c63.2-75.2 174-153 327-153 73.9 0 130 19.6 130 19.6l-255 303c-17.2-9.33-185-140-202-170z"
        fill="#1a73e8"
      />
      <path
        d="M637 631.9s-41.7-82.8-41.7-202c0-113 44.2-212 100-276l202 170-260 308z"
        fill="#ea4335"
      />
    </svg>
  );
}

function AiAndEducationLogo(props: { className?: string }) {
  const { className } = props;

  return (
    <svg width="520" height="250" viewBox="0 0 520 250" className={className}>
      <path
        d="M40 0C17.9086 0 0 17.9086 0 40V210C0 232.091 17.9086 250 40 250H210C232.091 250 250 232.091 250 210V204.381C210.537 199.46 180 165.796 180 125C180 84.2038 210.537 50.5399 250 45.619V40C250 17.9086 232.091 0 210 0H40Z"
        fill="#7CCE5F"
      />
      <text x="95" y="150" fontSize="70px" fontStyle="italic" fill="white">
        AI
      </text>
      <path
        d="M310 0C287.909 0 270 17.9086 270 40V65.8296C266.748 65.284 263.407 65 260 65C226.863 65 200 91.8629 200 125C200 158.137 226.863 185 260 185C263.407 185 266.748 184.716 270 184.17V210C270 232.091 287.909 250 310 250H480C502.091 250 520 232.091 520 210V40C520 17.9086 502.091 0 480 0H310Z"
        fill="#6ECDE2"
      />
      <text x="325" y="150" fontSize="70px" fontStyle="italic" fill="white">
        教育
      </text>
    </svg>
  );
}

function EventInfoItem(props: { title: string; children: ReactNode }) {
  const { title, children } = props;

  return (
    <div className="flex flex-col md:flex-row text-left items-left md:items-center space-y-2 md:space-y-0 md:space-x-10">
      <div className="bg-[#549C48] font-semibold text-white md:text-center w-full md:w-24 rounded-full px-6 md:px-0 py-2">
        {title}
      </div>
      <div className="flex px-6 md:px-0">{children}</div>
    </div>
  );
}

function EventSummary() {
  return (
    <div className="bg-[#F7FFE5] p-5 space-y-8 rounded-3xl">
      <h2 className="text-[#008D17] font-bold text-3xl text-center">
        イベント概要
      </h2>

      <div className="space-y-4">
        <EventInfoItem title="場所">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            <div>
              <div>GMO インターネットグループ グループ本社 GMO Yours</div>
              <div className="text-sm">
                東京都渋谷区桜丘町 26 番 1 号 セルリアンタワー 11 階
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/PnSJSS44a7E8b1UY9"
              target="_blank"
              rel="noreferrer"
              aria-label="Google マップで場所を見る"
            >
              <GoogleMapsLogo className="h-12 w-12" />
            </a>
          </div>
        </EventInfoItem>
        <EventInfoItem title="日程">
          2023 年 12 月 9 日（土）・10 日（日）15:00～22:00
        </EventInfoItem>
        <EventInfoItem title="対象者">高校生、大学生、大学院生</EventInfoItem>
        <EventInfoItem title="参加費">無料</EventInfoItem>
      </div>

      <div
        className="bg-[#C2ED8B] text-[#055A12] text-center items-center px-4 py-2 space-y-2"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%, 0 0)",
        }}
      >
        <div className="text-2xl font-bold">賞金総額 28 万円！</div>
        <div className="flex justify-around max-w-md mx-auto">
          <div className="text-sm">1 位: 16 万円</div>
          <div className="text-sm">2 位: 8 万円</div>
          <div className="text-sm">3 位: 4 万円</div>
        </div>
      </div>
    </div>
  );
}

export default function CoetecoHackathonPage() {
  return (
    <>
      <GlobalHeader />
      <main className="container mx-auto px-4 py-24 space-y-12 max-w-4xl">
        <h1 className="text-4xl text-center">コエテコ Hack #1</h1>
        <StaticImage
          alt=""
          src="../../images/coeteco-hack-1.png"
          class="h-full"
        />

        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-12 md:space-y-0 px-5">
          <AiAndEducationLogo className="w-full h-full md:w-72" />
          <div className="w-72 text-2xl md:text-xl">
            <div className="text-left">参加者でチームを組み</div>
            <div className="text-center p-3">
              <div className="underline decoration-[#B1EFB0] decoration-8 underline-offset-1">
                最新の AI 技術を用いて
              </div>
              <div className="underline decoration-[#B2ECF3] decoration-8 underline-offset-1">
                教育現場の課題に
              </div>
            </div>
            <div className="text-right">挑みます！</div>
          </div>
        </div>

        <EventSummary />

        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-12 md:space-y-0 px-5">
          <div className="text-xl">
            <div className="text-left">
              アイデアを
              <span className="text-2xl underline decoration-[#CBE495] decoration-8 underline-offset-1 inline-block px-1 py-2 -rotate-12">
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
              className="bg-[#ED9E28] font-semibold text-white text-xl rounded-full inline-block px-8 py-4"
            >
              お申し込みはこちら
            </a>
            <div className="text-[#FF0000]">12 月 1 日（金）17:00 〆</div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return <CommonHead title="コエテコ Hack #1 特設ページ" />;
}
