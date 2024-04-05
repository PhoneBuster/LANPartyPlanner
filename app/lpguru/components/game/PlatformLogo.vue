<script setup lang="ts">
import { GamingPlatform } from "~/types/games/gameTypes";

const props = defineProps({
  platform: {
    type: Number,
    required: true,
  },
});
const platformImageNameSrc = computed(() => {
  const src = "/images/logos/";

  switch (props.platform) {
    case GamingPlatform.GOG:
      return `${src}GOG.png`;
    case GamingPlatform.Ubisoft:
      return `${src}ubisoft.png`;
    case GamingPlatform.EA:
      return `${src}eagaming.png`;
    case GamingPlatform.Epic:
      return `${src}epic_games.png`;
    case GamingPlatform.GamePass:
      return `${src}gamepass.png`;
    case GamingPlatform.BattleNet:
      return `${src}battlenet.png`;
    case GamingPlatform.Steam:
      return `${src}steam.png`;
  }

  return src;
});
</script>

<template>
  <img :src="platformImageNameSrc" class="game-platform-logo" />
</template>

<style scoped lang="scss">
.game-platform-logo {
  @apply w-10;
}
</style>
