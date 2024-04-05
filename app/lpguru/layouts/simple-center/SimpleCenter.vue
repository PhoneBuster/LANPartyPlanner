<script setup lang="ts"></script>

<template>
  <div class="simple-center-layout">
    <div class="centered-slot">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.simple-center-layout {
  @apply absolute w-full h-full grid grid-cols-1;
}

.centered-slot {
  @apply flex justify-center items-center;
}
</style>

<style lang="scss">
body,
html {
  height: 100%;
  margin: 0;
}
</style>
