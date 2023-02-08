import uno from 'unocss/vite'
import { defineConfig } from 'unocss'
import { presetWarp } from '@warp-ds/uno'
import { presetDocs } from '@warp-ds/preset-docs'

export default {
  plugins: [
    uno(defineConfig({
      presets: [
        presetWarp({ usePixels: true, usePreflight: false }),
        presetDocs()
        // presetUno()
      ]
    }))
  ]
}
