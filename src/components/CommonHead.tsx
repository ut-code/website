import React from "react";
import type { Thing } from "schema-dts";
import faviconImage from "../images/favicon.png";

export default function CommonHead({
  title,
  description,
  image,
  linkedData,
}: {
  title: string | null;
  description?: string;
  image?: string;
  linkedData?: Thing;
}) {
  return (
    <>
      <html lang="ja" />
      <title>
        {title
          ? `${title} | ut.code();`
          : "ut.code(); - 東京大学のソフトウェアエンジニアリングコミュニティ"}
      </title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href={faviconImage} />
      <meta
        property="og:site_name"
        content="ut.code(); - 東京大学のソフトウェアエンジニアリングコミュニティ"
      />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@utokyo_code" />
      {linkedData && (
        <script type="application/ld+json">{JSON.stringify(linkedData)}</script>
      )}
    </>
  );
}
