# fluid-grid

## Summary

A SASS mixin that allows you to easily create responsive columns of varying widths/dimensions.

See [Demo](http://boilerjs.com/misc/fluid-grid/)

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [puppetlabs.com](http://www.puppetlabs.com) / [github.com](https://github.com/Xaxis) )

## Usage

Most of the configurable variables in `_fluid-grid.scss` are not required. The ones that are specify the grid dimensions
used to align fluid-grid created columns with your grid. `$fg-fluid-gutter` is used as the default fallback dimension for
browsers that do not support CSS `calc()` in which case a percentage gutter width is required.

```sass
//--------
// Grid dimensions (REQUIRED)
$fg-base: 40px;                          // Base grid column width (your grid system's base column width)
$fg-gutter: 20px;                        // Static gutter width (the width of grid system's column gutters)
$fg-fluid-gutter: 2.0;                   // Fluid gutter width (used only when $fg-legacy is set to `true`)
$fg-legacy: false;                       // Support legacy browsers (those that don't support CSS calc)
```

The `fg-col()` mixin accepts parameters that allow you to specify your columns on the fly from within your SASS. For demonstration
purposes an a-typical usage of fluid-grid might look as follows:

```sass
.fg-demo {
  @include fg-col($cols: 1, $break: 768px, $mod: '3/4');
}
```

Though a more typical usage would look something like this:

```sass
.fg-demo {
  @include fg-col(1, 768px);
}
```

### Examples

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

##### Four column 

```sass
.fg-demo {
  @include fg-col(4);
}
```

```html
<div class="fg-demo"></div>
<div class="fg-demo"></div>
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
width (inclusive of site gutter).

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

All class based columns break to 100% width at the screen width defined by `$fg-break-sm` (780px by default).

## Requirements/Browsers

Works in all browsers that support CSS `calc()` and is backwards compatible with browsers that don't by adding a Modernizr
test to your project. See `fluid-grid.html` in the `test/` directory for an example of how this can be done.

## Working Example

See [Demo](http://boilerjs.com/misc/fluid-grid/)

See `fluid-grid.html` in `test/` directory.

### Changelog

#### Version 1.0.0

* initial release
