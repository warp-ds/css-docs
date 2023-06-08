> Effects

# Box Shadow
Utilities for controlling the box shadow of an element.

## Quick reference

<qr-table />

## Basic usage
### Adding an outer shadow
Use the `shadow-small`, `shadow-medium`, `shadow-large`, `shadow-xlarge` utilities to apply different sized outer box shadows to an element.

```html
<div class="shadow-small ..."></div>
<div class="shadow-medium ..."></div>
<div class="shadow-large ..."></div>
<div class="shadow-xlarge ..."></div>
```
<container>
  <div class="flex flex-wrap items-start justify-center text-white text-sm font-bold xleading-6 -mx-5">
    <div class="p-16 bg-white shadow-small">1</div>
    <div class="p-16 shadow-medium">2</div>
    <div class="p-16 shadow-large">3</div>
    <div class="p-16 shadow-xlarge">4</div>
  </div>
</container>

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:break-after-column` to apply the `break-after-column` utility at only medium screen sizes and above.

```html
<div class="md:break-after-column">
  <!-- ... -->
</div>
```

