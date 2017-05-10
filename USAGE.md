# Usage

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