> Layout

# Isolate
Utilities for controlling whether an element should explicitly create a new stacking context.

## Quick reference

<qr-table />

## Basic usage
### Setting the stacking context
Use the `isolate` and `isolation-auto` utilities to control whether an element should explicitly create a new stacking context.

```html
<div class="isolate ...">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:isolation-auto` to apply the `isolation-auto` utility at only medium screen sizes and above.

```html
<div class="isolate md:isolation-auto">
  <!-- ... -->
</div>
```
