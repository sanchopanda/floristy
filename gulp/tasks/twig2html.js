const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const config = require('../config')
const twig = require('gulp-twig');

module.exports = function twig2html() {
  return gulp.src('src/pages/*.twig')
    .pipe(plumber())
    .pipe(twig())
    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest('build'))
}

