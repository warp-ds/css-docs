import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Warp CSS',
  lastUpdated: false,
  markdown: { theme: 'nord' },
  themeConfig: {
    outline: 'deep',
    sidebar: {
      '/': [
        {
          text: 'Spacing',
          collabsible: true,
          items: [
            { text: 'Padding', link: '/padding/' },
            { text: 'Margin', link: '/margin/' },
            { text: 'Space between', link: '/space-between/' },
          ]
        },
        {
          text: 'Layout',
          collabsible: true,
          items: [
            { text: 'Flex', link: '/flex/' },
            { text: 'Flex Basis', link: '/flex-basis/' },
            { text: 'Flex Direction', link: '/flex-direction/' },
            { text: 'Flex Grow', link: '/flex-grow/' },
            { text: 'Flex Shrink', link: '/flex-shrink/' },
            { text: 'Flex Wrap', link: '/flex-wrap/' },
            { text: 'Order', link: '/order/' },
            { text: 'Grid Template Columns', link: '/grid-template-columns/' },
            { text: 'Grid Column Start / End', link: '/grid-column-se/' },
            { text: 'Grid Template Rows', link: '/grid-template-rows/' },
            { text: 'Grid Row Start / End', link: '/grid-row-se/' },
            { text: 'Grid Auto Flow', link: '/grid-auto-flow/' },
            { text: 'Grid Auto Columns', link: '/grid-auto-columns/' },
            { text: 'Grid Auto Rows', link: '/grid-auto-rows/' },
            { text: 'Gap', link: '/gap/' }
          ]
        }
      ]
    }

  },
})
