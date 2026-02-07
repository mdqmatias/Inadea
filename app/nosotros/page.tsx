import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";

export default function Nosotros() {
  const { nosotros } = content;

  const stats = [
    { value: "+20.000", label: "Personas Capacitadas" },
    { value: "+500", label: "Espacios Cardioasistidos" },
    { value: "15+", label: "Años de Trayectoria" },
    { value: "100%", label: "Compromiso con la Vida" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-blue">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-teal/10 blur-[100px] rounded-full" />
        <div className="container-max px-6 relative z-10 text-center lg:text-left">
          <div className="flex flex-col gap-6 max-w-4xl">
            <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-xs">Sobre Nosotros</span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              Pasión por la <span className="text-brand-teal">excelencia médica</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-bold leading-relaxed max-w-2xl text-pretty">
              Somos un equipo multidisciplinario liderado por cardiólogos, dedicados a transformar cada espacio en una oportunidad de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section - Balanced Hierarchy */}
      <section className="section-padding bg-white">
        <div className="container-max flex flex-col gap-24">
          {/* Top Section: Photo & Text Balanced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group mx-auto lg:mx-0 reveal active">
              {/* Altura balanceada: aspect-3/2 para evitar que sea muy alta en comparación al texto */}
              <div className="relative aspect-square lg:aspect-3/2 rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl max-w-md lg:max-w-none impact-shadow">
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Médicos especialistas Inadea" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            <div className="flex flex-col gap-12 reveal delay-200">
               <div className="flex flex-col gap-6">
                 <h2 className="text-brand-blue text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Misión & <span className="text-brand-teal">Visión</span></h2>
                 <p className="text-brand-dark/70 text-lg font-bold leading-relaxed">
                   En Inadea, nuestra misión es erradicar las muertes súbitas evitables mediante la implementación estratégica de tecnología y conocimiento médico. Visualizamos un país donde cada ciudadano sepa cómo actuar y cada institución esté equipada para salvar una vida.
                 </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                     </div>
                     <h3 className="text-xl font-black text-brand-blue uppercase">Compromiso</h3>
                     <p className="text-brand-dark/60 font-bold text-sm">Auditoría médica permanente en cada proyecto que certificamos.</p>
                  </div>
                  <div className="flex flex-col gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                     </div>
                     <h3 className="text-xl font-black text-brand-blue uppercase">Pasión</h3>
                     <p className="text-brand-dark/60 font-bold text-sm">Ponemos el corazón en la seguridad de las personas.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Bottom Section: Stats Grid occupying full row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 reveal delay-400">
            {stats.map((stat, i) => (
              <div key={i} className="bg-brand-gray/40 rounded-[3rem] p-10 flex flex-col items-center text-center gap-2 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-brand-gray group">
                <span className="text-4xl lg:text-5xl font-black text-brand-blue tracking-tighter group-hover:text-brand-teal transition-colors">{stat.value}</span>
                <span className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6 reveal">
         <div className="container-max bg-brand-teal rounded-[4rem] p-12 lg:p-20 text-center flex flex-col items-center gap-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/10 animate-pulse-soft" />
            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none z-10">¿Listo para ser una institución de vida?</h2>
            <Link href="/contacto" className="bg-white text-brand-blue px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:scale-110 transition-all shadow-xl z-10">
              Contacto con el Equipo
            </Link>
         </div>
      </section>
    </div>
  );
}
