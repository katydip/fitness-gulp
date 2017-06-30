'use strict';

var gulp = require('gulp');

//this is from lesson week 7. npm install gulp-sass --save-dev
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'));
});

//https://www.npmjs.com/package/gulp-w3c-css/
//Validate all *.css files in the /css directory and write results to the /build directory. If there are no errors or warnings in a file, the resulting file will be empty. Otherwise the file will contain errors and warnings as JSON object:
var validate = require('gulp-w3c-css');
var path = require('path');
var gutil = require('gulp-util');
var srcPath = './assets/css/*.css';
var dstPath = './build';

//we created this task called validate based on the variable validate we brought
//in above for the gulp-w3c-css
gulp.task('validate', function(){
    gulp.src(srcPath)
      .pipe(validate())
      .pipe(gulp.dest(dstPath));
});

//https://www.npmjs.com/package/gulp-htmlhint/
//to validate html and check for errors (seen in console)
var htmlhint = require("gulp-htmlhint");

gulp.task('htmlhint', function(){
    gulp.src("./index.html")
      .pipe(htmlhint())
      .pipe(htmlhint.failReporter())
    });


//transpiler for writing next generation JavaScript.
//I added an ES6.js file with ES6 code and it changes them all to es2015
//http://es6-features.org/#ClassDefinition
//https://www.npmjs.com/package/gulp-babel/
const babel = require('gulp-babel');

gulp.task('babel', function(){
    return gulp.src('./assets/js/*.js')
            .pipe(babel({presets: ['es2015']}))
            .pipe(gulp.dest('dist'));
    });

//JS Asset beautification using node-beautify
//https://www.npmjs.com/package/gulp-beautify/
var beautify = require('gulp-beautify');

gulp.task('beautify', function() {
  gulp.src('./assets/js/*.js')
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('./public/'))
});

//gStrip console, alert, and debugger statements from JavaScript code
//https://www.npmjs.com/package/gulp-config-strip-debug/
var stripDebug = require('gulp-config-strip-debug');

gulp.task('stripDebug', function () {
    return gulp.src('./assets/js/*.js')
        .pipe(stripDebug())
        .pipe(gulp.dest('distdebug'));
});

//Minify CSS - made a really ugly css file in the out directory it created
//https://www.npmjs.com/package/gulp-csso/
var csso = require('gulp-csso');

gulp.task('csso', function () {
    return gulp.src('./assets/css/style.css')
        .pipe(csso())
        .pipe(gulp.dest('./out'));
});

//https://www.npmjs.com/package/gulp-rename
// rename via string
var rename = require("gulp-rename");

gulp.task('rename', function () {
  return gulp.src("./assets/images/blog-1.jpg")
  .pipe(rename("ciao/goodbye.md"))
  .pipe(gulp.dest("./dist")); // ./dist/ciao/goodbye.md
});







gulp.task('default', ['sass', 'validate', 'htmlhint', 'babel', 'beautify', 'stripDebug', 'csso', 'rename']);
