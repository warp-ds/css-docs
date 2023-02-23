<script setup>
import { inject, ref, onMounted } from 'vue'

const widthController = inject('widthController', null)
const el = ref(null)
const registerSelf = () => widthController?.register(el.value)
onMounted(registerSelf)
</script>

<style>
  .border-strictly-temporary-gray{ border-color: var(--vp-c-border) }
</style>

<template>
  <section class="py-32 px-16 rounded-8 border border-strictly-temporary-gray bg-gray-100 dark:bg-gray-700" ref="el">
    <slot />
  </section>
</template>
