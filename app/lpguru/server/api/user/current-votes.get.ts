import { useTicketStorage } from "~/composables/useTicketStorage";
import { useUserStorage } from "~/composables/useUserStorage";

export default defineEventHandler(async (event) => {
  const { getCurrentTicket } = await useTicketStorage();
  const token = (await getCookie(event, "langame")) as string;
  const currentTicket = getCurrentTicket(token);

  if (!currentTicket) {
    throw createError({
      statusCode: 401,
      statusMessage: "No ticket found!!!",
    });
  }

  const { user } = await useUserStorage(currentTicket.username);

  if (!user) {
    throw createError({
      statusCode: 500,
      statusMessage: "Cannot read userdata!!!",
    });
  }

  return user.currentVotes;
});
