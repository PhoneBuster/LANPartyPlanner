import { useExcludeRoutes } from "~/composables/useExcludeRoutes";
import { useUrlGenerator } from "~/composables/useUrlGenerator";
import { H3Event, sendRedirect } from "h3";
import type { Ticket, TicketStorage } from "~/types/games/storageTypes";

const urlGenerator = useUrlGenerator();
const excludeRoutes = useExcludeRoutes();

const ensureAccess = async (event: H3Event) => {
  const token = await getCookie(event, "langame");
  const ticketStorage = useStorage("tickets");
  if (!ticketStorage || !token) {
    return false;
  }

  const ticketContainer: TicketStorage | null =
    await ticketStorage.getItem("tickets");

  if (!ticketContainer) {
    return false;
  }

  const item = ticketContainer.tickets.find((item: Ticket) => {
    return item.ticket === token;
  });

  if (!item) {
    return false;
  }

  return true;
};

export default defineEventHandler(async (event) => {
  if (process.client) {
    return;
  }

  const path = getRequestPath(event);

  if (
    excludeRoutes.exclude(path, [
      urlGenerator.getLoginUrl,
      urlGenerator.apiLoginUrl,
      urlGenerator.noAccessUrl,
      urlGenerator.apiCreateUser,
      urlGenerator.apiRemoveUser,
      urlGenerator.apiMaxVotes,
    ])
  ) {
    return;
  }

  const hasAccess = await ensureAccess(event);
  if (!hasAccess) {
    return sendRedirect(event, urlGenerator.getLoginUrl);
  }
});
