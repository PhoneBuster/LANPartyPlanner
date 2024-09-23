<script setup lang="ts">
const urlGenerator = useUrlGenerator();

const apiLoginUrl = computed(() => {
    return urlGenerator.apiLoginUrl;
});
</script>

<template>
  <div>
    <NuxtLayout name="simple-center">
      <form class="login-form" :action="apiLoginUrl" method="post">
        <BaseLabel title-text="Benutzername">
          <BaseInput name="username" type="text" />
        </BaseLabel>
        <BaseLabel title-text="Passwort">
          <BaseInput name="password" type="password" />
        </BaseLabel>
        <AlignVerticalLine class="mt-4">
          <BaseButton type="submit" button-type="x" class="mr-2"/>
          <span>Login</span>
        </AlignVerticalLine>
      </form>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  @apply absolute top-[30%] bg-blue-100/75 px-24 py-8 border rounded-lg border-solid border-slate-500;
}
</style>
