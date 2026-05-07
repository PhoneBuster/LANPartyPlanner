import type { UserStorage } from "~/types/games/storageTypes";
import { useWebApiKey } from "~/composables/useWebApiKey";

export default defineEventHandler(async (event) => {
  const { webApiKey } = await useWebApiKey();
  const xApiKey = getHeader(event, "x-api-key") || "";

  if (!xApiKey) {
    throw createError({
      statusCode: 403,
      statusMessage: "You do not permissions to set max votes!!!",
    });
  }

  if (xApiKey !== webApiKey) {
    throw createError({
      statusCode: 401,
      statusMessage: "You are not authorized to set max votes",
    });
  }

  const userStorage = useStorage("user");
  const gameStorage = useStorage("db");

  await gameStorage.clear();

  const userStorageKeys = await userStorage.getKeys();

  for (const key of userStorageKeys) {
    const user: UserStorage | null = await userStorage.getItem(key);
    if (!user) {
      continue;
    }
    user.currentVotes = 0;
    user.gameVotes = [];
    await userStorage.setItem(key, user);
  }
  setResponseStatus(event, 200, "all reset (games and user votes)");
});
