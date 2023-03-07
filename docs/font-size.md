> Typography

# Font Size
Utilities for controlling the font size of an element.

## Quick reference

| Class          | Description                     |
| -------------- | ------------------------------- |
| `text-detail`  | These will have different names |
| `text-body`    |                                 |
| `text-caption` |                                 |
| `text-large`   |                                 |
| `text-display` |                                 |
| `text-t1`      | These will have different names |
| `text-t2`      |                                 |
| `text-t3`      |                                 |
| `text-t4`      |                                 |
| `text-t5`      |                                 |
| `text-t6`      |                                 |

## Basic usage
### Setting the font size
Control the font size of an element using the `text-{size}` utilities.

<container>
  <div class="mx-24">
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-t1</span>
    <p class="text-t1 mt-0!">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-t2</span>
    <p class="text-t2 mt-0!">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-t3</span>
    <p class="text-t3 mt-0!">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-t4</span>
    <p class="text-t4 mt-0!">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-t5</span>
    <p class="text-t5 mt-0!">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-t6</span>
    <p class="text-t6 mt-0!">The quick smart warp scientist</p>
  </div>
</container>

```html
<p class="text-t1 ...">The quick smart warp scientist ...</p>
<p class="text-t2 ...">The quick smart warp scientist ...</p>
<p class="text-t3 ...">The quick smart warp scientist ...</p>
<p class="text-t4 ...">The quick smart warp scientist ...</p>
<p class="text-t5 ...">The quick smart warp scientist ...</p>
<p class="text-t6 ...">The quick smart warp scientist ...</p>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:text-detail` to apply the `text-detail` utility at only medium screen sizes and above.

```html
<p class="text-body md:text-detail">
  <!-- ... -->
</p>
```
