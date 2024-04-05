<script setup lang="ts">
const model = defineModel({
  type: String,
  default: "",
  required: false,
});
</script>

<template>
  <input v-model="model" class="base-input" />
</template>

<style scoped lang="scss">
.base-input {
  @apply px-2 py-1 border border-solid border-slate-600 rounded-lg;
}
</style>
