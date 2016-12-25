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
  del([
    './public/**/*.js',
    './public/**/*.map',
    './public/**/*.css',
    './public/**/*.html',
    './public/**/*.png',
    './public/**/*.jpeg',
    './public/**/*.jpg',
  ])
})

gulp.task('build', function(callback) {
  return runSequence(
    'fonts',
    'images',
    ['html', 'sass', 'js'],
    callback
  )
})

gulp.task('sass', function() {
  gulp.src('./src/scss/style.scss')
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(webpack(webpackSass))
  .pipe(gulp.dest('./public'))
})

gulp.task('fonts', function() {
  gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./public/fonts'))
})

gulp.task('images', function() {
  gulp.src('./src/images/**')
  .pipe(gulp.dest('./public/images'))

  gulp.src('./src/scss/images/**')
  .pipe(gulp.dest('./public/css/images'))
})

// 廃止
// gulp.task('ts', function() {
//   gulp.src('./src/ts/app.ts')
//   .pipe(plumber({errorHandler: errorHandler}))
//   .pipe(webpack(webpackTypeScript))
//   .pipe(gulp.dest('./public'))
// })

gulp.task('js', function() {
  gulp.src('./src/js/app.js')
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(webpack(webpackJavaScript))
  .pipe(gulp.dest('./public'))
})

gulp.task('html', function() {
  gulp.src('./src/html/*.html')
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch', function () {
  // gulp.watch(['./src/**/*.ts', './src/**/*.vue'], ['ts'])
  gulp.watch(['./src/**/*.js', './src/**/*.vue'], ['js'])
  gulp.watch(['./src/**/*.html'], ['html'])
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

gulp.task('default', function(callback) {
  return runSequence(
    'clean',
    'build',
    'watch',
    'webserver',
    callback
  )
})
