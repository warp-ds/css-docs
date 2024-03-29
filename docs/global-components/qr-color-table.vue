<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { data } from '../classes.data.js';
import camelcase from 'camelcase';
import { IconStarFull24 } from '@warp-ds/icons/vue';

const pageData = useData();
const props = defineProps({ list: Array });
const dataTitle = computed(() => camelcase(pageData.page.value.title.replace(/[^\w\s]/gi, '')));
const rows = computed(() => props.list ?? data[dataTitle.value]);
const outlineClasses = 'outline outline-4 outline-offset-2 border bg-[--w-gray-200] my-6';
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>Color</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[cls, desc] in rows">
        <td><code :class="{'line-through': desc === null}">{{ cls }}</code></td>
        <td v-if="desc === null" colspan="2">Unsupported</td>
        <template v-else>
          <td :class="[/^s-(text|icon|border|outline|divide)-inverted/.test(cls) || /^s-bg$/.test(cls) ? 's-bg-inverted s-text-inverted' : /^(s-)?bg-/.test(cls) ? 's-bg' : '', { 's-bg-notification': /^s-text-notification/.test(cls) }]">
            <div v-if="/^(s-)?divide/.test(cls)" class="flex justify-center divide-x-4" :class="cls">
              <div class="text-right pr-6">A</div>
              <div class="pl-6">B</div>
            </div>
            <div v-else :class="[cls, { 'border-2': /^(s-)?border/.test(cls) }, { 'h-24': !/^(s-)?(text|icon)/.test(cls) }, { [outlineClasses]: /^(s-)?outline/.test(cls) } ]" class="w-64 px-8 text-center rounded">
              <icon-star-full-24 v-if="/^s-icon/.test(cls)" class="m-auto my-4" />
              <span v-else-if="/^(s-)?text/.test(cls)" class="text-l">Text</span>
            </div>
          </td>
          <td>
            <code class="whitespace-pre-line">
              {{ desc }}
            </code>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>