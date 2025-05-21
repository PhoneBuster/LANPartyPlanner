import type { LanGame } from "~/types/games/gameTypes";
import type {
  UserStorage,
  GameVote,
  DifferentUserVotes,
} from "~/types/games/storageTypes";
import type { ResponseMessage } from "~/types/messages/responseMessages";

export default defineEventHandler(async (): Promise<ResponseMessage> => {
  const gameStorage = useStorage("db");
  const userStorage = useStorage("user");

  const userStorageKeys: string[] = await userStorage.getKeys();
  const itemKeys: string[] = await gameStorage.getKeys();

  const differentUserUpVotes: DifferentUserVotes[] = [];
  const differentUserDownVotes: DifferentUserVotes[] = [];

  for (const userItemKey of userStorageKeys) {
    const userItem = (await userStorage.getItem(userItemKey)) as UserStorage;
    if (!userItem) {
      continue;
    }

    userItem.gameVotes.forEach((gameVote: GameVote) => {
      const { lanGameId, upVotes, downVotes } = gameVote;

      if (upVotes > 0) {
        differentUserUpVotes.push({ lanGameId: lanGameId });
      }

      if (downVotes > 0) {
        differentUserDownVotes.push({ lanGameId: lanGameId });
      }
    });
  }

  const allItems: LanGame[] = [];

  for (const itemKey of itemKeys) {
    const item = await gameStorage.getItem<LanGame>(itemKey);
    if (!item) {
      continue;
    }
    item.differentUserUpVotes =
      differentUserUpVotes.filter((item) => {
        return item.lanGameId === itemKey;
      }).length || 0;
    item.differentUserDownVotes =
      differentUserDownVotes.filter((item) => {
        return item.lanGameId === itemKey;
      }).length || 0;
    allItems.push(item);
  }

  return {
    status: 201,
    message: "ok",
    data: allItems as LanGame[],
  };
});
