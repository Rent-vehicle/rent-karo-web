"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/api-services/auth.service";
import { AuthResponse, SignupData } from "@/types/api-response/auth-response";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { localStorageService } from "@/services/factories/local-storage.service";

export const useSignupMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<AuthResponse, AxiosError, SignupData>({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      localStorageService.setAuthToken(data.token);
      router.push("/");
      queryClient.setQueryData(["user"], data.user);
    },
  });
};
