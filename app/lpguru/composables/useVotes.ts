import type { VoteStorage } from "~/types/games/storageTypes";

export const useVotes = async () => {
  const voteStorage = useStorage("votes");

  let voteItem: VoteStorage | null =
    (await voteStorage.getItem("voteParams")) || null;

  if (voteItem === null) {
    voteItem = {
      maxVotes: 0,
    };
  }

  return { voteItem };
};
