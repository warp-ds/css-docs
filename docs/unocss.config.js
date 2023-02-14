import { defineConfig } from 'unocss'
import { presetWarp } from '@warp-ds/uno'
import { presetDocs } from '@warp-ds/preset-docs'

export default defineConfig({
  presets: [
    presetWarp({ usePixels: true, usePreflight: false }),
    presetDocs()
  ],
  shortcuts: [
    {
      'font-ex': 'text-sm font-bold font-mono text-white',
      'ex-font': 'text-sm font-bold font-mono text-white',
      'ex-box': 'ex-font p-24 rounded flex items-center justify-center'
    }
  ]
})
