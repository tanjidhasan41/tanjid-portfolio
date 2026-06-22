import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

export default function Achievements() {
  return (
    <section id="achievements" className="py-14">
      <h2 className="text-3xl font-bold text-white mb-2">Achievements</h2>
      <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-8" />

      <div className="reveal spin-card bg-slate-800 rounded-xl hover:scale-[1.02] transition-all duration-300">
        <div className="p-6 rounded-xl bg-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <FaTrophy className="text-yellow-400 text-xl" />
            <h3 className="text-lg font-bold text-white">Best Performance Award</h3>
          </div>
          <p className="text-sky-400 font-semibold text-sm mb-3">Road to SDET – Full Stack SDET Program</p>
          <p className="text-gray-300 text-sm leading-6">
            Successfully completed the Full Stack SDET Program from Road to SDET.
            Achieved Top 3 ranking for three consecutive months and received the
            Best Performance Award in recognition of exceptional performance,
            technical excellence, and commitment to continuous learning.
          </p>
          <div className="mt-6 flex flex-col items-center">
            <a href="/certificate.png" target="_blank" rel="noopener noreferrer">
              <Image src="/certificate.png" alt="Best Performance Award Certificate" width={250} height={175}
                className="rounded-xl border border-slate-600 hover:border-violet-400 hover:scale-[1.02] transition-all duration-300 w-full max-w-[250px]" />
            </a>
            <p className="text-xs text-gray-400 mt-2 text-center">Click the certificate to view full size.</p>
          </div>
        </div>
      </div>
    </section>
  );
}