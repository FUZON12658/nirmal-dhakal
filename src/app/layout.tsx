import type { Metadata } from "next";
import { Anek_Tamil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { PageProvider } from "@/contexts/PageContext";

const anekTamil = Anek_Tamil({
  variable: "--font-anek-tamil",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirmal Dhakal",
  description: "Nirmal Dhakal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anekTamil.variable} antialiased`}>
        <PageProvider>
          <Navbar />
          {children}
        </PageProvider>
      </body>
    </html>
  );
}
