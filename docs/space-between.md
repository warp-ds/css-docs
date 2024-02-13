> Spacing

# Space Between

Utilities for controlling the space between child elements.

## Basic usage

> Uses a `> * + *` Selector to target child elements

| Class              | Description                                              |
|--------------------|----------------------------------------------------------|
| `space-x-{amount}` | `margin-right:{size}` (Not on last child)                |
| `space-y-{amount}` | `margin-bottom:{size}` (Not on last child)               |
| `space-x-reverse`  | Reverse space for space-x in combo with flex-row-reverse |
| `space-y-reverse`  | Reverse space for space-y in combo with flex-col-reverse |

> Available values <br />
> `{amount}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />

### Add horizontal space between children
Control the horizontal space between elements using the `space-x-{amount}` utilities.

<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center ex-font leading-6">
      <box striped class="flex space-x-24 bg-stripes-fuchsia rounded" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
        <div class="w-64 h-112 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-fuchsia-500">01</div>
        <div class="w-64 h-112 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-fuchsia-500">02</div>
        <div class="w-64 h-112 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-fuchsia-500">03</div>
      </box>
    </div>
  </div>
</container>

```html
<div class="flex space-x-24 ...">
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
      <box striped class="flex flex-col space-y-24 bg-stripes-indigo rounded" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
        <div class="p-12 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-indigo-500">01</div>
        <div class="p-12 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-indigo-500">02</div>
        <div class="p-12 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-indigo-500">03</div>
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
      <box striped class="flex flex-row-reverse space-x-24 space-x-reverse rounded" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
        <div class="w-64 h-112 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-cyan-500">01</div>
        <div class="w-64 h-112 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-cyan-500">02</div>
        <div class="w-64 h-112 flex items-center justify-center pd-shadow-xl rounded-4 pd-bg-cyan-500">03</div>
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

### Using negative values
To use a negative space value, prefix the class name with a dash to convert it to a negative value.

```html
<div class="flex -space-x-8 ...">
  <!-- ... -->
</div>
```

### Limitations
These utilities are really just a shortcut for adding margin to all-but-the-first-item in a group, and aren’t designed to handle complex cases like grids, layouts that wrap, or situations where the children are rendered in a complex custom order rather than their natural DOM order.

For those situations, it’s better to use the gap utilities when possible, or add margin to every element with a matching negative margin on the parent

```html
<div class="flow-root">
  <div class="-m-16 flex flex-wrap">
    <div class="m-16 ..."></div>
    <div class="m-16 ..."></div>
    <div class="m-16 ..."></div>
  </div>
</div>
```

### Cannot be paired with divide utilities
The `space-*` utilities are not designed to work together with the [divide utilities](/divide-width.md). For those situations, consider adding margin/padding utilities to the children instead.
