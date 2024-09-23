export interface ResponseMessage {
  status: number;
  message: string;
  data?: never;
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
