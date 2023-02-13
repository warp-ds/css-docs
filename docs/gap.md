<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Flexbox & Grid

# Gap
Utilities for controlling gutters between grid and flexbox items.

## Quick reference

## Basic usage
### Setting the gap between elements
Use `gap-{size}` to change the gap between both rows and columns in grid and flexbox layouts.

<container>
  <box striped class="grid gap-16 grid-cols-2" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
    <div class="bg-violet-500" :class="exampleClasses">01</div>
    <div class="bg-violet-500" :class="exampleClasses">02</div>
    <div class="bg-violet-500" :class="exampleClasses">03</div>
    <div class="bg-violet-500" :class="exampleClasses">04</div>
  </box>
</container>

```html
<div class="grid grid-cols-2 gap-16">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Changing row and column gaps independently
Use `gap-x-{size}` and `gap-y-{size}` to change the gap between rows and columns independently.
<container>
  <box striped class="grid gap-x-32 gap-y-16 grid-cols-3" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="bg-blue-500" :class="exampleClasses">01</div>
    <div class="bg-blue-500" :class="exampleClasses">02</div>
    <div class="bg-blue-500" :class="exampleClasses">03</div>
    <div class="bg-blue-500" :class="exampleClasses">04</div>
    <div class="bg-blue-500" :class="exampleClasses">05</div>
    <div class="bg-blue-500" :class="exampleClasses">06</div>
  </box>
</container>

```html
<div class="grid gap-x-32 gap-y-16 grid-cols-3 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```
