import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";

export default function Home() {
  const { hero, confian, prensa } = content;

  const carouselLogos = [...confian, ...confian, ...confian];
  const pressImages = [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Sección Hero - Control estricto de altura para Laptops */}
      <section className="relative min-h-[90svh] lg:min-h-[95svh] flex flex-col items-center justify-center pt-hero pb-20 overflow-hidden">
        {/* Resplandor decorativo sutil - Sin apariencia de caja */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-brand-teal/5 blur-[120px] rounded-full -z-10 animate-pulse-soft opacity-60" />
        
        <div className="container-max px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-10 text-center lg:text-left z-20 reveal active">
            {/* Etiqueta - Ahora a salvo del solapamiento del header */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-blue shadow-xl text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] leading-none self-center lg:self-start">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              Institución líder en vida
            </div>
            
            <h1 className="text-balance text-brand-blue tracking-tighter font-black leading-[0.9] text-5xl lg:text-7xl xl:text-8xl">
              ¿Sabías que sin un DEA la sobrevida es <br className="hidden xl:block"/>
              <span className="text-brand-teal italic">menor al 5%?</span>
            </h1>
            
            <p className="max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold text-brand-dark/60 text-lg md:text-xl">
              Cada minuto cuenta. Con un desfibrilador y personal capacitado, la sobrevida puede aumentar <span className="text-brand-teal font-extrabold text-2xl">hasta un 70%.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4 italic">
              <Link href="/contacto" className="btn-premium bg-brand-blue text-white group px-12 md:px-14 py-5 md:py-6 shadow-xl shadow-brand-blue/20">
                {hero.cta}
                <svg className="ml-3 group-hover:translate-x-2 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <button className="btn-premium bg-white text-brand-blue border-[3px] border-brand-gray shadow-md group px-12 md:px-14 py-5 md:py-6">
                Video Institucional
                <div className="ml-3 w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center pl-0.5 group-hover:scale-110 transition-transform">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                </div>
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative z-10 hidden lg:block reveal active delay-200">
            {/* Contenedor de Imagen - Escalado para altura de Laptop */}
            <div className="relative aspect-[4/5] max-h-[50svh] rounded-extreme border-[10px] border-white shadow-2xl overflow-hidden mx-auto">
               <Image 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
                  alt="Equipo Médico DEA" 
                  fill 
                  className="object-cover"
                  priority
               />
            </div>

            {/* Badges - Premium pero más pequeños para seguridad de altura */}
            <div className="absolute -top-6 -right-6 glass-morphism p-5 rounded-premium shadow-2xl animate-float flex items-center gap-4 z-30 border-white">
               <div className="w-14 h-14 rounded-2xl bg-brand-teal flex items-center justify-center text-white shadow-lg">
                 <span className="font-black text-2xl">70%</span>
               </div>
               <div className="flex flex-col pr-2">
                 <span className="text-[9px] font-black uppercase text-brand-blue opacity-40 leading-none mb-1">Sobrevida</span>
                 <span className="text-sm font-black text-brand-blue leading-none">RCP + DEA</span>
               </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-morphism p-5 rounded-premium shadow-2xl animate-float delay-1000 flex items-center gap-4 z-30 border-white">
               <div className="w-11 h-11 rounded-2xl bg-brand-red flex items-center justify-center text-white shadow-inner">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
               </div>
               <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest pr-2">Institución de Vida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Contenido centrado con fondo fluido */}
      <section className="py-20 bg-white overflow-hidden border-y border-brand-gray/50 relative reveal">
        <div className="container-max flex flex-col gap-10">
          <div className="flex flex-col gap-2 items-center text-center px-6">
            <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-[10px]">Nuestro Respaldo</span>
            <h2 className="text-2xl md:text-4xl font-black text-brand-blue uppercase tracking-tighter">Instituciones que confían en Inadea</h2>
          </div>
          <div className="relative w-full overflow-hidden flex whitespace-nowrap bg-brand-gray/40 py-12 md:py-16 border-y border-brand-blue/5">
            <div className="animate-marquee flex gap-12 md:gap-24 items-center px-12">
              {carouselLogos.map((item, i) => (
                <span key={i} className="text-3xl md:text-5xl font-black text-brand-blue/10 italic tracking-tighter uppercase whitespace-nowrap hover:text-brand-teal transition-all duration-700 cursor-default opacity-50 hover:opacity-100">
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Especialidad */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-video rounded-extreme overflow-hidden shadow-2xl border-2 border-brand-gray group reveal">
             <Image 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
              alt="Especialistas Médicos Inadea" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
             />
          </div>
          <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start reveal delay-200">
             <div className="flex flex-col gap-3">
               <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-[10px]">Líderes en Argentina</span>
               <h2 className="text-brand-blue leading-[0.95] text-4xl md:text-6xl lg:text-7xl uppercase font-black tracking-tighter">Expertos en <span className="text-brand-teal">Salud Cardiovascular</span></h2>
             </div>
             <p className="text-brand-dark/70 text-lg md:text-xl font-bold leading-relaxed max-w-xl">
               Brindamos auditoría médica permanente, asegurando que cada espacio cardioasistido cumpla con los estándares más altos del país.
             </p>
             <Link href="/nosotros" className="btn-premium bg-brand-blue text-white rounded-full px-12 py-5 shadow-xl shadow-brand-blue/20">
               Conocé al Equipo Médico
             </Link>
          </div>
        </div>
      </section>

      {/* Ley */}
      <section className="bg-brand-red py-20 px-8 relative overflow-hidden reveal">
         <div className="absolute inset-0 bg-black/5" />
         <div className="container-max flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
            <div className="flex flex-col gap-2 text-center lg:text-left">
               <span className="text-white/70 font-black uppercase text-[10px] tracking-[0.3em] mb-1">Normativa Nacional</span>
               <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">Ley 27.159</h2>
            </div>
            <p className="text-white text-2xl md:text-4xl font-black italic max-w-2xl leading-[1.1] text-balance text-center lg:text-left">
              &ldquo;La prevención integral es una <span className="underline decoration-white/30 decoration-4">obligación institucional</span> en todo el país.&rdquo;
            </p>
            <Link href="/normativas" className="bg-white text-brand-red px-12 py-5 rounded-full font-black uppercase text-[9px] tracking-widest hover:scale-110 active:scale-95 transition-all shadow-xl">
              Ver Normativa
            </Link>
         </div>
      </section>
    </div>
  );
}
