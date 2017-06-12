# テスト > 基礎

## 課題

- [ ] ソフトウェア開発における「テスト」の意味を理解する

---

## 解説

テストとは、デバッグを自動化するための「手段（ツール）」や、場合により、その「種類」、「内容」の事を指します。（広範囲で使われる？ため、前後のニュアンスで読み取ります）

### テストの種類

コチラの記事に分かりやすく書かれています。

- [テストの種類と技法](http://qiita.com/ktarow/items/8c3d94d6c21a0c86b799)
- [ユニットテストって何?って人向けのmochaとchaiの使い方](http://qiita.com/y_hokkey/items/f73ea6b3d5f6902396b6)

### ユニットテスト

| ツール | テスト記述 | 対象 | 動作環境 |
|:-:|:-:|:-:|:-:|
| PHPUnit | PHP | PHP | ??? |
| Mocha+Chai | JS | JS | Karma(Node.js), CIサーバー等 |
| Jasmine | JS | JS | Node.js, CIサーバー等  |

### ブラウザ、アプリテスト

| ツール | テスト記述 | 対象 | 動作環境 |
|:-:|:-:|:-:|:-:|
| Selenium | Java, Python, Ruby, C#, Objective-C, PHP, JS(Node.js) | Webアプリケーション | ブラウザ拡張、クライアントサーバモデル |
| Appium | 同上 | iOS, Android | 各OS |

---

## 参考リンク
