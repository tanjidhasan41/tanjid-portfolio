const projects = [
  {
    title: "nopCommerce Automation using Playwright",
    description:
      "End-to-end automation framework for the nopCommerce e-commerce platform using Playwright. Covers authentication, product management, cart functionality, and UI validations.",
    tech: ["Playwright", "JavaScript", "Automation Testing"],
    github:
      "https://github.com/tanjidhasan41/nopCommerce-automation-using-playwright-part-1",
  },
  {
    title: "Daily Finance Web Automation using Playwright",
    description:
      "Automated web testing framework built with Playwright for validating critical business workflows and UI functionality.",
    tech: ["Playwright", "JavaScript", "E2E Testing"],
    github:
      "https://github.com/tanjidhasan41/web-automation-using-playwright",
  },
  {
    title: "Android App Automation",
    description:
      "Mobile automation framework developed using Appium for Android application testing, covering user interactions, validations and regression scenarios.",
    tech: ["Appium", "Java", "Mobile Testing"],
    github:
      "https://github.com/tanjidhasan41/android-app-automation",
  },
  {
    title: "Web Automation using Selenium & TestNG",
    description:
      "Selenium automation framework following Page Object Model architecture with TestNG reporting and reusable test components.",
    tech: ["Selenium", "Java", "TestNG"],
    github:
      "https://github.com/tanjidhasan41/web-automation-selenium-testNG",
  },
  {
    title: "API Automation with Rest Assured",
    description:
      "REST API automation project using Rest Assured for request validation, response verification and API workflow testing.",
    tech: ["Rest Assured", "Java", "API Testing"],
    github:
      "https://github.com/tanjidhasan41/api-automation-with-rest-assured",
  },
  {
    title: "Performance Testing using JMeter",
    description:
      "Performance testing project designed to evaluate application stability, response time and scalability under load.",
    tech: ["JMeter", "Performance Testing"],
    github:
      "https://github.com/tanjidhasan41/performance-test-using-jmeter",
  },
  {
    title: "D-Money API Testing using Postman",
    description:
      "API testing and workflow validation project using Postman and Newman. Covers transaction flows, authentication and data validation.",
    tech: ["Postman", "Newman", "API Testing"],
    github:
      "https://github.com/tanjidhasan41/dmoney-project-using-postman",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-sky-400 mb-10">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-400 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="bg-slate-700 text-sky-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}