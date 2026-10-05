import React from "react";

const deployItems = [
  {
    title: "Private infrastructure.",
    description:
      "Run Tensorly within your own cloud, data center, or edge environment. Keep your models and data under your control while configuring the platform around your infrastructure.",
  },
  {
    title: "Tensorly Cloud.",
    description:
      "Build and deploy AI applications on Tensorly's managed infrastructure with scalable compute, APIs, and tools for production workloads.",
  },
  {
    title: "Cloud partners.",
    description:
      "Run Tensorly through supported cloud environments and use your existing infrastructure and cloud resources to deploy AI workloads.",
  },
];

const Deploy = () => {
  return (
    <div className="border border-[#27272b]">
      <section className="container section">
        <div>
          <div className="grid grid-cols-1 md:gap-0 md:grid-cols-3 px-4 md:px-0">
            {deployItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start justify-between border border-[#27272b] p-5 py-10 rounded-sm md:min-h-0 md:h-[400px] md:rounded-none md:border-x md:border-y-0
            "
              >
                <div>
                  <p className="text-3xl">{item.title}</p>
                </div>

                <div className="py-3 md:py-0">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deploy;
