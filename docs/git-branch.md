# ブランチとプルリクエスト

ブランチを使った作業の進め方について

## 課題

- [ ] masterからブランチを切る（`git branch`）
- [ ] 新しいブランチにブランチを切り替える（`git checkout`）
	- [ ] 新しいブランチでファイルを変更し、コミットする
	- [ ] 新しいブランチをリモートに反映する（`git push`）
- [ ] 新しいリモートブランチから、masterブランチにプルリクエスト（PR）を送る
	- [ ] プルリクエストの個別ページから、レビュワーを指定して、取り込みを依頼する

---

## 解説

チームで開発を進める際に、機能やイシュー毎に作業をまとめ、各々の作業内容を安全に取り込んでいくための機構が「ブランチ」です。この機能により、お互いに関係のない作業内容を単一のソースツリーで行っていくと発生するソースの衝突（コンフリクト）や、上書き／出戻りを避けたり管理することが可能になります。

- [ブランチとは](http://www.backlog.jp/git-guide/stepup/stepup1_1.html)

### プルリクエスト

ブランチでの作業を、他のブランチに取り込んで欲しい時に使用するGithubの機能が「プルリクエスト（PR）」です。

---

## 用語解説

### git branch

### git checkout

### git merge

---

## 参考リンク

- [ブランチとは](http://www.backlog.jp/git-guide/stepup/stepup1_1.html)
- [git branch](http://www.backlog.jp/git-guide/reference/branch.html#sec2)
- [git checkout](http://www.backlog.jp/git-guide/reference/branch.html#sec5)
- [git merge](http://www.backlog.jp/git-guide/reference/branch.html#sec6)