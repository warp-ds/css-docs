> Backgrounds

# Background Image

Utilities for controlling an element's background image.

## Quick reference

<qr-table />

> `{url}`: _Any valid image url_

## Basic usage

### Arbitrary values
If you need to use a one-off `background-image` value, use square brackets to generate a property on the fly using any url.

<container class="h-144 bg-cover bg-center bg-no-repeat bg-[url(/20s-scientists.jpg)]">
</container>

```html
<div class="bg-[url(...)] ..."></div>
```

