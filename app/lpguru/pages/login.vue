<script setup lang="ts">
const urlGenerator = useUrlGenerator();

const apiLoginUrl = computed(() => {
  return urlGenerator.apiLoginUrl;
});
</script>

<template>
  <div>
    <NuxtLayout name="simple-center">
      <form :action="apiLoginUrl" method="post">
        <BaseLabel title-text="Benutzername">
          <BaseInput name="username" type="text" />
        </BaseLabel>
        <BaseLabel title-text="Passwort">
          <BaseInput name="password" type="password" />
        </BaseLabel>
        <AlignVerticalLine class="mt-4">
          <BaseButton type="submit" button-type="x" class="mr-2"></BaseButton>
          <span>Login</span>
        </AlignVerticalLine>
      </form>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss"></style>
