var gulp = require('gulp');
var changed = require('gulp-changed');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require ('gulp-plumber');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('default', ['scripts', 'vendors', 'combine-scripts', 'watch']);

gulp.task('scripts', function () {
    return gulp.src(['./app/js/**/*.js'])
        .pipe(plumber())
        .pipe(concat('scripts.js'))
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('combine-scripts', function () {
    return gulp.src(['./build/vendors.js', './build/scripts.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('vendors', function () {
    return gulp.src(['./app/vendors/angular.js', './app/vendors/**/*.js'])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('styles', function () {
    return gulp.src(['./app/vendors/**/*.css', './app/styles/**/*.css'])
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(ngmin())
        .pipe(uglify())
        .on('error', handleError)
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
    gulp.watch("app/js/**/*.js", ['scripts','combine-scripts']);
    gulp.watch("app/vendors/**/*.js", ['vendors','combine-scripts']);
});
