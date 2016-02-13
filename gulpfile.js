'use strict';

var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('clean', function() {
  return del(['public/js/app.js']);
});

gulp.task('browserify', function() {
	return browserify('src/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('default', ['clean'], function() {
  gulp.start('browserify');
});