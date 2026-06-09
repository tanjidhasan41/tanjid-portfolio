import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div>
          <p className="text-sky-400 mb-2">
            Software QA Engineer
          </p>

          <h1 className="text-6xl font-bold mb-4">
            Tanjid Ibna Akid
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            Automation Testing • Manual Testing • API Testing
          </p>

          <p className="text-gray-400">
            Currently working at meldCX with
            1.5+ years of experience.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="/resume.pdf"
              className="bg-sky-500 px-6 py-3 rounded-lg font-semibold"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="border border-sky-500 px-6 py-3 rounded-lg"
            >
              Projects
            </a>

          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            width={350}
            height={350}
            alt="profile"
            className="rounded-full border-4 border-sky-400"
          />
        </div>

      </div>
    </section>
  );
}