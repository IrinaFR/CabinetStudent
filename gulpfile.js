
const gulp = require('gulp'),
      sass = require('gulp-sass');
gulp.task('sass', function(){
    gulp.watch('src/sass/*.sass', function() {
        return gulp.src('src/sass/*.sass')
        .pipe(sass({
            outputStyle: 'nested',  // вложенный (по умлчанию) 
        })
          .on('error', sass.logError)) // уведомление об ошибках 
        .pipe(gulp.dest('src/css')); 
    });
});