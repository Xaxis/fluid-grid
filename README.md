# fluid-grid

## Summary

A SASS mixin that allows you to create columns of varying widths on top of a 12 column grid system.

See [Demo](http://xaxis.github.io/fluid-grid/)

## Configuration

Copy `_fluid-grid.scss` into your SASS workflow and configure the default parameters. 

* `$cols` is the number of column(s) or column count in a row.
* `$mod` is the width of the column(s) based on a 12 column grid.
* `$break` is the width at which the columns will break to 100% width and stack (as the default behavior).
* `$fixed-gutter` is the default pixel width between columns (used when `$gutter-type: 'fixed`).
* `$fluid-gutter` is the default percentage width between columns (used when `$gutter-type: 'fluid`).
* `$gutter-type` is the default gutter type (allowed values are `'fixed'` or `'fluid'`).
* `$no-gutter` is a boolean flag that indicates whether or not gutters will be used between columns.

## Examples and basic usage 

The `fg-col()` mixin accepts parameters that allow you to specify your columns on the fly from within your SASS. A 
typical usage that would create three equal width columns with a gutter would look as follows:

```sass
.fg-demo {
  @include fg-col(3);
}
```
```html
<div>
    <div class="fg-demo"></div>
    <div class="fg-demo"></div>
    <div class="fg-demo"></div>
</div>
```

The same thing without a gutter between the columns.

```sass
.fg-demo {
  @include fg-col(3, $no-gutter: true);
}
```
```html
<div>
    <div class="fg-demo"></div>
    <div class="fg-demo"></div>
    <div class="fg-demo"></div>
</div>
```

Two columns that break to 100% width and stack when the viewport is less than 768px.

```sass
.fg-demo {
  @include fg-col(2, $break: 768px);
}
```
```html
<div>
    <div class="fg-demo"></div>
    <div class="fg-demo"></div>
</div>
```

### Variable width columns

...

### Class based columns

...

### Responsive columns

...

### Grid columns

...

## Caveats

The fluid-grid mixin uses floated elements which by their default nature are taken out of the normal flow of their 
wrapper element where the wrapper then acts like they were never there. If there is no non-floated content within the
wrapper it won't have any height. Fixing this issue is now commonly known as a "clearfix". There are a few ways to fix
this issue but perhaps the simplest is to add the following property to any wrapper that contains fluid-grid columns:

```sass
.wrapper {
  overflow: auto;
}
```

```html
<div class="wrapper">
    <div class="fg-col"></div>
    <div class="fg-col"></div>
</div>
```

Doing so will cause the wrapper element to respect the height of its children. For more information on how to clearfix
elements please read: [MDN CSS clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear).

## Requirements/Browsers

Works in all browsers that support CSS `calc()` and is backwards compatible with browsers that don't only when 
`$gutter-type` is set to `fluid`.
