"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px" // More forgiving trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Function to observe elements
    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        // If it's already in viewport or was active, make it active
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("active");
        }
        observer.observe(el);
      });
    };

    // Initial check
    observeElements();

    // Re-check periodically or after a short delay to account for dynamic content/hydration
    const timer = setTimeout(observeElements, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]); // Re-run on route change

  return null;
}
