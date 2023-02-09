<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Layout

# Flex Direction
Utilities for controlling the direction of flex items.

## Quick reference

## Basic usage
### Row
Use `flex-row` to position flex items horizontally in the same direction as text.

<container>
  <box class="flex flex-row gap-16">
    <div class="bg-fuchsia-500" :class="exampleClasses">01</div>
    <div class="bg-fuchsia-500" :class="exampleClasses">02</div>
    <div class="bg-fuchsia-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex flex-row ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Row Reverse
Use `flex-row-reverse` to position flex items horizontally in the opposite direction.

<container>
  <box class="flex flex-row-reverse gap-16">
    <div class="bg-blue-500" :class="exampleClasses">01</div>
    <div class="bg-blue-500" :class="exampleClasses">02</div>
    <div class="bg-blue-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
  <div class="flex flex-row-reverse ...">
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
```

### Column
Use `flex-col` to position flex items vertically.

<container>
  <box class="flex flex-col gap-16">
    <div class="bg-indigo-500" :class="exampleClasses">01</div>
    <div class="bg-indigo-500" :class="exampleClasses">02</div>
    <div class="bg-indigo-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex flex-col ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column reverse
Use `flex-col-reverse` to position flex items vertically in the opposite direction.

<container>
  <box class="flex flex-col-reverse gap-16">
    <div class="bg-violet-500" :class="exampleClasses">01</div>
    <div class="bg-violet-500" :class="exampleClasses">02</div>
    <div class="bg-violet-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex flex-col-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```
