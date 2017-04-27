var gulp = require('gulp');
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    browserSync = require('browser-sync');
    eslint = require('gulp-eslint');

gulp.task('default', ['say_hello', 'watch', 'browser-sync']);

gulp.task('say_hello', function(){
    console.log('Hello!');
});



gulp.task('watch', function() {
   gulp.watch('js/*.js', ['scripts']);
});

gulp.task('scripts', ['lint'], function(){
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
    gulp.watch(['./build/*.js', './css/style.css']).on('change', browserSync.reload);
});

gulp.task('lint', function(){
  return gulp.src(['./js/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
})