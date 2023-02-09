<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

Flex & Grid

# Grid Template Rows
Utilities for specifying the rows in a grid layout.

## Quick reference

## Basic usage
### Specifying the rows in a grid
Use the grid-rows-{n} utilities to create grids with n equally sized rows.

<container class="overflow-auto">
  <box striped class="grid grid-rows-4 grid-flow-col gap-4" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="bg-pink-500" :class="exampleClasses">01</div>
    <div class="bg-pink-500" :class="exampleClasses">02</div>
    <div class="bg-pink-500" :class="exampleClasses">03</div>
    <div class="bg-pink-500" :class="exampleClasses">04</div>
    <div class="bg-pink-500" :class="exampleClasses">05</div>
    <div class="bg-pink-500" :class="exampleClasses">06</div>
    <div class="bg-pink-500" :class="exampleClasses">07</div>
    <div class="bg-pink-500" :class="exampleClasses">08</div>
    <div class="bg-pink-500" :class="exampleClasses">09</div>
  </box>
</container>

```html
<div class="grid grid-rows-4 grid-flow-col ...">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grid-rows-6` to apply the `grid-rows-6` utility at only medium screen sizes and above.

```html
<div class="grid grid-rows-2 md:grid-rows-6">
  <!-- ... -->
</div>
```