<script setup>
import { inject, ref, onMounted } from 'vue'

const widthController = inject('widthController', null)
const el = ref(null)
const registerSelf = () => widthController?.register(el.value)
onMounted(registerSelf)
</script>

<style>
  .pd-border-strictly-temporary-gray{ border-color: var(--vp-c-border) }
</style>

<template>
  <section class="py-32 px-16 rounded-8 pd-border pd-border-strictly-temporary-gray pd-bg-gray-100 dark:pd-bg-gray-800" ref="el">
    <slot />
  </section>
</template>
