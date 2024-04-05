export interface ResponseMessage {
  status: number;
  message: string;
  data?: any;
}

export interface ResponseToken {
  accessToken: string;
  refreshToken?: string;
}

export interface ResponseAuthMessage {
  token: ResponseToken;
}
