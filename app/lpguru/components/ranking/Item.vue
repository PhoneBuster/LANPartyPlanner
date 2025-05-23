<script setup lang="ts">
defineProps({
  position: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  userUpVoteCount: {
    type: Number,
    required: true,
  },
  userDownVoteCount: {
    type: Number,
    required: true,
  },
  upVotes: {
    type: Number,
    required: true,
  },
  downVotes: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="ranking-item">
    <div class="ranking-item-position">{{ position }}</div>
    <div class="ranking-item-name">{{ name }}</div>
    <div class="ranking-item-price">{{ price }} &euro;</div>
    <div class="ranking-item-user-up-vote-count">{{ userUpVoteCount }}</div>
    <div class="ranking-item-user-down-vote-count">{{ userDownVoteCount }}</div>
    <div class="ranking-item-up-votes">{{ upVotes }}</div>
    <div class="ranking-item-down-votes">{{ downVotes }}</div>
  </div>
</template>

<style scoped lang="scss">
.ranking-item {
  @apply grid grid-cols-12 gap-2 items-center text-slate-100 p-3 rounded-lg
          bg-gradient-to-r from-transparent via-blue-200 to-transparent shadow-cm;

  @screen md {
    @apply text-xl;
  }

  &-position {
    @apply col-span-1;
  }

  &-name {
    @apply col-span-5 font-bold;
  }

  &-price {
    @apply col-span-2;
  }

  &-user-down-vote-count {
    @apply col-span-1;
  }

  &-user-up-vote-count {
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
