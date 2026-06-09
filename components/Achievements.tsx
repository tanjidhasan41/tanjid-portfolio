import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <h2 className="text-4xl font-bold text-sky-400 mb-10">
        Achievements
      </h2>

      <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">

        {/* Award Title */}
        <div className="flex items-center gap-3">
          <FaTrophy className="text-yellow-400 text-2xl" />

          <h3 className="text-2xl font-bold">
            Best Performance Award
          </h3>
        </div>

        {/* Program Name */}
        <p className="text-sky-400 font-semibold mt-3">
          Road to SDET – Full Stack SDET Program
        </p>

        {/* Description */}
        <p className="text-gray-300 mt-4 leading-relaxed">
          Successfully completed the Full Stack SDET Program from Road to SDET.
          Achieved Top 3 ranking for three consecutive months and received the
          Best Performance Award in recognition of exceptional performance,
          technical excellence, and commitment to continuous learning.
        </p>

        {/* Certificate Thumbnail */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href="/certificate.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/certificate.png"
              alt="Best Performance Award Certificate"
              width={250}
              height={175}
              className="
                rounded-xl
                border
                border-slate-600
                hover:border-sky-400
                hover:scale-[1.02]
                transition
                duration-300
                w-full
                max-w-[250px]
              "
            />
          </a>

          <p className="text-sm text-gray-400 mt-3 text-center">
            Click the certificate to view the full-size image.
          </p>
        </div>

      </div>
    </section>
  );
}