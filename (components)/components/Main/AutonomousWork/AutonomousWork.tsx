import AutonomousWorkCard from "@/(components)/utility/AutonomousWorkCard";
import IconList from "@/(components)/utility/IconList";
import React from "react";


const autonomousWorkItems = [
  {
    title: "Autonomous work.",
    description:
      "AI agent for long-horizon tasks, fluent in your knowledge and tools.",
    buttonText: "Discover Vibe",
    image: "/image-1.webp",
    imageAlt: "Autonomous work",
    tags: [
      "ENTERPRISE KNOWLEDGE SEARCH",
      "STRUCTURED DATA ANALYSIS",
      "DOCUMENT AND REPORT SYNTHESIS",
      "MULTI-STEP TASK SCHEDULING",
      "PERSISTENT MEMORY AND REUSABLE SKILLS",
    ],
  },

  {
    title: "Another product.",
    description:
      "Build intelligent systems that work across your data, tools, and workflows.",
    buttonText: "Discover Product",
    image: "/image-2.webp",
    imageAlt: "Another product",
    tags: [
      "DATA ANALYSIS",
      "AUTOMATION",
      "WORKFLOW EXECUTION",
      "TOOL USE",
    ],
  },

  {
    title: "AI systems.",
    description:
      "Create powerful AI systems designed for complex real-world tasks.",
    buttonText: "Explore AI Systems",
    image: "/image-3.webp",
    imageAlt: "AI systems",
    tags: [
      "AI AGENTS",
      "KNOWLEDGE",
      "REASONING",
      "AUTOMATION",
    ],
  },

  {
    title: "Enterprise AI.",
    description:
      "Deploy AI capabilities across your organization with powerful workflows.",
    buttonText: "Discover Enterprise AI",
    image: "/image-4.webp",
    imageAlt: "Enterprise AI",
    tags: [
      "ENTERPRISE AI",
      "SECURITY",
      "KNOWLEDGE SEARCH",
    ],
  },

  {
    title: "Research.",
    description:
      "Explore new approaches to building useful and capable AI systems.",
    buttonText: "Explore Reseach",
    image: "/image-5.webp",
    imageAlt: "Research",
    tags: [
      "RESEARCH",
      "MODELS",
      "REASONING",
    ],
  },

  {
    title: "Future of AI.",
    description:
      "Build the next generation of intelligent applications and agents.",
    buttonText: "Learn more",
    image: "/image-6.webp",
    imageAlt: "Future of AI",
    tags: [
      "AGENTS",
      "APPLICATIONS",
      "AI SYSTEMS",
    ],
  },
];

const AutonomousWork = () => {
  return (
    <>
      <section className="w-full md:px-10 section">
        <div className="mx-auto w-full max-w-432">
          <div className="grid grid-cols-1 md:grid-cols-10">
            {/* ================= LEFT SIDE ================= */}
            <div className="hidden md:col-span-2 md:block">
              <div className="sticky top-0 flex h-dvh flex-col justify-between px-4 py-20">
                <div />
                <IconList/>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="col-span-1 border-[#27272b] md:col-span-8 md:border-x">
              {
                autonomousWorkItems.map((item) => (
                  <AutonomousWorkCard key={item.title} {...item}/>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutonomousWork;
