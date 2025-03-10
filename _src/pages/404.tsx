import * as React from "react";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import CommonHead from "../components/CommonHead";

export default function NotFoundPage() {
  return (
    <>
      <GlobalHeader />
      <main className="prose container mx-auto px-4 py-12">
        <h1>ページが見つかりません</h1>
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return <CommonHead title="ページが見つかりません" />;
}
