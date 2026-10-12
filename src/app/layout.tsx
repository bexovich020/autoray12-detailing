import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const body = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-body", display: "swap" });
const display = Oswald({ subsets: ["latin", "cyrillic"], variable: "--font-display", display: "swap" });
export const metadata: Metadata = {
  title: "AutoRay12 Detailing — искусство деталей | Актау",
  description: "Детейлинг в Актау: PPF, полировка, химчистка, шумоизоляция и VIP-мойка. AutoRay12, 25-й микрорайон, 48/3. Запись в WhatsApp.",
  robots: { index: false, follow: false },
  openGraph: { title: "AutoRay12 Detailing · Актау", description: "Искусство деталей. Запись в WhatsApp.", locale: "ru_RU", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${body.variable} ${display.variable}`}><a className="skip-link" href="#main">К содержанию</a>{children}<Analytics /></body></html>;
}
