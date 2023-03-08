import 'uno.css'
import './custom.css'
import DefaultTheme from 'vitepress/theme'
import Box from '../../global-components/Box.vue'
import Container from '../../global-components/Container.vue'
import WidthController from '../../global-components/WidthController.vue'
import QrTable from '../../global-components/qr-table.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Box', Box)
    ctx.app.component('Container', Container)
    ctx.app.component('WidthController', WidthController)
    ctx.app.component('QrTable', QrTable)
  }
}
