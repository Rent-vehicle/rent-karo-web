// app/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ENV_CONFIG from "@/constant/env-config"; // Assuming you have this constant
import LoadingIndicator from "@/components/LoadingIndicator";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  const clientId = ENV_CONFIG.GOOGLE_CLIENT_ID;

  if (!clientId) {
    throw new Error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set in ENV_CONFIG");
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <QueryClientProvider client={queryClient}>
        <LoadingIndicator />
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}
