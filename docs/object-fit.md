> Layout

# Object Fit
Utilities for controlling how a replaced element's content should be resized.

## Quick reference

| Class                 | Description               |
| ----------------------| ------------------------- |
| `object-contain`      | object-fit: contain;      |
| `object-cover`        | object-fit: cover;        |
| `object-fill`         | object-fit: fill;         |
| `object-none`         | object-fit: none;         |
| `object-scale-down`   | object-fit: scale.down;   |

## Basic usage
### Resizing to cover a container
Resize an element’s content to cover its container using `.object-cover`.

<container>
  <div class="flex justify-center">
    <box class="rounded" style="height:200px;width:400px;" striped fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <img src="/50s-scientists.jpg" class="object-cover aspect-2/1 rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />    
    </box>
  </div>
</container>

```html
<div class="bg-indigo-300">
  <img class="object-cover aspect-2/1" src="..." alt="..." />
</div>
```
### Containing an element
Resize an element’s content to stay contained within its container using `.object-contain`.

<container>
  <div class="flex justify-center">
    <box class="rounded" style="height:200px;width:400px;" striped fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <img src="/50s-scientists.jpg" class="object-contain aspect-2/1 rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />    
    </box>
  </div>
</container>

```html
<div class="bg-indigo-300">
  <img class="object-contain aspect-2/1" src="..." alt="..." />
</div>
```

### Stretching to fit a container
Stretch an element’s content to fit its container using `.object-fill`.
<container>
  <div class="flex justify-center">
    <box class="rounded" style="height:200px;width:400px;" striped fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <img src="/50s-scientists.jpg" class="object-stretch aspect-2/1 rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />    
    </box>
  </div>
</container>

```html
<div class="bg-indigo-300">
  <img class="object-stretch aspect-2/1" src="..." alt="..." />
</div>
```

### Scaling down if too large
Display an element’s content at its original size but scale it down to fit its container if necessary using `.object-scale-down`.

<container>
  <div class="flex justify-center">
    <box class="rounded" style="height:200px;width:400px;" striped fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <img src="/50s-scientists.jpg" class="object-scale-down aspect-2/1 rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />    
    </box>
  </div>
</container>

```html
<div class="bg-indigo-300">
  <img class="object-scale-down aspect-2/1" src="..." alt="..." />
</div>
```

### Using an element's original size

Display an element’s content at its original size ignoring the container size using `.object-none`.
<container>
  <div class="flex justify-center">
    <box class="rounded" style="height:200px;width:400px;" striped fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <img src="/50s-scientists.jpg" class="object-none aspect-2/1 rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />    
    </box>
  </div>
</container>

```html
<div class="bg-indigo-300">
  <img class="object-none aspect-2/1" src="..." alt="..." />
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:object-scale-down` to apply the `object-scale-down` utility at only medium screen sizes and above.

```html
<img class="object-contain md:object-scale-down">
```