> Borders

# Divide Width
Utilities for controlling the border width between elements.

## Quick reference

| Class                             | Description                                                 |
|-----------------------------------|-------------------------------------------------------------|
| `divide-x` > * + *                | border-right-width: 1px <br /> border-left-width: 1px       |
| `divide-y` > * + *                | border-top-width: 1px <br /> border-bottom-width: 1px       |
| `divide-x-{size}` > * + *         | border-right-width: {size} <br /> border-left-width: {size} |
| `divide-y-{size}` > * + *         | border-top-width: {size} <br /> border-bottom-width: {size} |
| `divide-x-reverse` > * + *        | Flips the borders to work with flex-row-reverse             |
| `divide-y-reverse` > * + *        | Flips the borders to work with flex-col-reverse             |

> Available values<br />
`{sizes}` : `0`, `2`, `4`, `8`

## Basic usage

### Add borders between horizontal children
Add borders between horizontal elements using the `divide-x-{width}` utilities.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="flex justify-items-stretch pd-bg-pink-500 rounded-8 divide-x w-full">
      <div class="p-24 flex-1 text-center">1</div>
      <div class="p-24 flex-1 text-center">2</div>
      <div class="p-24 flex-1 text-center">3</div>
    </div>
  </div>
</container>

```html
<div class="divide-x ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### Add borders between stacked children
Add borders between stacked elements using the `divide-y-{width}` utilities.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="pd-bg-pink-500 rounded-8 divide-y w-full max-w-[300]">
      <div class="p-24 text-center">1</div>
      <div class="p-24 text-center">2</div>
      <div class="p-24 text-center">3</div>
    </div>
  </div>
</container>

```html
<div class="divide-y ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### Reversing children order
If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`), use the `divide-x-reverse` or `divide-y-reverse` utilities to ensure the border is added to the correct side of each element.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="flex flex-col-reverse pd-bg-pink-500 rounded-8 divide-y divide-y-reverse w-full max-w-[300]">
      <div class="p-24 text-center">1</div>
      <div class="p-24 text-center">2</div>
      <div class="p-24 text-center">3</div>
    </div>
  </div>
</container>

```html
<div class="flex flex-col-reverse divide-y divide-y-reverse ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### Arbitrary values
If you need to use a one-off `divide-{width}` value, use square brackets to generate a property using any arbitrary width.
This works with or without an optional, but recommended, direction.
`divide-{x|y}-[{any width}]`

```html
<div class="divide-x-[66]">
  <!-- ... -->
</div>
```

### Hover, focus, and other states
You can conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:divide-y-8` to only apply the `divide-y-8` utility on hover.

```html
<div class="divide-y hover:divide-y-8 ...">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:divide-y-8` to apply the `divide-y-8` utility at only medium screen sizes and above.

```html
<div class="divide-y md:divide-y-8 ...">
  <!-- ... -->
</div>
```