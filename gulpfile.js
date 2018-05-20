const gulp = require('gulp');
const sass = require('gulp-sass');

// sass compiles our sass files into css and moves them
// to the css directory
gulp.task('sass', () => {
    gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

// watches our .scss files for changes and calls our 
// sass function on each detected change
gulp.task('watch', () => {
    gulp.watch('src/scss/*.scss', ['sass']);
});

// this defines what will run with the 'gulp' command
gulp.task('default', ['watch']);