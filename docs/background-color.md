> Backgrounds

# Background Color
Utilities for controlling an element's background color.

::: tip s-prefix
The s-prefix (semantic) signals that these will change with the brand css.
:::

## Quick reference

<container>
  <ThemeContainer />
</container>

<qr-color-table />

## Basic usage
### Setting the background color
Control the background color of an element using the `bg-{transparent|inherit|current}` or `s-bg-{semantic color}` utilities specified in the table above.

<container>
  <div class="grid grid-cols-5 gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg-default"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-subtle-default"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-primary-default"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-positive-default"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-negative-default"></div>
  </div>
</container>

```html
<div class="s-bg-default ..."></div>
<div class="s-bg-subtle-default ..."></div>
<div class="s-bg-primary-default ..."></div>
<div class="s-bg-positive-default ..."></div>
<div class="s-bg-negative-default ..."></div>
```

### Hover, focus and other states
Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-bg-positive` to only apply the `s-bg-positive` utility on hover.

<container>
  <div class="grid grid-cols-3 gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg-default hover:s-bg-hover active:s-bg-active active:hover:s-bg-active-hover"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-info-default hover:s-bg-info-hover active:s-bg-info-active active:hover:s-bg-info-active-hover"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-warning-default hover:s-bg-warning-hover active:s-bg-warning-active active:hover:s-bg-warning-active-hover"></div>
  </div>
</container>

```html
<div class="s-bg-default hover:s-bg-hover active:s-bg-active active:hover:s-bg-active-hover ..."></div>
<div class="s-bg-info-default hover:s-bg-info-hover active:s-bg-info-active active:hover:s-bg-info-active-hover ..."></div>
<div class="s-bg-warning-default hover:s-bg-warning-hover active:s-bg-warning-active active:hover:s-bg-warning-active-hover ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-bg-positive-default` to apply the `s-bg-positive-default` utility at only medium screen sizes and above.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg-default md:s-bg-positive-default"></div>
   </div>
</container>

```html
    <div class="s-bg-default md:s-bg-positive-default ..."></div>
```
