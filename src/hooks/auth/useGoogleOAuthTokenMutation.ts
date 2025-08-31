"use client";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/api-services/auth.service";
import { BaseError } from "@/utils/base-error";
import { toastService, ToastStyle, ToastType } from "@/services/ToastService";

export const useGoogleOAuthTokenMutation = () => {
  return useMutation<{ token: string }, BaseError, { token: string }>({
    mutationFn: authService.googleOAuthToken,
    onSuccess: () => {
      toastService.showToast("Error", ToastType.Error, ToastStyle.Snackbar);
    },
    onError: (error) => {
      toastService.showToast("Error", ToastType.Error, ToastStyle.Snackbar, error.message);
    },
  });
};
