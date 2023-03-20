> Core Concepts

# States
Using utilities to style elements on hover, focus, and more.

Every utility class in Warp can be applied conditionally by adding a modifier to the beginning of the class name that describes the condition you want to target.

For example, to apply the `bg-primary-hover` class on hover, use the `hover:bg-primary-hover` class.

<container>
  <div class="grid place-items-center">
    <div class="ex-box border bg-indigo-800 p-[7] hover:bg-indigo-900">Hover me</div>
  </div>
</container>

```html
<div class="bg-indigo-800 hover:bg-indigo-900">Hover me</div>
```

Warp includes modifiers for just about everything you’ll ever need, including:

- Pseudo-classes, like `:hover`, `:focus`, `:first-child`, and `:required`
- Pseudo-elements, like `::before`, `::after`, `::placeholder`, and `::selection`
- Media and feature queries, like responsive breakpoints, dark mode, and prefers-reduced-motion
- Attribute selectors, like `[dir="rtl"]` and `[open]`

These modifiers can even be stacked to target more specific situations, for example changing the background color in dark mode, at the medium breakpoint, on hover:

<container>
  <div open class="grid place-items-center open:bg-pink-500">
   ...
  </div>
</container>