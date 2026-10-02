import AutonomousWorkCard from "@/(components)/utility/AutonomousWorkCard";
import IconList from "@/(components)/utility/IconList";
import React from "react";

const autonomousWorkItems = [
  {
    title: "Intelligent agents.",
    description:
      "Build agents that reason through complex tasks, use your tools, and adapt to the way your team works.",
    buttonText: "Explore Agents",
    image: "/image-1.webp",
    imageAlt: "Intelligent agents",
    tags: [
      "MULTI-STEP REASONING",
      "TOOL USE",
      "TASK AUTOMATION",
      "WORKFLOW EXECUTION",
      "PERSISTENT CONTEXT",
    ],
  },

  {
    title: "Knowledge systems.",
    description:
      "Connect AI to your organization's knowledge and turn scattered information into useful, searchable context.",
    buttonText: "Explore Knowledge",
    image: "/image-2.webp",
    imageAlt: "Knowledge systems",
    tags: [
      "KNOWLEDGE SEARCH",
      "DOCUMENT UNDERSTANDING",
      "SEMANTIC RETRIEVAL",
      "PRIVATE DATA",
    ],
  },

  {
    title: "Model development.",
    description:
      "Experiment with models, evaluate their behavior, and adapt them for the problems that matter to your organization.",
    buttonText: "Explore Models",
    image: "/image-3.webp",
    imageAlt: "Model development",
    tags: ["MODEL EVALUATION", "FINE-TUNING", "BENCHMARKING", "REASONING"],
  },

  {
    title: "Production AI.",
    description:
      "Move AI workflows from prototypes into reliable applications with infrastructure built for real-world workloads.",
    buttonText: "Explore Production",
    image: "/image-4.webp",
    imageAlt: "Production AI",
    tags: ["AI DEPLOYMENT", "SCALABLE INFERENCE", "OBSERVABILITY", "SECURITY"],
  },

  {
    title: "Data intelligence.",
    description:
      "Turn complex datasets and business information into insights, reports, and actions with AI-assisted analysis.",
    buttonText: "Explore Data",
    image: "/image-5.webp",
    imageAlt: "Data intelligence",
    tags: [
      "DATA ANALYSIS",
      "REPORT GENERATION",
      "STRUCTURED DATA",
      "INSIGHT EXTRACTION",
    ],
  },

  {
    title: "AI applications.",
    description:
      "Create tailored AI experiences that fit directly into the tools, processes, and products your teams already use.",
    buttonText: "Explore Applications",
    image: "/image-6.webp",
    imageAlt: "AI applications",
    tags: [
      "AI APPLICATIONS",
      "CUSTOM WORKFLOWS",
      "API INTEGRATION",
      "TEAM AUTOMATION",
    ],
  },
];

const AutonomousWork = () => {
  return (
    <div className="container">
      <section className="w-full md:px-10 section">
        <div className="mx-auto w-full max-w-432">
          <div className="grid grid-cols-1 md:grid-cols-10">
            {/* ================= LEFT SIDE ================= */}
            <div className="hidden md:col-span-2 md:block">
              <div className="sticky top-0 flex h-dvh flex-col justify-between px-4 py-20">
                <div />
                <IconList />
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="col-span-1 border-[#27272b] md:col-span-8 md:border-x">
              {autonomousWorkItems.map((item) => (
                <AutonomousWorkCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousWork;
