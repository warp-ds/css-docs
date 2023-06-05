import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { presetDocs } from '@warp-ds/preset-docs';

export default defineConfig({
  presets: [
    presetWarp({ usePixels: true, usePreflight: true }),
    presetDocs(),
  ],
  shortcuts: [
    {
      'ex-font': 'pd-text-sm font-bold pd-font-mono pd-text-white',
      'ex-box':
        'ex-font p-24 rounded-4 pd-shadow-xl flex items-center justify-center',
    },
  ],
});
