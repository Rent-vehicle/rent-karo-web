import { authService } from "@/services/api-services/auth.service";
import { useMutation } from "@tanstack/react-query";

export type ResetPasswordPayload = {
  token: string;
  password: string;
};

export function useResetPasswordMutation() {
  return useMutation({
    mutationFn: (payload: ResetPasswordPayload) => authService.resetPassword(payload),
  });
}
