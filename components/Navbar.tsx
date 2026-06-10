"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 120;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY <= sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") || "";
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        current = "contact";
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={`relative transition-colors text-sm ${
        activeSection === id
          ? "text-sky-400 font-semibold"
          : "text-gray-300 hover:text-sky-400"
      }`}
      onClick={() => setMenuOpen(false)}
    >
      {label}
      {activeSection === id && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full" />
      )}
    </a>
  );

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">

          <a
            href="#home"
            className="flex flex-col items-center leading-tight group"
          >
            <span className="font-bold text-lg md:text-xl text-sky-400 transition-colors duration-300 group-hover:text-sky-300">
              Tanjid Ibna Akid
            </span>
            <span className="text-xs md:text-sm text-violet-400 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-violet-400 group-hover:tracking-widest">
              Software QA Engineer
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex space-x-6">
            {navItem("home", "Home")}
            {navItem("about", "About")}
            {navItem("skills", "Skills")}
            {navItem("experience", "Experience")}
            {navItem("projects", "Projects")}
            {navItem("achievements", "Achievements")}
            {navItem("contact", "Contact")}
          </div>

          {/* Mobile */}
          <button
            className="md:hidden text-2xl text-sky-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-5">
            {navItem("home", "Home")}
            {navItem("about", "About")}
            {navItem("skills", "Skills")}
            {navItem("experience", "Experience")}
            {navItem("projects", "Projects")}
            {navItem("achievements", "Achievements")}
            {navItem("contact", "Contact")}
          </div>
        )}
      </div>
    </nav>
  );
}