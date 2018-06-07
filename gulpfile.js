var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var htmlSources = ['*.html'],
    sassSources = ['include/css/*scss'],
    jsSources   = ['include/js/*js'];


gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('log', function() {
  gutil.log('== MY LOG TASK ==')
});

gulp.task('sass', function() {
  gulp.src('include/css/styles.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('include/css/'))
});

gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('tovar_scripts.js'))
  .pipe(gulp.dest('include/js/'))
  .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
//    gulp.watch(log);
});
