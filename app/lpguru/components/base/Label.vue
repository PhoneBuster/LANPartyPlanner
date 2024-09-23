<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    titleText: {
        type: String,
        default: '',
    },
});
</script>

<template>
  <label class="base-label">
    <div class="title-text">{{ titleText }}</div>
    <slot />
  </label>
</template>

<style scoped lang="scss">
.base-label {
  @apply flex flex-col;
}
.title-text {
  @apply font-bold text-xl pb-1;
}
</style>
