import type { UserStorage } from "~/types/games/storageTypes";

export const useUserStorage = async (username: string) => {
  const userStorage = useStorage("user");
  const user: UserStorage | null = await userStorage.getItem(username);

  return {
    user,
  };
};
