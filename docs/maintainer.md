# ut.code(); Website のメンテナンス担当者ガイド

あなたのタスクは、以下のとおりです。

## 1. 品質担保

- 各ページの品質と開発体験の保持・改善に努めてください。
  - 各ページの品質: デザイン、パフォーマンスなど
  - 開発体験: ビルド時間など
- Website は組織の顔です。常に運営方針を反映してください。
- その他必要だと思ったことは、自発的に行ってください。 (この README を更新するなど)

## 2. 各種リマインド

- イベント開催者に記事を書かせる (自分で書いてもよい)
- ut.code(); に参加したメンバーにメンバーページを書かせる
  - `create-members-page` というヘルパースクリプトが `ut-code/internal-helpers` にあるので、それを使っても良い
- プロジェクトにプロジェクトページを書かせる

# 引き継ぎ

## Internal Helper について

`disallow-large-dir` を使うと、サイズの大きなディレクトリを自動で弾いてくれます。

```sh
#                                                       デフォルト: 5mb contents/[group]/[year]/[article]
nix run github:ut-code/internal-helpers#disallow-large-dir -- --max 1mb contents/*/*/*
```

理想は、CI で各ディレクトリ 1MB 以下に強制したいです。 1 MB を超えるディレクトリはもうそんなに多くないので、行けるはず。
