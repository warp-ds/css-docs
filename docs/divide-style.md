> Borders

# Divide Style

Utilities for controlling the border style between elements.

::: warning Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#nmp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Quick reference

| Class                       | Description           |
|-----------------------------|-----------------------|
| ~~`divide-solid`~~ > * + *  | border-style: solid;  |
| ~~`divide-dashed`~~ > * + * | border-style: dashed; |
| ~~`divide-dotted`~~ > * + * | border-style: dotted; |
| ~~`divide-none`~~ > * + *   | border-style: none;   |

## Basic usage

### Set the divide style
Control the border style between elements using the `divide-{style}` utilities.

<!--container>
  <div class="grid gap-16 justify-items-center">
    <div class="pd-bg-pink-500 rounded-8 divide-y divide-dashed w-full max-w-[300]">
      <div class="p-24 text-center">1</div>
      <div class="p-24 text-center">2</div>
      <div class="p-24 text-center">3</div>
    </div>
  </div>
</container-->

```html
<div class="divide-y divide-dashed ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

<!--
### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:divide-solid` to only apply the `divide-solid` utility on hover.

```html
<div class="divide-y divide-dashed hover:divide-solid">
  ...
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:divide-solid` to apply the `divide-solid` utility at only medium screen sizes and above.

```html
<div class="divide-y divide-dashed md:divide-solid">
  ...
</div>
```
-->
