"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Junior Software QA Engineer",
    company: "meldCX",
    period: "October 2025 – Present",
    industry: "Enterprise SaaS • FinTech",
    active: true,
    bullets: [
      {
        label: "a",
        text: "Review test plans and prepare multiple test cases per release cycle, ensuring comprehensive coverage across functional and regression scenarios.",
      },
      {
        label: "b",
        text: "Execute Android regression automation suites using Appium, covering 25+ test scenarios and 170+ test cases across 3 devices.",
      },
      {
        label: "c",
        text: "Perform manual testing for web applications and develop automated regression test scripts using Playwright, identifying around 16 issues.",
      },
    ],
  },
  {
    title: "Junior Software QA Engineer",
    company: "AKIJ iBOS",
    period: "November 2024 – September 2025",
    industry: "Online Travel Agency • E-commerce",
    active: false,
    bullets: [
      {
        label: "a",
        text: "Ensured release-ready quality for a Shopify theme through functional, UI, and cross-browser testing across product, cart, and checkout workflows.",
      },
      {
        label: "b",
        text: "Built the automation structure and initial test scripts for a Travel & Booking Platform, enabling repeatable regression testing from scratch.",
      },
      {
        label: "c",
        text: "Owned end-to-end testing of the complex Pop-up Form feature in the Form Builder application, covering functional, regression, and edge-case scenarios through to delivery.",
      },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animateTimeline, setAnimateTimeline] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTimeline(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-14"
    >
      <h2 className="text-3xl font-bold text-white mb-2">
        Experience
      </h2>

      <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full mb-8" />

      <div className="relative">

        {/* Static Timeline */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-700" />

        {/* Animated Timeline */}
        <div
          className={`
            absolute
            left-3
            top-2
            bottom-2
            w-px
            bg-sky-400
            origin-bottom
            ${animateTimeline ? "timeline-grow" : "scale-y-0"}
          `}
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="relative pl-10"
            >
              <div
                className={`absolute left-0 top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  exp.active
                    ? "border-sky-400 bg-sky-400/20"
                    : "border-slate-500 bg-slate-800"
                }`}
              >
                <div
                  className={`
                    w-2 h-2 rounded-full
                    ${
                      exp.active
                        ? "bg-sky-400 timeline-pulse"
                        : "bg-slate-500"
                    }
                  `}
                />
              </div>

              <div
                className={`reveal delay-${i + 1} spin-card bg-slate-800 rounded-xl hover:scale-[1.01] transition-all duration-300`}
              >
                <div className="p-6 rounded-xl bg-slate-800">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.title}
                      </h3>

                      <p className="text-sky-400 font-semibold text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <span
                      className={`mt-2 md:mt-0 text-xs px-3 py-1 rounded-full self-start border flex items-center gap-1.5 ${
                        exp.active
                          ? "bg-violet-500/10 border-violet-500/30 text-violet-300"
                          : "bg-slate-700 border-slate-600 text-slate-300"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>

                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-sky-300/80 mb-5 uppercase tracking-wider">
                    {exp.industry}
                  </p>

                  <ul className="space-y-3">
                    {exp.bullets.map((b) => (
                      <li
                        key={b.label}
                        className="flex gap-2 text-sm text-gray-300 leading-6"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400/60 flex-shrink-0" />
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}