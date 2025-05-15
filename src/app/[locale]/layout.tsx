import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Studio Nouvel",
  description: "Studio Nouvel - Musique à l'image - Albums = Enregistrement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body className={`${inter.className}  antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
