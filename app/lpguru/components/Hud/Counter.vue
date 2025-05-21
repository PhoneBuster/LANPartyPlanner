<script setup lang="ts">
import Timeout = NodeJS.Timeout;
import { nanoid } from "nanoid";

const props = defineProps({
  timestamp: {
    type: Number,
    default: 0,
  },
});

const month = ref<number>(0);
const days = ref<number>(0);
const hours = ref<number>(0);
const minutes = ref<number>(0);
const seconds = ref<number>(0);
const intervalId = ref<Timeout>();

const digitSecondsKey = ref<string>("digit_seconds_" + nanoid(10));
const digitMinutesKey = ref<string>("digit_minutes_" + nanoid(10));
const digitHoursKey = ref<string>("digit_hours_" + nanoid(10));
const digitDaysKey = ref<string>("digit_days_" + nanoid(10));
const digitMonthKey = ref<string>("digit_seconds_" + nanoid(10));

const readableLanDate = computed(() => {
  if (timeToWaitForLan.value === 0) {
    return "";
  }

  return new Date(props.timestamp).toLocaleString();
});

const timeToWaitForLan = computed(() => {
  if (props.timestamp === 0) {
    return 0;
  }

  if (props.timestamp < Date.now()) {
    return 0;
  }

  return props.timestamp;
});

const updateCounter = () => {
  const now = Date.now();
  const diff = props.timestamp - now;

  month.value = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  days.value = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
  );
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
};

watch(
  [seconds, minutes, hours, days, month],
  ([newSeconds, newMinutes, newHours, newDays, newMonth]) => {
    digitSecondsKey.value = "digit_seconds_" + newSeconds;
    digitMinutesKey.value = "digit_minutes_" + newMinutes;
    digitHoursKey.value = "digit_hours_" + newHours;
    digitDaysKey.value = "digit_days_" + newDays;
    digitMonthKey.value = "digit_month_" + newMonth;
  },
);

onMounted(() => {
  updateCounter();
  intervalId.value = setInterval(updateCounter, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});
</script>

<template>
  <div class="hud-counter">
    <div class="hud-counter__info">Nächste Lan {{ readableLanDate }}</div>
    <div v-if="timeToWaitForLan !== 0" class="hud-counter__digits">
      <span :key="digitMonthKey" class="digit hud-counter__digits__month"
        >{{ month }}M</span
      >
      <span :key="digitDaysKey" class="digit hud-counter__digits__days"
        >{{ days }}T</span
      >
      <span :key="digitHoursKey" class="digit hud-counter__digits__hours"
        >{{ hours }}H</span
      >
      <span :key="digitMinutesKey" class="digit hud-counter__digits__minutes"
        >{{ minutes }}m</span
      >
      <span :key="digitSecondsKey" class="digit hud-counter__digits__seconds"
        >{{ seconds }}s</span
      >
    </div>
    <div v-else class="hud-counter__not-planned">
      <span>Ungeplant</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.digit-enter-active,
.digit-leave-active {
  transition: all 1s ease;
}

.digit-leave-from {
  opacity: 0;
}

.digit-enter-from,
.digit-leave-to {
  opacity: 0;
  position: absolute;
}

.digit-enter-to {
  position: relative;
  opacity: 1;
}

.hud-counter {
  @apply flex justify-center items-end h-full w-full;

  &__info {
    @apply absolute top-[0] text-lg text-slate-100;

    @screen lg {
      @apply text-2xl font-bold mt-2;
    }
  }
  &__digits {
    @apply absolute  top-[70%] flex flex-grow justify-center;
  }

  &__not-planned {
    @apply flex items-center text-base bg-white/80 text-slate-800 rounded-lg px-2 font-bold mx-1;

    @screen lg {
      @apply px-4 py-0.5;
    }
  }

  .digit {
    @apply flex items-center justify-center text-base bg-white/80 text-slate-800 rounded-lg font-bold mx-1 w-10 h-10
            border-2 border-solid border-slate-800;
  }
}
</style>
