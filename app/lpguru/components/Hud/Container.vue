<script setup lang="ts"></script>

<template>
  <div class="hud-container">
    <div><slot name="leftColumn" /></div>
    <div><slot /></div>
    <div><slot name="rightColumn" /></div>
  </div>
</template>

<style scoped lang="scss">
.hud-container {
  @apply relative w-full h-full grid grid-cols-[20%_60%_20%] text-slate-100;

  &:before {
    @apply absolute top-0 left-0 bg-stone-800/75 content-[''] w-full h-full border-0 border-b border-solid border-slate-100;
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
  }

  @screen lg {
    &:before {
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
}
</style>
