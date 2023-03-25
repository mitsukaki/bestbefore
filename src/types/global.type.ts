export enum Routes {
  home = '/',
  login = '/login',
  signUp = '/sign-up',
}

export interface APIError {
  message: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
}
