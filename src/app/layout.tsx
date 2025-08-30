import type { Metadata } from "next";
import { Providers } from "./providers";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: "Bike Rentals in Dehradun, Uttarakhand",
  description:
    "Rent Karo now operates in Dehradun, Uttarakhand  Premium motorcycle and bike rental services including sports bikes, cruisers, and adventure bikes. Explore scenic routes and book your ride today.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={comfortaa.variable}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
