<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

Flex & Grid

# Justify Content
Utilities for controlling how flex and grid items are positioned along a container's main axis.

## Quick reference

## Basic usage
### Start
Use `justify-start` to justify items against the start of the container’s main axis:

<container>
  <box striped class="flex justify-start gap-16" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
    <div class="bg-fuchsia-500" :class="exampleClasses">01</div>
    <div class="bg-fuchsia-500" :class="exampleClasses">02</div>
    <div class="bg-fuchsia-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Center
Use `justify-center` to justify items along the center of the container’s main axis.

<container>
  <box striped class="flex justify-center gap-16" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="bg-blue-500" :class="exampleClasses">01</div>
    <div class="bg-blue-500" :class="exampleClasses">02</div>
    <div class="bg-blue-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex justify-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### End
Use `justify-end` to justify items along the center of the container’s main axis.

<container>
  <box striped class="flex justify-end gap-16" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
    <div class="bg-cyan-500" :class="exampleClasses">01</div>
    <div class="bg-cyan-500" :class="exampleClasses">02</div>
    <div class="bg-cyan-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex justify-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space between
Use `justify-between` to justify items along the center of the container’s main axis.

<container>
  <box striped class="flex justify-between gap-16" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="bg-pink-500" :class="exampleClasses">01</div>
    <div class="bg-pink-500" :class="exampleClasses">02</div>
    <div class="bg-pink-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex justify-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space around
Use `justify-around` to justify items along the center of the container’s main axis.

<container>
  <box striped class="flex justify-around gap-16" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
    <div class="bg-violet-500" :class="exampleClasses">01</div>
    <div class="bg-violet-500" :class="exampleClasses">02</div>
    <div class="bg-violet-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex justify-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space evenly
Use `justify-evenly` to justify items along the center of the container’s main axis.

<container>
  <box striped class="flex justify-evenly gap-16" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="bg-indigo-500" :class="exampleClasses">01</div>
    <div class="bg-indigo-500" :class="exampleClasses">02</div>
    <div class="bg-indigo-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex justify-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```