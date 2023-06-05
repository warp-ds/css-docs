import Box from '../../global-components/Box.vue'
import 'uno.css'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Container from '../../global-components/Container.vue'
import QrTable from '../../global-components/qr-table.vue'
import WidthController from '../../global-components/WidthController.vue'

export default {
  ...DefaultTheme,
  async enhanceApp(ctx) {
    // DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Box', Box)
    ctx.app.component('Container', Container)
    ctx.app.component('QrTable', QrTable)
    ctx.app.component('WidthController', WidthController)
  }
}