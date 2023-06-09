> Borders

# Border Radius
Utilities for controlling the border radius of an element.

## Quick reference

| Class               | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `rounded`           | border-radius: 1px;                                           |
| `rounded-full`      | border-radius: 9999px;                                        |
| `rounded-{size}`    | border-radius: {size};                                        |
| `rounded-t-{size}`  | border-top-radius: {size};                                    |
| `rounded-tr-{size}` | border-top-radius: {size};<br>border-right-radius: {size};    |
| `rounded-r-{size}`  | border-right-radius: {size};                                  |
| `rounded-br-{size}` | border-bottom-radius: {size};<br>border-right-radius: {size}; |
| `rounded-b-{size}`  | border-bottom-radius: {size};                                 |
| `rounded-bl-{size}` | border-bottom-radius: {size};<br>border-left-radius: {size};  |
| `rounded-l-{size}`  | border-left-radius: {size};                                   |
| `rounded-tl-{size}` | border-top-radius: {size};<br>border-left-radius: {size};     |

> Available values <br />
> `{size}`: `0`, `2`, `4`, `8`, `16` <br />

## Basic usage
### Rounded corners
Use utilities like `.rounded`, or `.rounded-full` to apply different border radius sizes to an element.

<container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div>rounded</div>
    <div>rounded-8</div>
    <div>rounded-16</div>
    <div>rounded-full</div>
    <div class="pd-bg-pink-500 p-24 rounded">01</div>
    <div class="pd-bg-pink-500 p-24 rounded-8">02</div>
    <div class="pd-bg-pink-500 p-24 rounded-16">01</div>
    <div class="pd-bg-pink-500 p-24 rounded-full">02</div>
  </div>
</container>

```html
<div class="rounded ..."></div>
<div class="rounded-full ..."></div>
```

### No rounding
Use `rounded-0` to remove an existing border radius from an element.

This is most commonly used to remove a border radius that was applied at a smaller breakpoint.

<container>
  <div class="grid gap-16 justify-items-center">
    <div>rounded-0</div>
    <div class="pd-bg-fuchsia-500 p-24 rounded-0">OMG, a square</div>
  </div>
</container>

```html
<div class="rounded-0 ..."></div>
```

### Rounding sides separately
Use `rounded-{t|r|b|l}{-size}` to only round one side of an element.

<container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div>rounded-t-16</div>
    <div>rounded-r-16</div>
    <div>rounded-b-16</div>
    <div>rounded-l-16</div>
    <div class="pd-bg-purple-500 p-24 rounded-t-16">01</div>
    <div class="pd-bg-purple-500 p-24 rounded-r-16">02</div>
    <div class="pd-bg-purple-500 p-24 rounded-b-16">03</div>
    <div class="pd-bg-purple-500 p-24 rounded-l-16">04</div>
  </div>
</container>

```html
<div class="rounded-t-16 ...">01</div>
<div class="rounded-r-16 ...">02</div>
<div class="rounded-b-16 ...">03</div>
<div class="rounded-l-16 ...">04</div>
```

### ounding corners separately
Use `rounded-{tl|tr|br|bl}{-size}` to only round one corner an element.

<container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div>rounded-tl</div>
    <div>rounded-tr</div>
    <div>rounded-br</div>
    <div>rounded-bl</div>
    <div class="pd-bg-violet-500 p-24 rounded-tl-16">01</div>
    <div class="pd-bg-violet-500 p-24 rounded-tr-16">02</div>
    <div class="pd-bg-violet-500 p-24 rounded-br-16">03</div>
    <div class="pd-bg-violet-500 p-24 rounded-bl-16">04</div>
  </div>
</container>

```html
<div class="rounded-tl-16 ...">01</div>
<div class="rounded-tr-16 ...">02</div>
<div class="rounded-br-16 ...">03</div>
<div class="rounded-bl-16 ...">04</div>
```


### Hover, focus, and other states
Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:rounded-8` to only apply the `rounded-8` utility on hover.

```html
<div class="rounded hover:rounded-8">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:rounded-16` to apply the `rounded-16` utility at only medium screen sizes and above.

```html
<div class="rounded md:rounded-16">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off `border-radius` value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="rounded-[31]">
  <!-- ... -->
</div>
```

::: warning Unsupported
Arbitrary values for this is not yet supported! If you need this, reach out to us on [#nmp-team-warp-tech](https://sch-chat.slack.com/archives/C04LG5UTCTT) .
:::


