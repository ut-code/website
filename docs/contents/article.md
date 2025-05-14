
# 記事ページ

## frontmatter

### base

- title: string
  - 記事タイトル。

- date: Date
  - **記事を書いた**日。
  - フォーマット:
    - yyyy-MM-dd (日付のみ)
    - yyyy-MM-dd hh:mm:ss+09:00 (日付+時間)

- author: string & keyof Member
  - 著者。

- categories: string[]
  - 何なんだろうね。

### image 系

- image: path
  - タイトル画像。記事一覧とトップで使うよ。
  - 縦横比 3:5 に crop されるよ。

- fit?: "cover" | "contain" | fill" | "none" = "cover"
  - `object-fit`
  - Astro のビルド段階で Sharp に渡されるよ。
  - <https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit>

- position?: "center" | "left" | "right" | "top" | "bottom"
  - `object-position`
  - Astro のビルド段階で Sharp に渡されるよ。

- bg_color?: string
  - ロード中や画像の漏れたところに見せる背景色。
  - 設定しないと DaisyUI の `skeleton` を使うよ。
