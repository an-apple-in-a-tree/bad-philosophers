import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bad Philosophers",
  description: "Explore the Cobwebs of thought...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <Navbar />
        </div>

        {children}
        <Footer />
        </body>
    </html>
  );
}
