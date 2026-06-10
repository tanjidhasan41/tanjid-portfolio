import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-white mb-2">Contact</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 space-y-6">
          <p className="text-slate-400 text-sm uppercase tracking-widest">Reach me at</p>

          <p className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-sky-400" />
            <a href="mailto:tanjidhasan41@gmail.com" className="hover:text-sky-400 transition">
              tanjidhasan41@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-3 text-lg">
            <FaLinkedin className="text-sky-400" />
            <a
              href="https://linkedin.com/in/tanjidhasan41"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              linkedin.com/in/tanjidhasan41
            </a>
          </p>

          <p className="flex items-center gap-3 text-lg">
            <FaGithub className="text-sky-400" />
            <a
              href="https://github.com/tanjidhasan41"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              github.com/tanjidhasan41
            </a>
          </p>
        </div>

        <ContactForm />

      </div>
    </section>
  );
}