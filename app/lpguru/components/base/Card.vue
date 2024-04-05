<script setup lang="ts"></script>

<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-card {
  @apply border border-slate-50 rounded-lg shadow-lg;
}
</style>
