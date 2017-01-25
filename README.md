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
- Gitの一連の動作（git init / clone / commit / fetch / push / pull）（担当：濱田）
- ブランチ（branch）（担当：濱田）
- プルリクエスト（PR）（担当：濱田）

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

### 作業環境構築（初期構築）

- 基本
- Vagrant
- Docker
- Gulp
- Grunt

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
- Wordmoveを使ったWordpressサイトのデプロイ

### ブラウザ

#### 開発者ツール

- Chrome「開発者ツール」の使い方
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

### HTML5

- テンプレートエンジンを使った制作フロー
- SEOについて
- 構造化マークアップ
- Meta Tag

### CSS

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

- CMSとは
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
- getTextを使った多言語化

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

- SQL文
- 設計のアンチパターン
- MySQLについて

### KVS

- 設計のアンチパターン
- Memcached
- Redis
- Realm

---

## インフラ

### 基礎

- サーバーについて
    - 「サーバーは無茶すると落ちる」

### Linux

- SSH
- パーミッション

### Docker

- Dockerとは？
- 環境構築・動かし方

### SSL

### DNS

#### ドメイン/サブドメイン

### VPN

### WEBサーバー

#### Apache

#### Nginx

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