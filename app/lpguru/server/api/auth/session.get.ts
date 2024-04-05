import type { ResponseAuthMessage } from "~/types/messages/responseMessages";
import { H3Event } from "h3";
import { useUrlGenerator } from "~/composables/useUrlGenerator";

const urlGenerator = useUrlGenerator();

const redirectUrl = (event: H3Event) => {
  return getRouterParam(event, "redirectUrl");
};

export default defineEventHandler((event) => {
  if (getRequestURL(event).pathname === "/__nuxt_error") {
    return false;
  }

  return {
    token: {
      accessToken: "",
      refreshToken: "",
    },
  };
});
