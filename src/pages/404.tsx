import * as React from "react";
import CommonHead from "../components/CommonHead";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";

export default function NotFoundPage() {
  return (
    <>
      <GlobalHeader />
      <main className="container mx-auto px-4 py-12 prose">
        <h1>ページが見つかりません</h1>
      </main>
      <GlobalFooter />
    </>
  );
}

export function Head() {
  return <CommonHead title="ページが見つかりません" />;
}
