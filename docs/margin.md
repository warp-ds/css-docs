> Spacing

# Margin
Utilities for controlling an element's margin.
## Quick reference


## Basic usage
### Add margin to a single side
Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.

For example,`mt-16` would add `1.6rem`which should be equivalent of 16px of margin to the top of an element, `mr-8` would add `0.8rem` (8px) of margin to the right of an element, `pb-32` would add `3.2rem` (32px) of margin to the bottom of an element, and `pl-64` would add `6.4rem` (64px) of margin to the left of an element.

<container>
  <div class="relative -my-32 -mx-16 rounded-2 overflow-auto">
    <div class="relative ex-font leading-6 h-128">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -ml-16">
        <box striped class="flow-root rounded-b-2" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)" >
          <div class="bg-purple-500 rounded-2 shadow-2 p-16 mt-16">mt-16</div>
        </box>
      </div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2">
        <box striped class="flow-root rounded-l-lg" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)" >
          <div class="flex-none bg-purple-500 rounded-2 shadow-lg p-16 mr-24">mr-24</div>
        </box>
      </div>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 ml-64">
        <box striped class="flow-root rounded-t-lg" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)" >
          <div class="bg-purple-500 rounded-2 shadow-lg p-16 mb-32">mb-32</div>
        </box>
      </div>
      <div class="absolute left-0 top-1/2 -translate-y-1/2">
        <box striped class="flow-root rounded-r-lg" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)" >
          <div class="flex-none bg-purple-500 rounded-2 shadow-lg p-16 ml-16">ml-16</div>
        </box>
      </div>
    </div>
  </div>
</container>

```html
<div class="mt-16 ...">mt-16</div>
<div class="mr-24 ...">mr-24</div>
<div class="mb-32 ...">mb-32</div>
<div class="ml-16 ...">ml-16</div>
```

### Add horizontal margin
Control the horizontal margin of an element using the `mx-{size}` utilities.
<container>
  <div class="relative rounded-2 overflow-auto p-8">
    <div class="flex justify-center ex-font leading-6">
      <box striped class="rounded-2" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
        <div class="bg-indigo-500 rounded-2 shadow-lg p-16 mx-32">mx-32</div>
      </box>
    </div>
  </div>
</container>

```html
<div class="mx-32 ...">mx-32</div>
```

### Add vertical margin
Control the vertical margin of an element using the `my-{size}` utilities.
<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center ex-font leading-6">
      <box striped class="flow-root rounded-2" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
        <div class="bg-pink-500 rounded-2 shadow-lg p-16 my-24">my-24</div>
      </box>
    </div>
  </div>
</container>

```html
<div class="my-24 ...">my-24</div>
```

### Add margin to all sides
Control the margin on all sides of an element using the `m-{size}` utilities.
<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center ex-font leading-6">
      <box striped class="flow-root rounded-2" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
        <div class="bg-blue-500 rounded-2 shadow-2 p-16 m-32">m-32</div>
      </box>
    </div>
  </div>
</container>

```html
<div class="m-32 ...">m-32</div>
```

### Using negative values
To use a negative margin value, prefix the class name with a dash to convert it to a negative value.
<container>
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center ex-font leading-6">
      <div class="flex flex-col items-center">
        <div class="relative w-128 h-64 bg-sky-400/20 border border-sky-700/10 rounded-md overflow-hidden"></div>
        <div class="relative -mt-32 bg-sky-500 rounded-md flex items-center justify-center p-16 shadow-lg">-mt-32</div>
      </div>
    </div>
  </div>
</container>

```html
<div class="w-128 h-64 bg-sky-400 opacity-20 ..."></div>
<div class="-mt-32 bg-sky-300 ...">-mt-32</div>
```
