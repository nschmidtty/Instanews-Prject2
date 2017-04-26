var gulp = require('gulp');
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    browserSync = require('browser-sync').create();

gulp.task('default', ['say_hello', 'watch']);

gulp.task('say_hello', function(){
    console.log('Hello!');
});

gulp.task('watch', function() {
   gulp.watch('js/*.js', ['scripts', 'browser-sync']);
   gulp.watch('./index.html', ['browser-sync'])
   gulp.watch('css/style.css')
});

gulp.task('scripts', function(){
  gulp.src('./js/*.js') // What files do we want gulp to consume?
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
    .pipe(gulp.dest('./build/js')) // Where do we put the result?
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});