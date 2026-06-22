import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-[1.45fr_0.55fr] gap-12">

        {/* Left Side */}
        <div>
          <p className="text-violet-400 text-xl font-medium mb-2 tracking-wide animate-float">
            Software QA Engineer
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Tanjid Ibna Akid
          </h1>

          <p className="text-lg text-sky-400 mb-8 leading-relaxed">
            Automation Testing • Manual Testing • API Testing • Performance Testing
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
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

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-sky-400">
                1.5+
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center hover:border-violet-400/50 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-violet-400">
                13+
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Automation Projects
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-sky-400">
                400+
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Test Cases Automated
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end items-center md:translate-x-6">

          <div className="relative">

            <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full" />

            <Image
              src="/profile.jpg"
              width={220}
              height={220}
              alt="profile"
              className="
                relative
                rounded-full
                object-cover
                border-4
                border-sky-400
                shadow-[0_0_40px_rgba(56,189,248,0.25)]
                w-[220px]
                h-[220px]
                hover:scale-105
                transition-all
                duration-500
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}