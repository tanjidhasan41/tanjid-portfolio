export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-2 text-white">
        About Me
      </h2>

      <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-8" />

      <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-sky-500/50 hover:scale-[1.02] transition-all duration-300">

        <p className="text-gray-300 leading-8">
          I got into QA because I genuinely enjoy breaking things in a
          controlled way. Over the past 1.5+ years at AKIJ iBOS and
          meldCX, I've gone from writing manual test cases to building
          full automation frameworks with Playwright, Selenium, TestNG,
          Appium, and Rest Assured.

          {" "}My goal is to keep moving toward SDET –{" "}

          <span
            className="
              font-medium
              bg-gradient-to-r
              from-sky-400
              to-violet-400
              bg-clip-text
              text-transparent
              transition-all
              duration-500
              hover:tracking-wider
            "
          >
            Writing code that prevents bugs, not just finds them
          </span>.
        </p>

      </div>
    </section>
  );
}