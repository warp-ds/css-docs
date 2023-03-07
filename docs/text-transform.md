> Typography

# Text Transform
Utilities for controlling the transformation of text.

## Quick reference

| Class         | Description                 |
| ------------- | --------------------------- |
| `uppercase`   | text-transform: uppercase;  |
| `lowercase`   | text-transform: lowercase;  |
| `capitalize`  | text-transform: capitalize; |
| `normal-case` | text-transform: none;       |

## Basic usage
### Transforming text
The `uppercase` and `lowercase` will uppercase and lowercase text respectively, whereas `capitalize` utility will convert text to title-case. The `normal-case` utility can be used to preserve the original casing — typically to reset capitalization at different breakpoints.

<container>
  <div class="mx-24">
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">normal-case</span>
    <p class="text-t1 mt-0! normal-case">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">uppercase</span>
    <p class="text-t3 mt-0! uppercase">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">lowercase</span>
    <p class="text-t4 mt-0! lowercase">The quick smart warp scientist</p>
    <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">capitalize</span>
    <p class="text-t4 mt-0! capitalize">The quick smart warp scientist</p>
  </div>
</container>

```html
<p class="normal-case...">The quick smart warp scientist ...</p>
<p class="uppercase ...">The quick smart warp scientist ...</p>
<p class="lowercase ...">The quick smart warp scientist ...</p>
<p class="capitalize ...">The quick smart warp scientist ...</p>
```
