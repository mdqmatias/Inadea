import Image from "next/image";

interface InternalHeroProps {
  title: string;
  subtitle?: string;
  category: string;
  image: string;
}

export default function InternalHero({ title, subtitle, category, image }: InternalHeroProps) {
  return (
    <section className="relative min-h-[50svh] lg:min-h-[60svh] w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Imagen de fondo con superposición - Fondo de ancho completo */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-transparent" />
      </div>

      {/* Contenido contenido en el máximo virtual de 1440px */}
      <div className="container-max px-6 md:px-10 relative z-20 text-center flex flex-col items-center gap-6 pt-hero pb-20">
        <div className="flex items-center gap-4 md:gap-6 reveal active">
          <div className="w-8 md:w-12 h-[2px] bg-brand-teal shadow-[0_0_15px_rgba(29,186,168,0.5)]" />
          <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
            {category}
          </span>
          <div className="w-8 md:w-12 h-[2px] bg-brand-teal shadow-[0_0_15px_rgba(29,186,168,0.5)]" />
        </div>
        
        <h1 className="text-white text-balance reveal active delay-100 max-w-6xl tracking-tighter leading-[0.9] uppercase font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-white/50 max-w-2xl font-bold text-lg md:text-2xl reveal active delay-200 leading-relaxed text-balance">
            {subtitle}
          </p>
        )}
      </div>

      {/* Transición de degradado de lujo hacia el fondo blanco */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white via-white/40 to-transparent z-10" />
    </section>
  );
}
