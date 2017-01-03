# Architizer/design-kit

## About

The purpose of the Design Kit is to enable Architizer’s designers to be familiar with our styles and components and to be able to use the symbols and assets in here to piece together future designs. 

Design Kit is generated from the basic starter project for [Foundation for Sites 6](http://foundation.zurb.com/sites). It includes a Sass compiler and a starter HTML file. It was made from `foundation-cli`.

## Installation

The following tools are required:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

Install [Bower](https://bower.io) and [Gulp](http://gulpjs.com/) globally:

```bash
npm install -g bower gulp
```

## Development

Run this in the terminal:

```bash
npm install
bower install
```

Finally, run `npm start` to run the Sass compiler. It will re-run every time you save a Sass file.

You can edit variables in `scss/_settings.scss` to override Foundation's default styles.

## Usage

When changes are committed to the master branch, the styles are recompiled by CircleCI and pushed to http://design-kit.arc.ht.

To use Architizer Design Kit on a page, include `adk.css`:

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
<script src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/js/foundation.min.js"></script>
<!-- Initialize Foundation -->
<script>$(document).foundation();</script>
```

Finally, add the `.adk` class to the `<html>` element on the page:

```html
<html class="adk" lang="en">
<!-- ... -->
</html>
```

### Scoping

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
    <script src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
```

### Starter Template

Here's a starter template:

```html
<!doctype html>
<html class="adk no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Architizer Design Kit Starter Template</title>
    <!-- Architizer Design Kit CSS -->
    <link rel="stylesheet" href="https://design-kit.arc.ht/css/adk.css" />
  </head>
  <body>
    <!-- Page content begins here -->
    <h1>Hello, world!</h1>
    <!-- Page content ends here -->
    <!-- JavaScript dependencies -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/what-input/2.1.1/what-input.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
```