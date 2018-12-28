let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("sass", () => {
    return gulp.src("app/scss/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css/main.css"));
});

gulp.task("watch", () => {
    gulp.watch("app/scss/**/*.scss", gulp.series("sass"));
});