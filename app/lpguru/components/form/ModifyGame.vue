<script setup lang="ts">
import { useGameService } from "~/composables/useGameService";

import {
  GamingGenre,
  GamingPlatform,
  type PlatformOptions,
  type GenreOptions,
} from "~/types/games/gameTypes";

const props = defineProps({
  lanGameId: {
    type: String,
    required: true,
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const $emit = defineEmits(["close:edit-form", "saved:edit-game"]);
const gameName = ref("");
const gamePrice = ref("0");
const gameDescription = ref("");
const gamePlatform = ref(GamingPlatform.Unknown);
const gameGenre = ref(GamingGenre.Other);
const gameService = useGameService();
async function submitForm() {
  if (gameName.value === "") {
    return;
  }

  await gameService.saveNewGame({
    id: props.lanGameId,
    name: gameName.value,
    upVotes: 0,
    downVotes: 0,
    creatorId: "ItsMe",
    platform: gamePlatform.value,
    genre: gameGenre.value,
    price: gamePrice.value,
    description: gameDescription.value,
  });

  $emit("saved:edit-game", true);
  $emit("close:edit-form");
}

const platformOptions = computed<PlatformOptions[]>(() => {
  return gameService.getPlatformOptions();
});

const genreOptions = computed<GenreOptions[]>(() => {
  return gameService.getGenreOptions();
});

function loadLanGame() {
  if (props.lanGameId === "") {
    return;
  }

  gameService
    .getGameById(props.lanGameId)
    .then((game) => {
      gameName.value = game.name;
      gamePrice.value = game.price;
      gameDescription.value = game.description || "";
      gamePlatform.value = game.platform;
      gameGenre.value = game.genre;
    })
    .catch((error) => {
      console.error(error);
    });
}

watch(
  () => props.lanGameId,
  () => {
    loadLanGame();
  },
  { immediate: true },
);
</script>

<template>
  <FormContainer>
    <h1>Game bearbeiten</h1>
    <BaseLabel title-text="Name">
      <BaseInput
        v-model="gameName"
        v-focus
        type="text"
        maxlength="128"
        required
      />
    </BaseLabel>
    <BaseLabel title-text="Ungefährer Preis">
      <BaseInput v-model="gamePrice" type="string" />
    </BaseLabel>
    <BaseLabel title-text="Platform">
      <select v-model="gamePlatform" class="base-select">
        <option
          v-for="platformOption in platformOptions"
          :key="platformOption.value"
          :value="platformOption.value"
        >
          {{ platformOption.label }}
        </option>
      </select>
    </BaseLabel>
    <BaseLabel title-text="Genre">
      <select v-model="gameGenre" class="base-select">
        <option
          v-for="genreOption in genreOptions"
          :key="genreOption.value"
          :value="genreOption.value"
        >
          {{ genreOption.label }}
        </option>
      </select>
    </BaseLabel>
    <BaseLabel title-text="kurze Beschreibung">
      <BaseTextArea v-model="gameDescription" rows="4" />
    </BaseLabel>
    <div class="mt-4">
      <AlignVerticalLine class="justify-end">
        <BaseButton button-type="A" @click="submitForm" />
        <BaseDescription class="ml-1" description="Speichern" />
        <BaseButton
          class="ml-2"
          button-type="B"
          @click="$emit('close:edit-form')"
        />
        <BaseDescription class="ml-1" description="Zurück" />
      </AlignVerticalLine>
    </div>
  </FormContainer>
</template>

<style scoped lang="scss">
.base-select {
  @apply px-2 py-1 rounded-lg border border-slate-600 text-slate-700;
}
</style>
