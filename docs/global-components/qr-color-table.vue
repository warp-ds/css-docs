<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data } from '../classes.data.js'
import camelcase from 'camelcase'
import { IconSearch16 } from '@warp-ds/icons/vue'

const camelcaseify = str => camelcase(str.replace(/[^\w\s]/gi, ''))
const pageData = useData()
const props = defineProps({ list: Array })
const dataTitle = computed(() => camelcaseify(pageData.page.value.title))
const rows = computed(() => props.list ?? data[dataTitle.value])
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
        <td><code>{{ cls }}</code></td>
        <td v-if="desc === null" colspan="2">Unsupported</td>
        <template v-else>
          <td>
            <div :class="[cls, { 's-bg-inverted': /^s-(text|icon)-(inverted)/.test(cls) }, { 's-bg-notification': /^s-text-notification/.test(cls) }, { 'border': !/^s-bg/.test(cls) }, { 'h-24': !/^s-(text|icon)/.test(cls) } ]" class="w-64 px-8 text-center">
              <span v-if="/^s-text/.test(cls)">Text</span>
              <icon-search16 v-if="/^s-icon/.test(cls)" class="m-auto my-4"></icon-search16>
            </div>
          </td>
          <td>
            <code v-for="(l, i) in desc.split('\n')">
              {{ l }}
              <br v-if="desc.split('\n').length > 1 && i < desc.split('n').length - 1" />
            </code>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>