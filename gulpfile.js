var gulp = require('gulp');
var minify = require('gulp-minify');
var jshint = require('gulp-jshint');
 
gulp.task('compress', function() {
    gulp.src('src/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist'))
});

gulp.task('lint', function() {
    gulp.src('src/*.js')
        .pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish')); 
});


gulp.task('default', ['compress', 'lint']);