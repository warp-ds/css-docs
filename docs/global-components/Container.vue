<script setup>
import { inject, ref, onMounted } from 'vue'

const widthController = inject('widthController', null)
const el = ref(null)
const registerSelf = () => widthController?.register(el.value)
onMounted(registerSelf)
</script>

<template>
  <section class="py-32 px-16 rounded-4 border border-gray-200 dark:bg-gray-600 bg-gray-100 dark:bg-gray-700" ref="el">
    <slot />
  </section>
</template>
