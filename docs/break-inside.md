> Layout

# Break Inside
Utilities for controlling how a column or page should break within an element.

::: danger Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#nmp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Quick reference

<qr-table />

## Basic usage
### Setting the break-inside behavior
Use the `break-inside-{value}` utilities to control how a column or page break should behave within an element. For example, use the `break-inside-avoid-column` utility to avoid a column break within an element.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```


### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:break-inside-avoid-column` to apply the `break-inside-avoid-column` utility at only medium screen sizes and above.

```html
<div class="md:break-inside-avoid-column">
  <!-- ... -->
</div>
```

