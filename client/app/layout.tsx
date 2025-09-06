import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Onion - Food Ordering App",
  description: "Order fresh, delicious meals from your favorite local restaurants with Onion. Simple ordering, quick delivery, pure satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-dvh w-screen md:w-[80vw] mx-auto bg-primary-50/70 p-4`}
      >
        {children}
      </body>
    </html>
  );
}
