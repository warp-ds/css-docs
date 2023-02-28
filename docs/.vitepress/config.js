import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Warp CSS',
  description:
    'Documentation for the Warp utility-based CSS system and UnoCSS plugin',
  lastUpdated: false,
  cleanUrls: true,
  markdown: {
    theme: 'nord',
    headers: { level: [0, 0] },
  },
  base: '/css-docs/',
  themeConfig: {
    logo: '/warp-logo-small.svg',
    outline: 'deep',
    algolia: {
      appId: 'Q311JSQKZY',
      apiKey: 'f860301343b6bc5003d9d5bb0894947e',
      indexName: 'warpdscss',
    },
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
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collapsible: true,
          items: [
            { text: 'What is Warp CSS?', link: '/what-is-warp' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Plugin API', link: '/plugin-api' },
            { text: 'Class Variants', link: '/class-variants' },
          ],
        },
        {
          text: 'Layout',
          collapsible: true,
          items: [
            { text: 'Aspect Ratio', link: '/aspect-ratio' },
            { text: 'Columns', link: '/columns' },
            { text: 'Break After', link: '/break-after' },
            { text: 'Break Before', link: '/break-before' },
            { text: 'Break Inside', link: '/break-inside' },
            { text: 'Box sizing', link: '/box-sizing' },
            { text: 'Display', link: '/display' },
            { text: 'Floats', link: '/floats' },
            { text: 'Clear', link: '/clear' },
            { text: 'Isolate', link: '/isolate' },
            { text: 'Object Fit', link: '/object-fit' },
            { text: 'Object Position', link: '/object-position' },
            { text: 'Overflow', link: '/overflow' },
            { text: 'Overscroll', link: '/overscroll' },
            { text: 'Position', link: '/position' },
            {
              text: 'Top / Right / Bottom / Left',
              link: '/top-right-bottom-left',
            },
            { text: 'Visibility', link: '/visibility' },
            { text: 'Z-Index', link: '/z-index' },
          ],
        },
        {
          text: 'Sizing',
          collapsible: true,
          items: [
            { text: 'Width', link: '/width' },
            { text: 'Min-Width', link: '/min-width' },
            { text: 'Max-Width', link: '/max-width' },
            { text: 'Height', link: '/height' },
            { text: 'Min-Height', link: '/min-height' },
            { text: 'Max-Height', link: '/max-height' },
          ],
        },
        {
          text: 'Spacing',
          collapsible: true,
          items: [
            { text: 'Padding', link: '/padding' },
            { text: 'Margin', link: '/margin' },
            { text: 'Space between', link: '/space-between' },
          ],
        },
        {
          text: 'Flexbox & Grid',
          collapsible: true,
          items: [
            { text: 'Flex', link: '/flex' },
            { text: 'Flex Basis', link: '/flex-basis' },
            { text: 'Flex Direction', link: '/flex-direction' },
            { text: 'Flex Grow', link: '/flex-grow' },
            { text: 'Flex Shrink', link: '/flex-shrink' },
            { text: 'Flex Wrap', link: '/flex-wrap' },
            { text: 'Order', link: '/order' },
            {
              text: 'Grid Template Columns',
              link: '/grid-template-columns',
            },
            {
              text: 'Grid Column Start / End',
              link: '/grid-column-se',
            },
            {
              text: 'Grid Template Rows',
              link: '/grid-template-rows',
            },
            { text: 'Grid Row Start / End', link: '/grid-row-se' },
            { text: 'Grid Auto Flow', link: '/grid-auto-flow' },
            { text: 'Grid Auto Columns', link: '/grid-auto-columns' },
            { text: 'Grid Auto Rows', link: '/grid-auto-rows' },
            { text: 'Gap', link: '/gap' },
            { text: 'Justify Content', link: '/justify-content' },
            { text: 'Justify Items', link: '/justify-items' },
            { text: 'Justify Self', link: '/justify-self' },
            { text: 'Align Content', link: '/align-content' },
            { text: 'Align Items', link: '/align-items' },
            { text: 'Align Self', link: '/align-self' },
            { text: 'Place Content', link: '/place-content' },
            { text: 'Place Items', link: '/place-items' },
            { text: 'Place Self', link: '/place-self' },
          ],
        },
        {
          text: 'Border',
          collapsible: true,
          items: [
            { text: 'Border Radius', link: '/border-radius' },
            { text: 'Border Width', link: '/border-width' },
            { text: 'Border Color', link: '/border-color' },
          ],
        },
      ],
    },
  },
});
