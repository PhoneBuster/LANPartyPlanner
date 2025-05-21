<script setup lang="ts">
const props = defineProps({
  buttonType: {
    type: String,
    required: true,
    validator: (value: string) => {
      return ["a", "b", "x", "y"].includes(value.toLowerCase());
    },
  },
});

const upperCaseButtonType = computed(() => {
  return props.buttonType?.toUpperCase();
});

const lowerCaseButtonType = computed(() => {
  return props.buttonType?.toLowerCase();
});
</script>

<template>
  <button :class="['base-button', `button-${lowerCaseButtonType}`]">
    {{ upperCaseButtonType }}
  </button>
</template>

<style scoped lang="scss">
.base-button {
  @apply text-3xl text-center font-bold border border-solid rounded-full w-10 h-10 bg-black;

  &:active {
    @apply bg-slate-100;
  }

  &:hover {
    @apply bg-slate-500;
  }
}
.button-a {
  @apply text-green-400 border-green-500;
}

.button-b {
  @apply text-red-400 border-red-500;
}

.button-x {
  @apply text-blue-400 border-blue-500;
}

.button-y {
  @apply text-yellow-400 border-yellow-500;
}
</style>
