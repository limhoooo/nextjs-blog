import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgressBar from "@/util/ProgressBar";

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
        <main className="grow max-w-screen-lg flex flex-col mx-auto p-4 pb-24">
          {children}
          <ProgressBar />
        </main>
        <Footer />
      </body>
    </html>
  );
}
