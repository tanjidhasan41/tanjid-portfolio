const skills = [
  "Playwright",
  "Selenium",
  "testNG",
  "Appium",
  "Java",
  "JavaScript",
  "Rest Assured",
  "Mocha-Axios",
  "Postman",
  "JMeter",
  "SQL",
  "Git",
  "Jira",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-2">
        <span className="text-white">Skills</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-10" />

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-800 border border-violet-500/30 text-violet-300 px-4 py-2 rounded-full text-sm font-medium hover:border-violet-400 hover:text-violet-200 hover:bg-slate-700 hover:scale-110 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}