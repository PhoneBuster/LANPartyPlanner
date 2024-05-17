import type { VoteStorage } from "~/types/games/storageTypes";

export default defineEventHandler(async (event) => {
  const voteStorage = useStorage("votes");

  const voteParams = await voteStorage.getItem<VoteStorage>("voteParams");

  if (!voteParams) {
    throw createError({
      statusCode: 400,
      statusMessage: "No max votes set!!!",
    });
  }

  return voteParams?.maxVotes;
});
