import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 md:pt-0">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-10">

        <div>
          <p className="text-violet-400 text-xl font-medium mb-2 tracking-wide animate-float">
            Software QA Engineer
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tanjid Ibna Akid
          </h1>

          <p className="text-base md:text-lg text-sky-400 mb-6 leading-relaxed">
            Automation Testing • Manual Testing • API Testing • Performance Testing
          </p>

          <p
            className="
              text-gray-400
              transition-all
              duration-500
              hover:text-gray-300
            "
          >
            Currently working at{" "}
            <span className="text-sky-400 font-medium">
              meldCX
            </span>{" "}
            with{" "}
            <span className="text-violet-400 font-medium">
              1.5+ years
            </span>{" "}
            of experience in Software Quality Assurance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-400 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/tanjidhasan41"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-600 hover:border-sky-400 hover:text-sky-400 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/tanjidhasan41"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-600 hover:border-sky-400 hover:text-sky-400 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            width={260}
            height={260}
            alt="profile"
            className="rounded-full border-4 border-sky-400 w-64 h-64 md:w-[275px] md:h-[275px] hover:scale-105 transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
}