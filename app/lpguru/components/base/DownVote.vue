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
  <div class="base-thumb-down">
    <Icon
      class="base-thumb-down-icon"
      name="material-symbols:thumb-down"
      size="3rem"
    />
    <span class="base-thumb-down-counter">
      {{ counter }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.base-thumb-down {
  @apply cursor-pointer flex items-center justify-center relative;
}

.base-thumb-down-icon {
  @apply text-cyan-500;
}

.base-thumb-down-counter {
  @apply text-slate-400 font-bold;
}
</style>
