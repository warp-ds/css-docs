> Accessibility

# Screen Readers

Utilities for improving accessibility with screen readers.

## Quick reference

<qr-table />

## Basic usage

### Screen-reader-only elements
Use `sr-only` to hide an element visually without hiding it from screen readers:

```html
<a href="#">
  <svg><!-- ... --></svg>
  <span class="sr-only">Settings</span>
</a>
```

### Undoing screen-reader-only elements
Use `not-sr-only` to undo `sr-only`, making an element visible to sighted users as well as screen readers. This can be useful when you want to visually hide something on small screens but show it on larger screens for example:

```html
<a href="#">
  <svg><!-- ... --></svg>
  <span class="sr-only sm:not-sr-only">Settings</span>
</a>
```
