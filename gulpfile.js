var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var sourceFiles = ['**/*.js',
  '!node_modules/**/*.js',
  '!web-app/public/vendor/**/*.js'
];

gulp.task('test', ['lint', 'jscs'], function() {

});

gulp.task('jscs', ['lint'], function() {
  return gulp.src(sourceFiles)
    .pipe(jscs({
      esnext: true,
      configPath: '.jscsrc'
    }));
});

gulp.task('lint', function() {
  return gulp.src(sourceFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
