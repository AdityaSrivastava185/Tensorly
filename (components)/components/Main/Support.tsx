import Link from "next/link";
import React from "react";

const supportCarditems = [
  {
    title: "Use Accelearation",
    description: "Prioritize high-value use cases and take them to production",
    buttonText: "Explore Accelearation",
    url:"/"
  },
  {
    title: "Elite AI expertise.",
    description:
      "A cross-functional team that takes initiatives from kickoff to production at scale.",
    buttonText: "Explore AI Expertise",
    url:"/"
  },
  {
    title: "Deep customization.",
    description: "Customize and optimize models for your domain.",
    buttonText: "Explore Customizations",
    url:"/"
  },
  {
    title: "Enterprise activation.",
    description: "Deploy AI in your environment with full controls",
    buttonText: "Explore Enterprise Activation",
    url:"/"
  },
];

const Support = () => {
  return (
    <div>
      <div className=" py-7 flex flex-col gap-7">
        <div>
          <p className="text-7xl">Support by expert folks</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-xl">
              Work with world-class AI scientists to enable transformation that
              drives impact
            </p>
          </div>
          <div>
            <button className="flex items-center gap-3 rounded-md bg-[#202023] px-4 py-3 text-lg">
              <span>Explore services</span>

              <span className="text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevrons-right preview-icon"
                >
                  <path d="m6 17 5-5-5-5" />
                  <path d="m13 17 5-5-5-5" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {supportCarditems.map((item) => (
              <Link
              href={""}
                key={item.title}
                className="flex flex-col items-start justify-between h-[420px] bg-[#1a1a1e] p-7 border border-[#27272b] group md:hover:bg-transparent"
              >
                <div>
                  <p className="text-2xl">{item.title}</p>
                </div>
                <div>
                  <button className="flex flex-row items-center gap-1">
                    <span>{item.buttonText}</span>

                    <span className="text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevrons-right preview-icon"
                      >
                        <path d="m6 17 5-5-5-5" />
                        <path d="m13 17 5-5-5-5" />
                      </svg>
                    </span>
                  </button>
                  <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out md:group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="text-xl pt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
