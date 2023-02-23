const minify = require('gulp-minify');
const gulp = require('gulp');
 
  try {
    gulp.src(['script.js'])
    .pipe(minify({
        ext: {
            src: 'min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('./'))
  } catch (error) {
    console.log(error)
  }