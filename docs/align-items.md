> Flexbox & Grid

# Align Items
Utilities for controlling how flex and grid items are positioned along a container's cross axis.

## Quick reference

| Class           | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `items-stretch` | Stretch items to fill the container's cross axis           |
| `items-start`   | Align items to the start of the container's cross axis     |
| `items-center`  | Align items along the center of the container's cross axis |
| `items-end`     | Align items to the end of the container's cross axis       |

## Basic usage
### Stretch
Use `items-stretch` to stretch items to fill the container’s cross axis.

<container>
  <box striped class="grid grid-cols-3 items-stretch gap-16" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
    <div class="py-16 bg-purple-500 ex-box">01</div>
    <div class="py-64 bg-purple-500 ex-box">02</div>
    <div class="py-32 bg-purple-500 ex-box">03</div>
  </box>
</container>

```html
<div class="flex items-stretch ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

### Start
Use `items-start` to align items to the start of the container’s cross axis.

<container>
  <box striped class="grid grid-cols-3 items-start gap-16" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
    <div class="py-16 bg-violet-500 ex-box">01</div>
    <div class="py-64 bg-violet-500 ex-box">02</div>
    <div class="py-32 bg-violet-500 ex-box">03</div>
  </box>
</container>

```html
<div class="flex items-start ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

### Center
Use `items-center` to align items along the center of the container’s cross axis.

<container>
  <box striped class="grid grid-cols-3 items-center gap-16" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="py-16 bg-pink-500 ex-box">01</div>
    <div class="py-64 bg-pink-500 ex-box">02</div>
    <div class="py-32 bg-pink-500 ex-box">03</div>
  </box>
</container>

```html
<div class="flex items-center ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

### End
Use `items-end` to align items to the end of the container’s cross axis.

<container>
  <box striped class="grid grid-cols-3 items-end gap-16" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="py-16 bg-indigo-500 ex-box">01</div>
    <div class="py-64 bg-indigo-500 ex-box">02</div>
    <div class="py-32 bg-indigo-500 ex-box">03</div>
  </box>
</container>

```html
<div class="flex items-end ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

### Baseline
Use `items-baseline` to align items along the container’s cross axis such that all of their baselines align.

<container>
  <box striped class="grid grid-cols-3 items-baseline gap-16" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="pt-8 pb-24 bg-blue-500 ex-box">01</div>
    <div class="pt-32 pb-64 bg-blue-500 ex-box">02</div>
    <div class="pt-48 pb-16 bg-blue-500 ex-box">03</div>
  </box>
</container>

```html
<div class="flex items-baseline ...">
  <div class="pt-8 pb-24">01</div>
  <div class="pt-32 pb-64">02</div>
  <div class="pt-48 pb-16">03</div>
</div>
```

<!--@include: ./_breakpoints-and-media-queries.md-->
