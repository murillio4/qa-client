const gulp = require('gulp'),
      sass = require('gulp-sass'),
      minifyCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      changed = require('gulp-changed');

const SASS_SRC = './src/assets/sass/**/*.scss',
      SASS_DEST = './src/assets/css';

gulp.task('compile_sass', function(){
  gulp.src(SASS_SRC)
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(changed(SASS_DEST))
  .pipe(gulp.dest(SASS_DEST));
});

gulp.task('watch_sass', function(){
  gulp.watch(SASS_SRC, ['compile_sass', 'fonts']);
});

gulp.task('default', ['watch_sass']);

gulp.task('fonts', function() {
  return gulp.src(['./node_modules/bootstrap-sass/assets/fonts/**/*',
                   './node_modules/font-awesome/fonts/*'])
  .pipe(gulp.dest('src/assets/fonts'))
});
