> Introduction

# Getting Started

This documentation will guide you through the process of integrating UnoCSS and Warp into your project.

## 1. Integrate with UnoCSS and Warp

A guide on how to integrate your project with UnoCSS and Warp.

### Installation

To get started, you need to install the necessary packages. At the moment, you should install the `alpha` versions of the `@warp-ds/uno` packages until the major version is available.
Below version of `@warp-ds/uno` is compatible with the theme stylesheets mentioned in the [Apply Theme](#_2-apply-theme) section.

```shell
npm install unocss@0.54.3 @warp-ds/uno@1.0.0-alpha.49
```

#### If you are using Webpack

In addition to the installation of the Warp packages, Webpack based projects should also install `@unocss/webpack`

```shell
npm install @unocss/webpack --save-dev
```

See [UnoCSS docs](https://unocss.dev/integrations/webpack) for more information.

---

### Configuration and setup

When setting up Warp in your project, you can choose to create a `uno.config.js` file, or you can include the UnoCSS configuration settings directly in the build tool. Below, the two different alternatives are described.

- **Alternative 1: Add a uno.config.js file**

Create a `uno.config.[js,ts,mjs,mts]` file with the following content. This file will configure UnoCSS with our Warp preset. See all configuration options for `presetWarp` at [Plugin API](/plugin-api) page.

> uno.config.js

```js
import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';

export default defineConfig({ 
  presets: [presetWarp()]
});
```

By default, UnoCSS will automatically look in the root directory of your project for `uno.config.[js,ts,mjs,mts]` or `unocss.config.[js,ts,mjs,mts]`.

### Add UnoCSS to your build tool

Then add UnoCSS to your build tool

> vite.config.js

```ts
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [UnoCSS()],
});
```

- **Alternative 2: Include UnoCSS directly in the build setup**

You can also specify the configuration file manually and in that case you won't need a separate `uno.config.js` file.

Below is an example for Vite:

> vite.config.js

```ts
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { presetWarp } from '@warp-ds/uno';

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetWarp()]
    }),
  ],
});
```

For more examples how to configure other building tools, please refer to the [examples](https://github.com/unocss/unocss/tree/main/examples) found in the UnoCSS project. We will eventually have in-depth install guides for frameworks on the golden path.

### Add `uno.css` to your main entry

Depending on the build tool you have chosen, this step can look different. The example below is applicable if you build UnoCSS together with Vite. If you for example use PostCSS as a build tool, you would need to add `@unocss` to the main stylesheet. Please take a look at the [examples](https://github.com/unocss/unocss/tree/main/examples) and see what is needed to be added in your setup.

> e.g. main.js or main.ts

```js
import 'uno.css';
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
