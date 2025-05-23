<script setup lang="ts">
import type { LanGame } from "~/types/games/gameTypes";
import { useVoteService } from "~/composables/useVoteService";
import { useUserService } from "~/composables/useUserService";
import type { SplideOptions, SplideSlider } from "~/types/splide/splideTypes";

const isNewGameFormOpen = ref(false);
const isEditFormOpen = ref(false);
const lanGameItems = ref<LanGame[]>([]);
const maxVotes = ref(0);
const currentUserVotes = ref(0);
const currentLanGameId = ref("");
const gameService = useGameService();
const configService = useConfigService();
const urlGenerater = useUrlGenerator();
const voteService = useVoteService();
const userService = useUserService();
const lanDate = ref<number>(0);
const vueSplide = ref(null);

const splideOptions = computed(() => {
  return {
    rewind: true,
    padding: "1rem 2rem",
    classes: {
      prev: "splide__arrow--prev custom-arrow-prev",
      next: "splide__arrow--next custom-arrow-next",
    },

    mediaQuery: "min",
    breakpoints: {
      1400: {
        perPage: 3,
        width: "1300px",
      },
      768: {
        perPage: 1,
        width: "70vw",
      },
      1: {
        perPage: 1,
        width: "100vw",
      },
    },
  };
});

function openNewGameForm(): void {
  isNewGameFormOpen.value = true;
}

function closeNewGameForm() {
  isNewGameFormOpen.value = false;
}

function openEditGameForm() {
  isEditFormOpen.value = true;
}

function closeEditGameForm() {
  isEditFormOpen.value = false;
}

async function loadMaxVotes() {
  const response = await voteService.getMaxVotes();

  if (!response) {
    return;
  }

  maxVotes.value = response;
}

async function loadLanGames() {
  const response = await gameService.getAll();
  if (!response) {
    return;
  }

  lanGameItems.value = response.data || [];
}

async function loadUserCurrentVotes() {
  const response = await userService.getCurrentVotes();

  if (!response) {
    return;
  }

  currentUserVotes.value = response;
}

async function loadLanDate() {
  const lanDateResponse = (await configService.getLanDate()) as number;

  if (!lanDateResponse) {
    return;
  }
  lanDate.value = lanDateResponse;
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

function editLanGame(lanGameId: string) {
  currentLanGameId.value = lanGameId;
  openEditGameForm();
}

function gameUpVote(lanGameId: string) {
  $fetch(urlGenerater.apiGameUpVote, {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    method: "POST",
    body: JSON.stringify({ lanGameId }),
  })
    .then(() => {
      loadLanGames();
      loadUserCurrentVotes();
    })
    .catch((error) => {
      console.error(error);
    });
}

function gameDownVote(lanGameId: string) {
  $fetch(urlGenerater.apiGameDownVote, {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    method: "POST",
    body: JSON.stringify({ lanGameId }),
  })
    .then(() => {
      loadLanGames();
      loadUserCurrentVotes();
    })
    .catch((error) => {
      console.error(error);
    });
}

function removeGameUpVote(lanGameId: string) {
  $fetch(urlGenerater.apiGameUpVote, {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    method: "DELETE",
    body: JSON.stringify({ lanGameId }),
  })
    .then(() => {
      loadLanGames();
      loadUserCurrentVotes();
    })
    .catch((error) => {
      console.error(error);
    });
}
function removeGameDownVote(lanGameId: string) {
  $fetch(urlGenerater.apiGameDownVote, {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    method: "DELETE",
    body: JSON.stringify({ lanGameId }),
  })
    .then(() => {
      loadLanGames();
      loadUserCurrentVotes();
    })
    .catch((error) => {
      console.error(error);
    });
}

function refreshSplide($event: SplideSlider) {
  const splideOptions: SplideOptions = $event?.options;

  if (splideOptions.width === "1300px") {
    splideOptions.perPage =
      lanGameItems.value.length > 3 ? 3 : lanGameItems.value.length;
  }
}

onMounted(() => {
  loadLanGames();
  loadUserCurrentVotes();
  loadLanDate();
  loadMaxVotes();
});
</script>

<template>
  <div>
    <NuxtLayout>
      <template #header>
        <HudContainer>
          <HudCounter :timestamp="lanDate" />
          <template #rightColumn>
            <HudVotesLeft
              :current-user-votes="currentUserVotes"
              :max-votes="maxVotes"
            />
          </template>
        </HudContainer>
      </template>
      <template #content>
        <FormNewGame
          v-show="isNewGameFormOpen"
          @close:form="closeNewGameForm"
          @saved:game="loadLanGames"
        />
        <FormModifyGame
          v-show="isEditFormOpen"
          :lan-game-id="currentLanGameId"
          @close:edit-form="closeEditGameForm"
          @saved:edit-game="loadLanGames"
        />
        <div class="game-content">
          <div class="game-content-slider">
            <Splide
              ref="vueSplide"
              class="px-12 py-8"
              :options="splideOptions"
              aria-label="My Favorite Images"
              @splide:refresh="refreshSplide"
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
                  @edit:lan-game="editLanGame"
                  @vote:upvote="gameUpVote"
                  @vote:downvote="gameDownVote"
                  @vote-remove:upvote="removeGameUpVote"
                  @vote-remove:downvote="removeGameDownVote"
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <AlignVerticalLine>
            <BaseButton button-type="x" @click="openNewGameForm" />
            <BaseDescription
              class="ml-2 rounded-lg px-4 py-1"
              description="Neuer Eintrag"
            />
          </AlignVerticalLine>
        </div>
        <div class="flex flex-col justify-center items-center mt-24">
          <RankingGames :lan-games="lanGameItems" />
        </div>
      </template>
      <template #footer />
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
@use "@splidejs/splide/css/skyblue";
.game-content {
  @apply w-full flex flex-col items-center;

  &::v-deep(.splide__arrow--prev.custom-arrow-prev) {
    @apply left-4;

    @screen xl {
      @apply left-[-1rem];
    }
  }

  &::v-deep(.splide__arrow--next.custom-arrow-next) {
    @apply right-4;

    @screen xl {
      @apply right-[-1rem];
    }
  }
}

.game-content-slider {
}
</style>
