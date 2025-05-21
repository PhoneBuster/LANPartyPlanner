import type { LanGame } from "~/types/games/gameTypes";

export default defineEventHandler(async (event) => {
  console.log("Deleting...");
  const body: LanGame = await readBody(event);

  const gameStorage = useStorage("db");
  await gameStorage.removeItem(body.id);
  return {
    status: 203,
    message: "ok",
  };
});
