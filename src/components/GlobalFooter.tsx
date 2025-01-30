import clsx from "clsx";
import React from "react";
import { Link } from "gatsby";
import ActionButton from "./ActionButton";
import Logo from "./Logo";

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: { title: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="text-lg">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            {link.to.startsWith("/") ? (
              <Link to={link.to} className="hover:underline">
                {link.title}
              </Link>
            ) : (
              <a
                href={link.to}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GlobalFooter({ className }: { className?: string }) {
  return (
    <footer className={clsx("bg-black text-gray-200", className)}>
      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-x-16 gap-y-8">
          <div style={{ gridRow: "1 / -1" }}>
            <Logo className="w-36" variant="light" />
            <p className="mt-4 text-sm">
              東京大学のソフトウェアエンジニアリングコミュニティ
            </p>
            <ActionButton
              to="/join/"
              variant="dark"
              className="mx-auto mt-6 md:mx-0"
            >
              参加する
            </ActionButton>
          </div>
          <FooterSection
            title="活動"
            links={[
              { title: "ご寄付・ご協賛のお願い", to: "/donation/" },
              { title: "ut.code(); で学習する", to: "/activities/learn/" },
              { title: "ut.code(); で交流する", to: "/activities/share/" },
              { title: "ut.code(); で開発する", to: "/activities/develop/" },
            ]}
          />
          <FooterSection
            title="リンク"
            links={[
              { title: "ut.code(); Learn", to: "https://learn.utcode.net/" },
              {
                title: "はじめてのプログラミング教室",
                to: "https://first-programming.utcode.net/",
              },
              { title: "GitHub", to: "https://github.com/ut-code" },
              { title: "X", to: "https://twitter.com/utokyo_code" },
            ]}
          />
        </div>
        <p className="mt-12 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ut.code();
        </p>
      </div>
    </footer>
  );
}
