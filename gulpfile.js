/*jslint node: true */

(function () {
    
    'use strict';

    var gulp = require('gulp'),
        rimraf = require('rimraf'),
        browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        uglify = require('gulp-uglify'),
        rename = require("gulp-rename"),
        less = require('gulp-less'),
        cssBase64 = require('gulp-css-base64'),
        sourceFileJs = './src/js/app.js',
        destFolderJs = './build/js/',
        destFileJs = 'app.js',
        sourceFileCss = 'common.less',
        sourceFolderCss = './src/less/',
        destFolderCss = './build/css/';
    
    gulp.task('clean-js', function (cb) {
        rimraf(destFolderJs, cb);
    });
    
    gulp.task('watch-js', function () {
        gulp.watch("./src/js/**", function () {
            gulp.run('build-js');
        });
    });
        
    gulp.task('build-js', function () {
        return browserify(sourceFileJs)
            .bundle()
            .pipe(source(destFileJs))
            .pipe(gulp.dest(destFolderJs));
    });
    
    gulp.task('compress-js', function () {
        gulp.src('./build/js/app.js')
            .pipe(uglify())
            .pipe(rename("app.min.js"))
            .pipe(gulp.dest(destFolderJs));
    });
        
    gulp.task('build-tests', function () {
        return browserify('./tests/main.js')
            .bundle()
            .pipe(source('tests.js'))
            .pipe(gulp.dest(destFolderJs));
    });
    
    gulp.task('clean-css', function (cb) {
        rimraf(destFolderCss, cb);
    });

    gulp.task('watch-css', function () {
        gulp.watch("./src/less/**", function () {
            gulp.run('build-css');
        });
    });
    
    gulp.task('build-css', function () {
        return gulp.src(sourceFolderCss + sourceFileCss)
            .pipe(less())
            .pipe(cssBase64({
                baseDir: './',
                extensionsAllowed: ['.gif', '.jpg', '.png', '.svg']
            }))
            .pipe(gulp.dest(destFolderCss));
    });
    
    gulp.task('build-fonts', function () {
        return gulp.src('./src/fonts/**').pipe(gulp.dest('./build/fonts'));
    });
    
        
    gulp.task('default', function () {
      
        gulp.run('build-js');
        gulp.run('compress-js');
        gulp.run('build-css');
        gulp.run('build-fonts');
        
    });

}());
