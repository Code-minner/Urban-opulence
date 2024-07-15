import type { Metadata, Viewport } from "next";

import "./globals.css";
import Header from "@/components/orgnisms/Header";
import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/orgnisms/Footer";
import { AOSInit } from "@/lib/AOSInit";

const integralCF = localFont({
  src: "../../public/font/IntegralCF-Bold.ttf",
  variable: "--font-integral",
  display: "swap",
});

const Satoshi = localFont({
  src: [
    {
      path: "../../public/font/Satoshi-Black.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-Bold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-Regular.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urban Opulence Interiors",
  description: "Luxury & Customized Interior Design Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Satoshi.variable}  ${integralCF.variable}`}>
        <AOSInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
