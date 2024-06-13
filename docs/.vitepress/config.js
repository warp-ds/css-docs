import { defineConfig } from 'vitepress';
import uno from 'unocss/vite';
import { presetWarp } from '@warp-ds/uno';
import { presetDocs } from '@warp-ds/preset-docs';
import { classes } from '../classes.js';

const base = '/css-docs';

export default defineConfig({
  lang: 'en-US',
  title: 'Warp CSS',
  description:
    'Documentation for the Warp utility-based CSS system and UnoCSS plugin',
  lastUpdated: false,
  cleanUrls: true,
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    headers: { level: [0, 0] },
  },
  base: `${base}/`,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${base}/warp-logo-small.svg`,
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/tori-fi.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/css/v1/tokens/finn-no.css',
      },
    ],
  ],
  themeConfig: {
    logo: '/warp-logo-small.svg',
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/warp-ds/drive' },
    ],
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2023-present Schibsted',
    },
    nav: [
      {
        text: 'Warp Tech',
        link: 'https://warp-ds.github.io/tech-docs',
      },
    ],
    aside: false,
    sidebar: {
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-example'),
      },
    },
  },
  vite: {
    plugins: [
      uno({
        presets: [presetWarp({ usePixels: true }), presetDocs()],
        mode: 'shadow-dom',
        safelist: classes,
      }),
      uno({
        presets: [presetWarp({ usePixels: true }), presetDocs()],
        shortcuts: [
          {
            'ex-font':
              'pd-text-sm font-bold pd-font-mono pd-text-white',
            'ex-box':
              'ex-font p-24 rounded-4 pd-shadow-xl flex items-center justify-center',
          },
        ],
        safelist: classes,
      }),
    ],
  },
});
