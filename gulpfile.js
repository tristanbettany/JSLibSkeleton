const gulp   = require('gulp');
const babel  = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

compileJs = () => {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'))
}

gulp.task('compile', () => {
    compileJs()
});

gulp.task('default', () => {
    gulp.watch('./src/**/*.js', ['compile']);
});