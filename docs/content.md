> Typography

# Content
Utilities for controlling the content of the before and after pseudo-elements.

## Quick reference

| Class          | Description   |
| -------------- | ------------- |
| `content-none` | content:none; |

## Basic usage
### Setting a pseudo-element's content
Use the `content-{value}` utilities along with the before and after variant modifiers
to set the contents of the `::before` and `::after` pseudo-elements.

Use the square bracket notation to define any arbitrary content value on the fly.

<container>
  <div>
    <span class="before:content-['Before'] after:content-['After'] before:bg-cyan-500 after:bg-indigo-800 after:inline-block"> I am </span>
  </div>
</container>

```html
<span class="before:content-['Before'] after:content-['After'] before:bg-cyan-500 after:bg-indigo-800 before:inline after:inline"> I am </span>
```