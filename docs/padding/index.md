Spacing

# Padding
Utilities for controlling an element's padding.
## Quick reference


## Basic usage
### Add padding to a single side
Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.

For example,`pt-16` would add `1.6rem`which should be equivalent of 16px of padding to the top of an element, `pr-8` would add `0.8rem` (8px) of padding to the right of an element, `pb-32` would add `3.2rem` (32px) of padding to the bottom of an element, and `pl-64` would add `6.4rem` (64px) of padding to the left of an element.

<container>
  <div class="flex flex-wrap items-start justify-center text-white text-sm font-bold leading-6 -mx-5">
    <div class="flex items-start">
      <div class="flex-none px-5">
        <div class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <box striped class="h-16 rounded-t-lg" fg-color="var(--tw-white-fg)"></box>
          <div class="p-16">pt-16</div>
        </div>
      </div>
      <div class="flex-none px-5 pt-6">
        <div class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <div class="flex-none p-16">pr-24</div>
          <box striped class="flex-none w-24" fg-color="var(--tw-white-fg)" ></box>
        </div>
      </div>
    </div>
    <div class="flex items-start">
      <div class="flex-none px-5 pt-6">
        <div class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <div class="p-16">pb-8</div>
          <box striped class="h-8" fg-color="var(--tw-white-fg)"></box>
        </div>
      </div>
      <div class="flex-none flex px-5 pt-6">
        <div class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <box striped class="flex-none w-2" fg-color="var(--tw-white-fg)"></box>
          <div class="flex-none p-16">pl-2</div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="pt-16 ...">pt-16</div>
<div class="pr-24 ...">pr-24</div>
<div class="pb-8 ...">pb-8</div>
<div class="pl-32 ...">pl-32</div>
```

### Horizontal Padding
Control the horizontal padding of an element using the `px-{size}` utilities.
<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <div class="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex">
        <box striped class="w-16" fg-color="var(--tw-white-fg)"></box>
        <div class="p-16">px-16</div>
        <box striped class="w-16" fg-color="var(--tw-white-fg)"></box>
      </div>
    </div>
  </div>
</container>

```html
<div class="px-8 ...">px-8</div>
```  

### Vertical padding
Control the vertical padding of an element using the `py-{size}` utilities.
<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <div class="bg-pink-500 rounded-lg shadow-lg overflow-hidden">
        <box striped class="h-16" fg-color="var(--tw-white-fg)"></box>
        <div class="p-16">py-16</div>
        <box striped class="h-16" fg-color="var(--tw-white-fg)"></box>
      </div>
    </div>
  </div>
</container>

```html
<div class="px-16 ...">px-16</div>
```

### Padding to all sides
Control the padding on all sides of an element using the `p-{size}` utilities.
<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <div class="bg-violet-500 rounded-lg shadow-lg ">
        <box striped class="p-16" fg-color="var(--tw-white-fg)">
          <div class="bg-violet-500 p-16">p-16</div>
        </box>
      </div>
    </div>
  </div>
</container>

```html
<div class="p-168 ...">p-16</div>
```