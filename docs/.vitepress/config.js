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
          text: 'Basics',
          collabsible: true,
          items: [
            { text: 'Spacing', link: '/spacing/' }
          ]
        },
        {
          text: 'Layout',
          collabsible: true,
          items: [
            { text: 'Flex', link: '/flex/' }
          ]
        }
      ]
    }

  },
})
