<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data } from '../classes.data.js'

const pageData = useData()
const props = defineProps({ list: Array })
const dataTitle = computed(() => camelize(pageData.page.value.title))
const rows = computed(() => props.list ?? data[dataTitle.value])

function camelize(str) {
  if (!str) return
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[cls, desc] in rows">
        <td><code>{{ cls }}</code></td>
        <td v-if="desc === null">Unsupported</td>
        <td v-else><code>{{ desc }}</code></td>
      </tr>
    </tbody>
  </table>
</template>
