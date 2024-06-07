import { useTicketStorage } from "~/composables/useTicketStorage";
import type { Ticket } from "~/types/games/storageTypes";
import { useVotes } from "~/composables/useVotes";
import { useUserStorage } from "~/composables/useUserStorage";
import type { LanGame } from "~/types/games/gameTypes";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body || !body.lanGameId) {
    throw createError({
      statusCode: 400,
      statusMessage: "No game id passed in body!!!",
    });
  }

  const token = getCookie(event, "langame");
  const { tickets } = await useTicketStorage();

  const currentTicket: Ticket = tickets.find(
    (item: Ticket) => item.ticket === token,
  );

  if (!currentTicket) {
    throw createError({
      statusCode: 401,
      statusMessage: "Not authorized to vote!!!",
    });
  }

  const { user } = await useUserStorage(currentTicket.username);

  if (!user) {
    throw createError({
      statusCode: 500,
      statusMessage: "Cannot read userdata!!!",
    });
  }

  user.currentVotes = user.currentVotes ?? 0;

  if (user.currentVotes === 0) {
    setResponseStatus(event, 202, "No more votes to remove!!!");
  } else {
    const gameStorage = useStorage("db");
    const userStorage = useStorage("user");
    const lanGame: LanGame | null = await gameStorage.getItem(body.lanGameId);

    if (!lanGame) {
      throw createError({
        statusCode: 500,
        statusMessage: "Cannot read gamedata!!!",
      });
    }

    const gameVote = user.gameVotes.find(
      (item) => item.lanGameId === body.lanGameId,
    );

    if (!gameVote) {
      throw createError({
        statusCode: 400,
        statusMessage:
          "You cannot remove a vote if you dont voted for that game!!!",
      });
    }

    if (gameVote.upVotes > 0 && user.currentVotes !== 0) {
      gameVote.upVotes--;
      user.currentVotes--;
      lanGame.upVotes--;
    }

    await userStorage.setItem(user.username, user);
    await gameStorage.setItem(lanGame.id, lanGame);

    setResponseStatus(event, 200, "Upvote remove success!!!");
  }
});
