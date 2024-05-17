import { useUrlGenerator } from "~/composables/useUrlGenerator";

export const useUserService = () => {
  const urlGenerator = useUrlGenerator();

  function getCurrentVotes(): Promise<number> {
    return $fetch(urlGenerator.apiUserCurrentVotes, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
  }
  return {
    getCurrentVotes,
  };
};
