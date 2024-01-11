> Borders

# Divide Color
Utilities for controlling the border color between elements.

::: tip s-prefix
The s-prefix (semantic) signals that the colors will change with the brand css.
:::

## Quick reference

<ThemeContainer />

<qr-color-table />

## Basic usage

### Setting the divide color
Control the border color between elements using the `s-divide-{semantic color}` utilities specified in the table above.

<container>
  <div class="flex justify-items-stretch rounded-8 divide-x-4 s-divide-primary w-full">
    <div class="p-24 flex-1 text-center">1</div>
    <div class="p-24 flex-1 text-center">2</div>
    <div class="p-24 flex-1 text-center">3</div>
  </div>
</container>

```html
<div class="divide-x-4 s-divide-primary">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### Horizontal and vertical dividers

Avoid conflicts with potential other borders, on the elements you wish to have dividers between,
by adding a direction to the utility class: `s-divide-{x|y}-{semantic color}`.

<container>
  <div class="flex justify-items-stretch rounded-8 divide-x-4 s-divide-x-primary w-full">
    <div class="p-24 flex-1 text-center border-b-4">1</div>
    <div class="p-24 flex-1 text-center border-b-4">2</div>
    <div class="p-24 flex-1 text-center border-b-4">3</div>
  </div>
</container>

```html
<div class="divide-x-4 s-divide-x-primary">
  <div class="border-b-4">1</div>
  <div class="border-b-4">2</div>
  <div class="border-b-4">3</div>
</div>
```

### Arbitrary values
If you need to use a one-off `divide-{color}` value, use square brackets to generate a property on the fly using any arbitrary value.
However, we recommend only using our semantic color tokens.
This also works with or without an optional, but recommended, direction.
`divide-{x|y}-[{any color value or css var}]`

```html
<div class="divide-y-[--w-s-color-text]">
  <!-- ... -->
</div>
```
