module.exports = function () {
	$.gulp.task('sass',function () {
		return $.gulp.src('src/static/sass/main.sass')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer({
				browsers: ['last 10 versions']
			}))
			.on("error", $.gp.notify.onError({
				title: "sass"
			}))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css/'))
			.pipe($.bs.reload({
				stream:true
			}));
	});
};