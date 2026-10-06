import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière OFM | Creator Management Agency",
  description: "Lumière OFM is a transparent, professional creator management agency that helps models focus on creating while we handle the business.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
  openGraph: {
    title: "Lumière OFM | Creator Management Agency",
    description: "Lumière OFM is a transparent, professional creator management agency that helps models focus on creating while we handle the business.",
    url: "https://lumiereofm.com",
    siteName: "Lumière OFM",
    images: [
      {
        url: "https://lumiereofm.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumière OFM - Creator Management Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière OFM | Creator Management Agency",
    description: "Lumière OFM is a transparent, professional creator management agency that helps models focus on creating while we handle the business.",
    images: ["https://lumiereofm.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
