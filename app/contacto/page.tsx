import content from "@/data/content.json";
import InternalHero from "@/components/Sections/InternalHero";

export default function Contacto() {
  const { contacto } = content;

  return (
    <div className="bg-white min-h-screen">
      <InternalHero 
        category="Atención"
        title="Contacto Directo"
        subtitle="Nuestro cuerpo médico y equipo técnico están a su disposición para asesorarlo profesionalmente."
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="section-padding bg-brand-gray/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="flex flex-col gap-10 text-center lg:text-left items-center lg:items-start">
               <div className="flex flex-col gap-4">
                 <span className="text-brand-teal font-extrabold uppercase tracking-widest text-[10px] md:text-sm">Vías de Contacto</span>
                 <h2 className="text-brand-blue tracking-tight leading-tight uppercase font-extrabold">Estamos para <span className="text-brand-teal">ayudarlo</span></h2>
                 <p className="text-brand-dark/60 font-medium text-lg leading-relaxed max-w-md">Asesoramiento legal sobre la Ley 27.159, presupuestos o urgencias técnicas.</p>
               </div>
               
               <div className="grid grid-cols-1 gap-8 w-full">
                  {[
                    { label: "Llamada Directa", val: contacto.telefono, icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" },
                    { label: "Email Corporativo", val: contacto.email, icon: "M22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" },
                    { label: "Instagram", val: `@${contacto.instagram}`, icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-6 group">
                       <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-blue shadow-md group-hover:bg-brand-blue group-hover:text-white transition-all duration-400">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon}/></svg>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold tracking-widest text-brand-teal mb-1">{item.label}</span>
                          <span className="text-xl md:text-2xl font-extrabold text-brand-dark break-all">{item.val}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Premium Form - Lightened */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-zinc-100">
               <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-8">Envianos un Mensaje</h3>
               <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40 ml-4">Nombre</label>
                        <input type="text" className="bg-brand-gray border border-transparent focus:border-brand-teal/20 focus:bg-white rounded-2xl px-6 py-4 outline-none font-bold text-sm transition-all" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40 ml-4">Institución</label>
                        <input type="text" className="bg-brand-gray border border-transparent focus:border-brand-teal/20 focus:bg-white rounded-2xl px-6 py-4 outline-none font-bold text-sm transition-all" />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40 ml-4">Mensaje</label>
                     <textarea rows={4} className="bg-brand-gray border border-transparent focus:border-brand-teal/20 focus:bg-white rounded-[1.5rem] px-6 py-4 outline-none font-bold text-sm transition-all resize-none" />
                  </div>
                  <button className="btn-premium bg-brand-blue text-white rounded-2xl py-5 shadow-lg transition-all hover:scale-[1.02]">
                     Enviar Solicitud
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
