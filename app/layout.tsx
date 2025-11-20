import type { Metadata } from "next";
import { ThemeProvider } from "@/app/provider";
import { inter, robotoMono } from "./fonts";
import "./globals.css";
import DisableReactDevTools from "./disable-devtools";
export const metadata: Metadata = {
  title: "Youssef Temraz",
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
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
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
