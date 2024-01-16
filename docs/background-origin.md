> Backgrounds

# Background Origin

Utilities for controlling how an element's background is positioned relative to borders, padding, and content.

## Quick reference

<qr-table />

## Basic usage

### Setting the background origin
Use `bg-origin-border`, `bg-origin-padding` and `bg-origin-content` to control where an element’s background is rendered.

<container>
  <div class="flex sm:grid sm:grid-cols-3 sm:gap-24 sm:justify-around">
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="mb-16 pd-font-mono">bg-origin-border</div>
      <div class="w-128 h-128 bg-cover bg-clip-border p-16 rounded-8 pd-shadow-lg pd-bg-indigo-500 border-8 pd-border-white/50 border-dashed pd-font-mono pd-font-extrabold pd-text-sm pd-text-white flex justify-center items-center bg-[url(office-warping.png)] bg-[center_-280px]"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="mb-16 pd-font-mono">bg-origin-padding</div>
      <div class="w-128 h-128 bg-cover bg-clip-padding p-16 rounded-8 pd-shadow-lg pd-bg-indigo-500 border-8 pd-border-indigo-500/50 border-dashed pd-font-mono pd-font-extrabold pd-text-sm pd-text-white flex justify-center items-center bg-[url(office-warping.png)] bg-[center_-280px]"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="mb-16 pd-font-mono">bg-origin-content</div>
      <div class="w-128 h-128 bg-cover bg-clip-content p-16 rounded-8 pd-bg-indigo-500 border-8 pd-border-indigo-500/50 border-dashed pd-font-mono pd-font-extrabold pd-text-sm pd-text-white flex justify-center items-center bg-[url(office-warping.png)] bg-[center_-280px]"></div>
    </div>
  </div>
</container>

```html
<div class="bg-origin-border ... "></div>
<div class="bg-origin-padding ... "></div>
<div class="bg-origin-content ... "></div>
```

