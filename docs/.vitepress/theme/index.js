import Box from '../../global-components/Box.vue'
import 'virtual:uno.css'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Container from '../../global-components/Container.vue'
import QrTable from '../../global-components/qr-table.vue'
import ThemeContainer from '../../global-components/ThemeContainer.vue'
import WidthController from '../../global-components/WidthController.vue'

export default {
  ...DefaultTheme,
  async enhanceApp(ctx) {
    if (!import.meta.env.SSR) {
      const plugin = await import('../theme-container.js')
      ctx.app.use(plugin)
    }
    ctx.app.component('Box', Box)
    ctx.app.component('Container', Container)
    ctx.app.component('QrTable', QrTable)
    ctx.app.component('ThemeContainer', ThemeContainer)
    ctx.app.component('WidthController', WidthController)
  }
}