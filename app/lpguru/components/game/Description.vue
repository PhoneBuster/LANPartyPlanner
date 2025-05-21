<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="game-description">{{ description }}</div>
</template>

<style scoped lang="scss">
.game-description {
  @apply text-sm italic;
}
</style>
