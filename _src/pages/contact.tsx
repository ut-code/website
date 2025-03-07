import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import CommonHead from "../components/CommonHead";
import ActionButton from "../components/ActionButton";

export default function ContactPage() {
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
        <h1 className="text-4xl">ut.code(); に連絡する</h1>
      </div>
      <StaticImage
        alt=""
        src="../images/contact-header.jpg"
        class="w-full h-48"
      />
      <main className="container mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <h2>お問い合わせ</h2>
          <p>ut.code(); へのお問い合わせは、各種 SNS をご利用ください。</p>
          <p className="not-prose flex gap-4">
            <ActionButton to="https://twitter.com/utokyo_code">
              X (旧 Twitter)
            </ActionButton>
            <ActionButton to="https://line.me/ti/p/%40nlr3843e">
              LINE
            </ActionButton>
          </p>
          <p>
            メールでのお問い合わせをご希望の方は、次のメールアドレスまでご連絡ください。
          </p>
          <p>
            {emailAddress ? (
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            ) : (
              "読み込み中です..."
            )}
          </p>
          <h2>ご寄付・ご協賛のお願い</h2>
          <p>
            {/* eslint-disable prettier/prettier */}
            ut.code();
            では、活動を支援していただける方を募集しております。詳細につきましては、次のページをご覧ください。
            {/* eslint-enable prettier/prettier */}
          </p>
          <p className="not-prose">
            <ActionButton to="/donation/">ご寄付・ご協賛のお願い</ActionButton>
          </p>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return <CommonHead title="ut.code(); に連絡する" />;
}
