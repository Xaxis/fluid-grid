# fluid-grid

Version 1.0.0

## Summary

A fluid and optionally responsive columnar SASS system which gives you the ability to easily construct columns that are 
of common widths/dimensions.

The purpose of fluid-grid was to create an extremely lightweight SASS mixin system to aid in rapid responsive development. 
Columns in fluid-grid are based on your grid system though their dimensions are not constrained by grid fractions while 
still respecting your grid system's gutter dimensions.

[Demo](http://boilerjs.com/misc/fluid-grid/)

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [puppetlabs.com](http://www.puppetlabs.com) / [github.com](https://github.com/Xaxis) )

## Usage

Most of the configurable variables in `_fluid-grid.scss` are not required. The ones that are specify the grid dimensions
used to align fluid-grid created columns with your grid. `$fg-fluid-gutter` is used as the default fallback dimension for
browsers that do not support CSS `calc()` in which case a percentage gutter width is required.

```sass
//--------
// Grid dimensions (REQUIRED)
$fg-col: 40px;                                    // Column width
$fg-gutter: 20px;                                 // Gutter width
$fg-fluid-gutter: 1.6;                            // Fluid gutter percentage
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

## Requirements/Browsers

Works in all browsers that support CSS `calc()` and is backwards compatible with browsers that don't by adding a Modernizr
test to your project. See `fluid-grid.html` in the `test/` directory for an example of how this can be done.

## Working Example

See [Demo](http://boilerjs.com/misc/fluid-grid/)

See `fluid-grid.html` in tests directory.

### Changelog

#### Version 1.0.0

* initial release
