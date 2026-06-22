"use client";
import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    title: "nopCommerce Automation using Playwright",
    description:
      "End-to-end automation framework for the nopCommerce e-commerce platform using Playwright. Covers authentication, product management, cart functionality, and UI validations.",
    tech: ["Playwright", "JavaScript", "Automation Testing"],
    github: "https://github.com/tanjidhasan41/nopCommerce-automation-using-playwright-part-1",
  },
  {
    title: "Daily Finance Web Automation using Playwright",
    description:
      "Automated web testing framework built with Playwright for validating critical business workflows and UI functionality.",
    tech: ["Playwright", "JavaScript", "E2E Testing"],
    github: "https://github.com/tanjidhasan41/web-automation-using-playwright",
  },
  {
    title: "Android App Automation",
    description:
      "Mobile automation framework developed using Appium for Android application testing, covering user interactions, validations and regression scenarios.",
    tech: ["Appium", "Java", "Mobile Testing"],
    github: "https://github.com/tanjidhasan41/android-app-automation",
  },
  {
    title: "Web Automation using Selenium & TestNG",
    description:
      "Selenium automation framework following Page Object Model architecture with TestNG reporting and reusable test components.",
    tech: ["Selenium", "Java", "TestNG"],
    github: "https://github.com/tanjidhasan41/web-automation-selenium-testNG",
  },
  {
    title: "API Automation with Rest Assured",
    description:
      "REST API automation project using Rest Assured for request validation, response verification and API workflow testing.",
    tech: ["Rest Assured", "Java", "API Testing"],
    github: "https://github.com/tanjidhasan41/api-automation-with-rest-assured",
  },
  {
    title: "Performance Testing using JMeter",
    description:
      "Performance testing project designed to evaluate application stability, response time and scalability under load.",
    tech: ["JMeter", "Performance Testing"],
    github: "https://github.com/tanjidhasan41/performance-test-using-jmeter",
  },
  {
    title: "D-Money API Testing using Postman",
    description:
      "API testing and workflow validation project using Postman and Newman. Covers transaction flows, authentication and data validation.",
    tech: ["Postman", "Newman", "API Testing"],
    github: "https://github.com/tanjidhasan41/dmoney-project-using-postman",
  },
];

const directions = ["from-left", "from-right", "from-left", "from-right", "from-left", "from-right", "from-left"];
const delays = ["delay-1", "delay-1", "delay-2", "delay-2", "delay-3", "delay-3", "delay-4"];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-14" ref={ref}>
      <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
      <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`reveal ${directions[i]} ${delays[i]} bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-sky-400 hover:scale-[1.02] transition-all duration-300 flex flex-col`}
          >
            <h3 className="text-base font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-3 flex-1 leading-6">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="bg-violet-500/10 border border-violet-500/30 text-violet-300 px-2.5 py-0.5 rounded-full text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 self-start"
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}