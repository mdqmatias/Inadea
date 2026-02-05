import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";

// Mock content for the internal article to make it feel "full"
const ARTICLE_CONTENT = [
  {
    type: "paragraph",
    text: "En la Argentina, se estima que ocurren aproximadamente 40.000 muertes súbitas al año. La mayoría de estos casos suceden fuera del ámbito hospitalario, lo que resalta la importancia crítica de contar con áreas cardioasistidas preparadas para una intervención inmediata. La medicina moderna ha demostrado que el tiempo es el factor determinante: cada minuto que pasa sin maniobras de RCP y desfibrilación reduce las posibilidades de supervivencia en un 10%."
  },
  {
    type: "heading",
    text: "La importancia del Desfibrilador Externo Automático (DEA)"
  },
  {
    type: "paragraph",
    text: "Un DEA es un dispositivo inteligente que guía al rescatista durante todo el proceso. Contrario a la creencia popular, el equipo no aplica una descarga si el paciente no la necesita, lo que brinda total seguridad legal y médica a quien lo utiliza. La Ley 27.159 establece la obligatoriedad de estos equipos en espacios de concurrencia masiva, buscando federalizar el acceso a la desfibrilación."
  },
  {
    type: "quote",
    text: "La cardioprotección no es un lujo corporativo, es un derecho humano fundamental que garantiza que ante un evento cardíaco, todos tengamos una segunda oportunidad.",
    author: "Dr. Jorge López - Director Médico Inadea"
  },
  {
    type: "paragraph",
    text: "Nuestra institución no solo provee el equipamiento, sino que audita permanentemente el sistema. Esto incluye el chequeo de parches, baterías, y fundamentalmente, el re-entrenamiento del personal. Un DEA sin mantenimiento o un personal sin práctica es un riesgo que ninguna empresa debería correr."
  }
];

