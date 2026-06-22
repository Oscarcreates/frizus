import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frizus.com"),
  title: {
    default: "Frizus | Trade, Distribution, Contracting & Real Estate in Nigeria",
    template: "%s | Frizus",
  },
  description:
    "Frizus delivers end-to-end contracting, general merchandise, distribution and real estate solutions that move businesses forward across Nigeria and West Africa.",
  keywords: [
    "Frizus",
    "Frizus Group",
    "distribution",
    "contracting services",
    "general merchandise",
    "real estate Nigeria",
    "properties Nigeria",
    "Fri-ride logistics",
    "Aejis Painting",
    "Procurement",
    "Delivery",
    "Logistics",
  ],
  openGraph: {
    title: "Frizus | Let's Advance Together",
    description:
      "End-to-end trade, distribution, contracting and real estate solutions advancing businesses across Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
