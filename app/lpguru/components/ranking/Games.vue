<script setup lang="ts">
import type { LanGame } from "~/types/games/gameTypes";

const props = defineProps({
  lanGames: {
    type: Array as PropType<LanGame[]>,
    required: true,
  },
});

const rankedLanGames = computed(() => {
  const rankedGames = [...props.lanGames];

  return rankedGames.sort((a, b) => {
    const differentUserVotes =
      b.differentUserUpVotes -
      a.differentUserUpVotes -
      (b.differentUserDownVotes - a.differentUserDownVotes);
    const normalVotes = b.upVotes - a.upVotes - (b.downVotes - a.downVotes);

    if (differentUserVotes !== 0) {
      return differentUserVotes;
    }
    return normalVotes;
  });
});
</script>

<template>
  <div class="ranking-games">
    <div class="ranking-games-header">
      <h1>Spiele-Ranking</h1>
    </div>
    <div class="ranking-games-list">
      <RankingHeadline
        class="m-1"
        position-text="#"
        price-text="&euro;"
        up-votes-text="+"
        down-votes-text="-"
      />
      <RankingItem
        v-for="(game, index) in rankedLanGames"
        :key="game.id"
        class="m-1"
        :position="index + 1"
        :name="game.name"
        :price="game.price"
        :up-votes="game.upVotes"
        :down-votes="game.downVotes"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ranking-games {
  @apply w-full;

  @screen md {
    @apply max-w-[70vw];
  }

  @screen xl {
    @apply max-w-[1300px];
  }
}

.ranking-games-header {
  @apply flex justify-center text-slate-100 mb-8 py-2 from-transparent via-cyan-500 to-transparent bg-gradient-to-r;
}

.ranking-games-list {
  @apply flex flex-col mb-10;
}
</style>
