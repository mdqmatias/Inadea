import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "INADEA | Institución Médica Especialista en Cardioprotección",
  description:
    "Especialistas en cardioprotección, RCP y desfibriladores (DEA). Un equipo médico comprometido con la vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased selection:bg-brand-red selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
