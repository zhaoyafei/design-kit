# Design Kit

A system of styles specific to Architizer's interface and presence on the web.
The Design Kit is based on [Foundation 6](http://foundation.zurb.com/docs), and includes a number of custom utilities:
* [Spacing & Scale](#spacing-and-scale)
* [Colors](#colors)
* [Styled Extensions](#extensions)
* <span class="light-gray">Starter code snippets (coming soon!)</span>

---

## View on GitHub
You can see instructions for contributing and deploying to the `Architizer/design-kit` repository on Github.
<a class="primary hollow button mt-s" target="_blank" href="https://github.com/Architizer/design-kit">View on Github</a>



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

These colors are surfaced as utility classes in the format `.{color}` or `.bg-{color}`, where:
* `{color}` is the name of the color,
* `.{color}` sets the `color` CSS property, and
* `.bg-{color}` sets the `background-color` CSS property.

Our palette of neutral colors currently consists of the following:

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

These colors are surfaced as utility classes in the format `.{color}-{shade}` or `.bg-{color}-{shade}`, where:
* `{color}` is the name of the color,
* `{shade}` is the *number* of the shade (e.g. *500* or *300*),
* `.{color}-{shade}` sets the `color` CSS property, and
* `.bg-{color}-{shade}` sets the `background-color` CSS property.


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



# Buttons

Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

## Button Colors

These are all the other colors you can use for buttons

```html_example
<a href="#" class="primary button">Default button</a>
<a href="#" class="secondary button">Default button</a>
<a href="#" class="success button">Default button</a>
<a href="#" class="alert button">Default button</a>
<a href="#" class="warning button">Default button</a>

```

Append `-light` to the color name to make the button lighter. This is mainly used on pills (below) but may be used elsewhere down the line. 

```html_example
<a href="#" class="primary-light button">Light button</a>
<a href="#" class="secondary-light button">Light button</a>

```

---

## Pills

Pills are small buttons that are used in forms to add/append fields or content. They are distinct  from "tags", which look like pills but are static and cannot be clicked. To create one, use both the `.pill` and `.[color]-light` classes on the button. 

```html_example
<a href="#" class="primary-light pill button">I'm a pill button</a>
<a href="#" class="alert-light pill button">So am I!</a>
<a href="#" class="success-light pill button">Me too</a>
```



# UI
```html_example
<div class="top-bar">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Architizer Source</li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
</div>
<div class="row align-middle actionbar">
  <div class="columns">
    <div class="row">
      <div class="columns">
        <h3>Dark grey tile</h3>
      </div>
    </div>
    <div class="row">
      <div class="columns">
        <div class="meta">
          <span>17 days left</span><span>AMW</span><span>Andrew Museum</span><span><a>Preview</a></span>
        </div>
      </div>
    </div>
  </div>
  <div class="columns shrink">
    <button class="secondary hollow button p-xxs mb-0">
      <span class="material-icons">add</span></button>
      <button class="secondary hollow button p-xxs ml-xxs mb-0"><span class="material-icons">more_horiz</span></button>
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

<div id="dropzoneExample" action="file/" class="dropzone mb-m"></div>

There are classes in `scss/_adk-dropzone.scss` that affect the styling of this element.

We extend the default [`dropzone.scss`](https://github.com/enyo/dropzone/blob/master/src/dropzone.scss) with our `/scss/_adk-dropzone.scss` file to overwrite default styles.
