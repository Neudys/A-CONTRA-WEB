import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Contra",
  description: "Created by neudys Tejada",
  icons: {
    icon: [
      {
        url: "/light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/light.png.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
