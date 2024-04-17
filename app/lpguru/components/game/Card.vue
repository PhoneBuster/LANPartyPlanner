<script setup lang="ts">
import {
  type GenreOptions,
  type LanGame,
  GamingGenre,
} from "@/types/games/gameTypes";

const props = defineProps<LanGame>();
const emit = defineEmits([
  "delete:lan-game",
  "edit:lan-game",
  "vote:upvote",
  "vote:downvote",
  "vote-remove:upvote",
  "vote-remove:downvote",
]);
const gameService = useGameService();
const genreImageClass = computed(() => {
  let bgClass = "";

  switch (props.genre) {
    case GamingGenre.Action:
      bgClass = "bg-genre-action";
      break;
    case GamingGenre.Racing:
      bgClass = "bg-genre-racing";
      break;
    case GamingGenre.Strategy:
      bgClass = "bg-genre-strategy";
      break;
    case GamingGenre.Shooter:
      bgClass = "bg-genre-shooter";
      break;
    case GamingGenre.JumpNRun:
      bgClass = "bg-genre-jumpandrun";
      break;

    default:
      bgClass = "bg-genre-other";
      break;
  }

  return [bgClass];
});

const gameGenre = computed<GenreOptions>(() => {
  const genreOptions = gameService.getGenreOptions();

  const option = genreOptions.find((item) => {
    return item.value === props.genre;
  });

  if (!option) {
    return { label: "", value: 0 };
  }
  return option;
});

const isDeleteButtonDisabled = computed(() => {
  return props.upVotes > 0 || props.downVotes > 0;
});

function onUpVote() {
  emit("vote:upvote", props.id);
}

function onUpVoteRemove() {
  emit("vote-remove:upvote", props.id);
}

function onDownVoteRemove() {
  emit("vote-remove:downvote", props.id);
}

function onDownVote() {
  emit("vote:downvote", props.id);
}

function deleteGame() {
  if (!isDeleteButtonDisabled.value) {
    emit("delete:lan-game", props.id);
  }
}

function editGame() {
  emit("edit:lan-game", props.id);
}
</script>

<template>
  <div class="game-card">
    <BaseCard class="game-base-card">
      <div
        class="game-card-heading bg-cover-image"
        :class="genreImageClass"
      ></div>
      <div class="game-card-body">
        <div class="game-card-text">
          {{ name }}
        </div>
        <div class="game-card-genre">
          {{ gameGenre.label }}
        </div>
        <div class="game-card-platform">
          <span class="mr-2">Platform : </span>
          <GamePlatformLogo :platform="platform" />
        </div>
        <div class="game-card-price">
          <GamePrice :price="price" />
        </div>
        <div class="game-card-description">
          <GameDescription :description="description" />
        </div>
        <div class="game-card-infos">
          <BaseUpVote
            :counter="upVotes"
            class="mr-2"
            @click.exact="onUpVote"
            @click.ctrl.exact="onUpVoteRemove"
          />
          <BaseDownVote
            :counter="downVotes"
            @click.exact="onDownVote"
            @click.ctrl.exact="onDownVoteRemove"
          />
          <GameEdit
            :disabled="isDeleteButtonDisabled"
            class="flex flex-grow justify-end"
            @click="editGame"
          />
          <GameDelete
            :disabled="isDeleteButtonDisabled"
            class="flex justify-end"
            @click="deleteGame"
          />
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped lang="scss">
.game-card {
  @apply flex justify-center w-full h-[550px];

  @screen md {
    @apply px-8 py-2 shadow-none;
  }
}

.game-base-card {
  @apply bg-white border-2 border-solid border-slate-200 flex flex-col h-[96%] w-[350px];

  @screen md {
    @apply shadow-cm;
  }
}

.game-card-heading {
  @apply flex px-1 h-[200px];
}

.game-card-body {
  @apply flex flex-grow flex-col px-4;
}

.game-card-logo {
  @apply min-w-[100px] max-w-[100px];

  @screen lg {
    @apply min-w-[200px] max-w-[200px];
  }
}

.game-card-platform {
  @apply flex font-bold items-center justify-between;
}

.game-card-description {
  @apply mt-2 min-h-[80px] max-h-[80px] overflow-y-scroll;
}

.game-card-infos {
  @apply flex h-full items-end mb-2 justify-start;
}
.game-card-text {
  @apply mt-4 font-bold text-2xl;

  @screen lg {
    @apply text-2xl;
  }
}

.game-card-genre {
  @apply text-sm;
}

.bg-cover-image {
  @apply bg-cover bg-no-repeat transition-all duration-300 rounded-t-lg;

  &:hover {
    @apply scale-105 rounded-lg;
  }
}

.bg-genre-other {
  @apply bg-[url('@Image/genres/genre-other.webp')];
}

.bg-genre-racing {
  @apply bg-[url('@Image/genres/genre-racing.jpg')];
}

.bg-genre-action {
  @apply bg-[url('@Image/genres/genre-action.jpg')];
}

.bg-genre-strategy {
  @apply bg-[url('@Image/genres/genre-strategy.jpg')];
}

.bg-genre-shooter {
  @apply bg-[url('@Image/genres/genre-shooter.jpg')];
}

.bg-genre-jumpandrun {
  @apply bg-[url('@Image/genres/genre-jumpandrun.webp')];
}
</style>
