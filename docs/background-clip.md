> Backgrounds

# Background Clip
Utilities for controlling the bounding box of an element's background.

## Quick reference

<qr-table />

## Basic usage
### Setting the background clip
Use the `bg-clip-{keyword}` utilities to control the bounding box of an element’s background.

<container>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-32">
  <div class="flex flex-col items-center shrink-0">
  <p class="text-slate-500 font-mono text-center mb-16 dark:text-slate-400">bg-clip-border</p>
    <div class="w-80 h-80 bg-clip-border p-16 rounded-8 shadow-lg bg-indigo-500 border-4 border-white/50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>
  </div>
  <div class="flex flex-col items-center shrink-0">
  <p class="text-slate-500 font-mono text-center mb-16 dark:text-slate-400">bg-clip-padding</p>
    <div class="w-80 h-80 bg-clip-padding p-16 rounded-8 shadow-lg bg-indigo-500 border-4 border-indigo-500/50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>
    </div>
    <div class="flex flex-col items-center shrink-0">
  <p class="text-slate-500 font-mono text-center mb-16 dark:text-slate-400">bg-clip-content</p>
    <div class="w-80 h-80 bg-clip-content p-16 rounded-8 bg-indigo-500 border-4 border-indigo-500/50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>
  </div>
  </div>
</container>

```html
<div class="bg-clip-border ... "></div>
<div class="bg-clip-padding ... "></div>
<div class="bg-clip-content ... "></div>
```

### Cropping to text
Use `bg-clip-text` to crop an element’s background to match the shape of the text. Useful for effects where you want a background image to be visible through the text.

<container>
  <div class="text-5xl font-extrabold text-center">
    <span class="bg-clip-text bg-cover text-transparent" style="background-image:url(/office-warping.png); background-position: center -280px; ">
      WarpspeeD
    </span>
  </div>
</container>

```html
<span class="bg-clip-text bg-cover text-transparent" style="background-image:url(...);">
```


