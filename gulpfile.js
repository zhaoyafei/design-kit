var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var sherpa = require('style-sherpa');

/**
 * CSS Wrap
 *
 * Wraps all Architizer Design Kit styles in the .adk class
 * This allows us to turn on Design Kit styles at will by adding this class to any element
 */
var cssWrap = require('gulp-css-wrap');

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/adk.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(cssWrap({
      selector: '.adk',
    }))
    .pipe(gulp.dest('css'));
});

/**
  * Generate Style-Sherpa pages
  * TODO: Don't commit the generated docs/index.html; or set a 'clean' task for the docs/index.html file
  */

gulp.task('sherpa', function() {
  return sherpa('docs/index.md', {
    output: 'index.html',
    template: 'docs/template.hbs'
  });
});

/** 
 * Run a web server on port 8080
 */
gulp.task('webserver', function() {
  return gulp.src('')
    .pipe($.webserver({
      path: '/',
      port: 8080,
      open: true,
      fallback: 'index.html',
      livereload: true,
    }));
});

gulp.task('default', ['sass', 'sherpa', 'webserver'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['docs/**/*'], ['sherpa']);
});
