import type { Metadata, Viewport } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import AuthGuard from "@/components/AuthGuard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0d0a14",
};

export const metadata: Metadata = {
  title: "آموزش گواهینامه ایتالیایی – آزمون تمرینی",
  description:
    "آماده‌شو برای آزمون گواهینامه رانندگی ایتالیا (Patente B) با سوالات تمرینی، ترجمه فارسی مطالب و آموزش قوانین راهنمایی رانندگی.",
  keywords: "گواهینامه ایتالیایی, patente italiana, آزمون patente, codice della strada, آموزش رانندگی ایتالیا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${inter.variable} ${vazirmatn.variable} font-sans antialiased`}>
        <AuthGuard>
          {children}
        </AuthGuard>
      </body>
    </html>
  );
}
