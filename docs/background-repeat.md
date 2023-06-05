> Backgrounds

# Background Repeat
Utilities for controlling the repetition of an element's background image.

## Quick reference
<qr-table />

## Basic usage
### Repeat
Use `bg-repeat` to repeat the background image both vertically and horizontally.

<container>
  <div class="h-144 bg-repeat rounded-8 pd-bg-white dark:pd-bg-slate-800 dark:border dark:pd-border-slate-200/20" style="background-image:url(/repeatable.png);background-size:10%"></div>
</container>

```html
<div class="bg-repeat ..." style="background-image:url(...);">ss</div>
```

### No Repeat
Use `bg-no-repeat` when you don’t want to repeat the background image.

<container>
  <div class="h-144 bg-no-repeat bg-center rounded-8 pd-bg-white dark:pd-bg-slate-800 dark:border dark:pd-border-slate-200/20" style="background-image:url(/repeatable.png);background-size:10%"></div>
</container>

```html
<div class="bg-no-repeat ..." style="background-image:url(...);">ss</div>
```

### Repeat Horizontally
Use `bg-repeat-x` to repeat the background image only horizontally.

<container>
  <div class="h-144 bg-repeat-x bg-center rounded-8 pd-bg-white dark:pd-bg-slate-800 dark:border dark:pd-border-slate-200/20" style="background-image:url(/repeatable.png);background-size:10%"></div>
</container>

```html
<div class="bg-repeat-x ..." style="background-image:url(...);">ss</div>
```

### Repeat Vertically
Use `bg-repeat-y` to repeat the background image only vertically.

<container>
  <div class="h-144 bg-repeat-y bg-center rounded-8 pd-bg-white dark:pd-bg-slate-800 dark:border dark:pd-border-slate-200/20" style="background-image:url(/repeatable.png);background-size:10%"></div>
</container>

```html
<div class="bg-repeat-y ..." style="background-image:url(...);">ss</div>
```
