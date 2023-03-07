> Typography

# Text Decoration
Utilities for controlling the decoration of text.

## Quick reference

| Class          | Description                         |
| -------------- | ----------------------------------- |
| `underline`    | text-decoration-line: underline;    |
| `line-through` | text-decoration-line: line-through; |
| `no-underline` | text-decoration-line: none;         |


## Basic usage
### Setting the text decoration
Control how text is decorated with the `underline`, `no-underline`, and `line-through` utilities.

<container>
  <div class="mx-24">
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">underline</span>
    <p class="text-t1 mt-0! underline">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">line-through</span>
    <p class="text-t3 mt-0! line-through">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">no-underline</span>
    <p class="text-t4 mt-0! no-underline">The quick smart warp scientist</p>
  </div>
</container>

```html
<p class="underline...">The quick smart warp scientist ...</p>
<p class="line-through ...">The quick smart warp scientist ...</p>
<p class="no-underline ...">The quick smart warp scientist ...</p>
```

