"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const home = document.getElementById("home");

    home?.scrollIntoView({
      behavior: "smooth",
    });

    history.replaceState(null, "", "#home");
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-6
            right-6
            bg-sky-500
            hover:bg-sky-600
            text-white
            w-12
            h-12
            rounded-full
            shadow-lg
            text-xl
            z-50
          "
        >
          ↑
        </button>
      )}
    </>
  );
}