import type { LanGame } from "~/types/games/gameTypes";

export interface ResponseMessage {
  status: number;
  message: string;
  data?: LanGame[] | LanGame | string;
}

export interface ResponseToken {
  accessToken: string;
  refreshToken?: string;
}

export interface ResponseAuthMessage {
  token: ResponseToken;
}

export interface RequestConfigBody {
  lanDate: string;
}
