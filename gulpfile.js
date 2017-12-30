var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["**.html", "**.js"]).on('change', browserSync.reload);
});