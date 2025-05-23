<script setup lang="ts">
defineProps({
  positionText: {
    type: String,
    default: "Position",
  },
  nameText: {
    type: String,
    default: "Name",
  },
  priceText: {
    type: String,
    default: "Price",
  },
  userUpVoteCountText: {
    type: String,
    default: "UserUpVoteCount",
  },
  userDownVoteCountText: {
    type: String,
    default: "UserDownVoteCount",
  },
  upVotesText: {
    type: String,
    default: "Up Votes",
  },
  downVotesText: {
    type: String,
    default: "Down Votes",
  },
});
</script>

<template>
  <div class="ranking-headline">
    <div class="ranking-headline-position">{{ positionText }}</div>
    <div class="ranking-headline-name">{{ nameText }}</div>
    <div class="ranking-headline-price">{{ priceText }}</div>
    <div class="ranking-headline-up-votes-total-count">
      {{ userUpVoteCountText }}
    </div>
    <div class="ranking-headline-down-votes-total-count">
      {{ userDownVoteCountText }}
    </div>
    <div class="ranking-headline-up-votes">{{ upVotesText }}</div>
    <div class="ranking-headline-down-votes">{{ downVotesText }}</div>
  </div>
</template>

<style scoped lang="scss">
.ranking-headline {
  @apply grid grid-cols-12 gap-2 items-center text-white font-bold p-3 text-xl
          bg-gradient-to-r from-transparent via-black to-transparent shadow-cm;

  @screen md {
    @apply text-3xl;
  }

  &-position {
    @apply col-span-1;
  }

  &-name {
    @apply col-span-5;
  }

  &-price {
    @apply col-span-2;
  }

  &-down-votes-total-count {
    @apply col-span-1;
  }

  &-up-votes-total-count {
    @apply col-span-1;
  }

  &-up-votes {
    @apply col-span-1;
  }

  &-down-votes {
    @apply col-span-1;
  }
}
</style>
