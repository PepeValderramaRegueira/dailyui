const gulp = require("gulp")
const sass = require("gulp-sass")
const autoprefixer = require("gulp-autoprefixer")

gulp.task("default", () => {
  gulp.watch("./src/scss/**/*.scss", gulp.series(["styles"]))
})

gulp.task("styles", () => {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
    .pipe(gulp.dest("./dist/stylesheets"))
})
