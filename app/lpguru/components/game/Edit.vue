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
  <div class="game-edit">
    <Icon
      class="game-edit-icon"
      :class="{ 'game-edit-icon-disabled': disabled }"
      name="material-symbols:edit"
      size="3rem"
    />
  </div>
</template>

<style scoped lang="scss">
.game-edit-icon {
  @apply text-cyan-500  cursor-pointer;
}

.game-edit-icon-disabled {
  @apply text-slate-300 cursor-default;
}
</style>
