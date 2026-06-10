export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold text-white mb-2">Experience</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-10" />

      <div className="space-y-10">

        {/* meldCX */}
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-sky-500/50 hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Junior Software QA Engineer
              </h3>
              <p className="text-sky-400 font-semibold mt-1">meldCX</p>
            </div>
            <span className="mt-2 md:mt-0 text-sm bg-violet-500/10 border border-violet-500/30 text-violet-300 px-3 py-1 rounded-full self-start">
              October 2025 – Present
            </span>
          </div>

          <div className="space-y-6">
            <h4 className="text-base font-semibold text-slate-400 uppercase tracking-widest">
              Projects Worked On
            </h4>
            <div>
              <h4 className="text-lg font-semibold text-sky-300">meldCX Core</h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                <li>Tested and validated Cloud Console, Android Agent, Windows Agent, and Kiosk integrations.</li>
                <li>Designed and executed functional, regression, and end-to-end test scenarios.</li>
                <li>Collaborated with developers and product teams to ensure product quality and timely releases.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-sky-300">Western Union</h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                <li>Performed manual testing for Western Union applications and services.</li>
                <li>Created and maintained test cases, bug reports, and test execution documentation.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AKIJ iBOS */}
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-sky-500/50 hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Junior Software QA Engineer
              </h3>
              <p className="text-sky-400 font-semibold mt-1">AKIJ iBOS</p>
            </div>
            <span className="mt-2 md:mt-0 text-sm bg-slate-700 border border-slate-600 text-slate-300 px-3 py-1 rounded-full self-start">
              November 2024 – September 2025
            </span>
          </div>

          <div className="space-y-6">
            <h4 className="text-base font-semibold text-slate-400 uppercase tracking-widest">
              Projects Worked On
            </h4>
            <div>
              <h4 className="text-lg font-semibold text-sky-300">AKIJ Air</h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                <li>Performed API testing using Postman and validated request and response data.</li>
                <li>Developed and executed automation test scripts.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-sky-300">Shopify</h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                <li>Performed manual testing for e-commerce workflows including product, cart, and checkout modules.</li>
                <li>Executed functional, UI, and regression testing across different browsers and devices.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}