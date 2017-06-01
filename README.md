# The Great Developer

CINRAのエンジニア学習用リポジトリ

---

## 大まかなルール

- 永続的にアップデートしていけるようなカリキュラムとする
    - 特に、インターン教育資料として、使用する
    - 教育コストを下げながら、レベルを上げることを目的とする
- 概略的な情報はWEBにいくらでも転がっているので、あまり時間を割かない
- 実践的、なおかつあまり細かすぎない内容を目指す
- 4月以降に担当を分担して、ブラッシュアップもしていく
- 大目的は、「エンジニアとは…」ということではなく、「CINRAで（エンジニアとして）仕事をするには」という地点を目標に据える
- 人に聞く前に参照できる資料として使えるドキュメントをつくる
- チェック項目として使えるドキュメントをつくる

## 資料のディレクトリ構成
- プレフィックスみたいにディレクトリを作成？

---

## 進め方

- ひとりひとりプロジェクト作って、進捗を確認していきましょう
- 覚えたい／覚えて欲しい項目を、イシュー化して進めましょう
- 資料を作ってリンクしたり、参照文献を記載するなど、「車輪の再発明」は最小限にして、誰かの資産を使いましょう
- 他の人が作った資料を変更したい場合は、PRを出す

---

## 基本編

フロントエンド・バックエンド以前に共有しておくべきこと

### Git

