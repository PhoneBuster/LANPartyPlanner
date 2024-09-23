<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
  <div class="game-delete">
    <Icon
      class="game-delete-icon"
      :class="{ 'game-delete-icon-disabled': disabled }"
      name="material-symbols:delete"
      size="3rem"
    />
  </div>
</template>

<style scoped lang="scss">
.game-delete-icon {
  @apply text-cyan-500  cursor-pointer;
}

.game-delete-icon-disabled {
  @apply text-slate-300 cursor-default;
}
</style>
