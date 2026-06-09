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
  "Jira"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">

      <h2 className="text-4xl font-bold text-sky-400 mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">

        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-800 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}

      </div>
    </section>
  );
}