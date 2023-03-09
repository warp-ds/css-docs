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
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[cls, desc] in rows">
        <td><code>{{ cls }}</code></td>
        <td v-if="desc === null">Unsupported</td>
        <td v-else>
          <code v-for="(l, i) in desc.split('\n')">
            {{ l }}
            <br v-if="desc.split('\n').length > 1 && i < desc.split('n').length - 1" />
          </code>
        </td>
      </tr>
    </tbody>
  </table>
</template>
