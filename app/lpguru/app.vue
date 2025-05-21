<script setup>
useHead({
  title: "Lan Party Planner",
  meta: [
    {
      name: "description",
      content:
        "Lan Party Planner - The best place to find games for your LAN party and vote it",
    },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon_io/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/vnd.microsoft.icon",
      href: "favicon.ico",
    },
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "192x192",
      type: "image/png",
      href: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      sizes: "512x512",
      type: "image/png",
      href: "/android-chrome-512x512.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "site.webmanifest",
    },
  ],
});
</script>

<template>
  <div class="app-page">
    <NuxtPage class="h-full w-full" />
  </div>
</template>

<style lang="scss" scoped>
.app-page {
  @apply h-full w-full;
}
</style>

<style lang="scss">
h1 {
  @apply text-4xl mb-4 font-bold;
}

body {
  @apply bg-fixed bg-cover bg-right-top bg-no-repeat bg-sky-900 bg-[url('@Image/general/avatar2_free.png')];
}
</style>
