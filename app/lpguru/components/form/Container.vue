<script setup lang="ts"></script>

<template>
  <div class="form-container">
    <div class="form-container--content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  @apply fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-500/75 z-10;

  &--content {
    @apply grid grid-cols-1 gap-3 bg-sky-900 px-4 py-6 w-[98%] border border-solid border-slate-200 rounded-lg
           max-w-[700px] translate-y-[-10%] text-slate-300;
  }
}
</style>
