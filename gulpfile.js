var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

var distribution = 'public/dist';
var jsSources = [distribution + '/**/*.js'];
var cssSources = [distribution + '/**/*.css'];
var htmlSources = [distribution + '/**/*.html'];

var port = process.env.PORT || 9000;

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: port
    });
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload())
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);
});


gulp.task('open', function() {
    var options = {
        uri: 'localhost:' + port + '/' + distribution + '/exercises/',
        app: 'firefox'
    };
    gulp.src(__filename)
        .pipe(open(options));
});


gulp.task('default', ['html', 'css', 'js', 'connect', 'watch', 'open']);
