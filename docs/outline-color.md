> Borders

# Outline Color
Utilities for controlling the color of an outline of an element.

::: tip s-prefix
The s-prefix (semantic) signals that these will change with the brand css.
:::

## Quick reference

<ThemeContainer />

<qr-color-table />

## Basic usage

### Setting the outline color

Control the outline color of an element using the `s-outline-{semantic color}` utilities specified in the table above.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline-positive pd-bg-violet-500 h-80 w-80 rounded-4 outline outline-offset-1 outline-2"></div>
  </div>
</container>

```html
<div class="s-outline-positive outline-4 ..."></div>
```

### Hover, focus and other states

Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-outline-active` to only apply the `s-outline-active` utility on hover.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline hover:s-outline-hover pd-bg-violet-500 h-80 w-80 rounded-4 outline outline-offset-1 outline-2"></div>
   </div>
</container>

```html
<div class="s-outline hover:s-outline-hover ..."></div>
```

### Breakpoints and media queries

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-outline-positive` to apply the `s-outline-positive` utility at only medium screen sizes and above.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline md:s-outline-positive pd-bg-violet-500 h-80 w-80 rounded-4 outline outline-offset-1 outline-2"></div>
   </div>
</container>

```html
<div class="s-outline md:s-outline-positive ..."></div>
```

### Arbitrary values
If you need to use a one-off `outline-{color}` value, use square brackets to generate a property on the fly using our semantic color tokens.

```html
<div class="outline-[--w-s-color-border]">
  <!-- ... -->
</div>
```