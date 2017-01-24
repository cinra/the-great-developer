# The Great Developer

CINRAのエンジニア学習用リポジトリ

---

## 大まかなルール

- 永続的に成長させていけるようなカリキュラム（特に、インターンの人向け）
- 概略的な情報はWEBにいくらでも転がっているので、あまり時間を割かない
- 実践的、なおかつあまり細かすぎない内容を目指す
- 4月以降に担当を分担して、ブラッシュアップもしていく
- 大目的は、「エンジニアとは…」ということではなく、「CINRAで（エンジニアとして）仕事をするには」、という話にする
- 人に聞く前に参照できる資料として使えるドキュメントをつくる
- チェック項目として使えるドキュメントをつくる

---

## 進め方

- ひとりひとりプロジェクト作って、進捗を確認していきましょう
- 覚えたいと思っている項目を、イシュー化して進めましょう
- 資料を作ってリンクしたり、参照文献を書いてく（この書籍の何ページ目とか）

---

## 基本編

フロントエンド・バックエンド以前に共有しておくべきこと

### Git

- Gitとは：Gitを使うメリット
- Gitの一連の動作（git init / clone / commit / fetch / push / pull）
- ブランチ（branch）とは
- プルリクエスト（PR）とは

### CUI

- 全然こわくない！黒い画面のつかいかた
- 初歩的なコマンド
	- ssh
	- cd / ls / pwd
	- cp / mv / rm / mkdir
	- chown / chmod
	- vi
	- grep

### エディタ

- 文字コードとは
- 改行コードとは
- CINRAエンジニアの推奨エディタ

### 作業環境構築 ( 初期構築 )

- 必要なものだけ設定できるようにドキュメントがまとまっているとよい

### 作業フロー

#### ドキュメンテーション

- 要件定義書
- 仕様書
- ワイヤーフレーム

#### Git開発フロー

- CINRAのGitフロー
	- Gitフロー
	- Githubフロー

#### デプロイフロー

- デプロイフローとは
- Gitを使ったデプロイ
- Wordmove

### ブラウザ

#### 開発者ツール

- 開発者ツールの使い方
- Elementタブ
- Networkタブ
- Consoleタブ

#### Cookie / Local Storage

- Cookieとは
- Local Storageとは

### HTTP

#### Log

- ログの重要性

#### Session

#### メソッド

- GETメソッド
- POSTメソッド
- その他のメソッド

---

## フロントエンド

### 基礎

#### HTML(DOM)

- 俺たちにとってのDOMとは…？

#### CSS

##### SCSS / Sass

#### タスクランナー

- NodeJSの使い方

##### タスクランナー利用の凡例

- スプライト
- アイコンフォントの使い方
- mixin

#### Javascript

##### jQuery

##### ES5 / ES6 ( 基礎的・概念的なこと )

### レスポンシブ

- break pointとは
- viewport
- Retina対応

### HTML5

- テンプレートエンジンを使った製作フロー
- SEO
- 構造化
- OGタグ ( meta )
- SNSのボタンまわりの設定

### CSS

- Can I Useを見る（ブラウザ対応）
- CSSアニメーションの解説
- SVGアニメーションの解説
- レイアウト整え方の概要：floatとtable-cellの使い分けとか
	- レギュレーションが決まったら、別でまとめてリンク貼っとく

#### altCSS

- 命名規則

#### Objective CSS

- Objective CSSとは
- SMACSS
- BEM

### Javascript

#### jQuery

#### MVx

##### React

##### Angular

##### Riot

#### サーバーサイドレンダリング

### NodeJS

---

## バックエンド／サーバーサイド

### 基礎

#### CMSとは

##### Wordpressとは

#### PHPとは

##### 最低限知っておきたいPHPのこと 

- PHPを扱うに当たっての基礎的なこと ( PHPファイルがブラウザで見れない！とか )

#### MVCフレームワーク

#### セキュリティホール

- DB / PHPなど全体的なセキュリティーについて
- アンチパターン

### PHP

#### Wordpress

- コアの説明
- 設計方法

#### FuelPHP

#### Laravel

#### CakePHP

#### EC-Cube

---

## データベース／KVS

### 基礎

#### KVSとRDBの違い

#### DB設計についての概念

### RDB

- SQL文
- 設計のアンチパターン

#### MySQL

### KVS

- 設計のアンチパターン

#### Memcached

#### Redis

#### Realm

---

## インフラ

### 基礎

#### サーバーについて

- サーバーは無茶すると落ちる。

#### Linux

- SSH
- パーミッション

#### Docker

- Dockerとは？
- 環境構築・動かし方

#### SSL

#### DNS

##### ドメイン/サブドメイン

#### VPN

### Apache

### Nginx

### DevOps

#### Ansible

---

## アプリ

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

### Google

- Google Maps API
- Google Analytics API

### Facebook

- Open Graph
- URL Debugger
- シェアボタン

### Twitter

- Twitter Cards

---

- [ひながた](https://cinra.github.io/the-great-developer/template/)