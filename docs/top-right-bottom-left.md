> Layout

# Align Items
Utilities for controlling how flex and grid items are positioned along a container's cross axis.

## Quick reference

| Class                     | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| `top-{size}`              | top: {size};                                                        |
| `right-{size}`            | right: {size};                                                      |
| `bottom-{size}`           | bottom: {size};                                                     |
| `left-{size}`             | left: {size};                                                       |
| `inset-{size}`            | top: {size};<br>right: {size};<br>bottom: {size};<br>left: {size};  |
| `inset-x-{size}`          | right: {size};<br>left: {size};                                     |
| `inset-y-{size}`          | top: {size};<br>bottom: {size};                                     |

<!--
 !TODO: Does this thing support: Full?, auto?, Fractions? other?
-->

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />

## Basic usage
### Placing a positioned element
Use the `{top|right|bottom|left|inset}-{size}` utilities to set the horizontal or vertical position of [positioned element](/position).

<container>
  <div class="grid grid-cols-3 gap-16">
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 rounded-8 absolute left-0 top-0 h-32 w-32 bg-violet-600">01</div>
    </box>
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 absolute top-0 inset-x-0 h-32  bg-violet-600">01</div>
    </box>
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 absolute right-0 top-0 h-32 w-32 bg-violet-600">01</div>
    </box>
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 absolute left-0 top-0 bottom-0 w-32 bg-violet-600">01</div>
    </box>
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 absolute inset-0 bg-violet-600">01</div>
    </box>
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 absolute right-0 inset-y-0 w-32 bg-violet-600">01</div>
    </box>
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 absolute left-0 bottom-0 h-32 w-32 bg-violet-600">01</div>
    </box>
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 absolute inset-x-0 bottom-0 h-32 bg-violet-600">01</div>
    </box>
    <box striped class="rounded-8 relative aspect-2/1" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="ex-box rounded-8 absolute right-0 bottom-0 h-32 w-32 bg-violet-600">01</div>
    </box>

  </div>
</container>

```html
<!-- Pin to top left corner -->
<div class="relative ...">
  <div class="absolute left-0 top-0 h-32 w-32 ...">01</div>
</div>

<!-- Span top edge -->
<div class="relative ...">
  <div class="absolute inset-x-0 top-0 h-32 ...">02</div>
</div>

<!-- Pin to top right corner -->
<div class="relative ...">
  <div class="absolute top-0 right-0 h-32 w-32 ...">03</div>
</div>

<!-- Span left edge -->
<div class="relative ...">
  <div class="absolute inset-y-0 left-0 w-32 ...">04</div>
</div>

<!-- Fill entire parent -->
<div class="relative ...">
  <div class="absolute inset-0 ...">05</div>
</div>

<!-- Span right edge -->
<div class="relative ...">
  <div class="absolute inset-y-0 right-0 w-32 ...">06</div>
</div>

<!-- Pin to bottom left corner -->
<div class="relative  ...">
  <div class="absolute bottom-0 left-0 h-32 w-32 ...">07</div>
</div>

<!-- Span bottom edge -->
<div class="relative ...">
  <div class="absolute inset-x-0 bottom-0 h-32 ...">08</div>
</div>

<!-- Pin to bottom right corner -->
<div class="relative ...">
  <div class="absolute bottom-0 right-0 h-32 w-32 ...">09</div>
</div>
```

### Using negative values
To use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value.

<container>
  <box striped class="relative rounded-8 aspect-1/1 max-w-144 mx-auto" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="ex-box rounded-8 absolute -left-16 -top-16 h-64 w-64 bg-indigo-600"> </div>
  </box>
</container>

```html
<div class="relative ...">
  <div class="absolute h-64 w-64 -left-16 -top-16 ..."></div>
</div>
```

> Applying conditionally
### Hover, focus, and other states
Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:top-6` to only apply the `top-6` utility on hover.

```html
<div class="top-8 hover:top-10">
  <!-- ... -->
</div>
```
​
### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:top-6` to apply the `top-6` utility at only medium screen sizes and above.

```html
<div class="top-8 md:top-10">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off top/right/bottom/left value t, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="top-[160]">
  <!-- ... -->
</div>
```
