export const useTicketStorage = async () => {
  const ticketStorage = useStorage("tickets");
  const tickets: any = (await ticketStorage.getItem("tickets")) || [];

  return {
    tickets: tickets.tickets,
  };
};
