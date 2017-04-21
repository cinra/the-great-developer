# タスクランナー

## 解説
### タスクランナーとは？
フロントエンド開発において、ファイルの変更を監視したり、コンパイルや圧縮等のタスクを自動化するツールです。
プラグインと組み合わせることによって、ローカルサーバーの立ち上げや、スプライト画像の生成など、必要に応じて様々な機能を組み合わせて使用できます。

### タスクランナーの種類
gulpやgruntを始めとして様々な種類があります。CINRAではgulpを使うことが多いです。

||特徴|
|:--|:--|
|[gulp](http://gulpjs.com/)|node.js製。タスクを並行処理するため高速。|
|[grunt](http://gulpjs.com/)|node.js製。古くからあるため対応プラグインが最多。|
|[Middleman](https://middlemanapp.com/)|ruby製の静的サイトジェネレーター。制約はあるが、設定ファイルを書く必要がなく簡易なものであれば導入コストは低い。|

※ よく同列に挙げられる [webpack](https://webpack.github.io/) は主にjavascriptを扱うモジュールバンドラーで、ここで説明するタスクランナーとは別の役割を担います。

### 参考リンク
現場で使えるgulp入門 第1回 gulpとは何か  
https://app.codegrid.net/entry/gulp-1

現場で使えるGrunt入門 第1回 Gruntを試そう  
https://app.codegrid.net/entry/grunt-introduction


## 課題

### 1.node.jsのインストール
- [ ] 1-1.node.jsをインストールする
	- node.js のバージョン管理
- [ ] 1-2.npmコマンドが使えるか確認

```
$ npm -v
```

### 2.gulp
- [ ] 2-1.グローバルにgulpをインストールする
- [ ] 2-2.プロジェクトにgulpと関連プラグインをインストールする
  - package.jsonの確認

【例】
  
```
{
  "name": "init-taskrunner-gulp",
  "version": "0.0.1",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^3.9.0",
    "gulp-connect": "^4.1.0",
    "gulp-pleeease": "^2.0.1",
    "gulp-plumber": "^1.0.1",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^2.1.0",
    "gulp-sass-bulk-import": "^0.3.2",
    "gulp-ejs": "^2.1.2"
  }
}
```
  
  
- [ ] 2-3.gulpのタスクを動かしてみる
  - gulpfileの確認

【例】

```
gulp.task('watch',function(){
  gulp.watch(paths.srcDir + 'sass/**/*.scss', ['sass','sass']);
  gulp.watch(paths.srcDir + 'js/**/*.js', ['js-minify']);
  gulp.watch(paths.srcDir + 'ejs/**/*.ejs', ['ejs']);
});
gulp.task('connect', function() {
  connect.server({
    root: [__dirname + '/dist/'],
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

「gulp」を実行するとdafaultタスクに登録されているタスクが動きます。  
上記の例では、「watch」と「connect」が動きます。
  
  - ローカルサーバーの確認  
  connectタスクが走っている状態で、指定のポート（上記の例では`http://localhost:8000`）にアクセスしてみましょう。
  
  - ファイルのwatch  
	 ファイルの変更を監視します。

```
$ gulp watch
```

今回、defaultタスクに登録されているので「gulp」だけの実行でwatchタスクも動作しますが、明示的にwatchタスクを指定して動かすこともできます。
  
  - sassのコンパイル  
    watchタスクが走っている状態で、sassファイルを更新してみましょう。sassのコンパイルが実行され、cssファイルが更新されているかを確認します。


### 3.grunt
- [ ] 3-1.グローバルにgrunt-cliをインストールする
- [ ] 3-2.プロジェクトにgruntと関連プラグインをインストールする
  - package.jsonの確認
- [ ] 3-3.gruntのタスクを動かしてみる
  - gruntfileの確認  

```
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
	// 略
	
	/**
	 * scss
	 */
	sass: {
	  options: {
	    sourceMap: false
	  },
	  dist: {
	    files: {
	      '<%= pkg.static_html %>/<%= pkg.css %>/style.css': '<%= pkg.src.scss %>/style.scss',
	        '<%= pkg.static_html %>/<%= pkg.css %>/print.css': '<%= pkg.src.scss %>/print.scss'
	      }
	    }
	  },
	
	 /**
	  * watch
	  */
	  watch: {
	    options: {
	      livereload: true,
	      spawn: false
	    },
	    gruntfile: {
	      files: [
	        'Gruntfile.js'
	      ]
	    },
	    scss: {
	      files: [
	        '<%= pkg.src.scss %>/**/*.scss',
	        '<%= pkg.src.scss %>/*.scss'
	      ],
	      tasks: [
	        'sass_globbing',
	        'sass',
	        'autoprefixer',
	        'cssmin',
	        'copy:css'
	      ]
	    }
	  }
});
grunt.registerTask('default', ['watch']);
```
	
  - defaultタスクを動かす

```
$ cd src #frontの開発ディレクトリに移動
$ grunt
```
		
　　「grunt」を実行するとdafaultタスクに登録されているタスクが動きます。  
 　　上記の例では、「watch」が動きます。

  - ファイルのwatch
 
```
$ grunt watch
```

今回、defaultタスクに登録されているので「grunt」だけの実行でwatchタスクも動作しますが、明示的にwatchタスクを指定して動かすこともできます。
  
  - sassのコンパイル  
	watchタスクが走っている状態で、sassファイルを更新してみましょう。sassのコンパイルが実行され、cssファイルが更新されているかを確認します。

## 用語
### npm(Node Package Manager)
https://www.npmjs.com/  
node.jsのパッケージやライブラリを管理するツール

http://qiita.com/megane42/items/2ab6ffd866c3f2fda066

### package.json
npmでインストールするパッケージのバージョン、依存関係が記載されているjsonファイル。
`$ npm install`のコマンドを実行すると、ここに記載されているパッケージが`/node_module/`ディレクトリにインストールされます。

http://qiita.com/sinmetal/items/395edf1d195382cfd8bc
http://liberty-technology.biz/PublicItems/npm/package.json.html

### ファイルのコンパイル
メタ言語をブラウザが解釈できる言語へ変換すること。本項ではcssのメタ言語であるsassをcssへ、htmlのメタ言語であるejsをhtmlへ変換することなどを指します。