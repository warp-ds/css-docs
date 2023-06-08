> Typography

# Font Variant Numeric
Utilities for controlling the variant of numbers.

::: warning Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#nmp-team-warp-tech](https://sch-chat.slack.com/archives/C04LG5UTCTT) .
:::

## Quick reference

<qr-table />

## Basic usage
### Applying numeric variants
Use the `tabular-nums` to activating the set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables. (The font in use has to have support for this, like `font-mono`). !TODO: Discuss the support for this in warp. We might have to theme this somehow, these fonts might look to different to some of the brand fonts and perhaps need different weights to match them better to the brand font.)

<container>
  <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">with tabular-nums + font-mono</span>
  <table class="border-collapse table! w-full border-y border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm">
    <thead class="bg-slate-50 dark:bg-slate-700">
      <tr>
        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-16 py-8 text-slate-900 dark:text-slate-200 text-right">#</th>
        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-16 py-8 text-slate-900 dark:text-slate-200 text-left">Scientist</th>
        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-16 py-8 text-slate-900 dark:text-slate-200 !text-right"># Coffee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">1</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">Justina Matter</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400 text-right tabular-nums font-mono">1 111 111</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">2</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">Narve Hoops</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400 text-right tabular-nums font-mono">4 444 444</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">3</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">Dagny Calamity</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400 text-right tabular-nums font-mono">88 888 888</td>
      </tr>
    </tbody>
  </table>
  <span class="font-medium text-sm text-slate-500 font-mono dark:text-slate-400">Without tabular-nums</span>
  <table class="border-collapse table! w-full border-y border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm">
    <thead class="bg-slate-50 dark:bg-slate-700">
      <tr>
        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-16 py-8 text-slate-900 dark:text-slate-200 text-right">#</th>
        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-16 py-8 text-slate-900 dark:text-slate-200 text-left">Scientist</th>
        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-16 py-8 text-slate-900 dark:text-slate-200 !text-right"># Coffee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">1</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">Justina Matter</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400 text-right">1 111 111</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">2</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">Narve Hoops</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400 text-right">4 444 444</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">3</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">Dagny Calamity</td>
        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400 text-right">88 888 888</td>
      </tr>
    </tbody>
  </table>
</container>

```html
<table>
      <tr>
        <th>#</th>
        <th>Scientist</th>
        <th># Coffee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Justina Matter</td>
        <td class="tabular-nums font-mono ...">1 111 111</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Narve Hoops</td>
        <td class="tabular-nums font-mono ...">4 444 444</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Dagny Calamity</td>
        <td class="tabular-nums font-mono ...">88 888 888</td>
      </tr>
    </tbody>
  </table>
</container>
```
