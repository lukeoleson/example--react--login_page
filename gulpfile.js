const gulp = require('gulp');
const sass = require('gulp-sass');

// sass compiles our sass files into css
gulp.task('sass', () => {
    gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', () => {
    gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default', ['watch']);