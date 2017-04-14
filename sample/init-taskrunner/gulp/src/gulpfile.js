var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bulkSass = require('gulp-sass-bulk-import'),
    pleeease = require('gulp-pleeease'),
    plumber = require('gulp-plumber'),
    cmq = require('gulp-combine-media-queries'),
    connect = require('gulp-connect'),
    ejs = require('gulp-ejs'),
    rename = require('gulp-rename');

var paths = {
  srcDir : 'assets/',
  dstDir : '../www/assets/'
};

/* --------------------
// ejs -> html
-------------------- */
gulp.task('ejs', function() {
  gulp.src([paths.srcDir + 'ejs/*.ejs'])
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(gulp.dest('../www/'))
    .pipe(connect.reload());
});

/* --------------------
// sass -> css
-------------------- */
gulp.task('sass', function () {
  gulp.src(paths.srcDir + 'sass/**/*.scss')
    .pipe(plumber())
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(pleeease({
      fallbacks: {
        autoprefixer: ['ie 9']
      }
    }))
    .pipe(gulp.dest(paths.dstDir + 'css/'));
});

/* --------------------
// $ gulp watch
-------------------- */
gulp.task('watch',function(){
  gulp.watch(paths.srcDir + 'sass/**/*.scss', ['sass']);
  gulp.watch(paths.srcDir + 'ejs/**/*.ejs', ['ejs']);
});

/* --------------------
// $ gulp connect
-------------------- */
gulp.task('connect', function() {
  connect.server({
    root: '../www/',
    port: 8000,
    livereload: true
  });
});

/* --------------------
// $ gulp 
-------------------- */
gulp.task('default', ['watch','connect']);