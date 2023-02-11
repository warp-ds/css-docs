<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Layout

# Align Items
Utilities for controlling how flex and grid items are positioned along a container's cross axis.

## Quick reference

## Basic usage
### Stretch
Use `items-stretch` to stretch items to fill the container’s cross axis.

<container>
  <box striped class="grid grid-cols-3 items-stretch gap-16" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
    <div class="py-16 bg-purple-500" :class="exampleClasses">01</div>
    <div class="py-64 bg-purple-500" :class="exampleClasses">02</div>
    <div class="py-32 bg-purple-500" :class="exampleClasses">03</div>
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
    <div class="py-16 bg-violet-500" :class="exampleClasses">01</div>
    <div class="py-64 bg-violet-500" :class="exampleClasses">02</div>
    <div class="py-32 bg-violet-500" :class="exampleClasses">03</div>
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
    <div class="py-16 bg-pink-500" :class="exampleClasses">01</div>
    <div class="py-64 bg-pink-500" :class="exampleClasses">02</div>
    <div class="py-32 bg-pink-500" :class="exampleClasses">03</div>
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
    <div class="py-16 bg-indigo-500" :class="exampleClasses">01</div>
    <div class="py-64 bg-indigo-500" :class="exampleClasses">02</div>
    <div class="py-32 bg-indigo-500" :class="exampleClasses">03</div>
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
    <div class="pt-8 pb-24 bg-blue-500" :class="exampleClasses">01</div>
    <div class="pt-32 pb-64 bg-blue-500" :class="exampleClasses">02</div>
    <div class="pt-48 pb-16 bg-blue-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex items-baseline ...">
  <div class="pt-8 pb-24">01</div>
  <div class="pt-32 pb-64">02</div>
  <div class="pt-48 pb-16">03</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:items-center` to apply the `items-center` utility at only medium screen sizes and above.

```html
<div class="flex items-stretch md:items-center">
  <!-- ... -->
</div>
```