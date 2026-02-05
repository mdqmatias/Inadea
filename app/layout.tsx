import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ScrollReveal from "@/components/UI/ScrollReveal";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Inadea | Institución Médica Lider en Cardioprotección",
  description: "Especialistas en la creación de áreas cardioasistidas, capacitación en RCP y provisión de desfibriladores (DEA).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${raleway.variable} font-sans antialiased selection:bg-brand-teal selection:text-white bg-white`}>
        {/* Contenedor de ancho completo - El fondo es blanco en todas partes */}
        <div className="site-wrapper min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}
