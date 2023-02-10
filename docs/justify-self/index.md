<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

Flex & Grid

# Align Content
Utilities for controlling how rows are positioned in multi-row flex and grid containers.

## Quick reference

## Basic usage
### Start
Use `content-start` to pack rows in a container against the start of the cross axis.

<container>
  <div class="grid grid-cols-3 gap-16 content-start">
    <div class="bg-blue-500" :class="exampleClasses">01</div>
    <div class="bg-blue-400" :class="exampleClasses">02</div>
    <div class="bg-blue-500" :class="exampleClasses">03</div>
    <div class="bg-blue-500" :class="exampleClasses">04</div>
    <div class="bg-blue-500" :class="exampleClasses">05</div>
    <div class="bg-blue-500" :class="exampleClasses">06</div>
  </div>
</container>

```html
<div class="h- grid grid-cols-3 gap-4 content-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Start
Use `justify-self-start` to align a grid item to the start its inline axis.

<container>
  <div class="grid grid-cols-3 gap-16">
    <div class="bg-cyan-500" :class="exampleClasses">01</div>
    <box striped class="flex" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-400" :class="exampleClasses">02</div>
    </box>
    <div class="bg-cyan-500" :class="exampleClasses">03</div>
    <div class="bg-cyan-500" :class="exampleClasses">04</div>
    <div class="bg-cyan-500" :class="exampleClasses">05</div>
    <div class="bg-cyan-500" :class="exampleClasses">06</div>  
  </div>
</container>

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-start ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```

### Center
Use `justify-self-center` to align a grid item along the center its inline axis:

<container>
  <div class="grid grid-cols-3 gap-16">
    <div class="bg-pink-500" :class="exampleClasses">01</div>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-400" :class="exampleClasses">02</div>
    </box>
    <div class="bg-pink-500" :class="exampleClasses">03</div>
    <div class="bg-pink-500" :class="exampleClasses">04</div>
    <div class="bg-pink-500" :class="exampleClasses">05</div>
    <div class="bg-pink-500" :class="exampleClasses">06</div>
  </div>
</container>

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```

### End
Use `justify-self-end` to align a grid item to the end its inline axis:

<container>
  <div class="grid grid-cols-3 gap-16">
    <div class="bg-indigo-500" :class="exampleClasses">01</div>
    <box striped class="flex justify-end" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <div class="w-64 bg-indigo-400" :class="exampleClasses">02</div>
    </box>
    <div class="bg-indigo-500" :class="exampleClasses">03</div>
    <div class="bg-indigo-500" :class="exampleClasses">04</div>
    <div class="bg-indigo-500" :class="exampleClasses">05</div>
    <div class="bg-indigo-500" :class="exampleClasses">06</div>
  </div>
</container>

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```


### Stretch
Use `justify-self-stretch` to stretch a grid item to fill the grid area on its inline axis:

<container>
  <div class="grid grid-cols-3 gap-16">
    <box striped class="flex justify-end" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 bg-violet-500" :class="exampleClasses">02</div>
    </box>
    <div class="bg-violet-400" :class="exampleClasses">02</div>
    <box striped class="flex justify-end" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 bg-violet-500" :class="exampleClasses">02</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 bg-violet-500" :class="exampleClasses">02</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 bg-violet-500" :class="exampleClasses">02</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 bg-violet-500" :class="exampleClasses">02</div>
    </box>
  </div>
</container>

```html 
<div class="grid justify-items-start ...">
  <!-- ... -->
  <div class="justify-self-stretch ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```