<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  counter: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="base-thumb-up">
    <Icon
      class="base-thumb-up-icon"
      name="material-symbols:heart-plus"
      size="3rem"
    />
    <span class="base-thumb-up-counter"> 10 </span>
  </div>
</template>

<style scoped lang="scss">
.base-thumb-up {
  @apply cursor-pointer flex items-center justify-center relative;
}

.base-thumb-up-icon {
  @apply text-cyan-500;
}

.base-thumb-up-counter {
  @apply text-slate-400 font-bold;
}
</style>
