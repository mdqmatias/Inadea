import Image from "next/image";
import content from "@/data/content.json";
import InternalHero from "@/components/Sections/InternalHero";

export default function Nosotros() {
  const stats = [
    { label: "Personas Capacitadas", value: "+20.000", description: "En técnicas de RCP y Primeros Auxilios médicos." },
    { label: "Áreas Cardioasistidas", value: "+500", description: "Certificadas bajo normativa legal nacional." },
    { label: "Trayectoria Médica", value: "15+", description: "Años liderando la salud cardiovascular en Argentina." },
    { label: "Vidas Protegidas", value: "24/7", description: "Auditoría médica y supervisión permanente." }
  ];

  return (
    <div className="bg-white min-h-screen">
      <InternalHero 
        category="Trayectoria"
        title="Nuestra Institución"
        subtitle="Un equipo de cardiólogos y especialistas dedicado exclusivamente a garantizar la sobrevida."
        image="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="section-padding overflow-hidden">
        <div className="w-full flex flex-col gap-24 lg:gap-32">
          {/* Top Section: Photo & Text Balanced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group mx-auto lg:mx-0 reveal active">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl max-w-sm lg:max-w-none impact-shadow">
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Médicos especialistas Inadea" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            <div className="flex flex-col gap-10 text-center lg:text-left items-center lg:items-start reveal active delay-200">
              <div className="flex flex-col gap-5">
                <span className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">Misión & Visión</span>
                <h2 className="text-brand-blue leading-[0.95] text-5xl md:text-7xl uppercase font-black tracking-tighter text-balance">Experticia Clínica al <span className="text-brand-teal">Servicio Social</span></h2>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-brand-dark/80 text-xl md:text-2xl font-black leading-tight tracking-tight">
                  Referentes en la transformación de la respuesta ante emergencias cardiovasculares en la Argentina. 
                </p>
                <div className="flex flex-col gap-6 text-brand-dark/50 text-lg font-bold leading-relaxed max-w-xl">
                  <p>Inadea nació para garantizar que la cardioprotección sea un sistema integral liderado por médicos y no solo una instalación técnica.</p>
                  <p>Auditamos, capacitemos y certificamos bajo los procesos científicos más exigentes del mundo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid - Moved Below to balance text/image above */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full reveal">
             {stats.map((stat, i) => (
               <div key={i} className="flex flex-col p-8 lg:p-10 bg-brand-gray/50 rounded-[3rem] border border-zinc-100 group hover:bg-brand-blue transition-all duration-700 hover:-translate-y-2 shadow-sm">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-blue group-hover:text-brand-teal transition-colors leading-none mb-3">{stat.value}</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-teal group-hover:text-white transition-colors mb-5">{stat.label}</span>
                  <p className="text-sm font-bold text-brand-dark/40 leading-relaxed group-hover:text-white/60 transition-colors">{stat.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="section-padding bg-brand-dark text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-teal/5 blur-[150px] rounded-full" />
         <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative z-10">
            {[
              { title: "Seguridad Médica", desc: "Aval científico constante en cada decisión técnica e institucional.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { title: "Compromiso Humano", desc: "Formamos personas para salvar vidas reales en situaciones críticas.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
              { title: "Respuesta Inmediata", desc: "Reducimos tiempos de intervención con protocolos ágiles.", icon: "M12 6v6l4 2" }
            ].map((valor, i) => (
              <div key={i} className="flex flex-col items-center md:items-start gap-8 text-center md:text-left reveal">
                 <div className="w-16 h-16 rounded-2xl bg-brand-teal/20 flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform shadow-xl">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d={valor.icon}/></svg>
                 </div>
                 <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{valor.title}</h3>
                    <p className="text-white/40 text-lg font-bold leading-relaxed max-w-xs">{valor.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
