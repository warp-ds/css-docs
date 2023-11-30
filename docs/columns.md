> Layout

# Columns
Utilities for controlling the number of columns within an element.

::: warning Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#nmp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Quick reference

| Class           | Description     |
| --------------- | --------------- |
| `columns-{n}`   | `columns: {n}`  |
| `columns-auto`  | `columns: auto` |

> Available values <br />
> `{n}`: `1` through `12` <br />



## Basic usage
### Adding based on column count
Use the `columns-{count}` utilities to set the number of columns that should be created for the content within an element. The column width will be automatically adjusted to accommodate that number.

<container>
  <div class="columns-1 md:columns-3 gap-x-24" style="columns:3">
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="relative">
        <img class="w-full mb-24" src="/la09.jpg" alt="Ai generated line drawing of warp scientists" />
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">1</div>
      </div>
      <div class="relative">
        <div class="aspect-1/1 block mb-24">
          <img class="w-full object-cover" src="/la01.jpg" alt="Ai generated line drawing of warp related scene">
        </div>
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">2</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/la02.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">3</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/la06.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">4</div>
      </div>
      <div class="relative">
        <div class="aspect-1/1 block mb-24">
          <img class="w-full object-cover" src="/la03.jpg" alt="Ai generated line drawing of warp related scene">
        </div>
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">5</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/la04.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">6</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/la11.jpg" alt="Ai generated line drawing of warp scientists">
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">7</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/la05.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">8</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/la07.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">9</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/la10.jpg" alt="Ai generated line drawing of warp scientists">
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">10</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/la08.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">11</div>
      </div>
      <div class="relative">
        <div class="aspect-1/1 block mb-24">
          <img class="w-full" src="/la12.jpg" alt="Ai generated line drawing of warp scientists">
        </div>
        <div class="absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800" style="line-height:32px">12</div>
      </div>
    </box>
  </div>
</container>

```html{2,4}
<div class="columns-3 ...">
  <img class="w-full ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  <!-- ... -->
</div>
```

### Setting the column gap
To specify the width between columns, you can use the `gap-x` utilities.

<container>
  <div class="grid grid-cols-[1fr_2.4rem_1fr_2.4rem_1fr]" style="">
    <div class="flex flex-col w-full">
      <img class="w-full mb-24" src="/la09.jpg" alt="Ai generated line drawing of warp scientists">
      <img class="w-full aspect-square object-cover mb-24" src="/la01.jpg" alt="Ai generated line drawing of warp related scene">
      <img class="w-full mb-24" src="/la02.jpg" alt="Ai generated line drawing of warp related scene">
      <img class="w-full mb-24" src="/la06.jpg" alt="Ai generated line drawing of warp related scene">
    </div>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)"></box>
    <div>
      <img class="w-full aspect-square object-cover mb-24" src="/la03.jpg" alt="Ai generated line drawing of warp related scene">
      <img class="w-full mb-24" src="/la04.jpg" alt="Ai generated line drawing of warp related scene">
      <img class="w-full mb-24" src="/la11.jpg" alt="Ai generated line drawing of warp scientists">
      <img class="w-full mb-24" src="/la05.jpg" alt="Ai generated line drawing of warp related scene">
    </div>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)"></box>
    <div>
      <img class="w-full mb-24" src="/la07.jpg" alt="Ai generated line drawing of warp related scene">
      <img class="w-full mb-24" src="/la10.jpg" alt="Ai generated line drawing of warp scientists">
      <img class="w-full aspect-square object-cover mb-24" src="/la08.jpg" alt="Ai generated line drawing of warp related scene">
      <img class="w-full mb-24" src="/la12.jpg" alt="Ai generated line drawing of warp scientists">
    </div>
  </div>
</container>

```html{1}
<div class="gap-x-24 columns-3 ...">
  <img class="w-full ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:columns-3` to apply the `columns-3` utility at only medium screen sizes and above.

```html
<div class="columns-2 md:columns-3">
  <!-- ... -->
</div>
```
​
### Arbitrary values
If you need to use a one-off columns value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="columns-[13]">
  <!-- ... -->
</div>
```
::: warning Unsupported
Arbitrary values for this is not yet supported! If you need this, reach out to us on [#nmp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::
