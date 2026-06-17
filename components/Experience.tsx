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
              <p className="text-sky-400 text-lg font-semibold mt-1">meldCX</p>
            </div>
            <span className="mt-2 md:mt-0 text-sm bg-violet-500/10 border border-violet-500/30 text-violet-300 px-3 py-1 rounded-full self-start">
              October 2025 – Present
            </span>
          </div>

          <div className="space-y-6">
            <h4 className="text-base font-semibold text-slate-400 uppercase tracking-widest">
              Projects Worked On
            </h4>

            <p className="text-lg font-semibold text-sky-300">
              Enterprise SaaS • FinTech
            </p>

            <ul className="list-disc pl-6 space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  Test Planning & Execution:
                </span>{" "}
                Reviewed test plans and prepared multiple test cases per release cycle,
                ensuring comprehensive coverage across functional and regression scenarios.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Android Testing:
                </span>{" "}
                Executed Android regression automation suites using Appium, covering
                25+ test scenarios and 170+ test cases across 3 devices.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Web Testing:
                </span>{" "}
                Performed manual testing for web applications and developed automated
                regression test scripts using Playwright, identifying around 16 issues.
              </li>
            </ul>
          </div>
        </div>

        {/* AKIJ iBOS */}
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-sky-500/50 hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Junior Software QA Engineer
              </h3>
              <p className="text-sky-400 text-lg font-semibold mt-1">AKIJ iBOS</p>
            </div>
            <span className="mt-2 md:mt-0 text-sm bg-slate-700 border border-slate-600 text-slate-300 px-3 py-1 rounded-full self-start">
              November 2024 – September 2025
            </span>
          </div>

          <div className="space-y-6">
            <h4 className="text-base font-semibold text-slate-400 uppercase tracking-widest">
              Projects Worked On
            </h4>

            <p className="text-lg font-semibold text-sky-300">
              Online Travel Agency • E-commerce
            </p>

            <ul className="list-disc pl-6 space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  Manual Testing:
                </span>{" "}
                Ensured release-ready quality for a Shopify theme through functional,
                UI, and cross-browser testing across product, cart, and checkout workflows.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Automation Testing:
                </span>{" "}
                Built the automation structure and initial test scripts for a Travel &
                Booking Platform, enabling repeatable regression testing from scratch.
              </li>

              <li>
                <span className="font-semibold text-white">
                  End-to-End Testing:
                </span>{" "}
                Owned end-to-end testing of the complex Pop-up Form feature in the Form
                Builder application, covering functional, regression, and edge-case
                scenarios through to delivery.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}