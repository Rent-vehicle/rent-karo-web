"use client";

import ProtectedWrapper from "@/components/ProtectWrapper";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useFetchMeQuery } from "@/hooks/user/useFetchMeQuery";
import Loader from "@/components/Loader";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { isLoading, data } = useFetchMeQuery();
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        {" "}
        <Loader variant="spinner" />
      </div>
    );
  }

  return (
    <ProtectedWrapper>
      <div className="min-h-screen bg-white flex flex-col">
        <Header user={data} />
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
        <Footer />
      </div>
    </ProtectedWrapper>
  );
}
