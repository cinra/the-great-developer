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

範囲問わず、CINRAのWeb／Appエンジニアとして習得しておくべき内容

### Git

- [Gitとは](https://cinra.github.io/the-great-developer/docs/how-about-git) （担当：濱田）
- Gitの基本的な使い方（担当：濱田）
	- 1: [git init / add / commit](https://cinra.github.io/the-great-developer/docs/git-basic-operation)
	- 2: [git push / fetch / pull](https://cinra.github.io/the-great-developer/docs/git-remote-operation)
- [ブランチとプルリクエスト](https://cinra.github.io/the-great-developer/docs/git-branch)（担当：濱田）
- Git開発フロー
    - [CINRAのGitフロー](https://cinra.github.io/the-great-developer/docs/basic-git-cinra-git-flow)
    - Gitフロー
    - Githubフロー
    - Wordmoveを使ったWordpressサイトのデプロイ

<!-- 大項目として設けずとも良さそうな気がしました
### デプロイフロー

- デプロイフローとは → 何を解決したらクリア？
- Gitを使ったデプロイ
- Wordmoveを使ったWordpressサイトのデプロイ
-->

### CUI

- [全然こわくない！黒い画面のつかいかた](https://cinra.github.io/the-great-developer/docs/basic-cui-operation)

<!--
### [エディタ]
  ※ この項目は技術以前の話になるかと思い、不要なのではと考えています.

- 文字コードとは
- 改行コードとは
- CINRAエンジニアの推奨エディタ
-->

### 作業フロー

- [担当範囲（デザイナー、ディレクター、フロントエンドとバックエンドの担当範囲の境界線とは？）](https://cinra.github.io/the-great-developer/docs/basic-flow-assigned-range)

### ドキュメンテーション

- 要件定義書
- 仕様書
- ワイヤーフレーム

<!-- 学習時間と重要度を比較して、そこまで必要性が高くないように感じました
### 開発者ツール

- [Chrome「開発者ツール」の使い方](https://cinra.github.io/the-great-developer/docs/basic-browser-developertool)
- Elementタブ
- Networkタブ
- Consoleタブ
-->

---

## フロントエンド編

### 基礎

- [HTML(DOM)](https://cinra.github.io/the-great-developer/docs/frontend-basic-dom)
- [CSS](https://cinra.github.io/the-great-developer/docs/frontend-basic-css)
- [Javascript](https://cinra.github.io/the-great-developer/docs/frontend-basic-javascript)
- [レイアウトの種類](https://cinra.github.io/the-great-developer/docs/frontend-basic-layout)
- [アセットの管理](https://cinra.github.io/the-great-developer/docs/frontend-basic-assets)

### タスクランナー

- [タスクランナーとは](https://cinra.github.io/the-great-developer/docs/frontend-taskrunner-about)
    - Gulp
    - Grunt
- [npm](https://cinra.github.io/the-great-developer/docs/frontend-taskrunner-npm)
    - [npm scriptsについて](https://cinra.github.io/the-great-developer/docs/frontend-taskrunner-npm#npm_scripts)
    - [dependenciesについて](https://cinra.github.io/the-great-developer/docs/frontend-taskrunner-npm#npm_dependencies)

### HTML（HTML5）（担当：大石）

- 構造化マークアップ
- SEOについて
- Meta Tag
- テンプレートエンジンを使った制作フロー
- [Cookieとは](http://tennensui.sakura.ne.jp/pcrikai/category3/entry22.html)
- [Local Storageとは](http://wp.tech-style.info/archives/742)

### CSS（CSS3）（担当：大石）

- 命名規則
- レイアウト整え方の概要
    - floatとtable-cellの使い分けとか
    - レギュレーションが決まったら、別でまとめてリンク貼っとく
- ブラウザ対応
- CSSアニメーション
- SVGアニメーション
- altCSS
    - [SCSS / Sass](https://www.tam-tam.co.jp/tipsnote/html_css/post5189.html)
- Objective CSS
- SMACSS
- BEM

### Javascript（担当：青木）

- [記法](https://cinra.github.io/the-great-developer/docs/frontend-javascript-markup)
    - ES5, ES6, ES2017
- ライブラリ
    - [jQuery](https://cinra.github.io/the-great-developer/docs/frontend-javascript-jquery)
- altJS
    - JSX
    - TypeScript
    - CoffeeScript
- [トランスパイラ](https://cinra.github.io/the-great-developer/docs/frontend-javascript-translate)
    - [Babel](https://cinra.github.io/the-great-developer/docs/frontend-javascript-translate#translate_babel)
- MVx フレームワーク
    - Vue
    - React
    - Angular
    - Riot

### NodeJS
- NodeJSの使い方
- サーバーサイドレンダリング

---

## バックエンド編（担当：二階）

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
- [メソッド](http://scene-live.com/page.php?page=27)
    - GETメソッド
    - POSTメソッド
    - その他のメソッド
- Composer
- フレームワーク
    - FuelPHP
    - Laravel
    - CakePHP

### CMS

- Wordpress
    - コアの説明
    - テーマの作り方
    - プラグイン
    - 設計方法
    - getText・POファイルを使った多言語化
- EC-Cube

---

## データベース編

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

## インフラストラクチャー編

### 基礎

- [TCP/IP](https://cinra.github.io/the-great-developer/docs/infra-basic-tcpip)
- [DNS](https://cinra.github.io/the-great-developer/docs/infra-basic-dns)
- [SSH](https://cinra.github.io/the-great-developer/docs/infra-basic-ssh)
    - [パスワード認証]()
    - [公開鍵認証]()
- [セキュリティ]()
    - [ファイヤーウォール]()
- [サービス](https://cinra.github.io/the-great-developer/docs/infra-basic-service)
    - [クラウド](https://cinra.github.io/the-great-developer/docs/infra-basic-service#infra_cloud)
        - [Saas](https://cinra.github.io/the-great-developer/docs/infra-basic-service#infra_saas)
        - [Paas](https://cinra.github.io/the-great-developer/docs/infra-basic-service#infra_paas)
        - [Iaas](https://cinra.github.io/the-great-developer/docs/infra-basic-service#infra_iaas)
    - [オンプレ](https://cinra.github.io/the-great-developer/docs/infra-basic-service#infra_onpre)
- [SSL]()


<!--
- rsync
- port
-->

### ネットワーク

- ネットワークログ
- [Session](http://web-tan.forum.impressrd.jp/g/%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3)
- VPN
具体的に設定をみてもらう感じでもいいかもしれない( パブリックなので注意 )

### サーバーOS

- [サーバーとは](https://eng-entrance.com/web-server-mechanism)
    - WEBサーバー
        - 構成要素
    - 「サーバーは無茶すると落ちる」
- Linux

<!-- CUIオペレーションで理解してるはず
- SSH
- パーミッション
- ユーザー
-->

### サーバーソフトウェア

- Apache
    - 設定方法
    - モジュール

- Nginx
    - 設定方法

### Dev/Ops

- [Vagrant](https://cinra.github.io/the-great-developer/docs/infra-devops-vagrant)
- [Ansible](https://cinra.github.io/the-great-developer/docs/infra-devops-ansible)
- Docker
    - Dockerとは？
    - 環境構築・動かし方

---

## アプリ編（担当：伊藤）

### 基礎

### C&#35;

### Xamarin

### Android ネイティブの素養

### iOS ネイティブの素養

---

## テスト編

### 基礎

- テストの種類
- TDD/E2Eとは？

### ユニットテストとは

### PHPUnit

### CI

### 手動デバッグ

- ブラウザ・モダンIE・検証環境
- デバッグ方法・ルール
- Chromeの検証の使い方

---

## 外部サービス編

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
