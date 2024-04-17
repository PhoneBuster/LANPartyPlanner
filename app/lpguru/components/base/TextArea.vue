<script setup lang="ts">
const model = defineModel({ type: String, default: "", required: false });
</script>

<template>
  <textarea v-model="model" class="base-text-area" />
</template>

<style scoped lang="scss">
.base-text-area {
  @apply p-2 text-slate-700 border border-solid border-slate-500 rounded-lg;
}
</style>
