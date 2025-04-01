---
title: WebCFace
kind: long-term
status: stable
image:
  src: ./thumbnail.png
date: 2023-09-28
description: プロセス間通信 & GUIを提供するライブラリ
tags: [C++, Python, JavaScript, TypeScript, WebSocket, MessagePack, React]
github: https://github.com/na-trium-144/webcface
---

- ROS1 のようなプロセス間通信と、GUI によるデータの可視化や関数呼び出し、また Immediate-Mode でのシンプルな UI の作成ができます。
- C++ (C++17以上), C, Python (3.6以上), JavaScript/TypeScript で相互に数値、文字列、画像などのデータを送受信したり、関数を呼び出したりすることができます。
- Linux, MacOS, Windows(MSVC, MinGW, MSYS2, Cygwin) で動作します。

## Easy to Setup

WebCFace はサーバー側のプログラム `webcface-server` と、 クライアントライブラリで構成されています。 使い方はサーバーを起動し、クライアントライブラリを利用したプログラムを起動するだけです。 ROS のようなワークスペース管理機能はなく、どんなフレームワークのプロジェクトにも簡単に組み込むことができます。

Python, JavaScript には PyPI / npm に webcface パッケージを用意しているのでそれをインストールするだけで使えます。 通信にWebSocketを使用しているため、Webブラウザ上でもそのまま動作します。

## Inter-process Communication

WebCFace の通信には WebSocket と MessagePack を使っています。 このためプロセス間だけでなく Web ブラウザーとの通信が可能になっています。 さらに同一マシン上や Docker, WSL 経由など使用可能な場合は TCP の代わりに Unix ドメインソケットを使用します。

WebCFaceで送受信できるデータ型として

- 数値型・数値配列型 (Value)
- 文字列型 (Text)
- 画像 (Image)
- 関数呼び出し (Func)
- テキストログ (Log)

などの型が用意されています。 ユーザーがメッセージ型を定義できる ROS や gRPC と比べると自由度は低いかもしれませんが、 これらのデータ型の組み合わせであれば簡単に送受信させることができます。

Image 型データは送受信の過程で画像を縮小したり JPEG や PNG に圧縮したりといった操作をサーバー側で行うことができます。 表示目的など、圧縮した画像で十分な場合には簡単に通信量を削減できます。

WebCFace の通信データ形式は OS やライブラリの言語によらず共通で、またバージョン間で後方互換性があります。 つまり、サーバーがクライアントより新しいバージョンでさえあれば、異なるバージョンのクライアント同士でも、異なるバージョンの OS でも問題なく通信が可能です。

## WebUI

WebCFace ではプログラム間でデータの送受信ができる API だけでなく、 Web ブラウザーから WebCFace で通信されているデータを可視化したり関数を呼び出したりできる UI (WebUI) を提供します。 さらにボタンや入力欄などの並べ方を WebCFace を使った C++, Python などのプログラムの側で定義してそれを WebUI に表示させることができ、 これにより HTML や CSS の知識がなくても簡易な UI を作成することができます。

また、同様に 2D、3D の図形も WebCFace を使ったプログラム側の記述のみで WebUI に描画させることができます。

## WebCFace-Tools

コマンドラインから WebCFace のデータにアクセスできるコマンドもいくつか用意しています。

webcface-launcher は事前に登録しておいたコマンドの起動・停止を WebCFace の View から操作することができる機能です。 server と launcher だけを常時起動しておき、WebUI を使ってプログラムをリモートに操作するという使い方ができます。

webcface-tui はターミナル上で操作できる TUI アプリで、Web ブラウザを開かなくてもデータをリアルタイムで確認したり、View の操作もできます。
