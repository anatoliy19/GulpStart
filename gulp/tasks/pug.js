module.exports = function () {
	$.gulp.task('pug', function () {
		return $.gulp.src($.path.src.pug)
			.pipe($.dependents())
			.pipe($.pug())
			.on('error', function (error) {
				console.log(`Error : ${error.message}`);
				this.emit('end');
			})
			.pipe($.cached())
			.pipe($.htmlBeautify({indentSize: 4}))
			.pipe($.gulp.dest($.path.build.pug))
			.on('end', $.browserSync.reload)
	});
};