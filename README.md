# fluid-grid

Version 1.0.0

## Summary

A fluid and optionally responsive columnar SASS system which gives you the ability to easily construct columns that are 
of common widths/dimensions.

The purpose of fluid-grid was to create an extremely lightweight SASS mixin system to aid in rapid responsive development. 
Columns in fluid-grid are based on a grid system though their dimensions are not constrained by grid fractions while 
still respecting grid gutters.

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [puppetlabs.com](http://www.puppetlabs.com) / [github.com](https://github.com/Xaxis) )

## Usage

Apply the parts of `_fluid-grid.scss` you find useful to your project.

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
test to your project. See `fluid-grid.html` in the tests directory for an example of how this can be done.

## Working Example

See `fluid-grid.html` in tests directory.

### Changelog

#### Version 1.0.0

* initial release
