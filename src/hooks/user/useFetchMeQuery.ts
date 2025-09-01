"use client";
import { User } from "@/models/entities/user";
import { authService } from "@/services/api-services/auth.service";
import { FetchMeResponse } from "@/types/api-response/user-response";
import { useQuery } from "@tanstack/react-query";

export const fetchMe = async (): Promise<User> => {
  const data = await authService.fetchMe(); // ✅ call the function
  return data.user;
};

export const useFetchMeQuery = () => {
  return useQuery<User, Error>({
    queryKey: ["me"],
    queryFn: fetchMe,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // retry once if failed
  });
};
