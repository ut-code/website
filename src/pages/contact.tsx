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
          <p>ut.code(); へのお問い合わせは、以下の連絡先をご利用ください。</p>
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
  return <CommonHead title="ut.code(); に連絡する" />;
}
