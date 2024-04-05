// @ts-ignore
//import gameStorage from "node-persist";
import { LanGame } from "~/types/games/gameTypes";

export default defineEventHandler(async (event) => {
  const body: LanGame = await readBody(event);

  /*
  await gameStorage.init({
    dir: "/home/node/data/games",
  });

  await gameStorage.setItem(body.name, body);
*/

  const gameStorage = useStorage("db");
  await gameStorage.setItem(body.id, body);
  return {
    status: 201,
    message: "ok",
  };
});
