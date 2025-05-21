import type { UserStorage } from "~/types/games/storageTypes";

export default defineEventHandler(async (event) => {
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
