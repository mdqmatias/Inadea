"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "inadea2026") {
      // Set cookie - simple client side approach for demo
      document.cookie = "inadea-auth=true; path=/";
      router.push("/");
      router.refresh(); // Refresh to update middleware state
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-brand-teal/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-brand-red/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="w-full max-w-md relative z-10 glass-morphism rounded-[3rem] p-10 lg:p-14 flex flex-col gap-10 shadow-3xl border border-white/20">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-48 h-12">
            <Image 
              src="/img/logoIcon.svg" 
              alt="Inadea Logo" 
              fill 
              className="object-contain brightness-0 invert opacity-90"
            />
          </div>
          <p className="text-brand-blue/60 font-black uppercase tracking-[0.3em] text-[10px] text-center">Acceso Exclusivo Demo</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase text-brand-blue tracking-widest ml-4">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="••••••••"
              className={`w-full bg-brand-gray/50 border-2 ${error ? 'border-brand-red/50 shadow-brand-red/10' : 'border-brand-gray'} rounded-2xl py-5 px-6 font-black text-brand-blue placeholder:text-brand-blue/20 outline-none focus:border-brand-teal/50 transition-all shadow-inner`}
            />
            {error && <p className="text-brand-red text-[10px] font-black uppercase tracking-widest text-center mt-2 animate-pulse">Contraseña incorrecta</p>}
          </div>

          <button 
            type="submit"
            className="btn-premium bg-brand-blue text-white shadow-xl shadow-brand-blue/20 hover:scale-[1.02] active:scale-95 transition-all py-5"
          >
            Entrar a la Demo
          </button>
        </form>

        <p className="text-[9px] text-brand-blue/30 text-center font-bold uppercase leading-relaxed">
          &copy; 2026 INADEA - INSTITUCIÓN MÉDICA NACIONAL.<br/>TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </div>
  );
}
