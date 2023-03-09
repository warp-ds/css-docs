> Flexbox & Grid

# Flex Grow
Utilities for controlling how flex items grow.

## Quick reference

<qr-table />

## Basic usage
### Grow
Use `grow` to allow a flex item to grow to fill any available space.

<width-controller>
  <container>
    <box striped class="flex gap-16" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="flex-none bg-indigo-800 ex-box">01</div>
      <div class="grow bg-indigo-500 ex-box">02</div>
      <div class="flex-none bg-indigo-800 ex-box">03</div>
    </box>
  </container>
</width-controller>

```html
<div class="flex">
  <div class="flex-none ...">
    01
  </div>
  <div class="grow ...">
    02
  </div>
  <div class="flex-none ...">
    03
  </div>
</div>
```

### Do not grow
Use `grow-0` to prevent a flex item from growing

<width-controller>
  <container>
    <box striped class="flex gap-16" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="grow bg-pink-800 ex-box">01</div>
      <div class="grow-0 flex-1 bg-pink-500 ex-box">02</div>
      <div class="grow bg-pink-800 ex-box">03</div>
    </box>
  </container>
</width-controller>

```html
<div class="flex">
  <div class="grow ...">
    01
  </div>
  <div class="grow-0 ...">
    02
  </div>
  <div class="grow ...">
    03
  </div>
</div>
```
