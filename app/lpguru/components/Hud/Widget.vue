<script setup lang="ts"></script>

<template>
  <div class="hud-widget">
    <div class="hud-widget-content">
      <div>
        <slot />
      </div>
    </div>
    <div class="hud-widget-underline">
      <slot name="underline"> Underline </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hud-widget {
  @apply flex flex-col items-center absolute mt-2;

  &-content {
    @apply flex flex-col items-center justify-center flex-grow text-base bg-sky-400/75 border  text-slate-100 rounded-lg shadow-lg
    w-10 h-10;

    @screen lg {
      @apply w-12 h-12 text-2xl font-bold;
    }
  }

  &-underline {
    @apply text-sm mt-1;
  }
}
</style>
