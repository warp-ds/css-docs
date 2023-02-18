import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Warp CSS',
  description: 'Documentation for the Warp utility-based CSS system and UnoCSS plugin',
  lastUpdated: false,
  cleanUrls: true,
  markdown: { theme: 'nord' },
  base: '/css-docs/',
  themeConfig: {
    logo: '/warp-logo.svg',
    outline: 'deep',
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collabsible: true,
          items: [
            { text: 'What is Warp CSS?', link: '/what-is-warp' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Plugin API', link: '/plugin-api' },
            { text: 'Class Variants', link: '/class-variants' },
          ]
        },
        {
          text: 'Sizing',
          collabsible: true,
          items: [
            { text: 'Width', link: '/width' },
            { text: 'Height', link: '/height' },
          ]
        },
        {
          text: 'Spacing',
          collabsible: true,
          items: [
            { text: 'Padding', link: '/padding' },
            { text: 'Margin', link: '/margin' },
            { text: 'Space between', link: '/space-between' },
          ]
        },
        {
          text: 'Flexbox & Grid',
          collabsible: true,
          items: [
            { text: 'Flex', link: '/flex' },
            { text: 'Flex Basis', link: '/flex-basis' },
            { text: 'Flex Direction', link: '/flex-direction' },
            { text: 'Flex Grow', link: '/flex-grow' },
            { text: 'Flex Shrink', link: '/flex-shrink' },
            { text: 'Flex Wrap', link: '/flex-wrap' },
            { text: 'Order', link: '/order' },
            { text: 'Grid Template Columns', link: '/grid-template-columns' },
            { text: 'Grid Column Start / End', link: '/grid-column-se' },
            { text: 'Grid Template Rows', link: '/grid-template-rows' },
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
            { text: 'Place Self', link: '/place-self' }
          ]
        }
      ]
    }
  },
})
