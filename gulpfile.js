/*jslint node: true */

(function () {
    
    'use strict';

    var gulp = require('gulp'),
        rimraf = require('rimraf'),
        browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        uglify = require('gulp-uglify'),
        less = require('gulp-less'),
        cssBase64 = require('gulp-css-base64'),
        
        srcFolderJs         = './src/js/',
        srcFileJs           = 'app.js',
        
        srcFolderCss        = './src/less/',
        srcFileCss          = 'common.less',
        
        buildFolderJs       = './build/js/',
        buildFolderCss      = './build/css/';

    gulp.task('default', function () {
        gulp.run('clean-js');
        gulp.run('build-js');
        gulp.run('clean-css');
        gulp.run('build-css');
        gulp.run('mv-html');
        gulp.run('mv-fonts');
    });
    
    gulp.task('clean-js', function (cb) {
        rimraf(buildFolderJs, cb);
    });
    gulp.task('clean-css', function (cb) {
        rimraf(buildFolderCss, cb);
    });
        
    gulp.task('build-js', function () {
        return browserify(srcFolderJs + srcFileJs)
            .bundle()
            .pipe(source())
            .pipe(uglify())
            .pipe(gulp.dest(buildFolderJs));
    });
    
    gulp.task('build-css', function () {
        return gulp.src(srcFolderCss + srcFileCss)
            .pipe(less())
            .pipe(cssBase64({
                baseDir: './',
                extensionsAllowed: ['.gif', '.jpg', '.png', '.svg']
            }))
            .pipe(gulp.dest(buildFolderCss));
    });
    
    gulp.task('watch-js', function () {
        gulp.watch(srcFolderJs + '**', function () {
            gulp.run('build-js');
        });
    });

    gulp.task('watch-css', function () {
        gulp.watch(srcFolderCss + '**', function () {
            gulp.run('build-css');
        });
    });
    
    gulp.task('mv-fonts', function () {
        return gulp.src('./src/fonts/**').pipe(gulp.dest('./build/fonts'));
    });
    
    gulp.task('mv-html', function () {
        return gulp.src('./src/html/**').pipe(gulp.dest('./build/html'));
    });

}());
