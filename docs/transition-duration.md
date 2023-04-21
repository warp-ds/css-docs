> Transitions & Animation

# Transition Duration
Utilities for controlling the duration of CSS transitions.

## Quick reference

| Class                   | Description                   |
| ----------------------- | ----------------------------- |
| `duration-{amount(ms)}` | transition-duration: {amount} |
|                         |                               |

> Available values <br />
> `{amount}`: Accepts any value in ms (1000 = 1 s)<br />

## Basic usage
### Changing transition duration
Use the `duration-{amount}` utilities to control an element’s transition-duration.

<container>
 <div class="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around text-white text-sm font-bold leading-6">
  <div class="flex flex-col items-center shrink-0">
    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-16 dark:text-slate-400">duration-150</p>
    <div class="ex-box bg-indigo-500 text-white hover:scale-125 ease-in-out duration-150">Hover me</div>
  </div>
  <div class="flex flex-col items-center shrink-0">
    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-16 dark:text-slate-400">duration-300</p>
    <div class="ex-box bg-blue-500 text-white hover:scale-125 ease-in-out duration-300">Hover me</div>
  </div>
  <div class="flex flex-col items-center shrink-0">
    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-16 dark:text-slate-400">duration-700</p>
    <div class="ex-box bg-cyan-500 text-white hover:scale-125 ease-in-out duration-700">Hover me</div>
  </div>
 </div>
</container>

```html
<div class="transition duration-150 ease-in-out ...">Hover me</div>
<div class="transition duration-300 ease-in-out ...">Hover me</div>
<div class="transition duration-700 ease-in-out ...">Hover me</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:duration-150` to apply the `duration-150` utility at only medium screen sizes and above.

```html
<div class="transition duration-0 md:duration-150">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off `transition-duration` value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="duration-[2000ms]">
  <!-- ... -->
</div>
```