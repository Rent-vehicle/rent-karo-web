"use client";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/api-services/auth.service";
import { BaseError } from "@/utils/base-error";
import { toastService, ToastStyle, ToastType } from "@/services/ToastService";
import { localStorageService } from "@/services/factories/local-storage.service";
import { useRouter } from "next/navigation";

export const useGoogleOAuthTokenMutation = () => {
  const router = useRouter();
  return useMutation<{ token: string }, BaseError, { token: string }>({
    mutationFn: authService.googleOAuthToken,
    onSuccess: (data) => {
      localStorageService.setAuthToken(data.token);
      router.push("/home");
      toastService.showToast("Success", ToastType.Success, ToastStyle.Snackbar);
    },
    onError: (error) => {
      toastService.showToast("Error", ToastType.Error, ToastStyle.Snackbar, error.message);
    },
  });
};
