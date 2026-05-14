import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vvlogix | Plataforma SaaS Enterprise para Logística",
  description: "Plataforma SaaS enterprise para monitoreo operacional y automatización logística. Integración personalizada y adaptable a las reglas de tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetBrainsMono.variable} antialiased dark`}>
      <body>{children}</body>
    </html>
  );
}
