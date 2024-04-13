<script setup lang="ts">
import type { LanGame } from "~/types/games/gameTypes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  lanGames: {
    type: Array as PropType<LanGame[]>,
    required: true,
  },
});

const rankedLanGames = computed(() => {
  const rankedGames = [...props.lanGames];

  return rankedGames.sort((a, b) => {
    return b.upVotes - a.upVotes - (b.downVotes - a.downVotes);
  });
});
</script>

<template>
  <div class="ranking-games">
    <div class="ranking-games-header">
      <h1>Spiele-Ranking</h1>
    </div>
    <div class="ranking-games-list">
      <table class="ranking-games-table">
        <thead>
          <tr>
            <th>Rang</th>
            <th>Name</th>
            <th>Preis</th>
            <th>
              <Icon size="2rem" name="material-symbols:heart-plus" />
            </th>
            <th><Icon size="2rem" name="material-symbols:thumb-down" /></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(lanGame, index) in rankedLanGames" :key="lanGame.id">
            <td>{{ index + 1 }}</td>
            <td class="font-bold">{{ lanGame.name }}</td>
            <td>{{ lanGame.price }} &euro;</td>
            <td>{{ lanGame.upVotes }}</td>
            <td>{{ lanGame.downVotes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ranking-games {
  @apply bg-slate-100/75 rounded-lg p-12  border border-slate-500 w-full max-w-[70vw];

  @screen xl {
    @apply max-w-[1300px];
  }
}

.ranking-games-header {
  @apply text-slate-600 mb-8;
}

.ranking-games-table {
  @apply bg-white/75 text-lg rounded-lg w-full;

  @screen md {
    @apply text-xl;
  }

  @screen lg {
    @apply text-2xl;
  }

  th,
  td {
    @apply py-1 px-4;

    @screen md {
      @apply py-2 px-4;
    }

    @screen lg {
      @apply py-4 px-8;
    }
  }

  th {
    @apply bg-slate-100/75 text-start text-slate-600 font-bold;

    &:first-child {
      @apply rounded-tl-lg;
    }

    &:last-child {
      @apply rounded-tr-lg;
    }
  }

  tr:nth-child(even) {
    @apply bg-slate-100/25;
  }

  td {
    &:first-child {
      @apply bg-slate-100/75 font-bold text-center;
    }
  }
}
</style>
