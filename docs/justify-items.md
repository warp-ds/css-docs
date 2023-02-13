<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Flexbox & Grid

# Justify items
Utilities for controlling how grid items are aligned along their inline axis.

## Quick reference

| Class                   | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| `justify-items-start`   | Justify grid items against the start of their inline axis |
| `justify-items-center`  | Justify grid items along the center of their inline axis  |
| `justify-items-end`     | Justify grid items against the end of their inline axis   |
| `justify-items-stretch` | Stretch grid items along their inline axis                |

## Basic usage
### Start
Use `justify-items-start` to justify grid items against the start of their inline axis.

<container>
  <div class="grid grid-cols-3 gap-16">
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500" :class="exampleClasses">01</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500" :class="exampleClasses">02</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500" :class="exampleClasses">03</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500" :class="exampleClasses">04</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500" :class="exampleClasses">05</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500" :class="exampleClasses">06</div>
    </box>
  </div>
</container>

```html
<div class="flex justify-items-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### End
Use `justify-items-end` to justify grid items against the end of their inline axis.

<container>
  <div class="grid grid-cols-3 gap-16">
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500" :class="exampleClasses">01</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500" :class="exampleClasses">02</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500" :class="exampleClasses">03</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500" :class="exampleClasses">04</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500" :class="exampleClasses">05</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500" :class="exampleClasses">06</div>
    </box>
  </div>
</container>

```html
<div class="flex justify-items-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Center
Use `justify-items-center` to justify grid items along their inline axis.

<container>
  <div class="grid grid-cols-3 gap-16">
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500" :class="exampleClasses">01</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500" :class="exampleClasses">02</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500" :class="exampleClasses">03</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500" :class="exampleClasses">04</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500" :class="exampleClasses">05</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500" :class="exampleClasses">06</div>
    </box>
  </div>
</container>

```html
<div class="flex justify-items-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Stretch
Use `justify-items-stretch` to stretch items along their inline axis.

<container>
  <div class="grid grid-cols-3 gap-16">
    <div class="bg-indigo-500" :class="exampleClasses">01</div>
    <div class="bg-indigo-500" :class="exampleClasses">02</div>
    <div class="bg-indigo-500" :class="exampleClasses">03</div>
    <div class="bg-indigo-500" :class="exampleClasses">04</div>
    <div class="bg-indigo-500" :class="exampleClasses">05</div>
    <div class="bg-indigo-500" :class="exampleClasses">06</div>
  </div>
</container>

```html
<div class="flex justify-items-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```
