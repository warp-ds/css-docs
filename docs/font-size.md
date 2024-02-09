> Typography

# Font Size
Utilities for controlling the font size of an element.

## Quick reference

<qr-table />

## Basic usage
### Setting the font size
Control the font size of an element using the `text-{size}` utilities.
These come with built-in line-heights.
Line-heights can be overridden by the `.leading-{size}` classes, but please only do that as a last resort since that might take them out of the brand theming patterns.

<ThemeContainer>
  <container><fontsize-example/></container>
</ThemeContainer>

```html
<p class="text-xs ...">The quick warp scientist ...</p>
<p class="text-s ...">The quick warp scientist ...</p>
<p class="text-m ...">The quick warp scientist ...</p>
<p class="text-ml ...">The quick warp scientist ...</p>
<p class="text-l ...">The quick warp scientist ...</p>
<p class="text-xl ...">The quick warp scientist ...</p>
<p class="text-xxl ...">The quick warp scientist ...</p>
<p class="text-xxxl ...">The quick warp scientist ...</p>
```
### Setting the headings

Control the heading sizes using the `h1` - `h5` utilities. These classes aim to contain all the styling needed for each heading-level pr. brand.
::: warning Note
The heading tags should be implemented strictly semantic in a clear tree structure. Use the `h1` - `h5` classes to give them the correct visual size and appearance.
:::

<ThemeContainer>
  <container><heading-example/></container>
</ThemeContainer>

```html
<h1 class="h3">Warping</h1>
<h2 class="h2">The process</h2>
<p>The quick smart warp scientist ...</p>
<h2 class="h2">The goal</h2>
<p>The quick smart warp scientist ...</p>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:text-detail` to apply the `text-detail` utility at only medium screen sizes and above.

```html
<p class="text-body md:text-detail">
  <!-- ... -->
</p>
```
