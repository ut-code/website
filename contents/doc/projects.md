# プロジェクトページ

`src/pages/projects/[...id].astro` によってレンダリングされるプロジェクト詳細ページです。

プロジェクトには 3 種類あります。

- 長期プロジェクト
- 学園祭プロジェクト
- ハッカソン

歴史的な経緯で長期プロジェクトは `contents/projects` 直下にありますが、学園祭プロジェクトとハッカソンは `contents/projects/{festival,hackathon}`にいれるようにしています。

## frontmatter

| キー          | 必須 | 説明                                                                           |
| ------------- | ---- | ------------------------------------------------------------------------------ |
| `title`       | ✅   | プロジェクト名                                                                 |
| `order`       |      | 表示順。指定されなかった場合は `date` 降順でソートされます。                   |
| `date`        | ✅   | プロジェクトの開始日。現状ソートのみで利用しています。                         |
| `image`       | ✅   | イメージ画像に関するデータ。                                                   |
| `image.src`   | ✅   | イメージファイルへの markdown からの相対パス。                                 |
| `image.fit`   |      | イメージのクロップ方法。 default = "cover"。                                   |
| `image.bg`    |      | イメージの背景色。ロード中と `crop` = "contain" のときの背景に使われています。 |
| `description` | ✅   | 短い説明。                                                                     |
| `tags`        |      | 使用されている技術など。現状タグごとのフィルタリング機能等は提供していません。 |
| `github`      |      | プロジェクトの GitHub 上での URL。                                             |
| `youtube`     |      | プロジェクトの YouTube 上での URL。                                            |
| `website`     |      | プロジェクトのウェブサイトの URL。                                             |

## body について

長期プロジェクトの body は各長期プロジェクトのページに使用されています。
それ以外は必要ありません。
