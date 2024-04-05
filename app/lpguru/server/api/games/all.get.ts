import type { LanGame } from "~/types/games/gameTypes";
import type { ResponseMessage } from "~/types/messages/responseMessages";

export default defineEventHandler(async (event): Promise<ResponseMessage> => {
  const gameStorage = useStorage("db");
  const itemKeys: string[] = await gameStorage.getKeys();
  const allItems: LanGame[] = [];

  for (const itemKey of itemKeys) {
    const item = await gameStorage.getItem<LanGame>(itemKey);
    if (!item) {
      continue;
    }
    allItems.push(item);
  }

  return {
    status: 201,
    message: "ok",
    data: allItems,
  };
});
