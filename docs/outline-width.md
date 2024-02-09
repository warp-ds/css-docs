> Borders

# Outline Width

Utilities for controlling the outline width of an element.

## Quick reference

| Class             | Description                  |
|-------------------|------------------------------|
| `outline-{size}`  | `outline-width: {size}`      |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `8` <br />

## Basic usage

### Setting the outline width
Use the `outline-{size}` utilities to set the outline width for an element.

<container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div>outline</div>
    <div>outline-2</div>
    <div>outline-4</div>
    <div>outline-8</div>
    <div class="pd-bg-violet-200 h-80 w-80 rounded-4 outline outline-offset-4 outline-1"></div>
    <div class="pd-bg-violet-200 h-80 w-80 rounded-4 outline outline-offset-4 outline-2"></div>
    <div class="pd-bg-violet-200 h-80 w-80 rounded-4 outline outline-offset-4 outline-4"></div>
    <div class="pd-bg-violet-200 h-80 w-80 rounded-4 outline outline-offset-4 outline-8"></div>
  </div>
</container>

```html
<div class="outline outline-offset-4 outline-1 ..."></div>
<div class="outline outline-offset-4 outline-2 ..."></div>
<div class="outline outline-offset-4 outline-4 ..."></div>
<div class="outline outline-offset-4 outline-8 ..."></div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:outline-4` to only apply the `outline-4` utility on hover.

```html
<div class="outline-2 hover:outline-4">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:outline-4` to apply the `outline-4` utility at only medium screen sizes and above.

```html
<div class="outline-2 md:outline-4">
  <!-- ... -->
</div>
```
