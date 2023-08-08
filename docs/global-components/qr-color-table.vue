<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data } from '../classes.data.js'
import camelcase from 'camelcase'

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
          <td :class="{ 's-text-inverted': /^s-bg-primary-/.test(cls) }">
            <div :class="[cls, { 's-bg-primary': /^s-text-inverted/.test(cls) }]" class="border w-64 px-8">Text</div>
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
