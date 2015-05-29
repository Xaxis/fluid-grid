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

Apply the parts of the partial `_fluid-grid.scss` you find useful to your project.

### Basic Examples

Create a two column layout.

```sass
.fg-demo {
  @include fg-col(2);
}
```

```html
<div class="fg-demo"></div>
<div class="fg-demo"></div>
```
