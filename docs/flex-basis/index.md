<script setup>
const exampleClasses = 'p-24 rounded font-ex flex items-center justify-center'
</script>

> Flexbox & Grid

# Flex Basis
Utilities for controlling the initial size of flex items.

## Quick reference

| Class              | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| `basis-{size}`     | Set the initial size of the item to `{size}`                           |
| `basis-{fraction}` | Set the initial size of the item to a percentage based on `{fraction}` |

> Available values <br />
> `{size}`: `1`, `2`, `4`, `8`, `16`, `32`, `48`, `64` <br />
> `{fraction}`: _Any fraction is valid - e.g. `1/5`_

## Basic usage
### Setting the flex basis
Use the `basis-{size}` utilities to set the initial size of flex items.

<container>
  <box class="flex gap-16">
    <div class="basis-1/4 bg-fuchsia-500" :class="exampleClasses">01</div>
    <div class="basis-1/4 bg-fuchsia-500" :class="exampleClasses">02</div>
    <div class="basis-1/2 bg-fuchsia-500" :class="exampleClasses">03</div>
  </box>
</container>

```html
<div class="flex flex-row">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>
```
