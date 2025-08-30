import ProtectedWrapper from "@/components/ProtectWrapper";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedWrapper>
      <main>{children}</main>
    </ProtectedWrapper>
  );
}
