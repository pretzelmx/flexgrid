var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');

var swallowError = function(error) {
    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
};

gulp.task('flexgrid', function() {
    gulp.src('sass/flexgrid.scss')
        .pipe(sass())
        .on('error', swallowError)
        .pipe(gulp.dest('./dist/css/'))
        .pipe(cssmin())
        .pipe(rename('flexgrid.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});

//Watch task
gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', ['flexgrid']);
});