- [Gitとは](https://cinra.github.io/the-great-developer/docs/how-about-git) （担当：濱田）
- Gitの基本的な使い方（担当：濱田）
	- 1: [git init / add / commit](https://cinra.github.io/the-great-developer/docs/git-basic-operation)
	- 2: [git push / fetch / pull](https://cinra.github.io/the-great-developer/docs/git-remote-operation)
- [ブランチとプルリクエスト](https://cinra.github.io/the-great-developer/docs/git-branch)（担当：濱田）

### CUI

- [全然こわくない！黒い画面のつかいかた](/the-great-developer/docs/cui-operation)
- 基礎／汎用
	- ls / cd / pwd / cat
    - touch
	- cp / mv / rm / mkdir
	- vi
- 初級
    - whoami
    - sudo
    - chown / chmod
    - ssh
- 中級
	- grep
    - scp

### [エディタ]
<!--
  ※ この項目は技術以前の話になるかと思い、不要なのではと考えています.
-->

- 文字コードとは
- 改行コードとは
- CINRAエンジニアの推奨エディタ

### 作業環境構築（初期構築）

- 基本
- [Vagrant](https://cinra.github.io/the-great-developer/docs/basic-vagrant)
- [Ansible](https://cinra.github.io/the-great-developer/docs/basic-ansible)
- Docker
- [タスクランナー](https://cinra.github.io/the-great-developer/docs/init-taskrunner)
	- Gulp
	- Grunt

### 作業フロー

- [担当範囲](https://cinra.github.io/the-great-developer/docs/flow-assigned-range)  
デザイナー、ディレクター、フロントエンドとバックエンドの担当範囲の境界線とは？  

#### ドキュメンテーション

- 要件定義書
- 仕様書
- ワイヤーフレーム

#### Git開発フロー

- [CINRAのGitフロー](https://cinra.github.io/the-great-developer/docs/flow-cinra-git-flow)
	- Gitフロー
	- Githubフロー

#### デプロイフロー

- デプロイフローとは → 何を解決したらクリア？
- Gitを使ったデプロイ
- Wordmoveを使ったWordpressサイトのデプロイ

### ブラウザ

#### 開発者ツール

- [Chrome「開発者ツール」の使い方](https://cinra.github.io/the-great-developer/docs/basic-browser-developertool)
- Elementタブ
- Networkタブ
- Consoleタブ

#### Cookie / Local Storage

- [Cookieとは](http://tennensui.sakura.ne.jp/pcrikai/category3/entry22.html)
- [Local Storageとは](http://wp.tech-style.info/archives/742)

### [HTTP](https://www.nic.ad.jp/ja/basics/terms/http.html)

#### Log

- ログの重要性

#### [Session](http://web-tan.forum.impressrd.jp/g/%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3)

#### メソッド

- GETメソッド
- POSTメソッド
- その他のメソッド

---

## フロントエンド

### 基礎

#### HTML(DOM)

- DOMとは

#### CSS

##### SCSS / Sass

- expand
- mixin

#### タスクランナー

- NodeJSの使い方

##### タスクランナー利用の凡例

- Sprite
- アイコンフォントの使い方

#### Javascript

##### jQuery

##### ES5 / ES6 ( 基礎的・概念的なこと )

### レスポンシブ

- break pointとは
- viewport
- Retina対応

### HTML5（担当：大石）

- テンプレートエンジンを使った制作フロー
- SEOについて
- 構造化マークアップ
- Meta Tag

### CSS（担当：大石）

- レイアウト整え方の概要
    - floatとtable-cellの使い分けとか
    - レギュレーションが決まったら、別でまとめてリンク貼っとく
- ブラウザ対応
- CSSアニメーション
- SVGアニメーション

#### altCSS

- 命名規則

#### Objective CSS

- Objective CSSの概念
- SMACSS
- BEM

### Javascript（担当：青木）

#### [jQuery](https://cinra.github.io/the-great-developer/frontend-jquery)

#### MVx フレームワーク

##### React

##### Angular

##### Riot

#### サーバーサイドレンダリング

### NodeJS

---

## バックエンド／サーバーサイド （担当：二階）

### 基礎

- システム仕様書について
- CMSとは
    - MovableType概要
- セキュリティについて
    - アンチパターン
- MVCフレームワークとは
    - Model
    - View
    - Controller

### PHP

- 最低限知っておきたいPHPのこと
    - PHPを扱うに当たっての基礎的なこと
    - PHPファイルがブラウザで見れない！とか
- Composer

#### Wordpress

- コアの説明
- テーマの作り方
- プラグイン
- 設計方法
- getText・POファイルを使った多言語化

#### FuelPHP

#### Laravel

#### CakePHP

#### EC-Cube

---

## データベース／KVS

### 基礎

- データベースの種類
    - RDBとKVS
    - DB設計についての概念

### RDB

- 設計のアンチパターン
- SQL文
- MySQLについて

### KVS

- Memcached
- Redis
- Realm

---

## インフラ

### 基礎

- サーバーについて
    - 「サーバーは無茶すると落ちる」
- クラウドとオンプレ
- WEBサーバの構成要素

### Linux

- SSH
- パーミッション
- ファイヤーウォール
- ユーザー
- rsync
- port
- TCP/IP
- 秘密鍵・公開鍵
- SSL

### Docker

- Dockerとは？
- 環境構築・動かし方

### DNS

- name server → パターンであげとくだけでもいいかもしれない
    - ドメイン・サブドメイン ( お名前.comの使い方とか )

### VPN
具体的に設定をみてもらう感じでもいいかもしれない  
( パブリックなので注意 )

### WEBサーバー

#### Apache
- 設定方法
- モジュール

#### Nginx
- 設定方法

### DevOps

#### Ansible

---

## アプリ（担当：伊藤）

### 基礎

### C&#35;

### Xamarin

### Android ネイティブの素養

### iOS ネイティブの素養

---

## テスト

### 基礎

#### テストの種類

- TDD/E2Eとは？

### ユニットテストとは

### PHPUnit

### CI

### 手動デバッグ

- ブラウザ・モダンIE・検証環境
- デバッグ方法・ルール
- Chromeの検証の使い方

---

## 外部サービス

### OAuth2

### Google

- Google Maps API
- Google Analytics API
- Google カスタム検索エンジン

### YouTube

- YouTube API

### Facebook

- Open Graph
- URL Debugger
- シェアボタン

### Twitter

- Twitter Cards

---

- [ひながた](https://cinra.github.io/the-great-developer/template/)
