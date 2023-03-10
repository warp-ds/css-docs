> Backgrounds

# Background Attachment
Utilities for controlling how a background image behaves when scrolling.

## Quick reference

<qr-table />

## Basic usage
### Fixed
Use `bg-fixed` to fix the background image relative to the viewport.

<container>
  <div class="-my-32 mx-32 overflow-hidden">
    <div class="h-[320] bg-mixed shadow-lg overflow-y-scroll overscroll-contain" style="background-image:url('/50s-scientists.jpg'); background-position: center -280px;">
      <div class="bg-white/90 p-16 sm:p-24 mt-144">
        <div class="text-black font-bold">The science</div>
        <div class="mt-1 text-sm text-slate-500">March 9th, 2023 · 14 min read</div>
        <p class="mt-16 text-slate-500">General Relativity states that space and time are fused and that nothing can travel faster than the speed of light. General relativity also describes how mass and energy warp spacetime – hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many spacefaring heroes worry about “getting stuck in” or “falling into” a gravity well.</p>
        <p class="mt-16 text-slate-500">In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electro-magnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.</p>
      </div>
    </div>
  </div>
</container>

```html
<div class="bg-fixed ...">
  <!-- -->
</div>
```

### Local
Use `bg-local` to scroll the background image with the container and the viewport.

<container>
  <div class="-my-32 mx-32 overflow-hidden">
    <div class="h-[320] bg-local shadow-lg overflow-y-scroll overscroll-contain" style="background-image:url('/50s-scientists.jpg'); background-position: center 0px;">
      <div class="px-40 py-16" style="margin-bottom:240px;">
        <div class=" bg-slate-800/50 p-16 rounded-8 text-center">
          <p class="mt-16 text-white text-xl font-bold">"Hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many spacefaring heroes worry about getting stuck in or falling into a gravity well!"</p>
          <p class="text-center">- Justina Matter</p>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="bg-local ...">
  <!-- -->
</div>
```

### Scroll
Use `bg-scroll` to scroll the background image with the viewport, but not with the container.

<container>
  <div class="-my-32 mx-32 overflow-hidden">
    <div class="h-[320] bg-scroll shadow-lg overflow-y-scroll overscroll-contain" style="background-image:url('/50s-scientists.jpg'); background-position: center -200px;">
      <div class="px-40 py-16" style="margin-bottom:240px;">
        <div class=" bg-slate-800/50 p-16 rounded-8 text-center">
          <p class="mt-16 text-white text-xl font-bold">"Hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many spacefaring heroes worry about getting stuck in or falling into a gravity well!"</p>
          <p class="text-center">- Justina Matter</p>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="bg-scroll ...">
  <!-- -->
</div>
```
