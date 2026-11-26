import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const editorial = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-editorial", weight: ["400", "500", "600", "700"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });
export const metadata: Metadata = { title: "Studio de Beleza 1996 | Carol Tavares", description: "Cílios, unhas e beleza com hora marcada em Campinas. Agende seu horário com Carol Tavares." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${editorial.variable} ${sans.variable}`}>{children}</body></html>; }
