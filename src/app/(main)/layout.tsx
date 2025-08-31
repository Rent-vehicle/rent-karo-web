import ProtectedWrapper from "@/components/ProtectWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  // Mock user data - replace with actual user data from your auth context
  const mockUser = {
    name: "John",
    email: "john@example.com",
    avatar: undefined,
  };

  return (
    <ProtectedWrapper>
      <div className="min-h-screen bg-white flex flex-col">
        <Header user={mockUser} />
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
        <Footer />
      </div>
    </ProtectedWrapper>
  );
}
