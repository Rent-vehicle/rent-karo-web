import { apiRoutes } from "@/routes/api-routes";
import { baseApiService } from "@/services/factories/base-api.service";
import { FetchMeResponse } from "@/types/api-response/user-response";

class UserService {
  static getInstance(): UserService {
    return new UserService();
  }

  async updateProfile(data: {
    firstName: string;
    lastName: string;
  }): Promise<FetchMeResponse> {
    return baseApiService.put<FetchMeResponse>(
      apiRoutes.user.updateProfile,
      data,
      {
        extras: { useAuth: true },
      }
    );
  }

  async updatePassword(data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }): Promise<FetchMeResponse> {
    return baseApiService.put<FetchMeResponse>(
      apiRoutes.user.updatePassword,
      data,
      {
        extras: { useAuth: true },
      }
    );
  }
}

export const userService = UserService.getInstance();
