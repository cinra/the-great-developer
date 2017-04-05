# タスクランナー

## 解説
### タスクランナーとは？
フロントエンド開発において、ファイルの変更を監視したり、コンパイルや圧縮等を自動化するツールです。
プラグインと組み合わせることによって、ローカルサーバーの立ち上げや、スプライト画像の生成など、必要に応じて様々な機能を組み合わせて使用できます。

### タスクランナーの種類
gulpやgruntを始めとして様々な種類があります。CINRAではgulpを使うことが多いです。

||特徴|
|:--|:--|
|[gulp](http://gulpjs.com/)|node.js製。タスクを並行処理するため高速。|
|[grunt](http://gulpjs.com/)|node.js製。古くからあるため対応プラグインが最多。|
|[Middleman](https://middlemanapp.com/)|ruby製の静的サイトジェネレーター。制約はあるが、設定ファイルを書く必要がなく簡易なものであれば導入コストは低い。|

※ よく同列に挙げられる [webpack](https://webpack.github.io/) は主にjavascriptを扱うモジュールバンドラーで、ここで説明するタスクランナーとは別の役割を担います。

現場で使えるgulp入門 第1回 gulpとは何か
https://app.codegrid.net/entry/gulp-1

現場で使えるGrunt入門 第1回 Gruntを試そう
https://app.codegrid.net/entry/grunt-introduction


## 課題

### node.jsのインストール
- [ ] node.jsをインストールする
	- node.js のバージョン管理
- [ ] npmコマンドが使えるか確認

```
$ npm -v
```

### gulp
- [ ] グローバルにgulpをインストールする
- [ ] プロジェクトにgulpと関連プラグインをインストールする
  - package.jsonの確認
- [ ] gulpのタスクを動かしてみる
  - gulpfileの確認

		【例】
		
		```javascript:gulpfile.js
		gulp.task('watch',function(){
		  gulp.watch(paths.f.pc.srcDir + 'sass/**/*.scss', ['sass','sass']);
		  gulp.watch(paths.f.pc.srcDir + 'js/**/*.js', ['js-minify']);
		  gulp.watch(paths.f.pc.srcDir + 'ejs/**/*.ejs', ['ejs']);
		});
		
		gulp.task('connect', function() {
		  connect.server({
		    root: [__dirname + '/themes/pc/dist/'],
		    port: 8000,
		    livereload: true
		  });
		});
		
		gulp.task('default', ['watch','connect']);
		```

  - defaultタスクを動かす
	
	```
	$ cd src #frontの開発ディレクトリに移動
	$ gulp
	```
  	「gulp」だけでdafaultタスクに登録されているタスクが動きます。  
  	上記の例だと、「watch」と「connect」が動きます。
  
  - ローカルサーバーの確認  
  connectタスクが走っている状態で、`http://localhost:8000`にアクセスしてみましょう。
  
  - ファイルのwatch  
	 ファイルの変更を監視します。
  
  	```
	$ gulp watch
	```
  
  - sassのコンパイル  
    watchタスクが走っている状態で、sassファイルを更新してみましょう。sassのコンパイルが実行され、cssファイルが更新されているかを確認します。



### grunt
- [ ] グローバルにgrunt-cliをインストールする
- [ ] プロジェクトにgruntと関連プラグインをインストールする
  - package.jsonの確認
- [ ] gruntのタスクを動かしてみる
  - gruntfileの確認  
  - ファイルのwatch
  - js,cssのコンパイル


## 用語
### npm(Node Package Manager)
https://www.npmjs.com/  
node.jsのパッケージやライブラリを管理するツール

http://qiita.com/megane42/items/2ab6ffd866c3f2fda066

### ファイルのコンパイル
メタ言語をブラウザが解釈できる言語へ変換すること。本項ではcssのメタ言語であるsassをcssへ、htmlのメタ言語であるejsをhtmlへ変換することなどを指します。