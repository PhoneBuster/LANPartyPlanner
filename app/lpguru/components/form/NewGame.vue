<script setup lang="ts">
import { useGameService } from "~/composables/useGameService";
import { nanoid } from "nanoid";
import {
  GamingGenre,
  GamingPlatform,
  type PlatformOptions,
  type GenreOptions,
} from "~/types/games/gameTypes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const $emit = defineEmits(["close:form", "saved:game"]);
const gameName = ref("");
const gamePrice = ref("0");
const gameDescription = ref("");
const gamePlatform = ref(GamingPlatform.Unknown);
const gameGenre = ref(GamingGenre.Other);
const isMultiEntryActive = ref(false);
const gameService = useGameService();
async function submitForm() {
  if (gameName.value === "") {
    return;
  }

  await gameService.saveNewGame({
    id: nanoid(16),
    name: gameName.value,
    upVotes: 0,
    downVotes: 0,
    creatorId: "ItsMe",
    platform: gamePlatform.value,
    genre: gameGenre.value,
    price: gamePrice.value,
    description: gameDescription.value,
  });

  $emit("saved:game", true);
  if (!isMultiEntryActive.value) {
    $emit("close:form");
  }
}

const platformOptions = computed<PlatformOptions[]>(() => {
  return gameService.getPlatformOptions();
});

const genreOptions = computed<GenreOptions[]>(() => {
  return gameService.getGenreOptions();
});
</script>

<template>
  <FormContainer>
    <h1>Neuer Eintrag</h1>
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
        <div class="flex items-center justify-center mr-4">
          <BaseInput
            v-model="isMultiEntryActive"
            type="checkbox"
            class="cursor-pointer mr-2 w-6 h-6"
          />
          <div class="flex items-center justify-center">Mehrfache Einträge</div>
        </div>
        <BaseButton button-type="A" @click="submitForm" />
        <BaseDescription class="ml-1" description="Speichern" />
        <BaseButton class="ml-2" button-type="B" @click="$emit('close:form')" />
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
