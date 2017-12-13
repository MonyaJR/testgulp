const gulp = require ("gulp"); // подключение gulp
const autoprefixer = require('gulp-autoprefixer');

gulp.task ("test", function () {
    console.log ("Hello world")
} );

gulp.task ("autoprefixer", function () {
    gulp.src('source/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
} );

gulp.task ("watch", ["autoprefixer"], function () {
    gulp.watch("source/css/style.css", ["autoprefixer"])
})