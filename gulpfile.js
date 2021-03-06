var gp = require('gulp-load-plugins')()
var gulp = require('gulp');
var livereload = require('gulp-livereload');

livereload({ start: true});

var deploy = false
	, watching = false

gulp.task('sass', function() {
	return gulp.src('./src/scss/app.scss')
		.pipe(gp.plumber({errorHandler: gp.notify.onError('Error: <%= error.message %>')}))
		.pipe(gp.sass({
			errLogToConsole: true
		}))
		// .pipe(gp.if(!deploy, gp.sourcemaps.init({loadMaps: true})))
		.pipe(gp.autoprefixer())
		// .pipe(gp.if(deploy, gp.minifyCss()))
		.pipe(gulp.dest('./build/css/'))
		.pipe(livereload());
})

gulp.task('default', function(callback) {
	watching = true
	livereload.listen();
	gulp.watch("./src/scss/**/*.scss", ['sass'])
	gulp.watch('./src/fonts/**/*', ['fonts'])
	gulp.watch('./src/img/**/*', ['images'])
})
