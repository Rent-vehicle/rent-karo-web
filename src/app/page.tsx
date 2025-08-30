import { BikeRentalCarousel, HeroContent, FloatingWhatsApp, StructuredData } from "@/components";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData />

      {/* Main Content */}
      <main className={`min-h-screen font-sans ${comfortaa.variable}`} role="main">
        <section aria-label="Bike Rental Hero Section">
          <div className="relative">
            <BikeRentalCarousel />
            <HeroContent />
            <FloatingWhatsApp />
          </div>
        </section>
      </main>
    </>
  );
}
