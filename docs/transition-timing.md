> Transitions & Animation

# Transition Timing

Utilities for controlling the easing of CSS transitions.

## Quick reference

<qr-table />

## Basic usage

### Controlling the easing curve
Use the `ease-{timing}` utilities to control an element’s easing curve.

<container>
<box striped class="relative group max-w-[344] mx-a mb-24" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)" >
  <div class="ex-box pd-bg-indigo-500 pd-text-white group-hover:translate-x-144 ease-linear duration-300 w-[200] transform-gpu">Ease-linear</div>
</box>
<box striped class="relative group max-w-[344] mx-a mb-24" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)" >
  <div class="ex-box pd-bg-indigo-500 pd-text-white group-hover:translate-x-144 ease-in duration-300 w-[200] transform-gpu">Ease-in</div>
</box>
<box striped class="relative group max-w-[344] mx-a mb-24" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)" >
  <div class="ex-box pd-bg-indigo-500 pd-text-white group-hover:translate-x-144 ease-out duration-300 w-[200] transform-gpu">Ease-out</div>
</box>
<box striped class="relative group max-w-[344] mx-a" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)" >
  <div class="ex-box pd-bg-indigo-500 pd-text-white group-hover:translate-x-144 ease-in-out duration-300 w-[200] transform-gpu">Ease-in-out</div>
</box>
</container>

```html
  <div class="ease-linear duration-300 ...">Ease-inlinear</div>
  <div class="ease-in duration-300 ...">Ease-in</div>
  <div class="ease-out duration-300 ...">Ease-out</div>
  <div class="ease-in-out duration-300 ...">Ease-in-out</div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:ease-in` to only apply the `ease-in` utility on hover.

```html
<div class="transition duration-150 ease-out hover:ease-in">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:ease-in` to apply the `ease-in` utility at only medium screen sizes and above.

```html
<div class="transition duration-150 ease-out md:ease-in">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off `transition-timing-function` value, you can use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="ease-[cubic-bezier(0.95,0.05,0.795,0.035)]">
  <!-- ... -->
</div>
```
