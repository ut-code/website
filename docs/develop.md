## 環境構築

### devcontainer

下のボタンを押すと開発環境が起動します。
起動までしばらく時間がかかるのでお待ちください。

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ut-code/website)

### ローカル

Nix を使うか、以下のパッケージをインストールします。

- (必須) Bun >= v1.2
- (必須) Node.js
- (推奨) 任意のエディタ <https://docs.astro.build/en/editor-setup/>
- (推奨) ImageMagick, ffmpeg

```sh
bun install --frozen-lockfile
```

## 開発

```sh
bun dev
```

<http://localhost:4321/> で開発用サーバーが起動します。

## ビルド

```sh
bun run build
```

## ディレクトリ構造

- `contents/`: 記事のデータです。Astro の Content Collection を使って `src/pages` から読み込みます。
- `src/`
  - `images/`: 記事ではなくデザインに用いる画像です。
  - `pages/`: Astro の機能によりファイル名がパスに変換されます。
  - `islands/`: Astro で読み込む Island の集合です。
  - `content.config.ts`: Astro の Content Collection の設定を書きます。
  - `global.css`: Tailwind の設定ファイルです。
- `astro.config.ts`: Astro の設定ファイルです。Vite の設定もここに書きます。
- `biome.jsonc`: Biome の設定ファイルです。Biome のフォーマット部分は Astro に対応していないので、Lint だけ使っています。対応したら両方 Biome にしましょう。
- `.prettier{rc,ignore}`: Prettier の設定ファイルです。 Prettier には、 astro と svelte と tailwind のプラグインが入っています。
- `svelte.config.js`: 最もフィジカルで、最もプリミティブで、そして最もフェティッシュなフレームワークでいかせていただきます。
