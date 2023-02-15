> Spacing

# Space Between
Utilities for controlling the space between child elements.

## Basic usage
### Add horizontal space between children
Control the horizontal space between elements using the `space-x-{amount}` utilities.

<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center ex-font leading-6">
      <box striped class="flex space-x-16 bg-stripes-fuchsia rounded" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
        <div class="w-64 h-64 flex items-center justify-center shadow-2 rounded bg-fuchsia-500">01</div>
        <div class="w-64 h-64 flex items-center justify-center shadow-2 rounded bg-fuchsia-500">02</div>
        <div class="w-64 h-64 flex items-center justify-center shadow-2 rounded bg-fuchsia-500">03</div>
      </box>
    </div>
  </div>
</container>

```html
<div class="flex space-x-16 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```
### Add vertical space between children
Control the vertical space between elements using the `space-y-{amount}` utilities.

<container>
  <div class="relative overflow-auto p-8">
    <div class="flex flex-col justify-center text-center w-full ex-font leading-6">
      <box striped class="flex flex-col space-y-8 bg-stripes-indigo rounded" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
        <div class="p-12 flex items-center justify-center shadow-2 rounded bg-indigo-500">01</div>
        <div class="p-12 flex items-center justify-center shadow-2 rounded bg-indigo-500">02</div>
        <div class="p-12 flex items-center justify-center shadow-2 rounded bg-indigo-500">03</div>
      </box>
    </div>
  </div>
</container>

```html
<div class="flex flex-col space-y-8 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Reversing children order
If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`), use the `space-x-reverse` or `space-y-reverse` utilities to ensure the space is added to the correct side of each element.
<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-end ex-font leading-6">
      <box striped class="flex flex-row-reverse space-x-4 space-x-reverse rounded" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
        <div class="w-64 h-64 flex items-center justify-center shadow-2 rounded bg-cyan-500">01</div>
        <div class="w-64 h-64 flex items-center justify-center shadow-2 rounded bg-cyan-500">02</div>
        <div class="w-64 h-64 flex items-center justify-center shadow-2 rounded bg-cyan-500">03</div>
      </box>
    </div>
  </div>
</container>

```html
<div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```
