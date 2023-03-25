export enum Routes {
  home = '/',
  login = '/login',
  signUp = '/sign-up',
  aboutUs = '/about-us',
}

export interface APIError {
  message: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
}
