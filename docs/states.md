> Core Concepts

# States
Using utilities to style elements on hover, focus, and more.

Every utility class in Warp can be applied conditionally by adding a modifier to the beginning of the class name that describes the condition you want to target.

For example, to apply the bg-primary-hover class on hover, use the hover:bg-primary-hover class.

## Quick reference

> `{fraction}`: _Any fraction is valid - e.g. `1/5`_


::: tip Note
Aspect ratio support is currently provided via the ['padding-bottom'](https://css-tricks.com/aspect-ratio-boxes/) fallback method. The built-in `aspect-ratio` property is not yet well supported.
:::

## Basic usage

### Setting the aspect ratio

Use the aspect-{ratio} utilities to set the desired aspect ratio of an element.