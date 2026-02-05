"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Cardioprotección", href: "/cardioproteccion" },
    { name: "Productos", href: "/productos" },
    { name: "Prensa", href: "/prensa" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-4 md:py-5 pointer-events-none">
      <div className={`glass-morphism pointer-events-auto transition-all duration-700 rounded-full flex items-center justify-between w-full max-w-[1440px] shadow-2xl border border-white/40 ${scrolled ? 'h-[65px] px-8 scale-[0.985] -translate-y-2' : 'h-[80px] px-10'}`}>
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className={`bg-brand-blue rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-11 h-11'}`}>
            <span className={`text-white font-black transition-all ${scrolled ? 'text-lg' : 'text-xl'}`}>I</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-black tracking-tighter text-brand-blue leading-none transition-all ${scrolled ? 'text-lg' : 'text-xl'}`}>INADEA</span>
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-brand-teal leading-none mt-1 opacity-80">Institución Médica</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[11px] font-black uppercase tracking-widest h-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative h-full flex items-center group"
            >
              <span className={`transition-all duration-500 group-hover:text-brand-teal ${pathname === link.href ? 'text-brand-teal' : 'text-brand-blue/70'}`}>
                {link.name}
              </span>
              <div className={`absolute bottom-5 left-0 w-full h-[2px] bg-brand-teal rounded-full transition-all duration-700 origin-left ${pathname === link.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40'}`} />
            </Link>
          ))}
          <Link href="/contacto" className={`btn-premium bg-brand-blue text-white ml-2 transition-all shadow-xl shadow-brand-blue/10 ${scrolled ? 'py-2 px-6' : 'py-3 px-8'}`}>
            Consultar
          </Link>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 bg-brand-gray rounded-2xl"
        >
          <div className={`w-6 h-0.5 bg-brand-blue transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-brand-blue transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-brand-blue transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-24 px-4 lg:hidden z-40 animate-in fade-in slide-in-from-top-4 duration-500 pointer-events-auto">
           <div className="glass-morphism rounded-[2.5rem] p-10 shadow-2xl border border-white/20 flex flex-col gap-8 mx-auto max-w-[500px]">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-black text-brand-blue uppercase tracking-tight hover:text-brand-teal transition-all flex items-center justify-between group"
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-brand-teal">→</span>
                </Link>
              ))}
              <Link 
                href="/contacto" 
                onClick={() => setMobileMenuOpen(false)}
                className="btn-premium bg-brand-blue text-white py-5 rounded-2xl text-center font-black uppercase tracking-widest mt-4 shadow-xl"
              >
                Contacto
              </Link>
           </div>
        </div>
      )}
    </nav>
  );
}
