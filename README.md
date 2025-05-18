# ut.code(); 公式ウェブサイト

## 環境構築・コマンド

`./docs/develop.md` を参照してください。

## `contents` ガイドライン

### 一般

- フォーマッタは Prettier を用います。
- 各フロントマッター (トップに書く YAML) のプロパティは [./docs/contents](./docs/contents) に説明があります。

### 画像ファイル

- HEIC は対応していないので、 ImageMagick で他のフォーマットに変換してください。
  - 例: `magick picture.HEIC picture.webp`
- すべての画像ファイルは 1 MB 未満に抑えてください。既存のものを変更したり、 CI でチェックしたりはまだ実装してないです。

  - ffmpeg や ImageMagick を使い、解像度を下げたり、画質 (Quality) を下げたり、WebP (or AVIF) に変換するなどができます。

    - 例:

      - `mogrify -resize 800x -quality 80 -format webp input.png`

        - ImageMagick についてきます。
        - コマンドの引数は見ての通り。

      - `ffmpeg -i ./input.png -vf 'scale=1920:-1' -crf 10 output.avif`

        - -> 50〜300kb 程度になります。AVIF の場合、多少 (数秒〜1分程度) 時間がかかります。
        - `-vf scale={width}:{height}`: 画像の横幅。height が -1 のときは、横幅から計算する。
        - `-crf`: 画像の圧縮率。大きいほうが圧縮率が高い。

### メンバー

- メンバー画像や名前に本名・顔写真を使う必要はありません。
- メンバー画像は、 `faceImage` と `upperBodyImage` の 2 つあります。
  - どちらも 1:1 にクロップされます。
  - `faceImage` はアップの、 `upperBodyImage` は引いた画像を使ってください。元となる画像は同じ画像を使ってください。

### 記事

- サムネイルは縦横比 3:5 にクロップされます。

  - 可能なら 3:5 に近い画像を使い、
  - できないかつクロップが許容できない場合は、 `thumbnail.fit: contain` と背景色 (`thumbnail.bg`) を指定してください。

- 各記事のファイルサイズの合計は5 MB までに抑えてください。
  - 理想は 1MB 未満です。
  - ファイルサイズの確認には、`ncdu` が使いやすいです。 `ls -alh` でも可能です。

### プロジェクト

- サムネイルは縦横比 3:5 にクロップされます。

## Maintenance

- Website のメンテナンス担当者は、[`./docs/maintainer.md`](./docs/maintainer.md) を参照してください。
