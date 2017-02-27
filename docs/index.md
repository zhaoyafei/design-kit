# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized vertical columns, and don't know how to quick and easily get it all done. Solution: The awesome grid!</p>

---

## Overview

The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## Nesting

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create vertical columns.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

## Nesting Rows

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

```html
<div class="row">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>
```

<div class="row display">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row display">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #2199e8"></span>
      #2199e8
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #3adb76"></span>
      #3adb76
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ffae00"></span>
      #ffae00
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ec5840"></span>
      #ec5840
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #0a0a0a"></span>
      #0a0a0a
    </div>
  </div>
</div>



# Typography

<p class="lead">This design uses Helvetica Neue for headings and paragraph text.</p>

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

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

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

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```

---

## Pills

Pills are buttons are used in forms to add/append fields. They are distinct  from "tags", which look like pills but are static and cannot be clicked.

```html_example
<button type="button" class="button pill">I'm a pill</a>
<button type="button" class="button pill">I'm another pill</a>
<button type="button" class="button pill">Hey so am I!</a>
```



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

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



# Selectize

This is a [selectize](http://selectize.github.io/selectize.js/) element.

<input type="text" class="selectize"></input>

There are classes in the `scss/_adk-selectize.scss` that affect the styling of this element. 

We extend the default [`selectize.css`](https://github.com/selectize/selectize.js/blob/master/dist/css/selectize.css) with our `/scss/_adk-selectize.scss` file to overwrite default styles.



# Tables
Tables are simple. We've got a few classes applied to set the styling and alignment of the cells. For all other table settings and classes, reference [Foundation's Table Documentation.](http://foundation.zurb.com/sites/docs/table.html)

Table cells may have plain text, links (internal and external), buttons and actions. 

"Actions" in tables should be used when doing something within the current view, such as opening a modal. They look like small links. To create one, apply `.action` to the cell's `<td>` tag. 

When building tables, try to keep the action/button columns hugging the right side table to give the impression of weight towards them. This makes a difference when the table is sparse and doesn't have too many columns, preventing each column from having too much space between it. 

As another rule of thumb, button's and actions should be centered on the column, numbers should be aligned right and text aligned left. Apply `.centered`, `.left` and `.right` to the cell tag to do so. Add `.dismissed` to make a row appear inactive, such as on product rows that have been dismissed by an architect.

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
      <td>Knoll</td>
      <td>Pollock Executive Chair</td>
      <td>Recommended</td>
      <td class="action"><a>Send Email</a></td>
      <td class="action"><a>View</a></td>
    </tr>
    <tr>
      <td>Herman Miller</td>
      <td>Aeron Chair</td>
      <td>In Review</td>
      <td class="action"><a>Send Email</a></td>
      <td class="action"><a>View</a></td>
    </tr>
    <tr class="dismissed">
      <td>Steelcase</td>
      <td>Mesh Think Chair</td>
      <td>Dismissed</td>
      <td class="action"><a>Send Email</a></td>
      <td class="action"><a>View</a></td>
    </tr>
  </tbody>
</table>




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