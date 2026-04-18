import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Patente Italiana – Quiz di Preparazione",
  description:
    "Preparati all'esame per la patente di guida italiana con quiz interattivi, segnali stradali e norme del Codice della Strada.",
  keywords: "patente italiana, quiz patente, esame patente, codice della strada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
