var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var sherpa = require('style-sherpa');
var fs = require('fs');
var path = require('path');

var sassPaths = [
  'node_modules/normalize-scss/sass',
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];
var adkTemplatesDir = path.resolve(__dirname, 'templates');
var adkTemplatesData = fs.readdirSync(adkTemplatesDir)
  .filter(adkTemplateFile => adkTemplateFile.indexOf('index') < 0) // exclude the `.hbs` template
  .map(adkTemplateFile => {
    return {
      title: adkTemplateFile.split('.')[0], // remove `.html` extension
      url: adkTemplateFile
    };
  });

////////////////////////////////////////////////////////////////////////////////
// Tasks
////////////////////////////////////////////////////////////////////////////////

gulp.task('createAdkTemplatesList', function() {
  return gulp.src('templates/index.hbs')
    .pipe($.compileHandlebars({ adkTemplates: adkTemplatesData }))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest('templates'));
});

// Compile Sass
gulp.task('sass', function() {
  return gulp.src('scss/adk.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
    .on('error', $.sass.logError))
    // Wrap all Design Kit CSS in .adk class so we can scope it
    .pipe($.cssWrap({
      selector: '.adk',
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    // Minify the output
    .pipe($.cleanCss())
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
      open: false,
      livereload: false,
      middleware: [cors],
    }));

  function cors (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }

});

// Default task
gulp.task('default', ['sass', 'docs', 'createAdkTemplatesList', 'webserver'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['docs/**/*', 'docs.md', 'docs.hbs'], ['docs']);
});