export default function PostPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const post = content.prensa[id];
  
  const pressImages = [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  ];

  if (!post) return <div className="min-h-screen flex items-center justify-center font-black uppercase tracking-widest text-brand-blue">Post no encontrado.</div>;

  return (
    <article className="bg-white min-h-screen">
      {/* Article Hero - Premium Immersive */}
      <section className="relative min-h-[65svh] lg:min-h-[80svh] w-full flex flex-col items-center justify-end overflow-hidden pb-20 lg:pb-32 px-6 text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src={pressImages[id] || pressImages[0]} 
            alt={post.title} 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        </div>

        <div className="max-w-5xl w-full relative z-10 flex flex-col gap-12 items-center reveal active">
          <Link href="/prensa" className="group flex items-center gap-4 text-brand-teal font-black uppercase tracking-[0.6em] text-[10px] md:text-xs">
             <span className="transition-transform group-hover:-translate-x-3 duration-500">←</span> Volver a prensa
          </Link>
          <div className="flex flex-col gap-6">
            <span className="text-white/40 font-black uppercase tracking-[0.5em] text-[10px] md:text-sm">
              {post.category} | {post.date}
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black normal-case tracking-tighter leading-[0.95] text-balance">
              {post.title}
            </h1>
          </div>
          <div className="w-24 h-2 bg-brand-teal rounded-full shadow-[0_0_20px_#1dbba8]" />
        </div>
        
        {/* Soft bottom transition */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Column */}
      <div className="site-wrapper bg-white py-24">
        <div className="max-w-4xl mx-auto px-8 flex flex-col gap-16 lg:gap-24">
           {/* Elite Intro */}
           <p className="text-brand-dark text-3xl md:text-4xl font-black leading-[0.95] tracking-tighter italic border-l-[12px] border-brand-teal pl-10 md:pl-16 py-4 text-balance shadow-sm bg-brand-gray/30 p-10 rounded-[2.5rem]">
              {post.excerpt}
           </p>
           
           {/* Detailed Body */}
           <div className="flex flex-col gap-12 text-brand-dark/80 text-xl md:text-2xl font-bold leading-relaxed tracking-tight">
              {ARTICLE_CONTENT.map((block, i) => (
                <div key={i} className="reveal">
                  {block.type === "paragraph" && (
                    <p className="mb-8">{block.text}</p>
                  )}
                  
                  {block.type === "heading" && (
                    <h2 className="text-brand-blue text-3xl md:text-5xl font-black uppercase tracking-tighter mt-16 mb-10 leading-none">
                      {block.text}
                    </h2>
                  )}
                  
                  {block.type === "quote" && (
                    <blockquote className="my-24 relative p-12 lg:p-20 bg-brand-gray/50 rounded-[4rem] border-2 border-brand-teal/10 group overflow-hidden shadow-2xl">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full -translate-y-24 translate-x-24 animate-pulse-soft" />
                       <div className="relative z-10 flex flex-col gap-12">
                         <span className="text-brand-teal text-8xl font-serif leading-none italic opacity-30 select-none">&ldquo;</span>
                         <p className="text-brand-blue text-3xl md:text-5xl font-black tracking-tighter leading-[1] text-balance">
                           {block.text}
                         </p>
                         <footer className="flex flex-col items-end gap-3 text-right">
                           <div className="w-20 h-2 bg-brand-teal rounded-full" />
                           <span className="uppercase font-black tracking-[0.3em] text-xs text-brand-teal">{block.author}</span>
                         </footer>
                       </div>
                    </blockquote>
                  )}
                </div>
              ))}
           </div>

           {/* Tags & Sharings */}
           <div className="pt-24 mt-12 border-t-4 border-brand-gray/50 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
                 <span className="text-brand-dark/30 font-black uppercase text-[10px] tracking-widest mr-4">Etiquetas:</span>
                 {["Medicina", "Cardioprotección", "DEA"].map(tag => (
                   <span key={tag} className="px-6 py-3 bg-brand-gray/80 rounded-2xl text-[11px] font-black uppercase tracking-widest text-brand-blue hover:bg-brand-teal hover:text-white cursor-pointer transition-all shadow-sm">#{tag}</span>
                 ))}
              </div>
              
              <div className="flex items-center gap-6">
                 <button className="w-14 h-14 rounded-2xl bg-brand-gray flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all shadow-md group">
                    <svg className="group-hover:scale-110 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                 </button>
                 <button className="w-14 h-14 rounded-2xl bg-brand-gray flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all shadow-md group">
                    <svg className="group-hover:scale-110 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2-2 v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                 </button>
              </div>
           </div>
        </div>
      </div>

      {/* Recommendations */}
      <section className="py-32 bg-brand-gray/10">
         <div className="max-w-6xl mx-auto px-8">
            <h4 className="text-2xl md:text-3xl font-black text-brand-blue uppercase tracking-tighter text-center mb-24 underline decoration-brand-teal decoration-4 underline-offset-8">Lecturas Recomendadas</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {content.prensa.filter((_, i) => i !== id).slice(0, 2).map((other, i) => (
                 <Link key={i} href={`/prensa/${content.prensa.indexOf(other)}`} className="group flex flex-col md:flex-row gap-8 bg-white p-8 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all border-2 border-brand-gray/30 reveal">
                    <div className="relative w-full md:w-48 aspect-video md:aspect-square rounded-3xl overflow-hidden shrink-0 shadow-lg">
                      <Image 
                        src={pressImages[content.prensa.indexOf(other)] || pressImages[0]} 
                        alt={other.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-5">
                       <span className="text-brand-teal font-black uppercase text-[10px] tracking-[0.3em]">{other.category}</span>
                       <h5 className="text-2xl font-black text-brand-dark group-hover:text-brand-blue transition-colors leading-none uppercase tracking-tighter">{other.title}</h5>
                       <span className="text-brand-blue font-black text-xs uppercase flex items-center gap-3 tracking-widest group-hover:gap-6 transition-all">Saber más <span className="text-xl">→</span></span>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </article>
  );
}
