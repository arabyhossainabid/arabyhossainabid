import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/pages/navbar/navbar";
import DynamicAOSWrapper from "../components/DynamicAOSWrapper";
import SplashCursorWrapper from "@/components/SplashCursorWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.transparenttextures.com" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DynamicAOSWrapper />
        <SplashCursorWrapper />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}