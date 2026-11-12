import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import StoreProvider from "@/store/StoreProvider";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "400 800",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const fraunces = localFont({
  src: "./fonts/fraunces-latin.woff2",
  variable: "--font-fraunces",
  weight: "500 700",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Carolina Roof Repair | Hail-Proof Roofing in the Carolinas",
    template: "%s | Carolina Roof Repair",
  },
  description: site.description,
  keywords: [
    "Carolina roof repair",
    "roof replacement North Carolina",
    "Euroshield installer",
    "hail proof roof",
    "roof inspection Norwood NC",
    "gutter installation Charlotte",
    "emergency roof tarping",
    "roof leak repair",
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: "Carolina Roof Repair | Hail-Proof Roofing in the Carolinas",
    description: site.description,
    images: [
      {
        url: "/images/heroBg.webp",
        width: 2560,
        height: 1708,
        alt: "Roofing project by Carolina Roof Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Roof Repair | Hail-Proof Roofing",
    description: site.description,
    images: ["/images/heroBg.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Roofing contractor",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081c2e",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-cream text-ink antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
