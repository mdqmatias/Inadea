import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";

export default function Home() {
  const { hero, confian, prensa } = content;

  // Duplicamos el contenido para un loop infinito fluido en el marquee
  const carouselLogos = [...confian, ...confian, ...confian, ...confian];
  const pressImages = [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  ];

  const latestPosts = prensa.slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-white text-brand-dark">
      {/* Sección Hero - Balanceada y Centrada */}
      <section className="relative min-h-[90svh] flex flex-col items-center justify-center pt-hero pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-brand-teal/5 blur-[120px] rounded-full -z-10 animate-pulse-soft opacity-60" />
        
        <div className="container-max px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-8 lg:gap-10 text-center lg:text-left z-20 reveal active">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-blue shadow-xl text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] leading-none self-center lg:self-start">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              Institución líder en vida
            </div>
            
            <h1 className="text-balance text-brand-blue tracking-tighter font-black leading-[0.9] text-5xl lg:text-7xl xl:text-8xl">
              ¿Sabías que sin un DEA la sobrevida es <span className="text-brand-teal italic">menor al 5%?</span>
            </h1>
            
            <p className="max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold text-brand-dark/60 text-lg md:text-xl text-pretty">
              Cada minuto cuenta. Con un desfibrilador y personal capacitado, la sobrevida puede aumentar <span className="text-brand-teal font-extrabold text-2xl">hasta un 70%.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4 italic">
              <Link href="/contacto" className="btn-premium bg-brand-blue text-white group px-8 md:px-10 py-5 md:py-6 shadow-xl shadow-brand-blue/20 whitespace-nowrap shrink-0">
                {hero.cta}
                <svg className="ml-3 group-hover:translate-x-2 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <button className="btn-premium bg-white text-brand-blue border-[3px] border-brand-gray shadow-md group px-8 md:px-10 py-5 md:py-6 whitespace-nowrap shrink-0">
                Video Institucional
                <div className="ml-3 w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center pl-0.5 group-hover:scale-110 transition-transform">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                </div>
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative z-10 hidden lg:block reveal active delay-200">
            {/* Contenedor de Imagen Proporcional al Container-Max */}
            <div className="relative group max-w-full ml-auto">
               <div className="relative aspect-[16/11] max-h-[60svh] rounded-extreme border-[10px] border-white shadow-2xl overflow-hidden bg-brand-gray/20">
                  <Image 
                     src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1400" 
                     alt="Equipo Médico DEA" 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-1000"
                     priority
                  />
               </div>

               {/* Badges - Posicionados sutilmente sobre el borde de la imagen */}
               <div className="absolute top-8 -right-8 glass-morphism p-3 lg:p-4 rounded-4xl shadow-2xl animate-float flex items-center gap-3 z-30 border-white">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-brand-teal flex items-center justify-center text-white shadow-lg">
                    <span className="font-black text-lg lg:text-xl tracking-tighter">70%</span>
                  </div>
                  <div className="flex flex-col pr-2">
                    <span className="text-[7px] lg:text-[8px] font-black uppercase text-brand-blue opacity-40 leading-none mb-1">Sobrevida</span>
                    <span className="text-[10px] lg:text-[12px] font-black text-brand-blue leading-none tracking-tight">RCP + DEA</span>
                  </div>
               </div>

               <div className="absolute bottom-6 left-6 glass-morphism p-3 lg:p-4 rounded-4xl shadow-2xl animate-float delay-1000 flex items-center gap-3 z-30 border-white">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-inner">
                    <svg width="14" height="14" className="lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <span className="text-[8px] lg:text-[10px] font-black text-brand-blue uppercase tracking-widest pr-2">Institución de Vida</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Carousel Infinito Fluido */}
      <section className="py-20 bg-white overflow-hidden border-y border-brand-gray/50 relative reveal">
        <div className="container-max flex flex-col gap-10">
          <div className="flex flex-col gap-2 items-center text-center px-6">
            <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-[10px]">Nuestro Respaldo</span>
            <h2 className="text-2xl md:text-4xl font-black text-brand-blue uppercase tracking-tighter">Instituciones que confían en Inadea</h2>
          </div>
          <div className="relative w-full overflow-hidden flex bg-brand-gray/40 py-12 md:py-16 border-y border-brand-blue/5">
            <div className="animate-marquee flex gap-12 md:gap-32 items-center">
              {carouselLogos.map((item, i) => (
                <span key={i} className="text-2xl md:text-3xl font-black text-brand-blue/50 italic tracking-tighter uppercase whitespace-nowrap hover:text-brand-teal transition-all duration-700 cursor-default hover:scale-110">
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
               <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.85]">Ley 27.159</h2>
            </div>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-black italic max-w-2xl leading-[1.2] text-balance text-center lg:text-left opacity-90">
              &ldquo;La prevención integral es una <span className="underline decoration-white/30 decoration-4">obligación institucional</span> en todo el país.&quot;
            </p>
            <Link href="/normativas" className="bg-white text-brand-red px-10 py-5 rounded-full font-black uppercase text-[9px] tracking-widest hover:scale-110 active:scale-95 transition-all shadow-xl whitespace-nowrap">
              Ver Normativa
            </Link>
         </div>
      </section>

      {/* Últimas Novedades - Prensa en Home (SYCNED CARD STYLE) */}
      <section className="section-padding bg-white reveal">
        <div className="container-max flex flex-col gap-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-[10px]">Cultura de Salud</span>
              <h2 className="text-brand-blue text-4xl md:text-6xl uppercase font-black tracking-tighter">Últimas Novedades</h2>
            </div>
            <Link href="/prensa" className="text-brand-blue font-black uppercase tracking-[0.3em] text-[11px] border-b-2 border-brand-teal pb-2 hover:text-brand-teal transition-all">Ver blog completo →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {latestPosts.map((post, i) => (
               <div key={i} className="group flex flex-col min-h-full bg-white rounded-[2.5rem] p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-100/50 reveal">
                 <div className="aspect-video bg-brand-gray rounded-[2rem] mb-6 overflow-hidden relative">
                    <Image 
                      src={pressImages[i] || pressImages[0]}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 glass-morphism px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-wider text-brand-blue">
                      {post.category}
                    </div>
                 </div>
                 <div className="px-4 pb-4 flex flex-col flex-grow">
                   <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest mb-3">{post.date}</span>
                   <h3 className="text-base md:text-lg font-bold text-brand-blue group-hover:text-brand-teal transition-colors tracking-tight uppercase leading-tight mb-4 min-h-[3.5rem] line-clamp-3">
                     {post.title}
                   </h3>
                   <p className="text-brand-dark/50 font-bold text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                     {post.excerpt}
                   </p>
                   <Link href={`/prensa/${i}`} className="text-brand-blue font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all mt-auto border-b-2 border-transparent group-hover:border-brand-teal w-fit pb-1">
                     Leer Nota <span>→</span>
                   </Link>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
