import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RYUW | Tokyo-based Producer / Artist / Sound Director",
  description:
    "Official website of Ryuw, a Tokyo-based producer, artist, and sound director creating dark, emotional, and futuristic music for artists, brands, film, and nightlife.",
  keywords: [
    "Ryuw",
    "Tokyo producer",
    "music production",
    "vocal mix",
    "R&B producer",
    "hip hop producer",
    "electronic music",
    "bass music",
    "sound design",
    "Wuloong Studio",
  ],
  openGraph: {
    title: "RYUW | Tokyo-based Producer / Artist / Sound Director",
    description:
      "Dark, emotional, and futuristic sound for artists, brands, film, and nightlife.",
    url: "https://ryuw-com.vercel.app",
    siteName: "RYUW",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RYUW | Tokyo-based Producer / Artist / Sound Director",
    description:
      "Dark, emotional, and futuristic sound for artists, brands, film, and nightlife.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
