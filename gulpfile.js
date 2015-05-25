var gulp = require('gulp'),
  jscs = require('gulp-jscs'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

gulp.task('jscs', function() {
  return gulp.src(['app/**/*.js','!app/public/vendor/**/*.js'])
    .pipe(jscs());

});

gulp.task('lint', function() {
  return gulp.src(['app/**/*.js','!app/public/vendor/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('build', ['jscs', 'lint'], function() {

});
