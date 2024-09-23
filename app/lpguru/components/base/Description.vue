<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    description: {
        type: String,
        default: '',
    },
});
</script>

<template>
  <span class="base-description">
    {{ description }}
  </span>
</template>

<style scoped lang="scss">
.base-description {
  @apply text-lg text-slate-100;
}
</style>
