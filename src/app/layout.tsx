import type { Metadata } from "next";
import { Inter, Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radikalcore.com"),
  title: "RADIKAL POPPERS — RADIKAL CORE | Real Power. No Compromise.",
  description:
    "The famous bottle is back. RADIKAL CORE poppers — three uncompromising formulas: AMYL RAW-XT, MASS REACTION and AMYL PRIME — engineered for maximum intensity.",
  keywords: ["RADIKAL", "RADIKAL CORE", "RADIKAL POPPERS", "poppers", "amyl nitrite", "AMYL RAW-XT", "MASS REACTION", "AMYL PRIME"],
  openGraph: {
    title: "RADIKAL POPPERS — The Bottle Is Back",
    description: "Three uncompromising poppers formulas. Real Power. No Compromise.",
    type: "website",
    url: "https://radikalcore.com",
    siteName: "RADIKAL CORE",
  },
  twitter: {
    card: "summary_large_image",
    title: "RADIKAL POPPERS — The Bottle Is Back",
    description: "Three uncompromising poppers formulas. Real Power. No Compromise.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
