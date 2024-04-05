<script setup lang="ts">
import type { LanGame } from "~/types/games/gameTypes";

const isNewGameFormOpen = ref(false);
const lanGameItems = ref<LanGame[]>();
const gameService = useGameService();
function openNewGameForm(): void {
  isNewGameFormOpen.value = true;
}

function closeNewGameForm() {
  isNewGameFormOpen.value = false;
}

async function loadLanGames() {
  const response = await gameService.getAll();
  if (!response) {
    return;
  }

  lanGameItems.value = response.data;
}

function deleteLanGame(lanGameId: string) {
  const isConfirmed = confirm("Wirklich entfernen?");

  if (!isConfirmed) {
    return;
  }

  gameService.deleteGame(lanGameId).then(() => {
    loadLanGames();
  });
}

onMounted(() => {
  loadLanGames();
});
</script>

<template>
  <div>
    <NuxtLayout>
      <template #header>Header</template>
      <template #content>
        <FormNewGame
          v-show="isNewGameFormOpen"
          @close:form="closeNewGameForm"
          @saved:game="loadLanGames"
        />
        <div class="game-content">
          <div class="game-content-slider">
            <Splide
              :options="{
                rewind: true,
                width: '100vw',
                perPage: 1,
                mediaQuery: 'min',
                breakpoints: {
                  768: {
                    width: '70vw',
                  },
                  1400: {
                    perPage: 2,
                    width: '1300px',
                  },
                },
              }"
              aria-label="My Favorite Images"
            >
              <SplideSlide v-for="lanGame in lanGameItems" :key="lanGame.id">
                <GameCard
                  :id="lanGame.id"
                  :name="lanGame.name"
                  :creator-id="lanGame.creatorId"
                  :up-votes="lanGame.upVotes"
                  :down-votes="lanGame.downVotes"
                  :platform="lanGame.platform"
                  :genre="lanGame.genre"
                  :price="lanGame.price"
                  :description="lanGame.description"
                  @delete:lan-game="deleteLanGame"
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <AlignVerticalLine>
            <BaseButton button-type="x" @click="openNewGameForm" />
            <BaseDescription class="ml-2" description="Neuer Eintrag" />
          </AlignVerticalLine>
        </div>
      </template>
      <template #footer>test</template>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
@import "@splidejs/splide/css/skyblue";
.game-content {
  @apply w-full flex flex-col items-center;
}

.game-content-slider {
}
</style>
