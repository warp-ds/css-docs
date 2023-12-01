<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data } from '../classes.data.js'
import camelcase from 'camelcase'
import { IconRatingFull16 } from '@warp-ds/icons/vue'

const camelcaseify = str => camelcase(str.replace(/[^\w\s]/gi, ''))
const pageData = useData()
const props = defineProps({ list: Array })
const dataTitle = computed(() => camelcaseify(pageData.page.value.title))
const rows = computed(() => props.list ?? data[dataTitle.value])
const outlineClasses = 'outline outline-offset-1 outline-2'
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
          <td :class="[/^s-(text|icon|border|outline)-inverted/.test(cls) || /^s-bg$/.test(cls) ? 's-bg-inverted' : 's-bg', { 's-bg-notification': /^s-text-notification/.test(cls) }]">
            <div :class="[cls, { 'border-2': /^(s-)?(border|outline)/.test(cls) }, { 'h-24': !/^(s-)?(text|icon)/.test(cls) }, { [outlineClasses]: /^(s-)?outline/.test(cls) } ]" class="w-64 px-8 text-center">
              <span v-if="/^(s-text|text-)/.test(cls)" class="text-l">Text</span>
              <icon-rating-full-16 v-if="/^s-icon/.test(cls)" class="m-auto my-4" />
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