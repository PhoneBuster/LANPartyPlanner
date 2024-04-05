export interface UserStorage {
  username: string;
  password: string;
}

export interface Ticket {
  ticket: string;
  created: number;
}
export interface TicketStorage {
  tickets: Ticket[];
}
