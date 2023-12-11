> Borders

# Divide Color
Utilities for controlling the border color between elements.

::: warning Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#nmp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Quick reference

| Class                        | Description                 |
| ---------------------------- | --------------------------- |
| `divide-inherit` > * + *     | border-color: inherit;      |
| `divide-current` > * + *     | border-color: currentColor; |
| `divide-transparent` > * + * | border-color: transparent;  |
| `divide-{color}`  > * + *    | border-color: {color};      |

> Available values <br />
> `{color}`: ? <br />

## Basic usage
### Setting the divide color
Control the border color between elements using the `divide-{color}` utilities.

<container>
  <div class="flex justify-items-stretch pd-bg-pink-500 rounded-8 divide-x divide-blue-200 w-full">
    <div class="p-24 flex-1 text-center">1</div>
    <div class="p-24 flex-1 text-center">2</div>
    <div class="p-24 flex-1 text-center">3</div>
  </div>
</container>

```html
<div class="divide-y divide-blue-200">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```
### Changing the opacity
Control the opacity of the divide color using the color opacity modifier.

```html
<div class="divide-y-4 divide-slate-400/25 ...">
  <!-- ... -->
</div>
```

You can use any value defined in the opacity scale, or use arbitrary values if you need to deviate from your design tokens.

```html
<div class="divide-y-4 divide-slate-400/[.24] ...">
  <!-- ... -->
</div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:divide-pink-400` to only apply the `divide-pink-400` utility on hover.

```html
<div class="divide-y divide-teal-400 hover:divide-pink-400">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:divide-pink-400` to apply the `divide-pink-400` utility at only medium screen sizes and above.

```html
<div class="divide-y divide-teal-400 md:divide-pink-400">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off `divide-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However we recommend only using our semantic color tokens.

```html
<div class="divide-[--w-s-color-border]">
  <!-- ... -->
</div>
```
