import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio de Beleza 1996 | Carol Tavares",
  description:
    "Cílios, unhas e beleza com hora marcada em Campinas. Agende seu horário com Carol Tavares.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        style={
          {
            "--font-editorial": "Georgia, 'Times New Roman', serif",
            "--font-sans": "Arial, Helvetica, sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
