import content from "@/data/content.json";

export default function Home() {
  const { hero, cardioproteccion, nosotros, ley } = content;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation - Simple Floating Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-center p-6">
        <div className="glass-morphism px-8 py-3 rounded-full flex items-center justify-between w-full max-w-5xl shadow-sm border border-black/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">INADEA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#cardioproteccion" className="hover:text-brand-red transition-colors">Cardioprotección</a>
            <a href="#nosotros" className="hover:text-brand-red transition-colors">Nosotros</a>
            <a href="#productos" className="hover:text-brand-red transition-colors">Productos</a>
            <a href="#contacto" className="bg-brand-red text-white px-5 py-2 rounded-full hover:bg-brand-red/90 transition-all impact-shadow">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-red/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              Actuar hoy salva vidas
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              {hero.title.split(' ').map((word, i) => (
                <span key={i} className={word.includes('5%') || word.includes('probabilidades') ? 'text-brand-red inline-block mr-2' : 'inline-block mr-2'}>
                  {word}
                </span>
              ))}
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="#contacto" className="bg-brand-red text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all impact-shadow flex items-center justify-center gap-2">
                {hero.cta}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#video" className="px-8 py-4 rounded-full text-lg font-bold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center justify-center gap-2">
                Ver video
              </a>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative group border border-zinc-200 dark:border-zinc-800">
              {/* Image Placeholder with Red Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-brand-red/20 stroke-current" strokeWidth="1">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 right-6 glass-morphism p-4 rounded-2xl border border-white/20 shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 6v6m0 0 3.5 3.5M12 12l-3.5 3.5M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Actúa rápido</div>
                    <div className="text-sm font-black">Minutos de oro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardioprotección Section */}
      <section id="cardioproteccion" className="py-24 bg-brand-gray dark:bg-brand-dark/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm">¿Cómo trabajamos?</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Expertos en cada paso</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
              {cardioproteccion.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {cardioproteccion.steps.map((step) => (
              <div key={step.id} className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-brand-red/30 hover:shadow-2xl hover:shadow-brand-red/5 transition-all duration-300 flex flex-col gap-6">
                <div className="text-5xl font-black text-zinc-100 dark:text-zinc-800 group-hover:text-brand-red/20 transition-colors">
                  {step.id}
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-bold">{step.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Productos */}
      <section id="productos" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm">Equipamiento</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Tecnología que salva vidas</h3>
            <p className="text-lg text-zinc-500 mt-4">
              Contamos con los desfibriladores más avanzados del mercado, con soporte y garantía oficial de Inadea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.productos.map((producto, i) => (
              <div key={i} className="group relative glass-morphism p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 hover:border-brand-red/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-red text-xs font-bold uppercase tracking-tighter">{producto.brand}</span>
                    <h4 className="text-2xl font-black">{producto.name}</h4>
                  </div>
                  <p className="text-zinc-500 text-sm italic">{producto.impact}</p>
                  <ul className="flex flex-col gap-3 mt-4">
                    {producto.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-brand-red" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 font-bold hover:bg-brand-red hover:text-white hover:border-brand-red transition-all uppercase tracking-widest text-xs">
                    Ver ficha técnica
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confían en nosotros */}
      <section className="py-20 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-12">Empresas que confían en nuestra cardioprotección</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {content.confian.map((item, i) => (
              <div key={i} className="text-2xl font-black tracking-tighter text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-default uppercase">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ley 27.159 */}
      <div className="bg-brand-red py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-6">
            <div className="text-6xl font-black opacity-30">LEY</div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold leading-none">{ley.numero}</span>
              <span className="text-sm font-medium tracking-wide uppercase mt-1">{ley.texto}</span>
            </div>
          </div>
          <div className="h-px w-full md:w-px md:h-12 bg-white/20" />
          <p className="text-white/80 font-medium text-center md:text-left max-w-md italic text-balance">
            &ldquo;La muerte súbita no discrimina. La prevención es responsabilidad de todos.&rdquo;
          </p>
        </div>
      </div>

      {/* Section Nosotros with Premios */}
      <section id="nosotros" className="py-24 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm">Nuestra Misión</h2>
                <h3 className="text-4xl font-bold tracking-tight">{nosotros.description}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {nosotros.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-4xl font-black text-brand-red">{stat.value}</span>
                    <span className="text-sm text-zinc-500 font-medium mt-1 leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="p-1 rounded-3xl bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-transparent">
                <div className="bg-white dark:bg-zinc-950 p-8 rounded-[1.4rem] border border-brand-red/5">
                  <h4 className="flex items-center gap-3 text-xl font-bold mb-3">
                    <span className="p-2 bg-brand-red/10 rounded-lg text-brand-red">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L9 9H1L7 14L4 22L12 17L20 22L17 14L23 9H15L12 1Z"/>
                      </svg>
                    </span>
                    {nosotros.premios[0].title}
                  </h4>
                  <p className="text-zinc-500 leading-relaxed">
                    {nosotros.premios[0].description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                {/* Team Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="text-3xl font-bold">Un equipo médico</div>
                  <div className="text-lg opacity-80">Comprometido con la vida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" className="bg-brand-black text-white pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
            <div className="flex flex-col gap-6 lg:col-span-1">
               <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <span className="font-bold text-2xl tracking-tighter">INADEA</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Institución médica dedicada a la prevención de la muerte súbita y la promoción de áreas cardioasistidas.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <h5 className="font-bold uppercase tracking-widest text-xs text-brand-red">Contáctanos</h5>
              <div className="flex flex-col gap-3 text-sm text-zinc-400">
                <a href={`mailto:${content.contacto.email}`} className="hover:text-white transition-colors">{content.contacto.email}</a>
                <span>{content.contacto.telefono}</span>
                <span>{content.contacto.direccion}</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h5 className="font-bold uppercase tracking-widest text-xs text-brand-red">Seguinos</h5>
              <div className="flex items-center gap-4">
                <a href={`https://instagram.com/${content.contacto.instagram}`} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-medium uppercase tracking-widest">
            <p>© {new Date().getFullYear()} INADEA. Todos los derechos reservados.</p>
            <p>Diseño & Desarrollo Premium</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
