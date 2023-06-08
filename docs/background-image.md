> Backgrounds

# Background Image

Utilities for controlling an element's background image.

::: warning Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#nmp-team-warp-tech](https://sch-chat.slack.com/archives/C04LG5UTCTT) .
:::
## Quick reference

<qr-table />

! TODO: Add support for bg-none
## Basic usage

### Arbitrary values
If you need to use a one-off `background-image` value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="bg-[url('...')]">
  <!-- ... -->
</div>
```

