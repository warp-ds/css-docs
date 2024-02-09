> Typography

# Text Color

Utilities for controlling the text color of an element.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

<ThemeContainer />

<qr-color-table />

## Basic usage

### Setting the text color
Control the text color of an element using the `text-{transparent|current}` or `s-text-{semantic color}` utilities specified in the table above.

<container>
  <div class="mx-24">
    <p class="s-text">The quick smart warp scientist</p>
    <p class="s-text-subtle">The quick smart warp scientist</p>
    <p class="s-text-placeholder">The quick smart warp scientist</p>
    <p class="s-text-inverted s-bg-primary">The quick smart warp scientist</p>
    <p class="s-text-inverted-subtle s-bg-primary">The quick smart warp scientist</p>
    <p class="s-text-link active:s-text-link-active hover:s-text-link-hover">The quick smart warp scientist</p>
    <p class="s-text-link-disabled">The quick smart warp scientist</p>
    <p class="s-text-positive">The quick smart warp scientist</p>
    <p class="s-text-negative">The quick smart warp scientist</p>
  </div>
</container>

```html
<p class="s-text">The quick smart warp scientist</p>
<p class="s-text-subtle">The quick smart warp scientist</p>
<p class="s-text-placeholder">The quick smart warp scientist</p>
<p class="s-text-inverted ...">The quick smart warp scientist</p>
<p class="s-text-inverted-subtle ...">The quick smart warp scientist</p>
<p class="s-text-link active:s-text-link-active hover:s-text-link-hover">
  The quick smart warp scientist
</p>
<p class="s-text-link-disabled">The quick smart warp scientist</p>
<p class="s-text-positive">The quick smart warp scientist</p>
<p class="s-text-negative">The quick smart warp scientist</p>
```

### Arbitrary values
If you need to use a one-off `text-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens.

```html
<p class="text-[--w-s-color-border]"></p>
```

### Opacity
It is possible to control the opacity of the text color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefor we highly recommend only using semantic classes and tokens.

The examples below are inaccessible and purely for technical reference.
Always make sure any text has sufficient contrast to its background.
:::

<container class="bg-center bg-[url(/50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="s-text/60 hover:s-text/100 transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16">Warp</div>
    <div class="s-text-link/50 hover:s-text-link/100 transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16">Warp</div>
    <div class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16">Warp</div>
    <div class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16">Warp</div>
  </div>
</container>

```html
<div class="s-text/60 hover:s-text/100 ...">Warp</div>
<div class="s-text-link/50 hover:s-text-link/100 ...">Warp</div>
<div class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] ...">Warp</div>
<div class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] ...">Warp</div>
```

### Hover, focus, and other states

You can conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-text-positive` to only apply the `s-text-positive` utility on hover.

<container>
  <p class="s-text hover:s-text-positive">The quick smart warp scientist</p>
</container>

```html
<p class="s-text hover:s-text-positive">The quick smart warp scientist</p>
```

### Breakpoints and media queries

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:s-text-positive` to apply the `s-text-positive` utility at only medium screen sizes and above.

<container>
  <p class="s-text md:s-text-positive">The quick smart warp scientist</p>
</container>

```html
<p class="s-text md:s-text-positive">The quick smart warp scientist</p>
```
