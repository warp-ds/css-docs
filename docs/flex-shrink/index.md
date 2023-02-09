<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Layout

# Flex Shrink
Utilities for controlling how flex items shrink.

## Quick reference

## Besic usage
### Shrink
Use `shrink` to allow a flex item to shrink if needed.

<width-controller>
  <container>
    <box striped class="flex gap-16" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="flex-none bg-indigo-800" :class="exampleClasses">01</div>
      <div class="w-128 shrink bg-indigo-500" :class="exampleClasses">02</div>
      <div class="flex-none bg-indigo-800" :class="exampleClasses">03</div>
    </box>
  </container>
</width-controller>

```html
<div class="flex">
  <div class="flex-none ...">
    01
  </div>
  <div class="shrink ...">
    02
  </div>
  <div class="flex-none ...">
    03
  </div>
</div>
```

### Don't shrink
Use `shrink-0` to prevent a flex item from shrinking

<width-controller>
  <container>
    <box striped class="flex gap-16" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="flex-1 bg-pink-800" :class="exampleClasses">01</div>
      <div class="w-128 shrink-0 bg-pink-500" :class="exampleClasses">02</div>
      <div class="flex-1 bg-pink-800" :class="exampleClasses">03</div>
    </box>
  </container>
</width-controller>

```html
  <div class="flex">
    <div class="flex-1 ...">
      01
    </div>
    <div class="shrink-0 w-32 ...">
      02
    </div>
    <div class="flex-1 ...">
      03
    </div>
  </div>
```