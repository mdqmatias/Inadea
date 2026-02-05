import Image from "next/image";
import content from "@/data/content.json";
import InternalHero from "@/components/Sections/InternalHero";
import Link from "next/link";

export default function Cardioproteccion() {
  const { cardioproteccion } = content;

  return (
    <div className="bg-white min-h-screen">
      <InternalHero 
        category="Protocolo Clínico"
        title="Cardioprotección Integral"
        subtitle="Sistemas inteligentes supervisados por especialistas para garantizar una respuesta efectiva ante la muerte súbita."
        image="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="section-padding overflow-hidden">
        <div className="w-full flex flex-col gap-24 lg:gap-32">
          {/* Contenido Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="flex flex-col gap-10 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start reveal">
                <div className="flex flex-col gap-4">
                   <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Experticia Médica</span>
                   <h2 className="text-brand-blue leading-[0.9] text-5xl md:text-7xl uppercase font-black tracking-tighter">Más que <br className="hidden lg:block"/> instalar un DEA</h2>
                </div>
                <div className="flex flex-col gap-8 text-brand-dark/70 text-xl md:text-2xl font-bold leading-relaxed max-w-xl">
                   <p>
                      La cardioprotección real requiere de un diseño estratégico integral supervisado por **médicos especialistas**.
                   </p>
                   <p className="border-l-[6px] border-brand-teal/30 pl-8 italic text-brand-teal">
                      En Inadea, transformamos espacios físicos en áreas de supervivencia certificados bajo normas internacionales.
                   </p>
                </div>
                <Link href="/contacto" className="btn-premium bg-brand-blue text-white shadow-2xl px-14 py-6 impact-shadow">
                   Consultar Especialista
                </Link>
             </div>
             
             <div className="relative order-1 lg:order-2 max-w-xl mx-auto lg:mx-0 reveal delay-300">
                <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden border-[10px] border-brand-gray/50 shadow-2xl group impact-shadow">
                   <Image 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000" 
                    alt="Capacitación médica Inadea" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                   />
                </div>
             </div>
          </div>

          {/* Pasos */}
          <div className="flex flex-col gap-16 lg:gap-24">
            <div className="text-center reveal">
               <span className="text-brand-teal font-black uppercase tracking-[0.6em] text-[10px] mb-4 block">Nuestra Metodología</span>
               <h2 className="text-brand-blue text-4xl md:text-6xl uppercase font-black tracking-tighter">El Camino a la Certificación</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {cardioproteccion.steps.map((step, i) => (
                <div key={step.id} className={`group bg-brand-gray/30 p-10 lg:p-12 rounded-[3.5rem] border border-transparent hover:border-brand-teal/20 hover:bg-white transition-all duration-700 flex flex-col items-center text-center gap-8 shadow-sm hover:shadow-2xl reveal delay-${i * 100} hover:-translate-y-2`}>
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-white text-3xl font-black shadow-xl group-hover:bg-brand-teal transition-all duration-500 impact-shadow">
                    {step.id}
                  </div>
                  <div className="flex flex-col gap-5">
                    <h3 className="text-xl font-black text-brand-blue uppercase tracking-tight group-hover:text-brand-teal transition-colors leading-tight">{step.title}</h3>
                    <p className="text-brand-dark/50 font-bold text-sm leading-relaxed line-clamp-4">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Cita */}
      <section className="py-32 bg-brand-dark overflow-hidden relative group section-padding reveal">
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-teal/5 blur-[150px] rounded-full" />
         <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 relative z-10 text-center">
            <h2 className="text-white text-3xl md:text-5xl italic tracking-tighter normal-case leading-tight font-black">
               &ldquo;Nuestra misión es <span className="text-brand-teal">garantizar sobrevida</span> mediante la experticia médica de nuestro cuerpo docente.&rdquo;
            </h2>
            <div className="w-32 h-1.5 bg-brand-red rounded-full shadow-[0_0_20px_rgba(227,30,36,0.5)]" />
            <Link href="/nosotros" className="text-white/30 font-black uppercase tracking-[0.5em] text-[11px] hover:text-brand-teal transition-all">Conocé a nuestro equipo médico →</Link>
         </div>
      </section>
    </div>
  );
}
