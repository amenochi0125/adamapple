var path = require('path')
var gulp = require('gulp')
var webserver = require('gulp-webserver')
var webpack = require('webpack-stream')
var plumber = require('gulp-plumber')
var notifier = require('node-notifier')
var fs = require('fs')
var del = require('del')
var runSequence = require('run-sequence')

// 設定ファイル
var webpackSass = require('./src/scss/webpack.config.js')
var webpackTypeScript = require('./src/ts/webpack.config.js')
var webpackJavaScript = require('./src/js/webpack.config.js')

var isExistFile = function(file) {
  try {
    fs.statSync(file)
    return true
  } catch(err) {
    if (err.code === 'ENOENT') return false
  }
}

// エラーハンドラ
var errorHandler = function(error) {
  notifier.notify({
    type: 'error',
    title: 'コンパイルエラー',
    message: error.message,
    sound: true,
    icon: 'gulp.png',
    contentImage: 'public/favicon.ico',
    wait: false
  })
}

gulp.task('clean', function() {
  del(['./public/*'], {force: true})
})

gulp.task('build', function(callback) {
  return runSequence(
    ['fonts', 'images'],
    ['html', 'sass', 'js'],
    callback
  )
})

gulp.task('sass', function() {
  gulp.src('src/scss/style.scss')
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(webpack(webpackSass))
  .pipe(gulp.dest('./public/assets/css'))
})

gulp.task('fonts', function() {
  gulp.src('node_modules/font-awesome/fonts/**')
  .pipe(gulp.dest('./public/assets/fonts'))
})

gulp.task('images', function() {
  gulp.src('src/images/**')
  .pipe(gulp.dest('./public/assets/images'))
})

// gulp.task('ts', function() {
//   gulp.src('./src/ts/app.ts')
//   .pipe(plumber({errorHandler: errorHandler}))
//   .pipe(webpack(webpackTypeScript))
//   .pipe(gulp.dest('./public/assets/js'))
// })

gulp.task('js', function() {
  gulp.src('./src/js/app.js')
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(webpack(webpackJavaScript))
  .pipe(gulp.dest('./public/assets/js'))
})

gulp.task('html', function() {
  gulp.src('./src/html/*.html')
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch', function () {
  // gulp.watch(['tsconfig.json', './src/**/*.ts', './src/**/*.vue'], ['ts'])
  gulp.watch(['./src/js/**/*.js', './src/**/*.vue'], ['js'])
  gulp.watch(['./src/html/**/*.html'], ['html'])
  gulp.watch(['./src/scss/**/*.js', './src/**/*.scss'], ['sass'])
})

gulp.task('webserver', ['watch'], function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }))
})

gulp.task('default', function(callback) {
  return runSequence(
    'clean',
    'build',
    'watch',
    'webserver',
    callback
  )
})
