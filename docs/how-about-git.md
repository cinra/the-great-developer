# Gitとは

Gitの基本的な使い方。

## 課題

Githubから既存のリポジトリをローカルに持ってきて、ファイルを追加してみましょう。

既存のリポジトリをローカルに持ってくる時は、`git clone`というコマンドを使います。`git clone`するとリポジトリがローカルのディレクトリとして複製されるので、以降の作業はそのディレクトリの下で行います（このディレクトリを「プロジェクトフォルダ」とか「リポジトリフォルダ」と呼びます）。

プロジェクトフォルダに自分の名前を記したテキストファイルを追加して、Github上のリポジトリに反映してみましょう。

- [ ] 既存のGitリポジトリを取得する（`git clone`）
	- リポジトリのURL：https://github.com/cinra/git-studies
- [ ] プロジェクトフォルダに自分の名前のテキストファイルを追加して、リポジトリにPushする
    - [ ] `git add {path}`
    - [ ] `git commit`
    - [ ] `git push`

---

## 解説

### Gitって何をするもの？

Gitとは、ソースを管理するためのツール（バージョン管理システム、VCS）です。バージョン管理システムにはGit以外にも、SubversionやMercurialなどがあります。

Gitで管理したファイルは、変更履歴や、変更者、変更内容が記録され、後から参照することが出来ます。

Gitをはじめとするバージョン管理システムは、過去のソースに立ち返ったり、変更部分が被って出戻りが発生するのを避けるために、現代の開発の現場では欠かせないものとなっています。

- [Git](https://git-scm.com/)
- [サルでもわかるGit入門 〜バージョン管理を使いこなそう〜 \| どこでもプロジェクト管理バックログ](http://www.backlog.jp/git-guide/)
- [git \- Wikipedia](https://ja.wikipedia.org/wiki/Git)
- [バージョン管理システム \- Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)

### リポジトリって何？

> 何らかのデータや情報、プログラムなどが体系だてて保管されている場所。

- [リポジトリとは｜repository｜レポジトリ － 意味 / 定義 / 解説 / 説明 ： IT用語辞典](http://e-words.jp/w/%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA.html)

「ソースコードなどの保管庫」だと考えれば間違いはないです。Githubにおけるリポジトリは、仕様書などを管理する「Wiki」、作業や修正指示を記録しておく「Issue」、リポジトリに紐付いたイシューをカンバンで管理できる「Project」などが含まれるプロジェクト管理ツールとして使用されるため、一つのプロジェクトにつき最低一つ作られます。

---

## 用語

### Github

Gitリポジトリを管理できるWEBサービス。同種のサービスに、bitbucketなどがある。

- [Github](https://github.com)
- [Bitbucket](https://bitbucket.org/)

### `git clone`

Gitリポジトリをローカルに複製するためのコマンド

- [リモートリポジトリをクローンする](http://www.backlog.jp/git-guide/intro/intro3_2.html)

### `git add`

Gitリポジトリにファイルを追加するコマンド。addされていないファイルは、Gitで管理されない。

**例**

```sh
$ git add README.md
$ git add .
```

### `git commit`

ファイルの変更を記録するコマンド。

**例**

```sh
$ git commit -am 'My First Commit'
```

### `git push`

コミットをリモートリポジトリに反映するコマンド。これを行うことで、ファイルがリモートリポジトリにアップロードされる。

**例**

```sh
$ git push origin master
```

### `git fetch`

リモートリポジトリの変更を取得するコマンド。

**例**

```sh
$ git fetch origin # リモートリポジトリの変更がすべてローカルに記録される
```

---

## 関連

- Gitの使い方

---

## 参考リンク

- [リポジトリとは](http://e-words.jp/w/%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA.html)