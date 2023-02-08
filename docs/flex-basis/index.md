<script setup>
const exampleClasses = 'p-24 rounded-2 text-white flex items-center justify-center'
</script>

Flex & Grid

# Flex Basis
Utilities for controlling the initial size of flex items.

## Quick reference

## Basic usage
### Setting the flex basis
Use the `basis-{size}` utilities to set the initial size of flex items.

<container>
  <box class="flex gap-16">
    <div class="basis-1/4 bg-fuchsia-500" :class="exampleClasses">01</div>
    <div class="basis-1/4 bg-fuchsia-500" :class="exampleClasses">02</div>
    <div class="basis-1/2 bg-fuchsia-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex flex-row">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>
```
