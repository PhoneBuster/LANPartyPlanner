<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  price: {
    type: String,
    default: "0.0",
  },
});
</script>

<template>
  <div class="game-price">
    <span class="game-price-label">Ungefährer Preis : </span>
    <span class="game-price-value">{{ price }} &euro;</span>
  </div>
</template>

<style scoped lang="scss">
.game-price {
  @apply flex items-center justify-between my-2;
}

.game-price-label {
  @apply font-bold mr-2;
}

.game-price-value {
  @apply text-lg text-white bg-slate-600 py-0.5 px-3 rounded-lg shadow;
}
</style>
