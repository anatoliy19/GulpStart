'use strict';

global.$ = {
    gulp: require('gulp'),
    fileinclude: require('gulp-file-include'),
    sass: require('gulp-sass'),
    sourcemaps: require('gulp-sourcemaps'),
    autoprefixer: require('gulp-autoprefixer'),
    browserSync: require('browser-sync').create(),
    uglify: require('gulp-uglify'),
    del: require('del'),
    stripCss: require('gulp-strip-css-comments'),
    imagemin: require('gulp-imagemin'),
    cache: require('gulp-cache'),
    dependents: require('gulp-dependents'),
    pug: require('gulp-pug'),
    cached: require('gulp-cached'),
    jpegRecompress: require('imagemin-jpeg-recompress'),
    pngQuant: require('imagemin-pngquant'),
    svgSprite: require('gulp-svg-sprite'),
    replace: require('gulp-replace'),
    svgmin: require('gulp-svgmin'),
    cheerio: require('gulp-cheerio'),
    htmlBeautify: require('gulp-beautify-code'),
    aliases: require('gulp-style-aliases'),
    webpack: require('webpack'),
    webpackStream: require('webpack-stream'),
    path: {
        tasks: require('./gulp/config/tasks.js'),
        src: {
            pug: 'src/pug/*.pug',
            html: 'src/html/*.html',
            sass: 'src/sass/*.scss',
            js: 'src/js/main.js',
            fonts: 'src/fonts/**/*.*',
            img: 'src/img/**/*.*',
            svg: 'src/sprite/*.svg'
        },
        build: {
            pug: 'build/',
            html: 'build/',
            css: 'build/css/',
            js: 'build/js/',
            fonts: 'build/fonts/',
            img: 'build/img/'
        },
        watch: {
            pug: ['src/pug/*.pug', 'src/pug/components/**/*.pug', 'src/pug/layout/*.pug'],
            html: 'src/html/*.html',
            sass: 'src/sass/**/*.scss',
            js: 'src/js/**/*.js',
            img: 'src/img/**/*.*',
            svg: 'src/sprite/*.svg',
            fonts: 'src/fonts/**/*.*'
        }
    }
};

$.sass.compiler = require('node-sass');

$.path.tasks.forEach((taskPath) => require(taskPath)());

$.gulp.task('common', $.gulp.series('clean', $.gulp.parallel('pug', 'html', 'fonts', 'svg')));

$.gulp.task('dev', $.gulp.series('sass:development', 'js:development', 'img:development',));

$.gulp.task('build', $.gulp.series('common', $.gulp.parallel('sass:production', 'js:production', 'img:production',),
    function completion(done) {
        done();
        process.exit();
    }
));

$.gulp.task('default', $.gulp.series('common', $.gulp.parallel('dev'), $.gulp.parallel('watch', 'server')));
