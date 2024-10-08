import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { cn } from "@/libs/utils";
import { ThemeProvider } from "next-themes";
import BlurryBlob from "@/components/animate/background/blurry-blob";
import { Header } from "@/components/Header";
import { body_font, display_font } from "@/libs/fonts";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mb-10 min-h-screen bg-background font-sans antialiased  m-auto",

          body_font.variable,
          display_font.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <div>
              <BlurryBlob className="h-20 w-20 animate-move-vertical-5s bg-gradient-to-br from-amber-200 to-yellow-500 bottom-0 left-0 absolute" />
              <BlurryBlob className="h-20 w-20 animate-move-horizontal-9s bg-gradient-to-br from-teal-200 to-teal-500 top-32 left-32 absolute" />
              <BlurryBlob className="h-16 w-16 animate-move-vertical-5s bg-gradient-to-br from-yellow-500 to-pink-500 top-32 right-0 absolute" />
              <BlurryBlob className="h-16 w-16 animate-move-horizontal-7s bg-gradient-to-br from-violet-600 to-indigo-600 bottom-32 right-32 absolute" />
              <BlurryBlob className="h-32 w-32 animate-pop-blob bg-gradient-to-br from-cyan-500 to-indigo-500" />
              <Header />
              <div className="container mx-auto px-5">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
