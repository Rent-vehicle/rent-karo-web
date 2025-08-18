import { apiRoutes } from '@/routes/api-routes';
import { baseApiService } from '@/services/factories/base-api.service';
import {
  AuthResponse,
  ForgetOrResetPasswordResponse,
} from '@/types/api-response/auth-response';
import { FetchMeResponse } from '@/types/api-response/user-response';

class AuthService {
  static getInstance(): AuthService {
    return new AuthService();
  }

  async login(data: {
    email: string;
    password: string;
    code: string;
  }): Promise<AuthResponse> {
    return baseApiService.post<AuthResponse>(apiRoutes.auth.login, undefined, {
      params: data,
      extras: { useAuth: false },
    });
  }

  async fetchMe(): Promise<FetchMeResponse> {
    return baseApiService.get<FetchMeResponse>(apiRoutes.user.fetchMe, {
      extras: { useAuth: true },
    });
  }

  async signup(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    code: string;
  }): Promise<AuthResponse> {
    return baseApiService.post<AuthResponse>(apiRoutes.auth.signup, undefined, {
      params: data,
      extras: { useAuth: false },
    });
  }

  async verifyCode(data: { code: string }): Promise<void> {
    return baseApiService.post<void>(apiRoutes.auth.verifyCode, undefined, {
      params: data,
      extras: { useAuth: false },
    });
  }

  async forgetPassword(data: {
    email: string;
    code: string;
  }): Promise<ForgetOrResetPasswordResponse> {
    return baseApiService.post<ForgetOrResetPasswordResponse>(
      apiRoutes.auth.forgetPassword,
      undefined,
      {
        params: data,
        extras: { useAuth: false },
      }
    );
  }

  async resetPassword(data: {
    code: string;
    token: string;
    password: string;
    confirmPassword: string;
  }): Promise<ForgetOrResetPasswordResponse> {
    return baseApiService.post<ForgetOrResetPasswordResponse>(
      apiRoutes.auth.resetPassword,
      undefined,
      {
        params: data,
        extras: { useAuth: false },
      }
    );
  }

  async logout(): Promise<void> {
    return baseApiService.post<void>(apiRoutes.auth.logout, undefined, {
      extras: { useAuth: true },
    });
  }
}

export const authService = AuthService.getInstance();
