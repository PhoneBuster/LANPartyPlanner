//@ts-expect-error - VueSplide is not defined. But it is...
import VueSplide from "@splidejs/vue-splide";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide);
});
