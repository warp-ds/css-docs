<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Flexbox & Grid

# Grid Columns Start / End
Utilities for controlling how elements are sized and placed across grid columns.

## Quick reference

## Basic usage
### Spanning columns
Use the `col-span-{n}` utilities to make an element span n columns.

<container>
  <box class="grid grid-cols-3 gap-4">
    <div class="bg-indigo-800" :class="exampleClasses">01</div>
    <div class="bg-indigo-800" :class="exampleClasses">02</div>
    <div class="bg-indigo-800" :class="exampleClasses">03</div>
    <div class="bg-indigo-500 col-span-2" :class="exampleClasses">04</div>
    <div class="bg-indigo-800" :class="exampleClasses">05</div>
    <div class="bg-indigo-800" :class="exampleClasses">06</div>
    <div class="bg-indigo-500 col-span-2" :class="exampleClasses">07</div>
  </box>
</container>

```html
<div class="grid grid-cols-3 ...">
  <div class="...">01</div>
  <div class="...">02</div>
  <div class="...">03</div>
  <div class="col-span-2 ...">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div>
</div>
```

### Starting and ending lines
Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line. These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.

Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.

<container>
  <div class="grid grid-cols-6 gap-4">
    <box striped :class="exampleClasses" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)"></box>
    <div class="bg-blue-500 col-start-2 col-span-4" :class="exampleClasses">01</div>
    <box striped :class="exampleClasses" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)"></box>
    <div class="bg-blue-500 col-start-1 col-end-3" :class="exampleClasses">02</div>
    <box striped :class="exampleClasses" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)"></box>
    <box striped :class="exampleClasses" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)"></box>
    <div class="bg-blue-500 col-end-7 col-span-2" :class="exampleClasses">02</div>
    <div class="bg-blue-500 col-start-1 col-end-7" :class="exampleClasses">02</div>
  </div>
</container>

```html
<div class="grid grid-cols-6 ...">
  <div class="col-start-2 col-span-4 ...">01</div>
  <div class="col-start-1 col-end-3 ...">02</div>
  <div class="col-end-7 col-span-2 ...">03</div>
  <div class="col-start-1 col-end-7 ...">04</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:col-span-6` to apply the `col-span-6` utility at only medium screen sizes and above.

```html
<div class="col-span-2 md:col-span-6">
  <!-- ... -->
</div>
```
