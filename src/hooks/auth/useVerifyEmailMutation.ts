"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/api-services/auth.service";
import { localStorageService } from "@/services/factories/local-storage.service";
import { useRouter } from "next/navigation";
import { toastService, ToastStyle, ToastType } from "@/services/ToastService";

export const useVerifyEmailMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { code: string }) => authService.verifyEmail(payload),
    onSuccess: (data) => {
      localStorageService.removeLocalStorageValue("justSignedUp");
      toastService.showToast("Email verified successfully", ToastType.Success, ToastStyle.Snackbar);
      queryClient.invalidateQueries({ queryKey: ["me"] });

      router.push("/home");
    },
  });
};
