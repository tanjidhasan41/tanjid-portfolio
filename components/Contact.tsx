import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-sky-400 mb-10">
        Contact
      </h2>

      <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 space-y-6">

        <p className="flex items-center gap-3 text-lg">
          <FaEnvelope className="text-sky-400" />
          <a
            href="mailto:tanjidhasan41@gmail.com"
            className="hover:text-sky-400 transition"
          >
            tanjidhasan41@gmail.com
          </a>
        </p>

        <p className="flex items-center gap-3 text-lg">
          <FaPhone className="text-sky-400" />
          <a
            href="tel:+8801928241075"
            className="hover:text-sky-400 transition"
          >
            +8801928241075
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
    </section>
  );
}