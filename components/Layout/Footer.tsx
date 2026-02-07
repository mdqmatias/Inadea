import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";

export default function Footer() {
  const { contacto } = content;

  return (
    <footer className="bg-brand-dark pt-24 pb-12 text-white relative overflow-hidden">
      {/* Elemento de fondo premium */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-teal/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse-soft" />
      
      <div className="container-max px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Col 1: Brand & Info */}
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Link href="/" className="group w-fit">
              <div className="relative w-40 h-10 transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/img/logoIconWhite.svg" 
                  alt="INADEA Logo White" 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/40 font-medium leading-relaxed max-w-sm text-sm">
               Referentes en la creación de áreas cardioasistidas y prevención de muerte súbita. Un equipo médico integral al servicio de la salud nacional.
            </p>
          </div>
          
          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h5 className="text-brand-teal font-black uppercase tracking-[0.3em] text-[10px]">Navegación</h5>
            <div className="flex flex-col gap-3 font-bold text-sm">
              <Link href="/nosotros" className="text-white/60 hover:text-brand-teal transition-all w-fit hover:translate-x-1">Nosotros</Link>
              <Link href="/cardioproteccion" className="text-white/60 hover:text-brand-teal transition-all w-fit hover:translate-x-1">Cardioprotección</Link>
              <Link href="/productos" className="text-white/60 hover:text-brand-teal transition-all w-fit hover:translate-x-1">Productos</Link>
              <Link href="/prensa" className="text-white/60 hover:text-brand-teal transition-all w-fit hover:translate-x-1">Prensa</Link>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <h5 className="text-brand-teal font-black uppercase tracking-[0.3em] text-[10px]">Contacto Directo</h5>
            <div className="flex flex-col gap-6">
              <a href={`mailto:${contacto.email}`} className="text-lg md:text-xl font-black hover:text-brand-teal transition-colors break-all leading-none tracking-tight">
                {contacto.email}
              </a>
              <div className="flex flex-col gap-1">
                <span className="text-white/20 font-black uppercase text-[9px] tracking-[0.2em]">Atención 24/7</span>
                <span className="text-white font-black text-xl md:text-2xl tracking-tight">{contacto.telefono}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Social */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <h5 className="text-brand-teal font-black uppercase tracking-[0.3em] text-[10px]">Redes</h5>
            <a href={`https://instagram.com/${contacto.instagram}`} target="_blank" className="flex items-center gap-4 group bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all duration-500 border border-white/5 shadow-xl w-fit lg:w-full">
              <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 group-hover:text-brand-teal group-hover:scale-110 transition-all duration-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] uppercase font-black tracking-widest opacity-30 mb-1">Instagram</span>
                <span className="font-black text-lg tracking-tighter">@{contacto.instagram}</span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Parte inferior del footer */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">© {new Date().getFullYear()} Inadea Institución Médica</div>
           <div className="flex items-center gap-8 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
              <Link href="/privacidad" className="hover:text-brand-teal transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-brand-teal transition-colors">Términos</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
