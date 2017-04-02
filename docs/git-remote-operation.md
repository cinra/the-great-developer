# Gitの使い方(2)
## git push / fetch / pull

リモートリポジトリの扱い方

## 課題

- [ ] 練習用のリポジトリをGithubに作成する
- [ ] ローカルのリポジトリにリモートリポジトリを登録する（`git remote`）
- [ ] リモートリポジトリにローカルの内容を反映する（`git push`）
	- [ ] 権限がない場合、公開鍵を作成する
- [ ] Github上でファイルを追加する
- [ ] ローカルにリモートの内容を反映する（`git pull`）

---

## 解説

ローカル環境に存在するリポジトリをチームで共有するために、外部のサーバーにリポジトリを作成します。リモートリポジトリは管理を外部サービスに預けるのが一般的で、その中でも最もポピュラーなのが[Github](https://github.com)です。

---

## 用語解説

### git remote

```sh
$ git remote add origin git@github.com:{リポジトリ}.git
```

### git fetch / pull

`git fetch`コマンドは、リモートの内容をローカルのインデックスに取り込むコマンド。`git pull`は、リモートの内容を取り込んで、カレントブランチにマージするコマンドです。

---

## 参考リンク

- [git remote](http://www.backlog.jp/git-guide/reference/remote.html)
- [git pull](http://www.backlog.jp/git-guide/reference/remote.html)
- [git push](http://www.backlog.jp/git-guide/reference/remote.html)