"use client";
import { useReveal } from "../hooks/useReveal";

const skillGroups = [
  {
    category: "QA Automation",
    icon: "✓",
    skills: ["Playwright", "Selenium", "TestNG", "Cypress"],
  },
  {
    category: "API & Performance",
    icon: "</>",
    skills: ["Rest Assured", "Mocha-Axios", "Postman", "JMeter"],
  },
  {
    category: "Mobile & Tools",
    icon: "⚙",
    skills: ["Appium", "Git", "Jira", "SQL"],
  },
  {
    category: "Languages",
    icon: "{ }",
    skills: ["Java", "JavaScript", "TypeScript"],
  },
];

const directions = ["from-left", "from-right", "from-left", "from-right"];
const delays = ["delay-1", "delay-2", "delay-1", "delay-2"];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-14" ref={ref}>
      <h2 className="text-3xl font-bold mb-2 text-white">Skills</h2>
      <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            className={`reveal ${directions[i]} ${delays[i]} bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-500/50 hover:scale-[1.02] transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sky-400 font-mono font-bold text-sm bg-slate-700 px-2 py-1 rounded">
                {group.icon}
              </span>
              <h3 className="text-base font-semibold text-white">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700/60 border border-slate-600 text-slate-300 px-3 py-1 rounded-full text-xs font-medium hover:border-sky-400/60 hover:text-sky-300 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}