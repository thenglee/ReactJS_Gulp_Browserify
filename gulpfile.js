var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
	HTML: 'src/index.html',
	ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
	JS: ['src/js/*.js', 'src/js/**/*.js'],
	MINIFIED_OUT: 'build.min.js',
	DEST_SRC: 'dist/src',
	DEST_BUILD: 'dist/build',
	DEST: 'dist'
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('transform', function(){
	return gulp.src(path.JS)
		.pipe(react())
		.on("error", console.log)
		.pipe(gulp.dest(path.DEST_SRC))
});

gulp.task('copy', function(){
	return gulp.src(path.HTML)
		.pipe(gulp.dest(path.DEST))
		.on("error", console.log)
});

gulp.task('watch', function(){
	gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('default', ['watch']);

