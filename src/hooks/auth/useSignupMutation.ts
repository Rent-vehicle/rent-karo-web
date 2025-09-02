"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/api-services/auth.service";
import { AuthResponse, SignupData } from "@/types/api-response/auth-response";
import { AxiosError } from "axios";
import { localStorageService } from "@/services/factories/local-storage.service";
import { useRouter } from "next/navigation";

export const useSignupMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<AuthResponse, AxiosError, SignupData>({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      localStorageService.setLocalStorageValue("justSignedUp", "true");
      router.push("/verify-email");
      queryClient.setQueryData(["me"], data.user);
      localStorageService.setAuthToken(data.token);
    },
  });
};
