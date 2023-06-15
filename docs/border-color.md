> Borders

# Border Color
Utilities for controlling the color of an element's borders.

::: warning Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#nmp-team-warp-tech](https://sch-chat.slack.com/archives/C04LG5UTCTT) .
:::

## Quick reference

<qr-color-table />

## Basic usage
### Setting the border color
Control the border color of an element using the `border-{color}` utilities.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-200"></div>
  </div>
</container>

```html
<div class="border-4 border-indigo-200 rounded-4 ..."></div>
```

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

### Individual sides
Use the `border-{side}-{color}` utilities to set the border color for one side of an element.

<container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-200 pd-border-t-indigo-500"></div>
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-200 pd-border-r-indigo-500"></div>
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-200 pd-border-b-indigo-500"></div>
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-200 pd-border-l-indigo-500"></div>
  </div>
</container>

```html
<div class="border-4 border-indigo-200 border-t-indigo-500 ..."></div>
<div class="border-4 border-indigo-200 border-r-indigo-500 ..."></div>
<div class="border-4 border-indigo-200 border-b-indigo-500 ..."></div>
<div class="border-4 border-indigo-200 border-l-indigo-500 ..."></div>
```

### Horizontal and vertical sides
Use the `border-{x|y}-{color}` utilities to set the border color on two sides of an element at the same time.

<container>
  <div class="grid grid-cols-2 gap-16 justify-items-center">
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-200 pd-border-x-indigo-500"></div>
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-200 pd-border-y-indigo-500"></div>
   </div>
</container>

```html
<div class="border-4 border-indigo-200 border-x-indigo-500 ..."></div>
<div class="border-4 border-indigo-200 border-y-indigo-500 ..."></div>
```

### Hover, focus, and other states
Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:border-gray-500` to only apply the `border-gray-500` utility on hover.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="pd-bg-violet-500 h-80 w-80 border-4 rounded-4 pd-border-indigo-200 hover:pd-border-indigo-500"></div>
   </div>
</container>

```html
<div class="border-4 border-indigo-200 hover:border-indigo-500 ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:border-green-500` to apply the `border-green-500` utility at only medium screen sizes and above.

```html
<button class="border-blue-500 md:border-green-500">
  <!-- ... -->
</button>
```
