var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-clean-css');
var replace = require('gulp-replace');
var fs = require('fs');

var paths = {
  sass: {
    src: './src/style/default.scss',
    dest: './dist/style',
    watch: './src/style/**/*.scss'
  },
  html: {
    src: './src/index.html',
    dest: './docs'
  },
  images: {
    src: './src/images/**/*',
    dest: './docs/images'
  }
};

// CSS

gulp.task('sass', function() {
  return gulp
    .src(paths.sass.src)
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.sass.dest));
});

// HTML

gulp.task('html', function() {
  return gulp
    .src(paths.html.src)
    .pipe(replace(/<link href="([^\.]+\.css)"[^>]*>/g, function(s) {
      var style = fs.readFileSync(paths.sass.dest + '/default.min.css', 'utf8');
      return '<style>' + style + '</style>';
    }))
    .pipe(gulp.dest(paths.html.dest));
});

// Images

gulp.task('images', function() {
  return gulp
    .src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
});

// Watch

gulp.task('watch', function() {
  gulp.watch(paths.sass.watch, gulp.series('sass'));
  gulp.watch(paths.html.src, gulp.series('html'));
});

// Default

gulp.task('default', gulp.series('sass', 'html', 'images'));
