import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Baptist Church in Cainta, Rizal`,
    template: `%s · ${site.name}`,
  },
  description: `${site.description} ${site.heroMeta}.`,
  keywords: [
    "Cainta Baptist Church",
    "church Cainta",
    "Baptist church Rizal",
    "church near me Cainta",
    "Baptist church near me",
    "church in Cainta Rizal",
    "Sunday worship Cainta",
    "church Pasig near Cainta",
  ],
  openGraph: {
    title: `${site.name} · Baptist Church in Cainta, Rizal`,
    description: site.description,
    type: "website",
    locale: "en_PH",
    images: [{ url: "/hero-welcome-congregation.jpg", alt: site.name }],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen font-sans text-foreground">
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
