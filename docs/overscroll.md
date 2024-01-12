> Layout

# Overscroll Behavior

Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.

## Quick reference

<qr-table />

## Basic usage

### Preventing parent overscrolling
Use `overscroll-contain` to prevent scrolling in the target area from triggering scrolling in the parent element, but preserve “bounce” effects when scrolling past the end of the container in operating systems that support it.

<container>
  <div class="overflow-y-auto overscroll-contain mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400" style="max-height:240px;max-width:480px">
    <p>Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
    <p>Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.</p>
    <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?</p>
  </div>
</container>

```html
<div class="overscroll-contain ...">Well, let me tell you something, ...</div>
```

### Preventing overscroll bouncing
Use `overscroll-none` to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent “bounce” effects when scrolling past the end of the container.

<container>
  <div class="overflow-y-auto overscroll-none mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400" style="max-height:240px;max-width:480px">
    <p>Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
    <p>Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.</p>
    <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?</p>
  </div>
</container>

```html
<div class="overscroll-none ...">Well, let me tell you something, ...</div>
```

### Using the default overscroll behavior
Use `overscroll-auto` to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area.

<container>
  <div class="overflow-y-auto overscroll-auto mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400" style="max-height:240px;max-width:480px">
    <p>Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
    <p>Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.</p>
    <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?</p>
  </div>
</container>

```html
<div class="overscroll-none ...">Well, let me tell you something, ...</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:overscroll-contain` to apply the `overscroll-contain` utility at only medium screen sizes and above.

```html
<div class="overscroll-auto md:overscroll-contain">
  <!-- ... -->
</div>
```
