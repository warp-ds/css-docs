> Borders

# Border Color
Utilities for controlling the color of an element's borders.

::: tip s-prefix
The s-prefix (semantic) signals that these will change with the brand css.
:::

## Quick reference

<container>
  <ThemeContainer />
</container>

<qr-color-table />

## Basic usage
### Setting the border color
Control the border color of an element using the `border-{transparent | inherit | current}` or `s-border-{semantic color}` utilities specified in the table above.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-positive-default"></div>
  </div>
</container>

```html
<div class="s-border-positive-default border-4 rounded-16 ..."></div>
```

<!--
TODO: How should we handle opacity?

### Changing the opacity
Control the opacity of an element’s border color using the color opacity modifier.

<container>
  <div class="grid grid-cols-3 gap-16 justify-items-center">
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-500/100"></div>
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-500/75"></div>
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-500/50"></div>
  </div>
</container>

```html
<div class="border-4 border-indigo-500/100 ..."></div>
<div class="border-4 border-indigo-500/75 ..."></div>
<div class="border-4 border-indigo-500/50 ..."></div>
```
-->

### Individual sides
Use the `border-{l|r|t|b}-{transparent|inherit|current}` or `s-border-{l|r|t|b}-{semantic color}` utilities to set the border color for only one side of an element.

<container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-default s-border-l-positive-default"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-default s-border-r-positive-default"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-default s-border-t-positive-default"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-default s-border-b-positive-default"></div>
  </div>
</container>

```html
<div class="s-border-subtle s-border-l-positive-default ..."></div>
<div class="s-border-default s-border-r-positive-default ..."></div>
<div class="s-border-default s-border-t-positive-default ..."></div>
<div class="s-border-default s-border-b-positive-default ..."></div>
```

### Horizontal and vertical sides
Use the `border-{x|y}-{transparent|inherit|current}` or `s-border-{x|y}-{semantic color}` utilities to set the border color on two sides of an element at the same time.

<container>
  <div class="grid grid-cols-2 gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-default s-border-x-positive-default"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-default s-border-y-positive-default"></div>
   </div>
</container>

```html
<div class="s-border-default s-border-x-positive-default ..."></div>
<div class="s-border-default s-border-y-positive-default ..."></div>
```

### Hover, focus and other states
Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-border-active` to only apply the `s-border-active` utility on hover.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-default hover:s-border-hover"></div>
   </div>
</container>

```html
    <div class="s-border-default hover:s-border-hover ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-border-positive-default` to apply the `s-border-positive-default` utility at only medium screen sizes and above.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-default md:s-border-positive-default"></div>
   </div>
</container>

```html
    <div class="s-border-default md:s-border-positive-default ..."></div>
```
