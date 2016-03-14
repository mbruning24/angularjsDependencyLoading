var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var es = require('event-stream');
var Q = require('q');

gulp.task('clean', function() {
	var def = Q.defer();
	del('./build')
		.then(function() {
			def.resolve();
		});
	return def.promise;
});

var pipes = {};
pipes.vendor = function() {
	return gulp.src('./bower_components/angular/angular.js')
		.pipe($.concat('vendor.js'))
		.pipe(gulp.dest('./build/vendor'))
}
pipes.app = function() {
	return gulp.src('./src/app/**/*.js')
		.pipe($.angularFilesort())
		.pipe($.concat('app.js'))
		.pipe(gulp.dest('./build/scripts'))
}
pipes.index = function() {
	var vendor = pipes.vendor();
	var app = pipes.app();
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./build'))
		.pipe($.inject(vendor, {relative: true, name: 'vendor'}))
		.pipe($.inject(app, {relative: true, name: 'app'}))
		.pipe(gulp.dest('./build'))
}

gulp.task('build', ['clean'], pipes.index);
gulp.task('watch', ['build'], function() {
	gulp.watch('./src/**/*.*', ['build']);
});
gulp.task('default', ['build']);