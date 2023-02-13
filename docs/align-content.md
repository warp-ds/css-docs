<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Flexbox & Grid

# Align Content
Utilities for controlling how rows are positioned in multi-row flex and grid containers.

## Quick reference

| Class             | Description                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| `content-start`   | Pack rows in a container against the start of the cross axis                                    |
| `content-center`  | Pack rows in a container along the center of the cross axis                                     |
| `content-end`     | Pack rows in a container against the end of the cross axis                                      |
| `content-between` | Distribute rows in a container so there is an equal amount of space between each line           |
| `content-around`  | Distribute rows in a container so there is an equal amount of space on either side of each line |
| `content-evenly`  | Distribute rows in a container so there is an equal amount of space around each line            |

## Basic usage
### Start
Use `content-start` to pack rows in a container against the start of the cross axis.

<container>
  <box striped class="grid grid-cols-3 gap-16 pb-64 content-start" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
    <div class="bg-purple-500" :class="exampleClasses">01</div>
    <div class="bg-purple-500" :class="exampleClasses">02</div>
    <div class="bg-purple-500" :class="exampleClasses">03</div>
    <div class="bg-purple-500" :class="exampleClasses">04</div>
    <div class="bg-purple-500" :class="exampleClasses">05</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-3 gap-16 content-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Center
Use `content-center` to pack rows in a container in the center of the cross axis.

<container>
  <box striped class="grid grid-cols-3 gap-16 py-32 content-center" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="bg-blue-500" :class="exampleClasses">01</div>
    <div class="bg-blue-500" :class="exampleClasses">02</div>
    <div class="bg-blue-500" :class="exampleClasses">03</div>
    <div class="bg-blue-500" :class="exampleClasses">04</div>
    <div class="bg-blue-500" :class="exampleClasses">05</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-3 gap-16 content-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### End
Use `content-end` to pack rows in a container against the end of the cross axis.

<container>
  <box striped class="grid grid-cols-3 gap-16 pt-64 content-start" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="bg-pink-500" :class="exampleClasses">01</div>
    <div class="bg-pink-500" :class="exampleClasses">02</div>
    <div class="bg-pink-500" :class="exampleClasses">03</div>
    <div class="bg-pink-500" :class="exampleClasses">04</div>
    <div class="bg-pink-500" :class="exampleClasses">05</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-3 gap-16 content-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space between
Use `content-between` to distribute rows in a container such that there is an equal amount of space between each line:

<container>
  <box striped class="grid grid-cols-3 gap-16 content-start" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
    <div class="bg-violet-500 mb-64" :class="exampleClasses">01</div>
    <div class="bg-violet-500 mb-64" :class="exampleClasses">02</div>
    <div class="bg-violet-500 mb-64" :class="exampleClasses">03</div>
    <div class="bg-violet-500" :class="exampleClasses">04</div>
    <div class="bg-violet-500" :class="exampleClasses">05</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-3 gap-16 content-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space around
Use `content-around` to distribute rows in a container such that there is an equal amount of space around each line:

<container>
  <box striped class="grid grid-cols-3 gap-x-16 content-start" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
    <div class="bg-cyan-500 my-32" :class="exampleClasses">01</div>
    <div class="bg-cyan-500 my-32" :class="exampleClasses">02</div>
    <div class="bg-cyan-500 my-32" :class="exampleClasses">03</div>
    <div class="bg-cyan-500 my-32" :class="exampleClasses">04</div>
    <div class="bg-cyan-500 my-32" :class="exampleClasses">05</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-3 gap-x-16 content-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space evenly
Use `content-evenly` to distribute rows in a container such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `content-around`.

<container>
  <box striped class="grid grid-cols-3 gap-x-16 content-start" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="bg-indigo-500 my-24" :class="exampleClasses">01</div>
    <div class="bg-indigo-500 my-24" :class="exampleClasses">02</div>
    <div class="bg-indigo-500 my-24" :class="exampleClasses">03</div>
    <div class="bg-indigo-500 mb-24" :class="exampleClasses">04</div>
    <div class="bg-indigo-500 mb-24" :class="exampleClasses">05</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-3 gap-x-16 content-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```
