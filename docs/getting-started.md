# Getting started

## Integrating Uno and Warp in your project

### Install

```shell
pnpm add -D @warp-ds/uno unocss
```

> Webpack based projects should also add: `@unocss/webpack`

### Configure

Create an `uno.config.js` file with the following content. This file will configure Uno, but we still need to get Uno into your project.

```js
import { defineConfig } from 'unocss'
import { presetWarp } from '@warp-ds/uno'

export default {
  presets: [
    presetWarp()
  ]
}
```

#### Adding Uno to your build tool

For now, please refer to the [examples](https://github.com/unocss/unocss/tree/main/examples) found in the UnoCSS project. We will eventually have in-depth install guides for frameworks on the golden path.

