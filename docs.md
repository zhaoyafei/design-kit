# Design Kit

Architizer Design Kit is a system of styles and interface elements based on [Foundation 6](http://foundation.zurb.com/docs).

<a class="primary hollow button" target="_blank" href="https://github.com/Architizer/design-kit">View on GitHub</a>

## Starter Template
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



# The Grid

Architizer Design Kit uses the standard Foundation 12-column flex-grid. You can [read more about it here](http://foundation.zurb.com/sites/docs/flex-grid.html).

---

## Overview

The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create vertical columns.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```
---

<div class="row display bg-quicksilver-50">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

## Useful links

* [Block Grids](http://foundation.zurb.com/sites/docs/flex-grid.html#block-grids)  
Make grids of items without dealing with column widths
* [Source Ordering](http://foundation.zurb.com/sites/docs/flex-grid.html#source-ordering)  
Move things around in responsive views without Javascript
* [Visibility classes](http://foundation.zurb.com/sites/docs/visibility.html)  
The bread and butter of responsive design in Foundation



# Colors

Based on the approach to color swatches taken by [Material Design](https://material.io/guidelines/style/color.html#color-color-palette), Design Kit's color system contains neutral colors and palette colors.

---

## Neutral Colors

Neutral colors exist stand-alone – they do not require a generated set of dynamic colors that are easily chosen and transitioned between for interactive or otherwise dynamic purposes.

### Utility Classes
These colors are surfaced as utility classes in the format below:
* `.{color}` sets the `color` CSS property
* `.bg-{color}` sets the `background-color` CSS property
* `.border-{color}` sets the `border-color` CSS property

where:
* `{color}` is the name of the color

### Color Reference
<div class="row color-blocks small-up-1">
  <div class="column">
    <div class="card">
    <div class="card-section bg-white"><strong>white</strong></div>
    <div class="card-section bg-extra-light-gray"><strong>extra-light-gray</strong></div>
    <div class="card-section bg-light-gray"><strong>light-gray</strong></div>
    <div class="card-section bg-medium-gray"><strong>medium-gray</strong></div>
    <div class="card-section bg-black white"><strong>black</strong></div>
    </div>
  </div>
</div>

---

## Palette Colors

We use a base set of palette colors and generate 9 shades (5 lighter, 4 darker) for each of them.
Currently, each shade is **incremented by 7% lightness**, but the SCSS functions are written to be modifiable.

### Utility Classes
These colors are surfaced as utility classes in the format below:
* `.{color}` sets the `color` CSS property (uses the *500* shade for this color)
* `.{color}-{shade}` sets the `color` CSS property  (to specify the shade)
* `.bg-{color}-{shade}` sets the `background-color` CSS property
* `.border-{color}-{shade}` sets the `border-color` CSS property

where:
* `{color}` is the name of the color
* `{shade}` is the *number* of the shade (e.g. *500* or *300*)

### Color Reference
<div class="row color-blocks small-up-2 medium-up-3 large-up-3">

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>quicksilver</p>
      </div>
    <div class="card-section bg-quicksilver-50"><strong>50</strong></div>
    <div class="card-section bg-quicksilver-100"><strong>100</strong></div>
    <div class="card-section bg-quicksilver-200"><strong>200</strong></div>
    <div class="card-section bg-quicksilver-300"><strong>300</strong></div>
    <div class="card-section bg-quicksilver-400"><strong>400</strong></div>
    <div class="card-section bg-quicksilver-500"><strong>500</strong></div>
    <div class="card-section bg-quicksilver-600"><strong>600</strong></div>
    <div class="card-section bg-quicksilver-700 white"><strong>700</strong></div>
    <div class="card-section bg-quicksilver-800 white"><strong>800</strong></div>
    <div class="card-section bg-quicksilver-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>blue</p>
      </div>
    <div class="card-section bg-blue-50"><strong>50</strong></div>
    <div class="card-section bg-blue-100"><strong>100</strong></div>
    <div class="card-section bg-blue-200"><strong>200</strong></div>
    <div class="card-section bg-blue-300"><strong>300</strong></div>
    <div class="card-section bg-blue-400"><strong>400</strong></div>
    <div class="card-section bg-blue-500"><strong>500</strong></div>
    <div class="card-section bg-blue-600"><strong>600</strong></div>
    <div class="card-section bg-blue-700 white"><strong>700</strong></div>
    <div class="card-section bg-blue-800 white"><strong>800</strong></div>
    <div class="card-section bg-blue-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>green</p>
      </div>
    <div class="card-section bg-green-50"><strong>50</strong></div>
    <div class="card-section bg-green-100"><strong>100</strong></div>
    <div class="card-section bg-green-200"><strong>200</strong></div>
    <div class="card-section bg-green-300"><strong>300</strong></div>
    <div class="card-section bg-green-400"><strong>400</strong></div>
    <div class="card-section bg-green-500"><strong>500</strong></div>
    <div class="card-section bg-green-600"><strong>600</strong></div>
    <div class="card-section bg-green-700 white"><strong>700</strong></div>
    <div class="card-section bg-green-800 white"><strong>800</strong></div>
    <div class="card-section bg-green-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>red</p>
      </div>
    <div class="card-section bg-red-50"><strong>50</strong></div>
    <div class="card-section bg-red-100"><strong>100</strong></div>
    <div class="card-section bg-red-200"><strong>200</strong></div>
    <div class="card-section bg-red-300"><strong>300</strong></div>
    <div class="card-section bg-red-400"><strong>400</strong></div>
    <div class="card-section bg-red-500"><strong>500</strong></div>
    <div class="card-section bg-red-600"><strong>600</strong></div>
    <div class="card-section bg-red-700 white"><strong>700</strong></div>
    <div class="card-section bg-red-800 white"><strong>800</strong></div>
    <div class="card-section bg-red-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>yellow</p>
      </div>
    <div class="card-section bg-yellow-50"><strong>50</strong></div>
    <div class="card-section bg-yellow-100"><strong>100</strong></div>
    <div class="card-section bg-yellow-200"><strong>200</strong></div>
    <div class="card-section bg-yellow-300"><strong>300</strong></div>
    <div class="card-section bg-yellow-400"><strong>400</strong></div>
    <div class="card-section bg-yellow-500"><strong>500</strong></div>
    <div class="card-section bg-yellow-600"><strong>600</strong></div>
    <div class="card-section bg-yellow-700 white"><strong>700</strong></div>
    <div class="card-section bg-yellow-800 white"><strong>800</strong></div>
    <div class="card-section bg-yellow-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>gunmetal</p>
      </div>
    <div class="card-section bg-gunmetal-50"><strong>50</strong></div>
    <div class="card-section bg-gunmetal-100"><strong>100</strong></div>
    <div class="card-section bg-gunmetal-200"><strong>200</strong></div>
    <div class="card-section bg-gunmetal-300"><strong>300</strong></div>
    <div class="card-section bg-gunmetal-400"><strong>400</strong></div>
    <div class="card-section bg-gunmetal-500"><strong>500</strong></div>
    <div class="card-section bg-gunmetal-600"><strong>600</strong></div>
    <div class="card-section bg-gunmetal-700 white"><strong>700</strong></div>
    <div class="card-section bg-gunmetal-800 white"><strong>800</strong></div>
    <div class="card-section bg-gunmetal-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>gray</p>
      </div>
    <div class="card-section bg-gray-50"><strong>50</strong></div>
    <div class="card-section bg-gray-100"><strong>100</strong></div>
    <div class="card-section bg-gray-200"><strong>200</strong></div>
    <div class="card-section bg-gray-300"><strong>300</strong></div>
    <div class="card-section bg-gray-400"><strong>400</strong></div>
    <div class="card-section bg-gray-500"><strong>500</strong></div>
    <div class="card-section bg-gray-600"><strong>600</strong></div>
    <div class="card-section bg-gray-700 white"><strong>700</strong></div>
    <div class="card-section bg-gray-800 white"><strong>800</strong></div>
    <div class="card-section bg-gray-900 white"><strong>900</strong></div>
    </div>
  </div>

</div>



# Typography

This design uses Theinhardt for headings and paragraph text.

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

---
## Utility Classes

#### Font T-Shirt sizes 
* XSmall `fs-xs` 
* Small `fs-s` 
* Base `fs-base` 
* Medium `fs-m` 
* Large `fs-l`

#### Ellipsis

Add `.ellipsis` to overflow a long text element with an ellipsis.

The text must be contained inside an element with a defined width, like a `.columns` div.

```html_example
<div class="row">
  <div class="small-3 columns">
    <div class="card">
      <img src="img/saturn.jpg">
      <p class="ellipsis">This is a really long text field and it definitely won't fit on this card.</p>
    </div>
  </div>
</div>
```



# Buttons

## Sizes

```html
<a href="#" class="large button">.large .button</a>
<a href="#" class="button">.button</a>
<a href="#" class="small button">.small .button</a>
<a href="#" class="tiny button">.tiny .button</a>
<a href="#" class="icon button"><i class="material-icons">face</i></a>
```

<a href="#" class="large button">.large .button</a>
<a href="#" class="button">.button</a>
<a href="#" class="small button">.small .button</a>
<a href="#" class="tiny button">.tiny .button</a>
<a href="#" class="icon button">.icon .button</a>
<a href="#" class="icon button"><i class="material-icons">face</i></a>
<a href="#" class="icon button"><i class="material-icons">motorcycle</i></a>
<a href="#" class="icon button"><i class="material-icons">help_outline</i></a>
<a href="#" class="icon button"><i class="material-icons">favorite</i></a>
<a href="#" class="icon button"><i class="material-icons">close</i></a>
<a href="#" class="icon button"><i class="material-icons">done</i></a>

---
## Colors

Foundation comes the following classes for button colors:

<div class="row small-up-2 medium-up-5">
  <!-- .primary -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded primary button">.primary</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded primary-light button">.primary-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled primary button">.primary .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow primary button">.primary .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled primary button">.primary .hollow .disabled</a></div></div>
  </div>
  <!-- .secondary -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded secondary button">.secondary</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded secondary-light button">.secondary-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled secondary button">.secondary .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow secondary button">.secondary .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled secondary button">.secondary .hollow .disabled</a></div></div>
  </div>
  <!-- .alert -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded alert button">.alert</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded alert-light button">.alert-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled alert button">.alert .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow alert button">.alert .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled alert button">.alert .hollow .disabled</a></div></div>
  </div>
  <!-- .warning -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded warning button">.warning</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded warning-light button">.warning-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled warning button">.warning .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow warning button">.warning .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled warning button">.warning .hollow .disabled</a></div></div>
  </div>
  <!-- .success -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded success button">.success</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded success-light button">.success-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled success button">.success .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow success button">.success .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled success button">.success .hollow .disabled</a></div></div>
  </div>
</div>

```html
<a href="#" class="primary button">.primary</a>
<a href="#" class="primary-light button">.primary-light</a>
<a href="#" class="expanded disabled primary button">.primary .disabled</a>
<a href="#" class="primary hollow button">.primary .hollow</a>
<a href="#" class="primary hollow disabled button">.primary .hollow .disabled</a>
```
Append `-light` to the Foundation color classes to make the button lighter.

---

## Variants

### Pills

Pill buttons extend base buttons, but have a smaller padding. They are intended for use in forms.

```html_example
<a href="#" class="pill button">.pill</a>
<a href="#" class="secondary pill button">.secondary .pill</a>
<a href="#" class="alert hollow pill button">.alert .hollow .pill</a>
<a href="#" class="warning-light pill button">.warning-light .pill</a>
<a href="#" class="success disabled pill button">.success .disabled .pill</a>
```

---

### Icon Buttons

Icon buttons extend hollow buttons, but only show an outline on hover. They are intended for use in action bars.


Use `.fill` to set the background color.

```html_example
<button class="secondary icon button"><span class="material-icons">add</span></button>
<button class="primary icon button"><span class="material-icons">more_horiz</span></button>
<button class="alert icon button"><span class="material-icons">close</span></button>
<button class="success icon button"><span class="material-icons">done</span></button>
<button class="warning icon fill button"><span class="material-icons">lightbulb_outline</span></button>
```



# Images
When creating thumbnails in series, such as on product cards or modals, place the images inside thumbnail rows instead of the regular grid rows.

`thumbnails-up-[n]` - Add this class to what will be the row of the thumbnails. It follows the normal grid's naming convention for how many columns should be inside of it. `n` can be a number from 2-6; you shouldn't ever need any more than 6 thumbnails in series, and try to use an even number of columns. 

`thumb-col` - Add this class to the thumbnails column itself, and add the image inside of it.

## Thumbnail Rows
```html_example
<div class="row">
  <div class="small-12 medium-4 columns">
    <div class="thumbnails-up-2">
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="small-12 medium-4 columns">
    <div class="thumbnails-up-4">
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="small-12 medium-4 columns">
    <div class="thumbnails-up-6">
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
    </div>
  </div>
</div>
```



# UI

## Top Bar

The top bar is the main header on Architizer.

```html_example
<!-- Top Bar -->
<div class="top-bar">
  <div class="row"> <!-- Wrap the contents in a row so the $grid-row-width will be applied -->
    <div class="columns">
      <div class="top-bar-title">
        <span data-hide-for="medium" data-responsive-toggle="responsive-menu">
          <button type="button" data-toggle><i class="material-icons">menu</i></button>
        </span>
        <a href="#"><span class="architizer-glyph black">B</span></a>
      </div>
      <div id="responsive-menu">
        <div class="top-bar-left">
          <ul class="vertical medium-horizontal menu">
            <li><a href="#">News</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">A+Awards</a></li>
            <li class="active"><a href="#">Source</a></li>
          </ul>
        </div>
        <div class="top-bar-right">
          <ul class="dropdown menu" data-dropdown-menu data-click-open="true" data-disable-hover="true">
            <li>
              <a href="#">Rem Koolhaas</a>
              <ul class="menu">
                <li><a href="#">Your Profile &amp; Collections</a></li>
                <li><a href="#"><i class="material-icons">work</i> OMA</a></li>
                <li><a href="#">Account Settings</a></li>
                <li><a href="#">Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
```
---

## Action Bars

Action Bars are title bars with other functionality inside them.

```html_example
<div class="row actionbar">
  <!-- Left: Data -->
  <div class="small-12 large-expand columns">
    <!-- Breadcrumbs -->
    <div class="row">
      <div class="columns">
        <ul class="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li><a href="#">Journal Squared</a></li>
          <li>
            <!-- Current View Title -->
            <span class="inline-block">14 Ergonomic Office Chairs</span>
            <!-- Dropdown "..." Menu -->
            <span class="inline-block">
              <ul class="dropdown menu" data-dropdown-menu data-click-open="true" data-disable-hover="true">
                <li>
                  <span><i class="material-icons">more_horiz</i></span>
                  <ul class="menu">
                    <li><a href="#">Details</a></li>
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">Preview</a></li>
                    <li><a class="disabled" href="#">Download CSV</a></li>
                    <li><a class="red" href="#">Delete</a></li>
                  </ul>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Current View Title -->
    <div class="row">
      <div class="columns">
        <h3>Products</h3>
      </div>
    </div>
  </div>
  <!-- Right: Buttons -->
  <div class="columns shrink">
    <a class="light-gray mr-l">Searches</a>
    <a class="light-gray mr-l">Messages</a>
    <a class="primary button">New Search</a>
  </div>
</div>
```
---

## Cards 
Card elements are modules that can be used across our UI, and are currently used for the most part in our conversation feed. In these feeds cards can be basic messages, product activity/status cards, recommended products and more, but across the UI we should think of anything as being able to be a "card" that is reused across the system, e.g. product search criteria, so that we don't need to rebuild the same content over and over again when it appears in different places. Card componenets let us copy, paste and reuse. 

**A note about card spacing:**
Because cards are self-contained elements, the top-level `.card` class handles the spacing/gutter inside the card. Therefore the only spacing that happens on elements inside cards is margin-bottom to control vertical spacing, defined by `$card-content-margin`.

- `.card` - Top level class for creating card elements. Add `.border-blue` utility class to create a blue outline. 
- `.card.clickable` - Add "clickable" to a card if it is an interactive element.
- `.caption` - To be used inside card headers to show the status or type of a card, if it's a product.
- `.card-button` - This is our old style card action, which was a button embedded into the card itself. Potentially deprecated.

Refer to [Foundation's Card Documentation](http://foundation.zurb.com/sites/docs/card.html) for all card options.

#### Product Card Examples
```html_example
<div class="row small-up-2 medium-up-4">
  <!-- Product Card 1-->
  <div class="column">
    <div class="card clickable" onclick="cardClick()";">
      <!-- Card Image -->
      <div class="card-section card-image card-image-no-margin"
           style="background-image: url('/docs/img/table.jpg')"></div>
      <!-- Card Content -->
      <div class="card-section">
        <!-- Response Marking and Dropdown Menu-->
        <div class="row">
          <!-- Response Marking -->
          <div class="columns shrink">
            <span class="caption blue">New Product</span>
          </div>
          <!-- Middle Spacing -->
          <!-- <div class="columns"></div> -->
          <!-- Dropdown Menu -->
<!--           <div class="columns shrink">
            <ul class="dropdown menu"
                data-dropdown-menu
                data-alignment="right"
                data-click-open="true"
                data-disable-hover="true">
              <li>
                <span class=>
                  <i class="material-icons" 
                     style="cursor:pointer; width:1rem;">more_horiz2</i>
                </span>
                <ul class="menu">
                  <li>
                    <a>Shortlist</a>
                  </li>
                  <li>
                    <a>Dismiss</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div> -->
        </div>
        <!-- Product Name -->
        <div class="row align-middle">
          <div class="column">
            <div class="row">
              <strong>Pollock Executive Chair</strong>
            </div>
            <!-- Brand Name -->
            <div class="row align-middle">
              <div class="columns shrink meta">
                <a href="#"
                   target="_blank" 
                   class="underline">Knoll</a>
              </div>
              <!-- If Verified -->
              <div class="columns shrink ml-xxs pl-0">
                <span class="architizer-glyph blue-500">+</span>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="float-right">
              <button class="alert icon button"><span class="material-icons">close</span></button>
              <button class="success icon button"><span class="material-icons">done</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Product Card 2-->
  <div class="column">
    <div class="card clickable" onclick="cardClick()";">
      <!-- Card Image -->
      <div class="card-section card-image card-image-no-margin"
           style="background-image: url('/docs/img/table.jpg')"></div>
      <!-- Card Content -->
      <div class="card-section">
        <!-- Response Marking and Dropdown Menu-->
        <div class="row">
          <!-- Response Marking -->
          <div class="columns shrink">
            <span class="caption blue">New Product</span>
          </div>
          <!-- Middle Spacing -->
          <div class="columns"></div>
          <!-- Dropdown Menu -->
          <div class="columns shrink">
            <ul class="dropdown menu"
                data-dropdown-menu
                data-alignment="right"
                data-click-open="true"
                data-disable-hover="true">
              <li>
                <span class=>
                  <i class="material-icons" 
                     style="cursor:pointer; width:1rem;">more_horiz2</i>
                </span>
                <ul class="menu">
                  <li>
                    <a>Shortlist</a>
                  </li>
                  <li>
                    <a>Dismiss</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- Product Name -->
        <div class="row">
          <strong>Pollock Executive Chair</strong>
        </div>
        <!-- Brand Name -->
        <div class="row align-middle">
          <div class="columns shrink meta pr-0">
            <a href="#"
               target="_blank" 
               class="underline">Knoll</a>
          </div>
          <!-- If Verified -->
          <div class="columns shrink ml-xxs pl-0">
            <span class="architizer-glyph blue-500">+</span>
          </div>
        </div>
      </div>
      <!-- View Product Button -->
<!--       <div class="card-section">
        <a class="primary hollow button expanded">View Product</a>
      </div> -->
    </div>
  </div> 
  <!-- Product Card 3-->
  <div class="column">
    <div class="card">
      <!-- Card Image -->
      <div class="card-section card-image card-image-no-margin"
           style="background-image: url('/docs/img/table.jpg')"></div>
      <!-- Card Content -->
      <div class="card-section">
        <!-- Response Marking and Dropdown Menu-->
        <div class="row">
          <!-- Response Marking -->
          <div class="columns shrink">
            <span class="caption blue">New Product</span>
          </div>
          <!-- Middle Spacing -->
          <div class="columns"></div>
          <!-- Dropdown Menu -->
          <div class="columns shrink">
            <ul class="dropdown menu"
                data-dropdown-menu
                data-alignment="right"
                data-click-open="true"
                data-disable-hover="true">
              <li>
                <span class=>
                  <i class="material-icons" 
                     style="cursor:pointer; width:1rem;">more_horiz2</i>
                </span>
                <ul class="menu">
                  <li>
                    <a>Shortlist</a>
                  </li>
                  <li>
                    <a>Dismiss</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- Product Name -->
        <div class="row">
          <strong>Pollock Executive Chair</strong>
        </div>
        <!-- Brand Name -->
        <div class="row align-middle">
          <div class="columns shrink meta pr-0">
            <a href="#"
               target="_blank" 
               class="underline">Knoll</a>
          </div>
          <!-- If Verified -->
          <div class="columns shrink ml-xxs pl-0">
            <span class="architizer-glyph blue-500">+</span>
          </div>
        </div>
      </div>
      <!-- View Product Button -->
      <div class="card-section">
        <a class="primary hollow button expanded">View Product</a>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div class="card-section">
        <div class="row">
          <div class="columns">
            <span class="caption blue">New Product</span>
          </div>
        </div>
      </div>
      <div class="card-section">
        <div class="row">
          <div class="medium-8 columns">
            <strong>Product Title</strong>
            <p>This card is a new product with our old button.</p>
          </div>
          <div class="columns">
            <img src="/docs/img/table.jpg">
          </div>
        </div>
      </div>
      <div class="card-button">
        <a href="#">View Product</a>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card border-blue">
      <div class="card-section">
      <p>A basic message with a blue outline</p>
      </div>
    </div>
  </div>
</div>
<script>
function cardClick() {
    alert("Open this product modal!");
}
</script>
```
---

## Modals

Modals are popup windows. They are based on Foundation [Reveal](http://foundation.zurb.com/sites/docs/reveal.html).

### Modal Classes
* `.header` - Header section for modal title
* `.footer` - Footer section for modal buttons

Use Foundation [Flex Grid](http://foundation.zurb.com/sites/docs/flex-grid.html) classes when building content inside of modals.

Refer to the code below to structure a modal or start with the modal template in [`templates/modal.html`](/templates/modal.html).

### Example
```html_example
<!-- Open Modal Button-->
<a class="button" data-open="exampleModal1">Click me for a modal</a>

<!-- Modal Content -->
<div class="reveal" id="exampleModal1" data-reveal>
  <!-- Header -->
  <div class="header">
    <div class="row">
      <!-- Modal Title -->
      <div class="columns">
        <h4><strong>Product Name</strong></h4>
      </div>
      <!-- Close Button -->
      <div class="columns shrink">
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span class="material-icons" aria-hidden="true">close</span>
        </button>
      </div>
    </div>
  </div>
  <!-- Attachments -->
  <div class="row">
    <div class="columns">
      <div class="thumbnails-up-4">
        <div class="thumb-col">
          <img class="thumbnail" src="/docs/img/bear.gif" alt="Product">
        </div>
        <div class="thumb-col">
          <img class="thumbnail" src="/docs/img/bear.gif" alt="Product">
        </div>
        <div class="thumb-col">
          <img class="thumbnail" src="/docs/img/bear.gif" alt="Product">
        </div>
        <div class="thumb-col">
          <img class="thumbnail" src="/docs/img/bear.gif" alt="Product">
        </div>
      </div>
    </div>
  </div>
  <!-- Brand -->
  <div class="row">
    <div class="columns">
      <div class="media-object">
        <div class="media-object-section middle">
          <img class="thumbnail brand" src="/docs/img/bear.gif" alt="Product">
        </div>
        <div class="media-object-section main-section">
          <h5>Cubby Bear Manufacturing</h5>
          <span class="meta">Sent on January 4, 2017</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Description -->
  <div class="row">
    <div class="columns">
      <h5 class="mb-xs"><strong>Description</strong></h5>
      <p>I'm really just a wonderful product inside of an even cooler modal. Puppy kitty ipsum dolor sit good dog roll over carrier tuxedo fish lol catz puppy kisses pet supplies meow scooby snacks meow mittens. Fido Rover lol catz yawn drool wag tail Fido food pet gate purr warm behavior kibble litter box ID tag. Roll Over house train chirp pet supplies shake polydactyl wet nose harness tabby biscuit gimme five Rover vaccine roll over licks nap parrot lol catz. Wins!</p>
    </div>
  </div>
  <!-- Metrics -->
  <div class="row mb-xxs">
    <div class="columns">
      <h5 class="mb-xs"><strong>Details</strong></h5>
      <div class="row small-up-4 collapse">
        <div class="column">
          <h5>1.00 – 2.00 USD</h5>
          <h6 class="subheader">Price Per Units</h6>
        </div>
        <div class="column">
          <h5>Two Weeks</h5>
          <h6 class="subheader">Lead Time</h6>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="columns">
      <a class="">View product on manufacturer's site</a>
    </div>
  </div>
  <!-- Footer (Buttons) -->
  <div class="footer">
    <div class="row align-center">
      <div class="small-3 columns">
        <button class="secondary hollow small expanded button" data-close type="button">Close</button>
      </div>
      <div class="small-3 columns">
        <button class="small expanded button" data-close type="button">Save</button>
      </div>
    </div>
  </div>
</div>
```




# Forms

Use forms to allow users to interact with the site and provide information to the company.

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

**Utilities**

`.no-h-resize` - Add this to textareas to prevent the user from resizing the element horizontally

`.no-v-resize` - Add this to textareas to prevent the user from resizing the element vertically

---

## Learn All About Forms

Check out the [Foundation Docs](http://foundation.zurb.com/sites/docs) to learn about how flexible our forms are for creating different layouts. It works perfectly with the grid to meet all your form needs.

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```



# Tables
Tables are simple. We've got a few classes applied to set the styling and alignment of the cells. For all other table settings and classes, reference [Foundation's Table Documentation.](http://foundation.zurb.com/sites/docs/table.html)

Table cells may have plain text, links, buttons, and actions.

## Actions
"Actions" in tables should be used when doing something within the current view, such as opening a modal. They look like small links. To create one, apply `.action` to the cell's `<td>` tag.
```html
<td class="action"><a>Send Email</a></td>
```

When building tables, try to keep the action/button columns hugging the right side of the table. This improves readability when scanning tables with sparse data.

## Alignment
In columns:

- Buttons and actions should be centered
- Numbers should be aligned right
- Text should be aligned left

Apply `.centered`, `.left`, or `.right` to the cell tag.

Add `.inactive` to make a row appear inactive, such as on product rows that have been dismissed by an architect.

Add `.underline` to links that direct the user to external pages to keep these distinct from in-app links. 

## Example
```html_example
<div class="row expanded">
  <table class="hover">
    <thead>
      <tr>
        <th width="140">Brand</th>
        <th width="200">Product Name</th>
        <th>Status</th>
        <th class="center" width="100">Outreach</th>
        <th class="center" width="100">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="underline">Knoll</a></td>
        <td>Pollock Executive Chair</td>
        <td>Recommended</td>
        <td class="action"><a>Send Email</a></td>
        <td class="action"><a>View</a></td>
      </tr>
      <tr>
        <td><a class="underline">Herman Miller</a></td>
        <td>Aeron Chair</td>
        <td>In Review</td>
        <td class="action"><a>Send Email</a></td>
        <td class="action"><a>View</a></td>
      </tr>
      <tr class="inactive">
        <td><a class="underline">Steelcase</a></td>
        <td>Mesh Think Chair</td>
        <td>Dismissed</td>
        <td class="action"><a>Send Email</a></td>
        <td class="action"><a>View</a></td>
      </tr>
    </tbody>
  </table>
</div>
```




# Spacing and Scale


Design Kit has utility classes for applying margins and paddings to elements.

The classes are named using the format `{property}{side}-{size}`

Where *property* is one of:

* `m` - for classes that set `margin`
* `p` - for classes that set `padding`

Where *sides* is one of:

* `t` - for classes that set `margin-top` or `padding-top`
* `b` - for classes that set `margin-bottom` or `padding-bottom`
* `l` - for classes that set `margin-left` or `padding-left`
* `r` - for classes that set `margin-right` or `padding-right`
* blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

* `0` - for classes that eliminate the margin or padding by setting it to `0`
* `micro` - for classes that set the margin or padding to `$space-micro`
* `xxxs` - for classes that set the margin or padding to `$space-xxxs`
* `xxs` - for classes that set the margin or padding to `$space-xxs`
* `xs` - for classes that set the margin or padding to `$space-xs`
* `s` - for classes that set the margin or padding to `$space-s`
* `base` - for classes that set the margin or padding to `$space`
* `m` - for classes that set the margin or padding to `$space-m`
* `l` - for classes that set the margin or padding to `$space-l`
* `xl` - for classes that set the margin or padding to `$space-xl`
* `xxl` - for classes that set the margin or padding to `$space-xxl`
* `xxxl` - for classes that set the margin or padding to `$space-xxxl`

(You can add more sizes by adding entries to the `$sizes` Sass map variable in `_adk-spacing.scss`)


#### Example

```html_example
<button class="button p-0">.p-0</button>
<button class="button p-micro">.p-micro</button>
<button class="button p-xxs">.p-xxs</button>
<button class="button p-xs">.p-xs</button>
<button class="button p-s">.p-s</button>
<button class="button p-base">.p-base</button>
<button class="button p-m">.p-m</button>
<button class="button p-l">.p-l</button>
<button class="button p-xl">.p-xl</button>
<button class="button p-xxl">.p-xxl</button>
```

---

### Scale
Ideally, the styling of every element in our UI is controlled by a scalar system which gives all our pages and interface a sense of relationship and harmony. That means that by changing one number, the scale itself, the spacing of elements in relation to each other and the elements themselves will all change according to the system. By combining REMs, which reference font size of the root `html` element, the browser's font size, with a scale that dictates the relationship to the default font size, we are able to do this.

ADK uses a scale of 1.25 (Major Third) and is set by the `$scale` variable. Refer to [TypeScale](http://type-scale.com/) to play with different scales and see how the affect headings. These relationships are built of 1.25 scale (each subsequent number is multiplied by 1.25):

`0.134rem` `0.21rem` `0.328rem` `0.512rem` `0.8rem` `1rem` `1.25rem` `1.563rem` `1.953rem` `2.441rem` `3.05rem` etc…

Thus all of our spacing, font sizing, padding, etc. should be based on this scale. We've included t-shirt size variables that you should use to styling elements. **_Try not to hard-code pixel numbers_**.

These are the variables:
```
$space: 1rem; // 16px
$space-m: 1.25rem; // 20px
$space-l: 1.563rem; // 25px
$space-xl: 1.953rem; // 31.25px
$space-xxl: 2.441rem; // 39px
$space-xxxl: 3.05rem; // 48.8px
$space-s: 0.8rem; // 12.8px
$space-xs: 0.512rem; // 8.2px
$space-xxs: 0.328rem; // 5.2px
$space-xxxs: 0.21rem; // 3.4px
$space-micro: 0.134rem; // 2.1px
```

#### Reference

[Bootstrap Reference](https://v4-alpha.getbootstrap.com/utilities/spacing/)


---



# Extensions

Extensions are Architizer styles applied to third-party JavaScript/CSS libraries.

---
## Selectize

This is a [selectize](http://selectize.github.io/selectize.js/) element.

<input type="text" class="selectize"></input>

There are classes in `scss/_adk-selectize.scss` that affect the styling of this element.

We extend the default [`selectize.css`](https://github.com/selectize/selectize.js/blob/master/dist/css/selectize.css) with our `/scss/_adk-selectize.scss` file to overwrite default styles.

---

## Dropzone

This is a [Dropzone.js](http://dropzonejs.com) element.

<div id="dropzoneExample" action="file/" class="dropzone"></div>

There are classes in `scss/_adk-dropzone.scss` that affect the styling of this element.

We extend the default [`dropzone.scss`](https://github.com/enyo/dropzone/blob/master/src/dropzone.scss) with our `/scss/_adk-dropzone.scss` file to overwrite default styles.
