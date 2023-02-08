import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Warp CSS',
  lastUpdated: false,
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
            { text: 'Flex Wrap', link: '/flex-wrap/' }
          ]
        }
      ]
    }

  },
})
