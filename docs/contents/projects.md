# プロジェクトページ

`src/pages/projects/[...id].astro` によってレンダリングされるプロジェクト詳細ページです。

プロジェクトには 3 種類あります。

- 長期プロジェクト
- 学園祭プロジェクト
- ハッカソン

歴史的な経緯で長期プロジェクトは `contents/projects` 直下にありますが、学園祭プロジェクトとハッカソンは `contents/projects/{festival,hackathon}`にいれるようにしています。

(NOTE: 学園祭プロジェクトはまだ数が収集できていないので表示していません)

## frontmatter

| キー              | 必須 | 型           | 説明                                                                                  |
| ----------------- | ---- | ------------ | ------------------------------------------------------------------------------------- |
| `app.name`        | ✅   | string       | プロジェクト名                                                                        |
| `app.description` | ✅   | string       | プロジェクトの短い説明。                                                              |
| `app.url`         |      | string->url  | アプリにアクセスできる URL。                                                          |
| `app.platform`    | ✅   | string[]     | ソフトウェアの配布プラットフォーム。`web`, `mobile`, `desktop`, `cli`。               |
| `app.domain`      | ✅   | string[]     | ソフトウェアの種別 (クソ雑ドキュメント)。 `app`, `game`, `tool`, `site`, `lib` など。 |
| `order`           |      | number?      | 表示順。指定されなかった場合は `date` 降順でソートされます。                          |
| `date`            | ✅   | date         | 記事の初回執筆日。ソートのみで利用しています。                                        |
| `kind`            | ✅   | string       | アプリケーションの開発体系。`long-term`, `festival`, `hackathon` の 3 つ。            |
| `status`          | ✅   | string       | プロジェクトの現状。詳細は `src/schema.ts` を参照。                                   |
| `members`         |      | string[]?    | プロジェクトのメンバー。まだメンバーページを作ってなくても問題ないです。              |
| `tags`            |      | string[]?    | 使用されている技術。タグごとのフィルタリング機能等は提供していません。                |
| `thumbnail.src`   | ✅   | string->path | イメージファイルへの markdown からの相対パス。                                        |
| `thumbnail.fit`   |      | string?      | イメージのクロップ方法。 default = "cover"。                                          |
| `thumbnail.bg`    |      | string?      | イメージの背景色。ロード中と `crop` = "contain" のときの背景に使われています。        |
| `social.github`   |      | string->url? | プロジェクトの GitHub 上での URL。                                                    |
| `social.website`  |      | string->url? | プロジェクトのウェブサイトの URL。(`app.url` と別で広報用などの Website がある場合)   |
| `social.youtube`  |      | string->url? | プロジェクトの YouTube 上での URL。                                                   |
| `social.twitter`  |      | string->url? | プロジェクトのツイッター (現 X) の URL。                                              |

## body について

長期プロジェクトの body は各長期プロジェクトのページに使用されています。
それ以外は必要ありません。
