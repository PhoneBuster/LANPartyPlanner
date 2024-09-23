<script setup lang="ts">
import type { PropType } from 'vue';

const model = defineModel({
    type: [String, Boolean] as PropType<string | boolean>,
    default: '',
    required: false,
});
</script>

<template>
  <input v-model="model" class="base-input" >
</template>

<style scoped lang="scss">
.base-input {
  @apply text-slate-700 px-2 py-1 border border-solid border-slate-600 rounded-lg;
}
</style>
