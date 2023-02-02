import 'uno.css'
import DefaultTheme from 'vitepress/theme'
import Box from '../../global-components/Box.vue'
import Container from '../../global-components/Container.vue'
import WidthController from '../../global-components/WidthController.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Box', Box)
    ctx.app.component('Container', Container)
    ctx.app.component('WidthController', WidthController)
  }
}
