> Backgrounds

# Background Size

Utilities for controlling the background size of an element's background image.

## Quick reference

<qr-table />

## Basic usage

### Auto

Use `bg-auto` to display the background image at its default size.

<container>
  <box striped class="rounded-8 dark:border dark:border-slate-200/20 overflow-hidden">
    <div class="h-144 bg-auto bg-center bg-no-repeat" style="background-image:url(/20s-scientists.jpg);">
    </div>
  </box>
</container>

```html
<div
  class="bg-auto bg-no-repeat bg-center ..."
  style="background-image: url(...)"
/>
```

### Cover
Use `bg-cover` to scale the background image until it fills the background layer.

<container>
  <box
    striped
    class="rounded-8 dark:border dark:border-slate-200/20 overflow-hidden"
  >
    <div
      class="h-144 bg-cover bg-center bg-no-repeat"
      style="background-image:url(/20s-scientists.jpg);"
    ></div>
  </box>
</container>

```html
<div
  class="bg-cover bg-center ..."
  style="background-image: url(...)"
>
```

### Contain
Use `bg-contain` to scale the background image to the outer edges without cropping or stretching.

<container>
  <box
    striped
    class="rounded-8 dark:border dark:border-slate-200/20 overflow-hidden"
  >
    <div
      class="h-144 bg-contain bg-center bg-no-repeat"
      style="background-image:url(/20s-scientists.jpg);"
    ></div>
  </box>
</container>

```html
<div
  class="bg-contain bg-center ..."
  style="background-image: url(...)"
></div>
```
