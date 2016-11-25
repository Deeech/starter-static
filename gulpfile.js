var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass')
    webpack = require('webpack-stream')
    browserSync  = require('browser-sync');

gulp.task('pug', function() {
  return gulp.src('./src/pug/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./dist/'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sass({
    includePaths: ['node_modules/mq-sass/stylesheets']
  }))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
  return gulp.src('./src/js/entry.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('watch', ['browser-sync', 'sass', 'pug', 'js'], function() {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/pug/**/*.pug', ['pug']);
  gulp.watch('./src/js/**/*.js', ['js']);
});


gulp.task('default', ['watch']);
