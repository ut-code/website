import React from "react";
import type { WithContext, Thing } from "schema-dts";
import faviconImage from "../images/favicon.png";
import config from "../../gatsby-config";

export default function CommonHead({
  title,
  description,
  keywords,
  image,
  linkedData,
}: {
  title: string | null;
  description?: string;
  keywords?: string[];
  image?: string;
  linkedData?: WithContext<Thing>;
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
      <meta
        property="og:title"
        content={
          title
            ? `${title} | ut.code();`
            : "ut.code(); - 東京大学のソフトウェアエンジニアリングコミュニティ"
        }
      />
      {config.siteMetadata?.siteUrl && image && (
        <meta
          property="og:image"
          content={`${config.siteMetadata?.siteUrl}${image}`}
        />
      )}
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@utokyo_code" />
      <meta
        name="keywords"
        content={[
          ...(keywords ?? []),
          "ソフトウェアエンジニアリング",
          "プログラミング",
          "東京大学",
          "サークル",
        ].join(",")}
      />
      {linkedData && (
        <script type="application/ld+json">{JSON.stringify(linkedData)}</script>
      )}
    </>
  );
}
