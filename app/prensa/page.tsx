import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";
import InternalHero from "@/components/Sections/InternalHero";

export default function Prensa() {
  const { prensa } = content;
  const pressImages = [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="bg-white min-h-screen">
      <InternalHero 
        category="Actualidad"
        title="Impacto en los Medios"
        subtitle="Nuestra labor institucional reflejada en la prensa nacional y académica."
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="section-padding bg-brand-gray/20">
        <div className="w-full">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
             {prensa.map((post, i) => (
                <div key={i} className={`group flex flex-col min-h-full bg-white rounded-[2.5rem] p-4 shadow-lg hover:shadow-xl transition-all duration-500 border border-zinc-100/50 reveal`}>
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
                    <h2 className="text-lg font-black text-brand-blue group-hover:text-brand-teal transition-colors tracking-tight uppercase leading-tight mb-4 min-h-[3.5rem] line-clamp-3">
                      {post.title}
                    </h2>
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

      {/* Newsletter / Contact Section */}
      <section className="section-padding bg-white">
         <div className="w-full p-10 lg:p-20 rounded-[3rem] bg-brand-blue relative overflow-hidden flex flex-col items-center text-center gap-8 reveal">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            <span className="relative z-10 text-brand-teal font-extrabold uppercase tracking-[0.4em] text-xs">Atención Médica</span>
            <h2 className="relative z-10 text-white text-3xl md:text-5xl font-extrabold tracking-tighter uppercase leading-none max-w-3xl">¿Necesita asesoramiento profesional?</h2>
            <p className="relative z-10 text-white/70 text-lg max-w-xl font-medium">Nuestro cuerpo médico está disponible para coordinar una auditoría técnica en su institución.</p>
            <Link href="/contacto" className="relative z-10 bg-white text-brand-blue px-14 py-6 rounded-full font-extrabold uppercase text-xs tracking-widest hover:scale-110 transition-all shadow-2xl">
              Contactar Ahora
            </Link>
         </div>
      </section>
    </div>
  );
}
