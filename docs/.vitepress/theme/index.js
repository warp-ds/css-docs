import Box from '../../global-components/Box.vue'
import 'uno.css'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Container from '../../global-components/Container.vue'
import QrTable from '../../global-components/qr-table.vue'
import ThemeContainer from '../../global-components/ThemeContainer.vue'
import WidthController from '../../global-components/WidthController.vue'
import '../theme-switcher-listener.js'

export default {
  ...DefaultTheme,
  async enhanceApp(ctx) {
    if (!import.meta.env.SSR) {
      const fontsize = await import('../customElements/fontsize-example.js')
      const heading = await import('../customElements/heading-example.js')
      ctx.app.use(fontsize)
      ctx.app.use(heading)
    }
    ctx.app.component('Box', Box)
    ctx.app.component('Container', Container)
    ctx.app.component('QrTable', QrTable)
    ctx.app.component('ThemeContainer', ThemeContainer)
    ctx.app.component('WidthController', WidthController)
  }
}