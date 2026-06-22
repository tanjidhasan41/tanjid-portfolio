import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
      <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="reveal delay-1 spin-card bg-slate-800 rounded-xl hover:scale-[1.02] transition-all duration-300 h-fit">
          <div className="p-6 rounded-xl bg-slate-800 space-y-4">
            <p className="text-slate-400 text-xs uppercase tracking-widest">Reach me at</p>
            <p className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-sky-400" />
              <a href="mailto:tanjidhasan41@gmail.com" className="hover:text-sky-400 transition">tanjidhasan41@gmail.com</a>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <FaLinkedin className="text-sky-400" />
              <a href="https://linkedin.com/in/tanjidhasan41" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">linkedin.com/in/tanjidhasan41</a>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <FaGithub className="text-sky-400" />
              <a href="https://github.com/tanjidhasan41" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">github.com/tanjidhasan41</a>
            </p>
          </div>
        </div>

        <div className="reveal delay-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}