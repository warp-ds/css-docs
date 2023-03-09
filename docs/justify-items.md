> Flexbox & Grid

# Justify items
Utilities for controlling how grid items are aligned along their inline axis.

## Quick reference

<qr-table />

## Basic usage
### Start
Use `justify-items-start` to justify grid items against the start of their inline axis.

<container>
  <div class="grid grid-cols-3 gap-16">
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500 ex-box">01</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500 ex-box">02</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500 ex-box">03</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500 ex-box">04</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500 ex-box">05</div>
    </box>
    <box striped fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="w-64 bg-blue-500 ex-box">06</div>
    </box>
  </div>
</container>

```html{1}
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
      <div class="w-64 bg-cyan-500 ex-box">01</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500 ex-box">02</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500 ex-box">03</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500 ex-box">04</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500 ex-box">05</div>
    </box>
    <box striped class="flex justify-end" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 bg-cyan-500 ex-box">06</div>
    </box>
  </div>
</container>

```html{1}
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
      <div class="w-64 bg-pink-500 ex-box">01</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500 ex-box">02</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500 ex-box">03</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500 ex-box">04</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500 ex-box">05</div>
    </box>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 bg-pink-500 ex-box">06</div>
    </box>
  </div>
</container>

```html{1}
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
    <div class="bg-indigo-500 ex-box">01</div>
    <div class="bg-indigo-500 ex-box">02</div>
    <div class="bg-indigo-500 ex-box">03</div>
    <div class="bg-indigo-500 ex-box">04</div>
    <div class="bg-indigo-500 ex-box">05</div>
    <div class="bg-indigo-500 ex-box">06</div>
  </div>
</container>

```html{1}
<div class="flex justify-items-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```
