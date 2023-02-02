import uno from 'unocss/vite'
import { presetUno, defineConfig } from 'unocss'
import { presetWarp } from '@warp-ds/uno'

export default {
  plugins: [
    uno(defineConfig({
      presets: [
        presetWarp({ usePixels: true }),
        presetUno()
      ]
    }))
  ]
}
