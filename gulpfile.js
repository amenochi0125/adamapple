var gulp = require('gulp')
var webserver = require('gulp-webserver')
var webpack = require('webpack-stream')
var plumber = require('gulp-plumber')
var notifier = require('node-notifier')

// 設定ファイル
var webpackSass = require('./src/scss/webpack.config.js')
var webpackTypeScript = require('./src/ts/webpack.config.js')
var webpackJavaScript = require('./src/js/webpack.config.js')

// エラーハンドラ
var errorHandler = function(error) {
  notifier.notify({
    type: 'error',
    title: 'コンパイルエラー',
    message: error.message,
    sound: true,
    icon: 'images/gulp.png',
    contentImage: 'public/favicon.ico',
    wait: false
  })
}

gulp.task('build', ['sass', 'fonts', 'images', 'js'])

gulp.task('sass', function() {
  return gulp.src('./src/scss/style.scss')
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(webpack(webpackSass))
  .pipe(gulp.dest('./public'))
})

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./public/fonts'))
})

gulp.task('images', function() {
  return gulp.src('./src/images/**')
    .pipe(gulp.dest('./public/images'))
})

// 廃止
// gulp.task('ts', function() {
//   return gulp.src('./src/ts/app.ts')
//   .pipe(plumber({errorHandler: errorHandler}))
//   .pipe(webpack(webpackTypeScript))
//   .pipe(gulp.dest('./public'))
// })

gulp.task('js', function() {
  return gulp.src('./src/js/app.js')
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(webpack(webpackJavaScript))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch', function () {
  // gulp.watch(['./src/**/*.ts', './src/**/*.vue'], ['ts'])
  gulp.watch(['./src/**/*.js', './src/**/*.vue'], ['js'])
  gulp.watch('./src/**/*.scss', ['sass'])
})

gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }))
})

gulp.task('default', ['build', 'watch', 'webserver'])
