import Link from "next/link";
import content from "@/data/content.json";

export default function Footer() {
  const { contacto } = content;

  return (
    <footer className="bg-brand-dark pt-32 pb-16 px-10 lg:px-20 text-white border-t-2 border-white/5 relative overflow-hidden">
      {/* Elemento de fondo premium */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-teal/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse-soft" />
      
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24 lg:mb-32">
          <div className="flex flex-col gap-10 col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 w-fit group">
              <div className="w-16 h-16 bg-brand-teal rounded-[1.25rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-700">
                <span className="text-white font-black text-4xl">I</span>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-black text-3xl tracking-tighter">INADEA</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal mt-2">Institución Médica</span>
              </div>
            </Link>
            <p className="text-white/40 font-bold leading-relaxed max-w-sm text-lg">
               Referentes en la creación de áreas cardioasistidas y prevención de muerte súbita. Un equipo médico integral al servicio de la salud nacional.
            </p>
          </div>
          
          <div className="flex flex-col gap-10">
            <h5 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[11px]">Navegación</h5>
            <div className="flex flex-col gap-5 font-black text-xl">
              <Link href="/nosotros" className="hover:text-brand-teal transition-all w-fit opacity-70 hover:opacity-100 hover:translate-x-2">Nosotros</Link>
              <Link href="/cardioproteccion" className="hover:text-brand-teal transition-all w-fit opacity-70 hover:opacity-100 hover:translate-x-2">Cardioprotección</Link>
              <Link href="/productos" className="hover:text-brand-teal transition-all w-fit opacity-70 hover:opacity-100 hover:translate-x-2">Productos</Link>
              <Link href="/prensa" className="hover:text-brand-teal transition-all w-fit opacity-70 hover:opacity-100 hover:translate-x-2">Prensa</Link>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <h5 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[11px]">Contacto Directo</h5>
            <div className="flex flex-col gap-8">
              <a href={`mailto:${contacto.email}`} className="text-2xl md:text-3xl font-black hover:text-brand-teal transition-colors break-all leading-none tracking-tighter">
                {contacto.email}
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-white/20 font-black uppercase text-[10px] tracking-[0.3em]">Atención 24/7</span>
                <span className="text-white font-black text-3xl tracking-tighter">{contacto.telefono}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <h5 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[11px]">Sugerencias</h5>
            <a href={`https://instagram.com/${contacto.instagram}`} target="_blank" className="flex items-center gap-6 group bg-white/5 p-6 rounded-3xl hover:bg-white/10 transition-all duration-700 border border-white/10 shadow-xl">
              <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 group-hover:text-brand-teal group-hover:scale-110 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase font-black tracking-widest opacity-30 mb-2">Instagram</span>
                <span className="font-black text-2xl tracking-tighter">@{contacto.instagram}</span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Parte inferior del footer */}
        <div className="pt-16 border-t-2 border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="text-[11px] font-black text-white/30 uppercase tracking-[0.5em]">© {new Date().getFullYear()} Inadea Institución Médica</div>
           <div className="flex items-center gap-12 text-[11px] font-black text-white/30 uppercase tracking-[0.5em]">
              <Link href="/privacidad" className="hover:text-brand-teal transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-brand-teal transition-colors">Términos</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
