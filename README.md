# ut.code(); 公式ウェブサイト

[Gatsby](https://www.gatsbyjs.com/) SSG

## 環境構築

### 必須

- Node.js v18

```
npm ci
```

### 推奨

- VSCode
  - [ESLint 拡張機能](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Apollo 拡張機能](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)

## 開発

```
npm start
```

## ビルド

```
npm run build
```

## ディレクトリ構造

- `contents`: 記事のデータです。`/templates` ディレクトリ内のファイルで HTML への変換ルールが定義されます。
  - `articles`: 記事です。`/articles/サブディレクトリ名` に出力されます。
  - `members`: メンバーの情報です。現状メンバー専用ページは用意していませんが、記事ページから表示できます。
  - `projects`: プロジェクトの情報です。`/projects/サブディレクトリ名` に出力されます。
- `src`
  - `components`: 共通コンポーネント
  - `images`: 記事ではなくデザインに用いる画像です。import しない限り出力されません。
  - `pages`: Gatsby の機能によりファイル名がパスに変換されます。
  - `styles`: CSS ファイルです。
  - `templates`: `contents` ディレクトリ内の Markdown ファイルを HTML に変換するルールを定義します。対応関係は `gatsby-node.ts` で定義されています。
  - `gatsby-types.d.ts`: GraphQL クエリの型情報が入ります。自動生成されます。
  - `images.d.ts`: TypeScript ファイルから画像ファイルを import できるようにするための型定義ファイルです。
- `gatsby-{browser,config,node}.ts`: Gatsby の設定ファイルです。
- `apollo.config.js`: Apollo Language Server が動作するために必要なファイルです。削除してもウェブサイトの動作には影響を与えません。
- `{postcss,tailwind}.config.js`: Tailwind 用の設定です。

## プルリクエストを出す前に

```
npm run lint && npm run type-check
```
