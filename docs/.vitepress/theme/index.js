import { h } from 'vue'
import Box from '../../global-components/Box.vue';
import 'uno.css';
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Container from '../../global-components/Container.vue';
import QrTable from '../../global-components/qr-table.vue';
import QrColorTable from '../../global-components/qr-color-table.vue';
import ThemeContainer from '../../global-components/ThemeContainer.vue';
import WidthController from '../../global-components/WidthController.vue';
import { IconStarFull32 } from '@warp-ds/icons/vue';
import obsolete from '../../global-components/obsolete.md';

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': obsolete.render,
      'home-hero-info-before': obsolete.render,
      'not-found': obsolete.render,
    })
  },
  async enhanceApp(ctx) {
    if (!import.meta.env.SSR) {
      const fontsize = await import(
        '../customElements/fontsize-example.js'
      );
      const heading = await import(
        '../customElements/heading-example.js'
      );
      const themeSwitcherListener = await import(
        '../theme-switcher-listener.js'
      );
      ctx.app.use(fontsize);
      ctx.app.use(heading);
      ctx.app.use(themeSwitcherListener);
    }
    ctx.app.component('Box', Box);
    ctx.app.component('Container', Container);
    ctx.app.component('QrTable', QrTable);
    ctx.app.component('QrColorTable', QrColorTable);
    ctx.app.component('ThemeContainer', ThemeContainer);
    ctx.app.component('WidthController', WidthController);
    ctx.app.component('IconStarFull32', IconStarFull32);
  },
};
