"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { authService } from "@/services/api-services/auth.service";
import { AxiosError } from "axios";
import { AuthResponse, LoginData } from "@/types/api-response/auth-response";
import { useRouter } from "next/navigation";
import { localStorageService } from "@/services/factories/local-storage.service";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<AuthResponse, AxiosError, LoginData>({
    mutationFn: (payload: LoginData) => authService.login(payload),
    onSuccess: (data) => {
      localStorageService.setAuthToken(data.token);

      router.push("/home");

      queryClient.setQueryData(["user"], data.user);
    },
  });
};
