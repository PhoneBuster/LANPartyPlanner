<script setup lang="ts">
function startApp() {
  navigateTo("/games");
}
</script>
definePageMeta({ layout: false, });
<template>
  <NuxtLayout name="simple-center">
    <div class="index-page">
      <div class="flex justify-center">
        <img
          class="w-full md:w-[600px] lg:w-[700px]"
          src="/images/general/controller_small.png"
        />
      </div>
      <div class="flex justify-center items-center">
        <base-button
          v-focus
          to="/games"
          button-type="A"
          @keyup.a="startApp"
          @click="startApp"
          >A</base-button
        >
        <span class="pl-2 text-slate-200">click to start</span>
      </div>
    </div>
  </NuxtLayout>
</template>
