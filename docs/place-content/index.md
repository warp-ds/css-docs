<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

Flex & Grid

# place Content
Utilities for controlling how content is justified and aligned at the same time.

## Quick reference

## Basic usage
### Center
Use `place-content-center` to pack items in the center of the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] gap-16 py-64 place-content-center" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="bg-blue-500" :class="exampleClasses">01</div>
    <div class="bg-blue-500" :class="exampleClasses">02</div>
    <div class="bg-blue-500" :class="exampleClasses">03</div>
    <div class="bg-blue-500" :class="exampleClasses">04</div>
  </box>
</container>

```html
<div class="grid grid-cols-2 gap-16 place-content-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Start
Use `place-content-start` to pack items against the start of the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] gap-16 pb-128 place-content-start" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
    <div class="bg-fuchsia-500" :class="exampleClasses">01</div>
    <div class="bg-fuchsia-500" :class="exampleClasses">02</div>
    <div class="bg-fuchsia-500" :class="exampleClasses">03</div>
    <div class="bg-fuchsia-500" :class="exampleClasses">04</div>
  </box>
</container>

```html
<div class="grid grid-cols-2 gap-16 place-content-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```



### End
Use `place-content-end` to to pack items against the end of the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] gap-16 pt-128 place-content-start" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
    <div class="bg-cyan-500" :class="exampleClasses">01</div>
    <div class="bg-cyan-500" :class="exampleClasses">02</div>
    <div class="bg-cyan-500" :class="exampleClasses">03</div>
    <div class="bg-cyan-500" :class="exampleClasses">04</div>
  </box>
</container>

```html
<div class="grid grid-cols-2 gap-16 place-content-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space between
Use `place-content-between` to distribute grid items along the block axis so that that there is an equal amount of space between each row on the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] place-content-between" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="bg-pink-500 mb-64" :class="exampleClasses">01</div>
    <div class="bg-pink-500 mb-64" :class="exampleClasses">02</div>
    <div class="bg-pink-500" :class="exampleClasses">03</div>
    <div class="bg-pink-500" :class="exampleClasses">04</div>
  </box>
</container>

```html
<div class="grid grid-cols-2 place-content-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space around
Use `place-content-around` distribute grid items such that there is an equal amount of space around each row on the block axis.
<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] place-content-around" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
    <div class="bg-violet-500 my-16" :class="exampleClasses">01</div>
    <div class="bg-violet-500 my-16" :class="exampleClasses">02</div>
    <div class="bg-violet-500 my-16" :class="exampleClasses">03</div>
    <div class="bg-violet-500 my-16" :class="exampleClasses">04</div>
  </box>
</container>

```html
<div class="grid grid-cols-2 place-content-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space evenly
Use `place-content-evenly` to distribute grid items such that they are evenly spaced on the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] place-content-evenly" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="bg-indigo-500 my-32" :class="exampleClasses">01</div>
    <div class="bg-indigo-500 my-32" :class="exampleClasses">02</div>
    <div class="bg-indigo-500 mb-32" :class="exampleClasses">03</div>
    <div class="bg-indigo-500 mb-32" :class="exampleClasses">04</div>
  </box>
</container>

```html
<div class="grid grid-cols-2 place-content-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### stretch
Use `place-content-stretch` to stretch grid items along their grid areas on the block axis.

<container>
  <box striped class="grid grid-cols-2 place-content-stretch gap-16" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="bg-blue-500" :class="exampleClasses">01</div>
    <div class="bg-blue-500" :class="exampleClasses">02</div>
    <div class="bg-blue-500" :class="exampleClasses">03</div>
    <div class="bg-blue-500" :class="exampleClasses">04</div>
  </box>
</container>

```html
<div class="grid grid-cols-2 place-content-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-content-center` to apply the `place-content-center` utility at only medium screen sizes and above.

```html
<div class="grid place-content-start md:place-content-center">
  <!-- ... -->
</div>
```