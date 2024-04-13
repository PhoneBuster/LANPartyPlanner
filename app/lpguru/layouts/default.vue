<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <div class="row-span-1">
      <slot name="header" />
    </div>
    <div class="row-span-10">
      <slot name="content" />
    </div>
    <div class="row-span-1">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  @apply grid grid-rows-12 h-full w-full;
}
</style>

<style lang="scss">
body,
html {
  @apply h-full m-0 p-0;
}

body {
  @apply flex;
}

#__nuxt {
  @apply flex-grow;
}
</style>
