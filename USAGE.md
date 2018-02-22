# Usage

## As `npm` module
To use the `scss` or `css` from Architizer Design Kit in a node project, you can install the library with
```bash
npm install --save architizer-design-kit
```

This will install the latest version of `architizer-design-kit`. Currently, the library exposes the URL to the built `adk.css` through the `adkCssFile` export. An example of a gulp task which adds `adk.css` to its CSS build:
```
const adk = require('architizer-design-kit')
gulp.task('css', function() {
  return gulp.src(['style.css', adk.adkCssFile])
    .pipe(concat('final.css'))
    .pipe(gulp.dest('./dist/'))
```

Ultimately, the npm library should also export links to the SCSS files, to allow selective importing of variables and modules for use in SCSS pipelines (e.g. `webpack`).

## As static library
To use Architizer Design Kit on a page, include `adk.css`, which will always contain the latest `master` build:

```html
<head>
  <!-- Architizer Design Kit CSS -->
  <link rel="stylesheet" href="//design-kit.arc.ht/css/adk.css">
</head>
```

Next, include the JavaScript dependencies (jQuery, [what-input](https://github.com/ten1seven/what-input), and Foundation JavaScript), then initialize Foundation's JavaScript:

```html
<!-- JavaScript dependencies -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/what-input/2.1.1/what-input.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/js/foundation.min.js"></script>
<!-- Initialize Foundation -->
<script>$(document).foundation();</script>
```

Finally, add the `.adk` class to the `<html>` element on the page:

```html
<html class="adk" lang="en">
<!-- ... -->
</html>
```

## Scoping

If you don't want to (or can't) include Architizer Design Kit globally on a whole page using a class on the `<html>` element, you can include the `.adk` class on child elements to scope Design Kit styles to affect just that element. See this example:

```html
<!doctype html>
<html>
  <head>
    <title>A page with both Design Kit and another style framework</title>
    <!-- Architizer Design Kit CSS -->
    <link rel="stylesheet" href="https://design-kit.arc.ht/css/adk.css" />
  </head>
  <body>
    <h1>Here's a heading we don't want Design Kit to affect (yet).</h1> <!-- No .adk, so no Design Kit styles -->
    <div class="adk row"> <!-- Check it out, .adk only on this element! -->
      <div class="large-8 columns">
        <p>But here's a place where we do want Design Kit styles.</p>
      </div>
    </div>
    <div class="merlin-stuff"> <!-- No .adk, so no Design Kit styles -->
      <p>Here's some other stuff that we need to keep in an old style framework.</p>
    </div>
    <!-- JavaScript dependencies -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/what-input/2.1.1/what-input.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
```
