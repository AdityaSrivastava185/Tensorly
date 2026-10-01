import React from "react";

const deployItems = [
  {
    title: "Self-hosted.",
    description:
      "Deploy Studio on virtual cloud, edge, or on-premises. Self-hosted deployments offer more advanced levels of customization and control. Your data stays within your walls.",
  },
  {
    title: "Tensorly cloud.",
    description:
      "Get started with Studio hosted on Tensorly's infrastructure and build your own applications and services with our API.",
  },
  {
    title: "Cloud provider.",
    description:
      "Access the power of Studio via your preferred cloud provider (Google Cloud, AWS, Azure, SAP, IBM, Snowflake, NVIDIA, Outscale) using your cloud credit.",
  },
];

const Deploy = () => {
  return (
    <div className="border border-[#27272b]">
      <section className="container section">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 lg:grid-cols-3 px-4 md:px-0">
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
