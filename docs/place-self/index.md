<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

Flex & Grid

# place Self
Utilities for controlling how an individual item is justified and aligned at the same time.

## Quick reference

## Basic usage
### Auto
Use `place-self-auto` to align an item based on the value of the container’s `place-items` property.

<container>
  <div class="grid grid-cols-3 gap-16 place-content-center">
    <div class="bg-blue-600" :class="exampleClasses">01</div>
    <div class="bg-blue-500" :class="exampleClasses">02</div>
    <div class="bg-blue-600" :class="exampleClasses">03</div>
    <div class="bg-blue-600" :class="exampleClasses">03</div>
    <div class="bg-blue-600" :class="exampleClasses">03</div>
    <div class="bg-blue-600" :class="exampleClasses">03</div>
  </div>
</container>

```html
<div class="grid grid-cols-3 gap-16 ...">
  <div>01</div>
  <div class="place-self-auto ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Start
Use `place-self-start` to align an item to the start on both axes.

<container>
  <div class="grid grid-cols-3 gap-16">
    <div class="bg-fuchsia-600 h-96" :class="exampleClasses">01</div>
    <box striped class="grid h-96" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="bg-fuchsia-500 h-64 place-self-start" :class="exampleClasses">02</div>
    </box>
    <div class="bg-fuchsia-600 h-96" :class="exampleClasses">03</div>
    <div class="bg-fuchsia-600 h-96" :class="exampleClasses">04</div>
    <div class="bg-fuchsia-600 h-96" :class="exampleClasses">05</div>
    <div class="bg-fuchsia-600 h-96" :class="exampleClasses">06</div>
  </div>
</container>

```html
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-start ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Center
Use `place-self-center` to align an item at the center on both axes.

<container>
  <div class="grid grid-cols-3 gap-16">
    <div class="bg-cyan-600 h-96" :class="exampleClasses">01</div>
    <box striped class="grid h-96" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="bg-cyan-500 h-64 place-self-center" :class="exampleClasses">02</div>
    </box>
    <div class="bg-cyan-600 h-96" :class="exampleClasses">03</div>
    <div class="bg-cyan-600 h-96" :class="exampleClasses">04</div>
    <div class="bg-cyan-600 h-96" :class="exampleClasses">05</div>
    <div class="bg-cyan-600 h-96" :class="exampleClasses">06</div>
  </div>
</container>

```html
<div class="grid grid-cols-3 gap-16 ...">
  <div>01</div>
  <div class="place-self-center ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End
Use `place-self-end` to align an item to the end on both axes.

<container>
  <div class="grid grid-cols-3 gap-16">
    <div class="bg-violet-600 h-96" :class="exampleClasses">01</div>
    <box striped class="grid h-96" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="bg-violet-500 h-64 place-self-end" :class="exampleClasses">02</div>
    </box>
    <div class="bg-violet-600 h-96" :class="exampleClasses">03</div>
    <div class="bg-violet-600 h-96" :class="exampleClasses">04</div>
    <div class="bg-violet-600 h-96" :class="exampleClasses">05</div>
    <div class="bg-violet-600 h-96" :class="exampleClasses">06</div>
  </div>
</container>

```html
<div class="grid grid-cols-3 gap-16 ...">
  <div>01</div>
  <div class="place-self-center ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Stretch
Use `place-self-stretch` to stretch an item on both axes:

<container>
  <div class="grid grid-cols-3 gap-16">
    <div class="bg-indigo-600 h-96" :class="exampleClasses">01</div>
    <box striped class="grid h-96" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <div class="bg-indigo-500 place-self-stretch" :class="exampleClasses">02</div>
    </box>
    <div class="bg-indigo-600 h-96" :class="exampleClasses">03</div>
    <div class="bg-indigo-600 h-96" :class="exampleClasses">04</div>
    <div class="bg-indigo-600 h-96" :class="exampleClasses">05</div>
    <div class="bg-indigo-600 h-96" :class="exampleClasses">06</div>
  </div>
</container>

```html
<div class="grid grid-cols-3 gap-16 ...">
  <div>01</div>
  <div class="place-self-stretch ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-self-end` to apply the `place-self-end` utility at only medium screen sizes and above.

```html
<div class="place-self-start md:place-self-end">
  <!-- ... -->
</div>
```