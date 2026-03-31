import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/provider"

import "./globals.css";
import DisableReactDevTools from "./disable-devtools";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
});
export const metadata: Metadata = {
  title: "Youssef Temraz Portfolio",
  description: "Modern and Responsive Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Disable React DevTools only for this project */}
        <DisableReactDevTools />
        <div className="z-0 pointer-events-none fixed inset-0 w-full h-full">
          <div className="hero-grid" />
          <div className="hero-overlay" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
