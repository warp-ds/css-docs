> Backgrounds

# Background Image

Utilities for controlling an element's background image.

## Quick reference

<qr-table />

!TODO: Add support for bg-none + gg-image through arbitrary values

## Basic usage

### Arbitrary values
If you need to use a one-off `background-image` value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="bg-[url('...')]">
  <!-- ... -->
</div>
```

