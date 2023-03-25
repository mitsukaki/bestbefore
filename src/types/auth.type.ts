import { User } from './global.type';

export interface AuthFormProps {
  isLoading: boolean;
  error: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignUpRequest extends LoginRequest {
  username: string;
}

export interface AuthResponse {
  username: string;
  email: string;
  id: string;
  token: string;
  fridges: [];
}

export interface AuthState {
  isLoggedIn: boolean | null;
  token: string;
  user: User | null;
}
