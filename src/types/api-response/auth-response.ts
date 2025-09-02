import { User } from "@/models/entities/user";

export interface AuthResponse {
  user: User;
  token: string;
  isEmailVerified: boolean;
}
export interface ForgetOrResetPasswordResponse {
  message: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
