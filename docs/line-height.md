> Typography

# Font Size
Utilities for controlling the font size of an element.

## Quick reference

| Class            | Description                            |
| ---------------- | -------------------------------------- |
| `leading-1`      | !TODO: These will have different names |
| `leading-2`      |                                        |
| `leading-3`      |                                        |
| `leading-4`      |                                        |
| `leading-5`      |                                        |
| `leading-6`      | These will have different names        |

## Basic usage
### Setting the font size
Control the Line-height of an element using the `leading-{size}` utilities.

<container>
  <div class="mx-24">
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-body leading-6</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="text-body mt-0!" style="line-height:1.6rem">The quick smart warp scientist</p>
    </box>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-body leading-5</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="text-body mt-0!" style="line-height:1.8rem">The quick smart warp scientist</p>
    </box>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-body leading-4</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="text-body mt-0!" style="line-height:2.2rem">The quick smart warp scientist</p>
    </box>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-body leading-3</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="text-body mt-0!" style="line-height:2.8rem">The quick smart warp scientist</p>
    </box>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-body leading-2</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="text-body mt-0!" style="line-height:3.4rem">The quick smart warp scientist</p>
    </box>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">text-body leading-1</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="text-body mt-0!" style="line-height:4.1rem">The quick smart warp scientist</p>
    </box>
  </div>
</container>

```html
<p class="text-body leading-6 ...">The quick smart warp scientist ...</p>
<p class="text-body leading-5 ...">The quick smart warp scientist ...</p>
<p class="text-body leading-4 ...">The quick smart warp scientist ...</p>
<p class="text-body leading-3 ...">The quick smart warp scientist ...</p>
<p class="text-body leading-2 ...">The quick smart warp scientist ...</p>
<p class="text-body leading-1 ...">The quick smart warp scientist ...</p>
```

### Arbitrary values
If you need to use a one-off `line-height` value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<p class="leading-[30]">
  <!-- ... -->
</p>
```


