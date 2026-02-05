import Image from "next/image";
import content from "@/data/content.json";
import InternalHero from "@/components/Sections/InternalHero";
import Link from "next/link";

export default function Productos() {
  const { productos } = content;

  return (
    <div className="bg-white min-h-screen">
      <InternalHero 
        category="Catálogo Médico"
        title="Tecnología de Rescate"
        subtitle="Equipamiento DEA certificado por ANMAT, diseñado para la máxima efectividad clínica en situaciones críticas."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="section-padding bg-brand-gray/30">
        <div className="w-full flex flex-col gap-12 lg:gap-20">
          {productos.map((producto, i) => (
            <div 
              key={i} 
              className={`group flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-[4rem] overflow-hidden shadow-2xl border-2 border-brand-gray/20 reveal delay-${i * 100}`}
            >
              <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-[500px] bg-brand-gray overflow-hidden">
                 <Image 
                  src={i === 0 ? "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200"} 
                  alt={producto.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute top-8 right-8 z-20 bg-brand-teal text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl impact-shadow">Certificado ANMAT</div>
                 <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center gap-6 lg:gap-10">
                 <div className="flex flex-col gap-4">
                   <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-xs leading-none">{producto.brand}</span>
                   <h2 className="text-brand-blue leading-[0.95] text-4xl md:text-6xl uppercase font-black tracking-tighter">
                     {producto.name}
                   </h2>
                 </div>
                 
                 <p className="text-brand-dark/70 font-bold text-lg md:text-xl leading-relaxed max-w-xl">
                    {producto.impact}
                 </p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-5">
                       <h4 className="text-brand-blue font-black uppercase tracking-widest text-[11px] border-b-2 border-brand-teal/20 pb-2 w-fit">Especificaciones</h4>
                       <div className="flex flex-col gap-3">
                          {producto.features.slice(0, 4).map((feature, j) => (
                            <div key={j} className="flex items-center gap-3">
                               <div className="w-5 h-5 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                               </div>
                               <span className="text-brand-dark/80 font-black text-[11px] uppercase tracking-tight">{feature}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="bg-brand-gray/50 p-6 rounded-3xl border border-zinc-100/50 flex flex-col justify-center gap-4">
                       <p className="text-[11px] font-black text-brand-blue leading-tight uppercase tracking-widest">Garantía oficial y soporte técnico permanente.</p>
                       <Link href="/contacto" className="text-brand-teal font-black text-[11px] uppercase tracking-[0.2em] hover:translate-x-2 transition-all inline-flex items-center gap-2 group/link">
                          Consultar <span>→</span>
                       </Link>
                    </div>
                 </div>

                 <div className="pt-4">
                    <button className="btn-premium bg-brand-blue text-white w-full md:w-auto px-16">
                       Solicitar Presupuesto
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
