import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";
import InternalHero from "@/components/Sections/InternalHero";
import { notFound } from "next/navigation";

export default function PostPage({ params }: { params: { id: string } }) {
  const { prensa } = content;
  const postIndex = parseInt(params.id);
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
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-8 text-brand-dark/80 text-lg md:text-xl font-medium leading-relaxed">
              <p className="text-2xl md:text-3xl font-black text-brand-blue leading-tight mb-4 italic">
                {post.excerpt}
              </p>
              
              <div className="flex flex-col gap-6">
                <p>
                  En un esfuerzo constante por elevar los estándares de seguridad cardiovascular en Argentina, Inadea continúa liderando iniciativas que transforman espacios públicos y privados en áreas de supervivencia. La implementación de desfibriladores externos automáticos (DEA) y la capacitación masiva en RCP son los pilares fundamentales de nuestra misión.
                </p>
                <p>
                  Según las últimas normativas y estudios clínicos, la intervención temprana en caso de un paro cardiorrespiratorio puede significar la diferencia entre la vida y la muerte. Nuestro equipo de cardiólogos auditores asegura que cada instalación no sea solo técnica, sino estratégica y clínicamente efectiva.
                </p>
                <div className="my-10 p-8 lg:p-12 bg-brand-gray/30 rounded-[3rem] border-l-[10px] border-brand-teal italic font-black text-brand-blue text-xl md:text-2xl quote-shadow relative">
                   <span className="absolute -top-10 left-10 text-9xl text-brand-teal/20 opacity-50">&ldquo;</span>
                   La cardioprotección es una responsabilidad institucional que salva vidas todos los días. Nuestro compromiso es que no haya ni una muerte súbita evitable más en nuestro país.
                </div>
                <p>
                  Continuaremos trabajando junto a instituciones de todo tipo —desde hospitales hasta complejos deportivos y oficinas corporativas— para certificar que el Camino a la Certificación de Inadea se cumpla con rigurosidad, garantizando la máxima sobrevida posible ante emergencias.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-brand-gray/50 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-black">IN</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-brand-blue uppercase">Cuerpo Médico Inadea</span>
                    <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">Editorial Científico</span>
                  </div>
               </div>
               <div className="flex gap-4">
                  {/* Social Share Placeholders */}
                  <div className="w-10 h-10 rounded-full bg-brand-gray/50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-12">
             <div className="p-10 bg-brand-dark rounded-[3rem] text-white flex flex-col gap-6 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 blur-3xl rounded-full" />
                <h3 className="text-2xl font-black uppercase tracking-tighter">¿Su institución está preparada?</h3>
                <p className="text-white/50 font-bold leading-relaxed">
                  Ofrecemos consultoría gratuita para analizar su nivel de cardioprotección y cumplimiento de la Ley 27.159.
                </p>
                <Link href="/contacto" className="btn-premium bg-brand-teal text-white shadow-xl shadow-brand-teal/20 text-center">
                  Consultar Ahora
                </Link>
             </div>

             <div className="flex flex-col gap-8">
                <h4 className="text-lg font-black text-brand-blue uppercase tracking-widest border-b-2 border-brand-teal pb-4">Otras Notas Relacionadas</h4>
                <div className="flex flex-col gap-6">
                  {prensa.filter((_, i) => i !== postIndex).slice(0, 2).map((other, i) => (
                    <Link key={i} href={`/prensa/${prensa.indexOf(other)}`} className="group flex flex-col gap-3">
                       <span className="text-[10px] font-black text-brand-teal uppercase tracking-widest">{other.date}</span>
                       <h5 className="text-base font-black text-brand-blue group-hover:text-brand-teal transition-colors uppercase leading-tight">{other.title}</h5>
                    </Link>
                  ))}
                </div>
             </div>
          </aside>
        </div>
      </article>

      {/* Back to Blog */}
      <section className="pb-20">
        <div className="container-max flex justify-center">
           <Link href="/prensa" className="btn-premium bg-white text-brand-blue border-[3px] border-brand-gray px-12 py-5 shadow-lg flex items-center gap-3">
             <span className="text-xl">←</span> Volver a Noticias
           </Link>
        </div>
      </section>
    </div>
  );
}
