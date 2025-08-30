import ProtectedWrapper from "@/components/ProtectWrapper";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedWrapper>
      <div>
        <header>{/* Your shared private header */}</header>
        <main>{children}</main>
      </div>
    </ProtectedWrapper>
  );
}
