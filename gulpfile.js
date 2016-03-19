var gp = require('gulp-load-plugins')(),
	gulp = require('gulp');

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
})

gulp.task('default', function(callback) {

	watching = true
	gulp.watch("./src/scss/**/*.scss", ['sass'])
	gulp.watch('./src/fonts/**/*', ['fonts'])
	gulp.watch('./src/img/**/*', ['images'])
})
