import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
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
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.fullName}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Cainta Baptist Church",
    "church Cainta",
    "Baptist church Rizal",
    "Sunday worship Cainta",
  ],
  openGraph: {
    title: `${site.name} · ${site.fullName}`,
    description: site.description,
    type: "website",
    locale: "en_PH",
    images: [{ url: "/logo.png", alt: site.name }],
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
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
