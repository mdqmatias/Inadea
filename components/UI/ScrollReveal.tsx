"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px" // Activador más flexible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Función para observar elementos
    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        // Si ya está en el viewport o ya estaba activo, marcar como activo
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("active");
        }
        observer.observe(el);
      });
    };

    // Verificación inicial
    observeElements();

    // Volver a verificar periódicamente o después de un breve retraso para contenido dinámico/hidratación
    const timer = setTimeout(observeElements, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]); // Volver a ejecutar al cambiar de ruta

  return null;
}
