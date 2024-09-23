<script setup lang="ts">
const props = defineProps({
    maxVotes: {
        type: Number,
        default: 0,
    },

    currentUserVotes: {
        type: Number,
        default: 0,
    },
});

const votesLeft = computed(() => {
    return props.maxVotes - props.currentUserVotes;
});
</script>

<template>
  <div class="hud-votes-left">
    <HudWidget>
      {{ votesLeft }}
      <template #underline> offene Votes </template>
    </HudWidget>
  </div>
</template>

<style scoped lang="scss"></style>
