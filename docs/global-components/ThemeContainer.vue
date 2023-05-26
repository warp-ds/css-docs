<script setup>
import { computed } from 'vue';

const themes = {
  'Finn': 'finn-no',
  'Blocket': 'blocket-se',
  'Tori': 'tori-fi'
};

if (typeof window !== 'undefined') {
  window.theme = themes.Finn;
}

const selectedTheme = computed({
  get: () => window.theme,
  set: (value) => { window.theme = value; }
});

/* USAGE:
<ThemeContainer>
    <button type="button">I’m a scoped button!</button>
</ThemeContainer>
*/
</script>


<template>
    <ClientOnly>
        <div class="select">
            <select v-model="selectedTheme" name="themes">
            <option v-for="[name, value] in Object.entries(themes)" :key="name" :value="value">{{ name }}</option>
            </select>
        </div>  
        <theme-container>
        <slot />
        </theme-container>
    </ClientOnly>
  </template>

<style scoped>
.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  width: 300px;
  height: 30px;
  margin-top: 24px;
  padding: 4px 8px;
  border: 1px solid hotpink;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.5;
}
</style>