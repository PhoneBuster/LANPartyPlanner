import type {Ticket, TicketStorage} from '~/types/games/storageTypes';

export const useTicketStorage = async () => {
    const ticketStorage = useStorage('tickets');
    const tickets: TicketStorage | null = (await ticketStorage.getItem('tickets')) || null;

    function getCurrentTicket(token: string) {
        return tickets?.tickets.find((item: Ticket) => item.ticket === token);
    }

    return {
        tickets: tickets?.tickets,
        getCurrentTicket,
    };
};
