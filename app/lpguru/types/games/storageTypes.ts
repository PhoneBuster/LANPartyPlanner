export interface UserStorage {
  username: string;
  password: string;
  currentVotes: number;
  gameVotes: GameVote[];
}

export interface Ticket {
  ticket: string;
  created: number;
  username: string;
}
export interface TicketStorage {
  tickets: Ticket[];
}

export interface VoteStorage {
  maxVotes: number;
}

export interface GameVote {
  lanGameId: string;
  upVotes: number;
  downVotes: number;
}
export interface DifferentUserVotes {
  lanGameId: string;
}
