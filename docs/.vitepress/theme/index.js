import 'uno.css'
import './custom.css'
import Box from '../../global-components/Box.vue'
import DefaultTheme from 'vitepress/theme'
import Container from '../../global-components/Container.vue'
import QrTable from '../../global-components/qr-table.vue'
import ThemeContainer from '../../global-components/ThemeContainer.vue'
import WidthController from '../../global-components/WidthController.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Box', Box)
    ctx.app.component('Container', Container)
    ctx.app.component('QrTable', QrTable)
    ctx.app.component('ThemeContainer', ThemeContainer)
    ctx.app.component('WidthController', WidthController)
  }
}