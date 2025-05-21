import type {
  Ticket,
  TicketStorage,
  UserStorage,
} from "~/types/games/storageTypes";
import { useUrlGenerator } from "~/composables/useUrlGenerator";
import { usePasswordCrypt } from "~/composables/usePasswordCrypt";
import { nanoid } from "nanoid";

const urlGenerator = useUrlGenerator();
const { cryptPw } = usePasswordCrypt();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.username || !body.password) {
    await sendRedirect(event, urlGenerator.noAccessUrl);
    return;
  }

  const userStorage = useStorage("user");
  const user: UserStorage | null = await userStorage.getItem(body.username);

  if (!user) {
    await sendRedirect(event, urlGenerator.noAccessUrl);
    return;
  }

  const cryptedPw = await cryptPw(body.password);

  if (!(user?.password === cryptedPw)) {
    await sendRedirect(event, urlGenerator.noAccessUrl);
    return;
  }

  const ticketStorage = useStorage("tickets");
  const currentTickets: TicketStorage = (await ticketStorage.getItem(
    "tickets",
  )) ?? {
    tickets: [],
  };

  const ticket = nanoid(32);
  const created = Date.now();
  const ticketData: Ticket = {
    ticket,
    created,
    username: body.username,
  };
  currentTickets.tickets.push(ticketData);
  await ticketStorage.setItem("tickets", currentTickets);

  setCookie(event, "langame", ticket, { maxAge: 60 * 60 * 24 * 7 });

  await sendRedirect(event, urlGenerator.homePage);
});
