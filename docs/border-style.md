> Borders

# Border Style
Utilities for controlling the style of an element's borders.

## Quick reference

| Class           | Description           |
| --------------- | --------------------- |
| `border-solid`  | border-style: solid;  |
| `border-dashed` | border-style: dashed; |
| `border-dotted` | border-style: dotted; |
| `border-double` | border-style: double; |
| `border-hidden` | border-style: hidden; |
| `border-none`   | border-style: none;   |
| `border-groove` | border-style: dotted; |
| `border-ridge`  | border-style: double; |
| `border-inset`  | border-style: hidden; |
| `border-outset` | border-style: none;   |

## Basic usage
### Setting the border style
Use `border-{style}` to control an element’s border style.

<container>
  <div class="grid grid-cols-3 gap-16 justify-items-center">
    <div class="bg-pink-500 p-24 rounded-8 border-1 border-solid">01</div>
    <div class="bg-pink-500 p-24 rounded-8 border-1 border-dashed">02</div>
    <div class="bg-pink-500 p-24 rounded-8 border-1 border-dotted">03</div>
  </div>
</container>

```html
    <div class="border-solid ...">01</div>
    <div class="border-dashed ...">02</div>
    <div class="border-dotted ...">03</div>
```

### No style
Use `border-none` to remove an existing border style from an element.

This is most commonly used to remove a border style that was applied at a smaller breakpoint.

<container>
  <div class="grid gap-16 justify-items-center">
    <div class="bg-pink-500 p-24 rounded-8 border-1 border-none">No border here!</div>
  </div>
</container>

```html
    <div class="border-none ...">01</div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:border-dotted to only apply the border-dotted utility on hover.

```html
<div class="border-solid hover:border-dotted">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:border-dotted` to apply the `border-dotted` utility at only medium screen sizes and above.

```html
<div class="border-solid md:border-dotted">
  <!-- ... -->
</div>
```