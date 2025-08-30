"use client";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/api-services/auth.service";
import { localStorageService } from "@/services/factories/local-storage.service";
import { useRouter } from "next/navigation";

export const useVerifyEmailMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (payload: { code: string }) => authService.verifyEmail(payload),
    onSuccess: (data) => {
      localStorageService.removeLocalStorageValue("justSignedUp");

      router.push("/home");
    },
  });
};
