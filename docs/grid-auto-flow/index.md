<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Flexbox & Grid

# Grid Auto Flow
Utilities for controlling how elements in a grid are auto-placed.

## Quick reference

| Class                 | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `grid-flow-row`       | Items are placed by filling rows in turn                 |
| `grid-flow-col`       | Items are placed by filling columns in turn              |
| `grid-flow-dense`     | Attempt to fill spaces earlier in the grid when possible |
| `grid-flow-row-dense` | Same as above                                            |
| `grid-flow-col-dense` | Same as 'dense' but filling columns in turn              |

## Basic usage
### Controlling grid element placement
Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.

<container>
  <box striped class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
    <div class="bg-purple-800 col-span-2" :class="exampleClasses">01</div>
    <div class="bg-purple-800 col-span-2" :class="exampleClasses">02</div>
    <div class="bg-purple-500" :class="exampleClasses">03</div>
    <div class="bg-purple-800" :class="exampleClasses">04</div>
    <div class="bg-purple-800" :class="exampleClasses">05</div>
  </box>
</container>

```html
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
