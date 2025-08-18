import { User } from '@/models/entities/user';

export interface AuthResponse {
  user: User;
  token: string;
}
export interface ForgetOrResetPasswordResponse {
  message: string;
}
