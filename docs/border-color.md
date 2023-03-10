> Borders

# Border Color
Utilities for controlling the color of an element's borders.

## Quick reference

| Class                            | Description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `border-inherit`                 | border-color: inherit;                                    |
| `border-current`                 | border-color: currentColor;                               |
| `border-transparent`             | border-color: transparent;                                |
| `border-{direction}-inherit`     | border-{direction}-color: inherit;                        |
| `border-{direction}-current`     | border-{direction}-color: current;                        |
| `border-{direction}-transparent` | border-{direction}-color: transparent;                    |
| `border-{color}`                 | border: {color};                                          |
| `border-{direction}-{color}`     | border-{direction}: {color};                              |

> Available values <br />
> `{direction}`: `x`, `y`, `t`, `l`, `r`, `b` <br />
> `{color}`: All colors from the palette?  <br />

## Basic usage
### Setting the border color
Control the border color of an element using the `border-{color}` utilities.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-200"></div>
  </div>
</container>

```html
<div class="border-4 border-indigo-200 rounded-4 ..."></div>
```

### Changing the opacity
Control the opacity of an element’s border color using the color opacity modifier.

<container>
  <div class="grid grid-cols-3 gap-16 justify-items-center">
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-500/100"></div>
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-500/75"></div>
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-500/50"></div>
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
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-200 border-t-indigo-500"></div>
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-200 border-r-indigo-500"></div>
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-200 border-b-indigo-500"></div>
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-200 border-l-indigo-500"></div>
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
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-200 border-x-indigo-500"></div>
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-200 border-y-indigo-500"></div>
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
    <div class="bg-violet-500 h-80 w-80 border-4 rounded-4 border-indigo-200 hover:border-indigo-500"></div>
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
