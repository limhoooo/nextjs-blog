import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "limhoooo 블로그",
    template: "limhoooo 블로그| %s",
  },
  description: "프론트엔드 개발자를 위한 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className=" w-full relative">
        <Header />
        <main className="grow max-w-screen-xl flex flex-col mx-auto p-4 pb-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
