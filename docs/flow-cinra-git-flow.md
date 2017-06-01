# CINRA Gitフロー

[Gitフロー](http://qiita.com/mint__/items/bfc58589b5b1e0a1856a)のCINRA版です。
このページは、Gitの基本的な概念を習得している事を前提とします。

---

## ブランチの意味

### master

本番、公開状態となるブランチ。

### develop

テスト公開（ステージング）

### issue/[issue-number]-[issue-summary]

Issue対応用ブランチ

### feature/[front,back]-[name]?

開発ブランチ

---

## 開発時の流れ

1. masterにproject-templateから今回使用するテンプレをpush  
2. masterから、featureブランチを切って開発  
  2-1. 開発中は自分のfeatureブランチにpush  
  2-2. ステージング反映の際は、developにPRを送り、マージ  
  2-3. 開発者が複数の場合は、連絡を取り合いdevelopを自分のfeatureブランチにpullして適用する（開発中のみ）  
3. 開発が終わったら、developをmasterにマージする。  

※ 2〜2-3を繰り返して開発を進める。

---

## 公開後（修正時等）の流れ

1. masterから、issueブランチを切る  
2. 対応が終わったら、developブランチへPRを送り、マージする  
3. 担当者、ディレクターが確認し、問題なければ、次はissueブランチからmasterへPRを送り、マージする  

※ ブランチ/1 Issue  
※ この段階では、developをmasterにマージしないよう注意します