var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var sherpa = require('style-sherpa');
var cssWrap = require('gulp-css-wrap');

var sassPaths = [
  'node_modules/normalize-scss/sass',
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

////////////////////////////////////////////////////////////////////////////////
// Tasks
////////////////////////////////////////////////////////////////////////////////

// Compile Sass
gulp.task('sass', function() {
  return gulp.src('scss/adk.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(cssWrap({
      selector: '.adk', // Wrap all Design Kit CSS in .adk class so we can scope it
    }))
    .pipe(gulp.dest('css'));
});

// Generate documentation
gulp.task('docs', function() {
  return sherpa('docs.md', {
    output: '/docs/index.html',
    template: 'docs.hbs'
  });
});

// Run local webserver
gulp.task('webserver', function() {
  return gulp.src('')
    .pipe($.webserver({
      path: '/',
      port: 8080,
      open: true,
      livereload: false,
    }));
});

// Default task
gulp.task('default', ['sass', 'docs', 'webserver'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['docs/**/*', 'docs.md'], ['docs']);
});
