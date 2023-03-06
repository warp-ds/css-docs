> Typography

# Text Color
Utilities for controlling the text color of an element.

## Quick reference

| Class            | Description                     |
| ---------------- | ------------------------------- |
| `text-normal`    | These will have different names |
| `text-success`   |                                 |
| `text-warning`   |                                 |
| `text-danger`    |                                 |
| `text-primary`   |                                 |
| `text-secondary` |                                 |

## Basic usage
### Setting the text color
Control the text color of an element using the `text-{color}` utilities.

<container>
  <div class="mx-24">
    <p class="text-normal">The quick smart warp scientist</p>
    <p class="text-success">The quick smart warp scientist</p>
    <p class="text-warning">The quick smart warp scientist</p>
    <p class="text-danger">The quick smart warp scientist</p>
    <p class="text-primary">The quick smart warp scientist</p>
    <p class="text-secondary">The quick smart warp scientist</p>
  </div>
</container>

```html
    <p class="text-normal ...">The quick smart warp scientist</p>
    <p class="text-success ...">The quick smart warp scientist</p>
    <p class="text-warning ...">The quick smart warp scientist</p>
    <p class="text-danger ...">The quick smart warp scientist</p>
    <p class="text-primary ...">The quick smart warp scientist</p>
    <p class="text-secondary ...">The quick smart warp scientist</p>
```

### Hover, focus, and other states
Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:text-primary` to only apply the `text-secondary` utility on hover.

<container>
  <p class="text-primary hover:text-secondary">The quick smart warp scientist...</p>
</container>

```html
<p class="text-slate-400 hover:text-sky-400">The quick smart warp scientist...</p>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:text-primary` to apply the `text-primary` utility at only medium screen sizes and above.

```html
<p class="text-normal md:text-primary">
  <!-- ... -->
</p>
```
