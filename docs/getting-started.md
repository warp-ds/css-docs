> Introduction

# Getting Started

## 1. Integrate with UnoCSS and Warp

### Install

`alpha` versions of @warp-ds packages should be installed until major versions are available.

#### with npm:

```shell
npm install -D @warp-ds/uno@alpha unocss
```

#### or, with pnpm:

```shell
pnpm add -D @warp-ds/uno@alpha unocss
```

> Webpack based projects should also add: `@unocss/webpack` (see [UnoCSS docs](https://unocss.dev/integrations/webpack) for more information)

### Configure

Create an `uno.config.js` file with the following content. This file will configure Uno, but we still need to get Uno into your project.

```js
import { defineConfig } from "unocss";
import { presetWarp } from "@warp-ds/uno";
export default defineConfig({
  presets: [presetWarp()],
});
```

#### Adding Uno to your build tool

By default, UnoCSS will automatically look for uno.config.{js,ts,mjs,mts} or unocss.config.{js,ts,mjs,mts} in the root directory of your project. You can also specify the config file manually and in that case you won't need a separate uno config file. Like in this example for Vite:

```ts
// vite.config.js
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { presetWarp } from "@warp-ds/uno";
import { classes } from "@warp-ds/component-classes/classes";

export default defineConfig({
  plugins: [
    // leave it empty to use your config defined in uno.config.js
    UnoCSS(),
    // OR just define it here
    UnoCSS({
      presets: [presetWarp()],
    }),
  ],
});
```

For more examples how to configure other building tools, please refer to the [examples](https://github.com/unocss/unocss/tree/main/examples) found in the UnoCSS project. We will eventually have in-depth install guides for frameworks on the golden path.

### Add uno.css to your main entry

```js
// e.g. main.[ts|js]
import "uno.css";
```

## 2. Apply theme

In order for components to apply your application's theme, a respective theme stylesheet should be added to the document. Theme specific stylesheets are vailable via our Eik CDN server:

- Finn: https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css
- Tori: https://assets.finn.no/pkg/@warp-ds/tokens/v1/tori-fi.css
- Blocket: https://assets.finn.no/pkg/@warp-ds/tokens/v1/blocket-se.css

Add this to your `index.html`:

```js
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css">
```
