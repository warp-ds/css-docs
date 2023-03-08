import { createGenerator } from '@unocss/core';
import { presetWarp } from '@warp-ds/uno';
import { formatCSS } from '@itsy/okay';
import * as classLists from './classes.list.js';

const uno = createGenerator({ presets: [presetWarp()] });
const cssFor = async (selector) => {
  const result = await uno.parseToken(selector);
  const css = result ? formatCSS(result[0][2]).replace(':', ': ').replace(';', '') : null;
  return [selector, css];
};

const qrTable = (arr) => Promise.all(arr.map(cssFor));

export default {
  async load() {
    const data = {};
    for (const [k, v] of Object.entries(classLists)) {
      data[k] = await qrTable(v);
    }
    return data;
  },
};
