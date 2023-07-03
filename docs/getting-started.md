> Introduction

# Getting Started

This documentation will guide you through the process of integrating UnoCSS and Warp into your project.

## 1. Integrate with UnoCSS and Warp

### Install

To get started, you need to install the necessary packages. At the moment, you should install the `alpha` versions of the `@warp-ds/uno` packages until the major versions are available.

#### Using npm:

```shell
npm install -D @warp-ds/uno@alpha unocss
```

#### Using pnpm:

```shell
pnpm add -D @warp-ds/uno@alpha unocss
```

> If you are using a Webpack-based project, you also need to add `@unocss/webpack` (see [UnoCSS docs](https://unocss.dev/integrations/webpack) for more information)

### Configure

Create an `uno.config.js` file with the following content. This file will configure Uno, but we still need to get Uno into your project.

> uno.config.js

```js
import { defineConfig } from "unocss";
import { presetWarp } from "@warp-ds/uno";
export default defineConfig({
  presets: [presetWarp()],
});
```

#### Add UnoCSS to your build tool

By default, UnoCSS will automatically look for uno.config.{js,ts,mjs,mts} or unocss.config.{js,ts,mjs,mts} in the root directory of your project. Here's an example for Vite:

> vite.config.js

```ts
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [UnoCSS()],
});
```

For more examples on how to configure other build tools, please refer to the [examples](https://github.com/unocss/unocss/tree/main/examples) found in the UnoCSS project. We will eventually have in-depth install guides for frameworks on the golden path.

### Add `uno.css` to your main entry

Depending on the build tool you have chosen, this step can look different. The example below is applicable if you build UnoCSS together with Vite. If you for example use PostCSS as a build tool, you would need to add `@unocss` to the main stylesheet. Please take a look at the [examples](https://github.com/unocss/unocss/tree/main/examples) and see what is needed to be added in your setup.

> e.g. main.js or main.ts

```js
import 'uno.css';
```

## 2. Apply theme

To ensure that the components in your application apply your desired theme, you need to add the respective theme stylesheet to your document. Theme specific stylesheets are vailable via our Eik CDN server:

- Finn: https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css
- Tori: https://assets.finn.no/pkg/@warp-ds/tokens/v1/tori-fi.css
- Blocket: https://assets.finn.no/pkg/@warp-ds/tokens/v1/blocket-se.css

Add this to your `index.html`:

```js
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css">
```
