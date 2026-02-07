import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";
import InternalHero from "@/components/Sections/InternalHero";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { prensa } = content;
  const resolvedParams = await params;
  const postIndex = parseInt(resolvedParams.id);
  const post = prensa[postIndex];

  if (!post) {
    notFound();
  }

  const pressImages = [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="bg-white min-h-screen">
      <InternalHero 
        category={post.category}
        title={post.title}
        subtitle={post.date}
        image={pressImages[postIndex] || pressImages[0]}
      />

      <article className="section-padding">
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 px-6 md:px-10">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div className="flex flex-col gap-10 text-brand-dark/80 text-lg md:text-xl font-medium leading-relaxed">
              <p className="text-3xl md:text-4xl font-black text-brand-blue leading-[1.1] mb-6 italic tracking-tight">
                {post.excerpt}
              </p>
              
              <div className="flex flex-col gap-10">
                <p>
                  En el marco de nuestra misión institucional, Inadea continúa fortaleciendo la red de áreas cardioprotegidas en todo el territorio nacional. La seguridad cardiovascular no es solo una cuestión técnica, sino un compromiso ético con la preservación de la vida en espacios de alta concurrencia.
                </p>
                
                <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white my-6">
                   <Image 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                    alt="Capacitación médica" 
                    fill 
                    className="object-cover"
                   />
                </div>

                <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter mt-4">Un Estándar de Excelencia</h2>
                <p>
                  Nuestro protocolo de certificación garantiza que cada desfibrilador externo automático (DEA) instalado esté respaldado por una auditoría médica rigurosa. No se trata solo de contar con el equipo, sino de asegurar que el personal esté entrenado en maniobras de RCP de alta calidad y que el dispositivo esté siempre operativo.
                </p>

                <div className="my-10 p-12 lg:p-16 bg-brand-gray/40 rounded-[4rem] border-l-[16px] border-brand-teal italic font-black text-brand-blue text-2xl md:text-4xl quote-shadow relative reveal active">
                   <span className="absolute -top-12 left-10 text-9xl text-brand-teal/20 opacity-40">&ldquo;</span>
                   &ldquo;La diferencia entre una tragedia y una vida salvada son apenas unos segundos y una capacitación adecuada. En Inadea, trabajamos para que esos segundos siempre estén a favor de la vida.&quot;
                </div>

                <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter mt-4">Impacto Social y Académico</h2>
                <p>
                  A través de nuestras alianzas con instituciones académicas y gubernamentales, promovemos la cultura de la prevención. La Ley 27.159 es el marco legal, pero la conciencia social es el motor que realmente transforma nuestras ciudades en entornos seguros.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                   <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-xl border-8 border-brand-gray/20">
                      <Image 
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                        alt="Especialistas médicos"
                        fill
                        className="object-cover"
                      />
                   </div>
                   <div className="flex flex-col justify-center gap-8 px-4">
                      <h4 className="text-2xl font-black text-brand-teal uppercase tracking-widest">Capacitación Continua</h4>
                      <p className="text-lg text-brand-dark/60 font-bold leading-relaxed">
                        Realizamos talleres semanales para empresas y organismos públicos, certificando a más de 5,000 personas anualmente en técnicas de soporte vital básico.
                      </p>
                   </div>
                </div>

                <p>
                  Inadea reafirma su posición como referente nacional, no solo en la provisión de tecnología médica de vanguardia, sino en la creación de una conciencia colectiva sobre la importancia de estar preparados ante una emergencia cardiovascular. El camino a la excelencia continúa, con el firme objetivo de reducir la muerte súbita a su mínima expresión.
                </p>
              </div>
            </div>

            <div className="pt-16 border-t border-brand-gray/50 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white font-black text-xl shadow-xl">IN</div>
                  <div className="flex flex-col">
                    <span className="text-base font-black text-brand-blue uppercase">Cuerpo Médico Inadea</span>
                    <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Consejo Editorial Científico</span>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-brand-gray flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all cursor-pointer shadow-md hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-16">
             <div className="p-12 bg-brand-dark rounded-[4rem] text-white flex flex-col gap-8 relative overflow-hidden shadow-2xl border border-white/5 reveal active">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-teal/10 blur-[90px] rounded-full" />
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight">¿Su establecimiento cumple con la ley?</h3>
                <p className="text-white/50 font-bold leading-relaxed">
                  La Ley 27.159 establece la obligatoriedad de contar con DEAs en lugares públicos y privados. Evite sanciones y proteja vidas con nuestra asesoría.
                </p>
                <Link href="/contacto" className="btn-premium bg-brand-teal text-white shadow-xl shadow-brand-teal/20 text-center py-6 font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all">
                  Auditoría Gratuita
                </Link>
             </div>

             <div className="flex flex-col gap-10">
                <h4 className="text-xl font-black text-brand-blue uppercase tracking-widest border-b-4 border-brand-teal pb-6">Actualidad Inadea</h4>
                <div className="flex flex-col gap-8">
                  {prensa.filter((_, i) => i !== postIndex).slice(0, 3).map((other, i) => (
                    <Link key={i} href={`/prensa/${prensa.indexOf(other)}`} className="group flex flex-col gap-4 p-6 hover:bg-brand-gray rounded-[2.5rem] transition-all border border-transparent hover:border-brand-gray/50 shadow-sm hover:shadow-xl">
                       <span className="text-xs font-black text-brand-teal uppercase tracking-widest">{other.date}</span>
                       <h5 className="text-lg font-black text-brand-blue group-hover:text-brand-teal transition-colors uppercase leading-tight line-clamp-2">{other.title}</h5>
                    </Link>
                  ))}
                </div>
             </div>
          </aside>
        </div>
      </article>

      {/* Back to Blog */}
      <section className="pb-32 px-6">
        <div className="container-max flex justify-center">
           <Link href="/prensa" className="btn-premium bg-white text-brand-blue border-[4px] border-brand-gray px-16 py-7 shadow-2xl flex items-center gap-6 group hover:border-brand-teal transition-all">
             <span className="text-3xl group-hover:-translate-x-3 transition-transform">←</span> Volver al Portal de Prensa
           </Link>
        </div>
      </section>
    </div>
  );
}
