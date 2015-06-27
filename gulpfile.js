var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var sourceFiles = ['**/*.js',
  '!node_modules/**/*.js',
  '!app/public/vendor/**/*.js'
];

gulp.task('test', ['lint', 'jscs'], function() {

});

gulp.task('jscs', ['lint'], function() {
  return gulp.src(sourceFiles)
    .pipe(jscs());
});

gulp.task('lint', function() {
  return gulp.src(sourceFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});