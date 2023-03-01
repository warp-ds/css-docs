> Flexbox & Grid

# Align Self
Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.

## Quick reference

| Class          | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `self-auto`    | Align an item based on the container's `align-items` property |
| `self-start`   | Align an item to the start of the container's cross axis      |
| `self-center`  | Align an item along the center of the container's cross axis  |
| `self-end`     | Align an item to the end of the container's cross axis        |
| `self-stretch` | Stretch an item to fill the container's cross axis            |

## Basic usage
### Auto
Use `self-auto` to align an item based on the value of the container’s `align-items` property.

<container>
  <box striped class="grid grid-cols-3 items-stretch gap-16" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
    <div class="py-64 bg-purple-600 ex-box">01</div>
    <div class="self-auto bg-purple-500 ex-box">02</div>
    <div class="bg-purple-600 ex-box">03</div>
  </box>
</container>

```html{3}
<div class="flex grid-cols-3 items-stretch ...">
  <div>01</div>
  <div class="self-auto ...">02</div>
  <div>03</div>
</div>
```

### Start
Use `self-start` to align an item to the start of the container’s cross axis, despite the container’s align-items value:

<container>
  <box striped class="grid grid-cols-3 items-stretch gap-16" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
    <div class="py-64 bg-violet-600 ex-box">01</div>
    <div class="self-start bg-violet-500 ex-box">02</div>
    <div class="bg-violet-600 ex-box">03</div>
  </box>
</container>

```html{3}
<div class="flex grid-cols-3 items-stretch ...">
  <div>01</div>
  <div class="self-start">02</div>
  <div>03</div>
</div>
```

### Center
Use `self-center` to align an item along the center of the container’s cross axis, despite the container’s `align-items` value.

<container>
  <box striped class="grid grid-cols-3 items-stretch gap-16" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="py-64 bg-pink-600 ex-box">01</div>
    <div class="self-center bg-pink-500 ex-box">02</div>
    <div class="bg-pink-600 ex-box">03</div>
  </box>
</container>

```html{3}
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-center">02</div>
  <div>03</div>
</div>
```

### End
Use `self-end` to align an item to the end of the container’s cross axis, despite the container’s `align-items` value.

<container>
  <box striped class="grid grid-cols-3 items-stretch gap-16" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="py-64 bg-indigo-600 ex-box">01</div>
    <div class="self-end bg-indigo-500 ex-box">02</div>
    <div class="bg-indigo-600 ex-box">03</div>
  </box>
</container>

```html{3}
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-end">02</div>
  <div>03</div>
</div>
```

### Stretch
Use `self-stretch` to stretch an item to fill the container’s cross axis, despite the container’s `align-items` value:
<container>
  <box striped class="grid grid-cols-3 items-stretch gap-16" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="py-64 bg-blue-600 ex-box">01</div>
    <div class="self-stretch bg-blue-500 ex-box">02</div>
    <div class="bg-blue-600 ex-box">03</div>
  </box>
</container>

```html{3}
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-stretch">02</div>
  <div>03</div>
</div>
```

<!--@include: ./_breakpoints-and-media-queries.md-->
