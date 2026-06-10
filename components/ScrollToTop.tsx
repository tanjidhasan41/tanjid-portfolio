"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const home = document.getElementById("home");
    home?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#home");
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-gradient-to-br from-sky-500 to-violet-600
        hover:from-sky-400 hover:to-violet-500
        text-white text-lg font-bold
        flex items-center justify-center
        shadow-lg shadow-violet-500/30
        hover:shadow-violet-500/50
        hover:scale-110
        active:scale-95
        transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      ↑
    </button>
  );
}