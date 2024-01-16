> Borders

# Outline Offset

Utilities for controlling the offset of an outline of an element.

| Class                   | Description             |
|-------------------------|-------------------------|
| `outline-offset-{size}` | outline-offset: {size}; |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `8` <br />

## Basic usage

### Setting the outline width
Use the `outline-offset-{size}` utilities to set the outline offset for an element.

<container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div>outline-offset-1</div>
    <div>outline-offset-2</div>
    <div>outline-offset-4</div>
    <div>outline-offset-8</div>
    <div class="pd-bg-violet-400 h-80 w-80 rounded-4 outline outline-offset-1 outline-4"></div>
    <div class="pd-bg-violet-400 h-80 w-80 rounded-4 outline outline-offset-2 outline-4"></div>
    <div class="pd-bg-violet-400 h-80 w-80 rounded-4 outline outline-offset-4 outline-4"></div>
    <div class="pd-bg-violet-400 h-80 w-80 rounded-4 outline outline-offset-8 outline-4"></div>
  </div>
</container>

```html
<div class="outline outline-offset-1 outline-4 ..."></div>
<div class="outline outline-offset-2 outline-4 ..."></div>
<div class="outline outline-offset-4 outline-4 ..."></div>
<div class="outline outline-offset-8 outline-4 ..."></div>
```

### Removing outlines
Use `outline-none` to hide the default browser outline on focused elements.

It is highly recommended to apply Warp:s focus styling for accessibility when using this utility.

<container>
<div class="flex flex-col sm:flex-row items-center justify-center gap-x-16 gap-y-8 px-0 sm:px-10 font-mono font-bold">
<input type="text"
  placeholder="Default focus style"
  class="font-sans block pd-text-sm py-4 px-6 border-2 border-solid pd-border-slate-900/10 pd-text-slate-500 rounded-8 shadow-sm dark:pd-bg-slate-800 outline-inherit dark:pd-highlight-white/5 dark:pd-text-slate-400"
  style="outline: revert !important"
  />

<input type="text"
  placeholder="No focus with outline-none"
  class="outline-none rounded-8 font-sans block border-2 border-solid pd-border-slate-900/10 pd-text-sm w-full py-4 px-6 text-slate-500 rounded-lg shadow-sm" />

<input type="text"
  placeholder="Warp:s focus style"
  class="focusable focus:[--w-outline-offset:-2px] rounded-8 font-sans block border-2 border-solid pd-border-slate-900/10 pd-text-sm w-full py-4 px-6 text-slate-500 rounded-lg shadow-sm" />
  </div>
</container>

```html
<input type="text"
  placeholder="Default focus style"
  class="..." />

<input type="text"
  placeholder="No focus style with outline-none"
  class="outline-none ..." />

<input type="text"
  placeholder="Custom focus style"
  class="focusable focus:[--w-outline-offset:-2px] ..." />
```

The outline-none utility is implemented using a transparent outline under the hood to ensure elements are still visibly focused to [Windows high contrast mode](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/) users.


### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:outline-offset-4` to only apply the `outline-offset-4` utility on hover.

```html
<div class="outline-offset-2 hover:outline-offset-4">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:outline-offset-4` to apply the `outline-offset-4` utility at only medium screen sizes and above.

```html
<div class="outline-offset-2 md:outline-offset-4">
  <!-- ... -->
</div>
```
