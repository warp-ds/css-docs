> Flexbox & Grid

# Grid Auto Flow
Utilities for controlling how elements in a grid are auto-placed.

## Quick reference

<qr-table />

## Basic usage
### Controlling grid element placement
Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.

<container>
  <box striped class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-16" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
    <div class="bg-purple-800 ex-box col-span-2">01</div>
    <div class="bg-purple-800 ex-box col-span-2">02</div>
    <div class="bg-purple-500 ex-box">03</div>
    <div class="bg-purple-800 ex-box">04</div>
    <div class="bg-purple-800 ex-box">05</div>
  </box>
</container>

```html{1}
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grid-flow-row` to apply the `grid-flow-row` utility at only medium screen sizes and above.

```html
<div class="grid grid-flow-col md:grid-flow-row">
  <!-- ... -->
</div>
```
