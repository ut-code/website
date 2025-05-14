# ut.code(); 公式ウェブサイト

## 環境構築・コマンド

`./docs/develop.md` を参照。

## Guidelines

### 一般

フォーマッタは Prettier を用います。
各フロントマッター (トップに書く YAML) のプロパティは `./docs/contents` に説明があります。

### メンバー

- メンバー画像や名前に本名・顔写真を使う必要はありません。
- メンバー画像は、 `faceImage` と `upperBodyImage` の 2 つあります。
  - どちらも 1:1 にクロップされます。
  - `faceImage` はアップの、 `upperBodyImage` は引いた画像を使ってください。元となる画像は同じ画像を使ってください。

### 記事

- サムネイルは縦横比 3:5 にクロップされます。

  - 可能なら 3:5 に近い画像を使い、
  - できないかつクロップが許容できない場合は、 `fit: contain` と背景色 (`bg_color:`) を指定してください。

- 画像サイズは 1MB 未満に抑えてください。 ffmpeg や ImageMagick を使い、解像度を下げたり、画質 (Quality) を下げたり、WebP (or AVIF) に変換するなどができます。
  - 参考 <https://stackoverflow.com/questions/7261855/recommendation-for-compressing-jpg-files-with-imagemagick>

### プロジェクト

- サムネイルは縦横比 3:5 にクロップされます。
