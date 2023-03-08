> Layout

# Aspect Ratio

Utilities for controlling the aspect ratio of an element.

## Quick reference

| Class           | Description                   |
| --------------- | ----------------------------- |
| `aspect-ratio`  | aspect-ratio: auto;           |
| `aspect-square` | aspect-ratio: 1/1;            |
| `aspect-video`  | aspect-ratio: 16/9;           |
| `aspect-1/1`    | Sets the aspect ratio to 1:1  |
| `aspect-4/3`    | Sets the aspect ratio to 4:3  |
| `aspect-16/9`   | Sets the aspect ratio to 16:9 |
| `aspect-2/1`    | Sets the aspect ratio to 2:1  |

::: tip Note
Aspect ratio support is currently provided via the ['padding-bottom'](https://css-tricks.com/aspect-ratio-boxes/) fallback method. The built-in `aspect-ratio` property is not yet well supported.
:::

## Basic usage

### Setting the aspect ratio

Use the aspect-{ratio} utilities to set the desired aspect ratio of an element.

<width-controller>
  <container>
    <div class="flex justify-center">
      <img src="/50s-scientists.jpg" class="aspect-2/1 object-cover rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
    </div>
  </container>
</width-controller>

```html
<img class="aspect-2/1 object-cover" src="..." alt="..." />
```

<width-controller>
  <container>
    <div class="flex justify-center">
      <img src="/50s-scientists.jpg" class="aspect-1/1 object-cover rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
    </div>
  </container>
</width-controller>

```html
<img class="aspect-1/1 object-cover" src="..." alt="..." />
```

### Breakpoints and media queries

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:aspect-1/1` to apply the `aspect-16/9` utility at only medium screen sizes and above.

```html
<iframe class="w-full aspect-16/9 md:aspect-1/1" src="..."></iframe>
```

### Arbitrary values

If you need to use a one-off aspect-ratio value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<iframe class="w-full aspect-[4/3]" src="..."></iframe>
```
