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
  title: "LogisTech | Control en Tiempo Real para Operaciones Logísticas Modernas",
  description: "Automatiza operaciones de almacén, reduce errores de inventario, mejora la trazabilidad FEFO y conecta todo tu ecosistema logístico en una sola plataforma inteligente.",
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
