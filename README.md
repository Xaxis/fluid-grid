# fluid-grid

Version 1.0.0

## Summary

A fluid and optionally responsive columnar SASS system which gives you the ability to easily construct columns that are 
of common widths/dimensions.

The purpose of fluid-grid was to create an extremely lightweight SASS mixin system to aid in rapid responsive development. 
Columns in fluid-grid are based on a grid system though their dimensions are not constrained by grid fractions while 
still respecting grid gutters.

[fluid-grid demo](http://boilerjs.com/misc/fluid-grid/)

![Responsive Columns](https://raw.githubusercontent.com/Xaxis/fluid-grid/master/test/fluid-grid-example-2.gif)

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [puppetlabs.com](http://www.puppetlabs.com) / [github.com](https://github.com/Xaxis) )

## Usage

Apply the parts of `_fluid-grid.scss` you find useful to your project.

The configurable variables in `_fluid-grid.scss` are not required however they do provide the scaffolding for your grid
system should you choose to use them.

```sass
//--------
// Grid dimensions
$fg-col: 40px;                                    // Column width
$fg-gutter: 20px;                                 // Gutter width
$fg-false-gutter: 1.6;                            // Fallback gutter percentage
$fg-col-total: 25;                                // Column total
$fg-grid-width: $fg-col + $fg-gutter;             // Grid width
$fg-grid-total: $fg-grid-width * $fg-col-total;   // Grid total width

//--------
// Grid columns
$fg-col-1: $fg-grid-width * 1;
$fg-col-2: $fg-grid-width * 2;
$fg-col-3: $fg-grid-width * 3;
$fg-col-4: $fg-grid-width * 4;
$fg-col-5: $fg-grid-width * 5;
$fg-col-6: $fg-grid-width * 6;
$fg-col-7: $fg-grid-width * 7;
$fg-col-8: $fg-grid-width * 8;
$fg-col-9: $fg-grid-width * 9;
$fg-col-10: $fg-grid-width * 10;
$fg-col-11: $fg-grid-width * 11;
$fg-col-12: $fg-grid-width * 12;
$fg-col-13: $fg-grid-width * 13;
$fg-col-14: $fg-grid-width * 14;
$fg-col-15: $fg-grid-width * 15;
$fg-col-16: $fg-grid-width * 16;
$fg-col-17: $fg-grid-width * 17;
$fg-col-18: $fg-grid-width * 18;
$fg-col-19: $fg-grid-width * 19;
$fg-col-20: $fg-grid-width * 20;
$fg-col-21: $fg-grid-width * 21;
$fg-col-22: $fg-grid-width * 22;
$fg-col-23: $fg-grid-width * 23;
$fg-col-24: $fg-grid-width * 24;
$fg-col-25: $fg-grid-width * 25;

//--------
// Grid breakpoints
$fg-break-lg: $fg-col-25;                           // 1200px
$fg-break-md: $fg-col-16;                           // 960px
$fg-break-sm: $fg-col-13;                           // 780px
$fg-break-xs: $fg-col-8;                            // 480px
```

The variable `$fg-false-gutter` is used as the gutter percentage dimension for browsers that do not support CSS `calc()`.
Read more on how to support such browsers below.

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
  @include fg-col($mod: '1/4', $breakpoint: 768px);
}
.fg-demo-3-4 {
  @include fg-col($mod: '3/4', $breakpoint: 768px);
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

## Requirements/Browsers

Works in all browsers that support CSS `calc()` and is backwards compatible with browsers that don't by adding a Modernizr
test to your project. See `fluid-grid.html` in the `test/` directory for an example of how this can be done.

## Working Example

[fluid-grid demo](http://boilerjs.com/misc/fluid-grid/)

See `fluid-grid.html` in tests directory.

### Changelog

#### Version 1.0.0

* initial release
