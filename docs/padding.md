> Spacing

# Padding

Utilities for controlling an element's padding.

## Quick reference

| Class             | Description                                         |
|-------------------|-----------------------------------------------------|
| `p-{size}`        | `padding: {size}`                                   |
| `p{side}-{size}`  | `padding-{side}: {size}`                            |
| `px-{size}`       | `padding-left: {size}`<br/>`padding-right: {size}`  |
| `py-{size}`       | `padding-top: {side}`<br/>`padding-bottom: {size}`  |

> Available values <br />
> `{side}`: `t`(top), `r`(right), `b`(bottom), `l`(left)<br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />

## Basic usage

### Add padding to a single side
Control the padding on one side of an element using the `p{t|r|b|l|x|y}-{size}` utilities.

For example,`pt-16` would add `1.6rem` which is equivalent of 16px of padding to the top of an element, `pr-8` would add `0.8rem` (8px) of padding to the right of an element, `pb-32` would add `3.2rem` (32px) of padding to the bottom of an element, and `pl-64` would add `6.4rem` (64px) of padding to the left of an element.

<container>
  <div class="flex flex-wrap items-start justify-center pd-text-white pd-text-sm font-bold -mx-5">
    <div class="flex items-start">
      <div class="flex-none px-16">
        <div class="pd-bg-purple-500 rounded-4 overflow-hidden">
          <box striped class="h-16" fg-color="var(--tw-white-fg)"></box>
          <div class="p-16">pt-16</div>
        </div>
      </div>
      <div class="flex-none px-16 pt-16">
        <div class="flex pd-bg-purple-500 rounded-4 overflow-hidden">
          <div class="flex-none p-16">pr-24</div>
          <box striped class="flex-none w-24" fg-color="var(--tw-white-fg)" ></box>
        </div>
      </div>
    </div>
    <div class="flex items-start">
      <div class="flex-none px-16 pt-16">
        <div class="pd-bg-purple-500 rounded-4 overflow-hidden">
          <div class="p-16">pb-8</div>
          <box striped class="h-8" fg-color="var(--tw-white-fg)"></box>
        </div>
      </div>
      <div class="flex-none flex px-16 pt-16">
        <div class="flex pd-bg-purple-500 rounded-4 overflow-hidden">
          <box striped class="flex-none w-32" fg-color="var(--tw-white-fg)"></box>
          <div class="flex-none p-16">pl-32</div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="pt-16 ...">pt-16</div>
<div class="pr-24 ...">pr-24</div>
<div class="pb-8 ...">pb-8</div>
<div class="pl-32 ...">pl-32</div>
```

### Horizontal Padding
Control the horizontal padding of an element using the `px-{size}` utilities.

<container>
  <div class="relative overflow-auto p-8">
    <div class="flex justify-center pd-font-mono pd-text-white pd-text-sm font-bold leading-6">
      <div class="pd-bg-indigo-500 rounded-4 overflow-hidden flex">
        <box striped class="w-32" fg-color="var(--tw-white-fg)"></box>
        <div class="p-16">px-32</div>
        <box striped class="w-32" fg-color="var(--tw-white-fg)"></box>
      </div>
    </div>
  </div>
</container>

```html
<div class="px-32 ...">px-32</div>
```

### Vertical padding
Control the vertical padding of an element using the `py-{size}` utilities.

<container>
  <div class="relative overflow-auto p-8">
    <div class="flex justify-center pd-font-mono pd-text-white pd-text-sm font-bold leading-6">
      <div class="pd-bg-pink-500 rounded-4 overflow-hidden">
        <box striped class="h-32" fg-color="var(--tw-white-fg)"></box>
        <div class="p-16">py-32</div>
        <box striped class="h-32" fg-color="var(--tw-white-fg)"></box>
      </div>
    </div>
  </div>
</container>

```html
<div class="px-16 ...">px-16</div>
```

### Padding to all sides
Control the padding on all sides of an element using the `p-{size}` utilities.

<container>
  <div class="relative overflow-auto p-8">
    <div class="flex justify-center pd-font-mono pd-text-white pd-text-sm font-bold leading-6">
      <div class="pd-bg-violet-500 rounded-4 overflow-hidden">
        <box striped class="p-32" fg-color="var(--tw-white-fg)">
          <div class="pd-bg-violet-500 p-16">p-32</div>
        </box>
      </div>
    </div>
  </div>
</container>

```html
<div class="p-32 ...">p-32</div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:py-32` to only apply the `py-32` utility on hover.

```html
<div class="py-24 hover:py-32">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:py-8` to apply the `py-8` utility at only medium screen sizes and above.

```html
<div class="py-4 md:py-8">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off padding value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="p-[113]">
  <!-- ... -->
</div>
```
