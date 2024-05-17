import type { Ticket } from "~/types/games/storageTypes";

export const useTicketStorage = async () => {
  const ticketStorage = useStorage("tickets");
  const tickets: any = (await ticketStorage.getItem("tickets")) || [];

  function getCurrentTicket(token: string) {
    return tickets.tickets.find((item: Ticket) => item.ticket === token);
  }

  return {
    tickets: tickets.tickets,
    getCurrentTicket,
  };
};
