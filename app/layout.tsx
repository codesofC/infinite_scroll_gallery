import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime World",
  description: "Anime Universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
