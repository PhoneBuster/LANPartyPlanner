<script setup lang="ts"></script>

<template>
  <div class="hud-container"></div>
</template>

<style scoped lang="scss">
.hud-container {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    20% 100%,
    40% 50%,
    60% 50%,
    80% 100%,
    100% 100%,
    100% 0%
  );
  @apply w-full h-full grid grid-cols-1 bg-stone-800/75 border-0 border-b border-solid border-slate-100;

  @screen lg {
    clip-path: polygon(
      0% 0%,
      0% 100%,
      20% 100%,
      30% 50%,
      70% 50%,
      80% 100%,
      100% 100%,
      100% 0%
    );
  }
}
</style>
