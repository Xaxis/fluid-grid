# fluid-grid

## Summary

A SASS mixin that allows you to easily create responsive columns of varying widths/dimensions.

See [Demo](http://xaxis.github.io/fluid-grid/)

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [github.com](https://github.com/Xaxis) )

## Configuration and usage

After you have copied `_fluid-grid.scss` into your SASS workflow you need to configure a few global variables.

* `$fg-gutter` is the static space you would like between your columns. Browsers must support the CSS `calc` function in 
order for this static space to work properly. If you need to support legacy browsers set the `$fg-legacy` configuration
to `true`.
* `$fg-fluid-gutter` is the dynamic percentage space between your columns. This value is only used when `$fg-legacy` is
set to `true`. This is recommended if you need to support legacy browsers that don't support the CSS `calc` function or
simply if you would just like to have dynamic percentage based space between your columns.
* `$fg-legacy` when set to `true` enables dynamic percentage based space/gutters between your columns.
* `$fg-break` is the default width at which columns will stack. Note that this value only applies when using fluid-grid
via the generated helper classes. To set a break value for mixin usage either update the `$break` parameters default 
value or pass a value in each time `fg-col` is called.

```sass
//--------
// Grid dimensions (REQUIRED)
$fg-gutter: 20px;              // Static gutter width (the width of grid system's column gutters)
$fg-fluid-gutter: 2.0;         // Fluid gutter width (used only when $fg-legacy is set to `true`)
$fg-legacy: false;             // Support legacy browsers (those that don't support CSS calc)
$fg-base: 768px;               // The default breakpoint width
```

The `fg-col()` mixin accepts parameters that allow you to specify your columns on the fly from within your SASS. For 
demonstration purposes a typical usage of fluid-grid might look as follows:

```sass
.fg-demo {
  @include fg-col($cols: 1, $break: 768px, $mod: '3/4');
}
```

Or this which creates two equal width columns that break to full width of their container if the viewport is less than 
768px:

```sass
.fg-demo {
  @include fg-col(2, 768px);
}
```

### More examples

##### Two column

```sass
.fg-demo {
  @include fg-col(2);
}
```

```html
<div class="fg-demo"></div>
<div class="fg-demo"></div>
```

##### Responsive three column

```sass
.fg-demo {
  @include fg-col(3, 768px);
}
```

```html
<div class="fg-demo"></div>
<div class="fg-demo"></div>
<div class="fg-demo"></div>
```

##### Fractional two column

```sass
.fg-demo-1-4 {
  @include fg-col($mod: '1/4');
}
.fg-demo-3-4 {
  @include fg-col($mod: '3/4');
}
```

```html
<div class="fg-demo-1-4"></div>
<div class="fg-demo-3-4"></div>
```

##### Fractional two column responsive

```sass
.fg-demo-1-4 {
  @include fg-col($mod: '1/4', $break: 768px);
}
.fg-demo-3-4 {
  @include fg-col($mod: '3/4', $break: 768px);
}
```

```html
<div class="fg-demo-1-4"></div>
<div class="fg-demo-3-4"></div>
```

##### Nested responsive columns

```sass
.fg-demo-2-5 {
  @include fg-col($mod: '2/5');
}
.fg-demo-3-5 {
  @include fg-col($mod: '3/5');
}
.fg-demo-4 {
  @include fg-col(4);
}
.fg-demo-6 {
  @include fg-col(6);
}
```

```html
<div class="fg-demo-2-5">
    <div class="fg-demo-2-5"></div>
    <div class="fg-demo-3-5"></div>
</div>
<div class="fg-demo-3-5">
    <div class="fg-demo-4"></div>
    <div class="fg-demo-4"></div>
    <div class="fg-demo-6"></div>
    <div class="fg-demo-6"></div>
    <div class="fg-demo-6"></div>
</div>
```

##### Four column w/ percentage gutter

```sass
.fg-demo {
  @include fg-col(4, $gutter: 1.6);
}
```

```html
<div class="fg-demo"></div>
<div class="fg-demo"></div>
<div class="fg-demo"></div>
<div class="fg-demo"></div>
```

##### Modify breakpoint styles

```sass
.fg-demo {
  @include fg-col(2, $break: 768px) {
    background: red;
  }
}
```

```html
<div class="fg-demo"></div>
<div class="fg-demo"></div>
```

##### Class based columns

It's extremely easy to build column structures solely based on the number of elements you include in a container. Want a
four column layout? Include four elements with the `fg-col` class. Fluid-grid will automatically size the elements to 25%
width (inclusive of gutter).

```html
<div>
    <div class="fg-col"></div>
    <div class="fg-col"></div>
    <div class="fg-col"></div>
    <div class="fg-col"></div>
</div>
```

Need a fractional width column that is class based? Simply add a class representative of the fraction width you desire.

```html
<div>
    <div class="fg-col fg-1-2"></div>
</div>
```

All class based columns break to 100% width at the screen width defined by `$fg-break` (780px by default). This value
can be overriden in the initial configuration.

## Caveats

...

## Requirements/Browsers

Works in all browsers that support CSS `calc()` and is backwards compatible with browsers that don't by adding a Modernizr
test to your project. See `index.html` for an example of how this can be done.

## Working Example

See [Demo](http://xaxis.github.io/fluid-grid/)

### Changelog

#### Version 1.0.0

* initial release
