> Backgrounds

# Background Origin

Utilities for controlling how an element's background is positioned relative to borders, padding, and content.

## Quick reference

<qr-table />

## Basic usage

### Setting the background origin
Use `bg-origin-border`, `bg-origin-padding`, and `bg-origin-content` to control where an element’s background is rendered.

<container>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-32">
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-text-slate-500 pd-font-mono text-center mb-16 dark:pd-text-slate-400">bg-origin-border</p>
      <div class="w-80 h-80 bg-cover bg-clip-border p-16 rounded-8 pd-shadow-lg pd-bg-indigo-500 border-4 pd-border-white/50 border-dashed pd-font-mono pd-font-extrabold pd-text-sm pd-text-white flex justify-center items-center bg-[url(office-warping.png)] bg-[center_-280px]"></div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-text-slate-500 pd-font-mono text-center mb-16 dark:pd-text-slate-400">bg-origin-padding</p>
      <div class="w-80 h-80 bg-cover bg-clip-padding p-16 rounded-8 pd-shadow-lg pd-bg-indigo-500 border-4 pd-border-indigo-500/50 border-dashed pd-font-mono pd-font-extrabold pd-text-sm pd-text-white flex justify-center items-center bg-[url(office-warping.png)] bg-[center_-280px]"></div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-text-slate-500 pd-font-mono text-center mb-16 dark:pd-text-slate-400">bg-origin-content</p>
      <div class="w-80 h-80 bg-cover bg-clip-content p-16 rounded-8 pd-bg-indigo-500 border-4 pd-border-indigo-500/50 border-dashed pd-font-mono pd-font-extrabold pd-text-sm pd-text-white flex justify-center items-center bg-[url(office-warping.png)] bg-[center_-280px]"></div>
    </div>
  </div>
</container>

```html
<div class="bg-origin-border ... "></div>
<div class="bg-origin-padding ... "></div>
<div class="bg-origin-content ... "></div>
```

