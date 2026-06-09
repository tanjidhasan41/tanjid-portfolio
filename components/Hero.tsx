import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center">

            <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-10">

                <div>
                    <p className="text-sky-400 mb-2">
                        Software QA Engineer
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Tanjid Ibna Akid
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                        Automation Testing • Manual Testing • API Testing • Performance Testing
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

                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/profile.jpg"
                        width={260}
                        height={260}
                        alt="profile"
                        className="rounded-full border-4 border-sky-400 w-64 h-64 md:w-[275px] md:h-[275px]"
                    />
                </div>

            </div>
        </section>
    );
}