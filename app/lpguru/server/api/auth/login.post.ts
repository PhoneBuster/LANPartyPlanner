import type { ResponseAuthMessage } from "~/types/messages/responseMessages";
import type { UserStorage } from "~/types/games/storageTypes";
import { useUrlGenerator } from "~/composables/useUrlGenerator";
import { usePasswordCrypt } from "~/composables/usePasswordCrypt";
import { nanoid } from "nanoid";

const urlGenerator = useUrlGenerator();
const { cryptPw } = usePasswordCrypt();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.username || !body.password) {
    await sendRedirect(event, urlGenerator.noAccessUrl);
  }

  const userStorage = useStorage("user");
  const user: UserStorage | null = await userStorage.getItem(body.username);

  if (!user) {
    await sendRedirect(event, urlGenerator.noAccessUrl);
  }

  const cryptedPw = await cryptPw(body.password);

  if (!(user?.password === cryptedPw)) {
    await sendRedirect(event, urlGenerator.noAccessUrl);
  }

  const ticketStorage = useStorage("tickets");
  const currentTickets: any = (await ticketStorage.getItem("tickets")) ?? {
    tickets: [],
  };

  const ticket = nanoid(32);
  const created = Date.now();
  const ticketData = {
    ticket,
    created,
  };
  currentTickets.tickets.push(ticketData);
  await ticketStorage.setItem("tickets", currentTickets);

  setCookie(event, "langame", ticket);

  sendRedirect(event, urlGenerator.gamePage);
});
