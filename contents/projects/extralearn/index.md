---
date: 2025-04-04
kind: long-term
title: Extra Learn
description: ut.code(); Learn と実際のプロジェクトで使われている最新技術のギャップを埋める
members:
  - ykobayashi
  - rtakanaka
leader: ykobayashi
image:
  src: ./thumbnail.png
github: https://github.com/ut-code/extralearn
website: https://extra.utcode.net
status: under-development
tags:
  - TypeScript
  - Astro
  - Starlight
  - Cloudflare
---

# 現状と問題

現状、 ut.code(); Learn では (第 4 章を除けば) JavaScript のフロントエンドと Node.js、Express という、シンプルながら古典的な構成をしています。

しかし、実際のプロジェクトでは TypeScript はもちろん、 React や Next.js、 Svelte(Kit) 、Bun、 Hono などのような、現代的な技術スタックを使うことが多く、その差分をプロジェクトに入ったあとに自習するしかないということが問題になっていました。

また、 ut.code(); Learn には他にも、 try・catch や async / await のような JavaScript の文法や、 CORS や PWA など発展的な Web API や、セキュリティ的な話などの情報が皆無であり、その存在を自分で発見するのが難しいという問題もありました。

# 解決案

そこで、プロジェクトに入る前にどのような技術が使われているのかをあらかじめ学習したり、プロジェクトを始めた後に必須な情報のデータベースとしての役割を持つ教材を作成しようと考えました。

現在は開発中ですが、以下の要素を追加しようと考えています:

- async / await
- try catch
- JavaScript の組み込みオブジェクト
- package.json
- Svelte
- React の細かいフックの話や落とし穴
- Next.js
- WebSocket や SSE を使ったサーバーサイドから発生するイベント
- データベースのより発展的な話 (リレーションやマイグレーションなど)
- デザインパターンの話
- プロジェクト発足から完成までの流れ

など
