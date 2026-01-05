import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/pages/navbar/navbar";
import AOSWrapper from "../components/AOSWrapper";
import PageTransition from "@/components/PageTransition";
import SplashCursorWrapper from "@/components/SplashCursorWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Araby Hossain Abid - Full-Stack Developer",
  description: "Skilled full-stack web developer specializing in Next.js, React, TypeScript, Node.js, and modern web technologies. Building fast, secure, and scalable applications.",
  icons: { icon: "/images/logo.svg" },
  keywords: ["Full-Stack Developer", "Next.js", "React", "TypeScript", "Web Development", "Araby Hossain Abid"],
  authors: [{ name: "Araby Hossain Abid" }],
  openGraph: {
    title: "Araby Hossain Abid - Full-Stack Developer",
    description: "Skilled full-stack web developer specializing in modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSWrapper />
        <Navbar />
        <SplashCursorWrapper />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}