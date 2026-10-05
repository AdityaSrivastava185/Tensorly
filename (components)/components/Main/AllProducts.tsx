import Link from "next/link";
import React from "react";

const AllProducts = () => {
  return (

    <div className="container overflow-hidden">
      <section className="section">
         <p className="px-3 text-sm">Image Source - <Link href={"https://mistral.ai/"} className="text-orange-600 text-sm">Mistral AI</Link></p>
        <div className="pt-10 pb-10 lg:pt-20 lg:pb-20">
          <div className="w-full py-7 text-center md:max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-6xl">
              Everything you need to build with AI
            </h2>
          </div>

          {/* Agents */}
          <div className="flex w-full translate-y-1 items-end justify-center lg:-translate-x-9">
            <div className="markitecture-block-rotated absolute hidden aspect-square h-15 w-15 shrink-0 rotate-45 origin-bottom-right -translate-x-10 border border-[#27272b] bg-[#1a1a1e] lg:relative lg:block" />

            <Link
              href={""}
              className="group h-34 w-full border border-[#27272b] bg-orange-600 lg:h-50 lg:w-100"
            >
              <div className="flex h-full w-full flex-col items-start justify-between border border-[#27272b] bg-[#101013] p-3 transition-all duration-500 origin-bottom-right lg:group-hover:-translate-x-10 group-hover:shadow-box transition-[cubic-bezier(0.4,0,0.2,1)]">
                <div className="flex h-full w-full flex-col items-start justify-between">
                  <p className="text-3xl md:text-2xl">Agents</p>

                  <p className="text-md">
                    Build intelligent agents that reason, act, and work across
                    your tools.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Workbench / Model Lab / AI Solutions */}
          <div className="flex w-full flex-row flex-wrap items-end justify-center translate-y-0.5 lg:flex-nowrap lg:translate-x-8.5">
            <div className="hidden aspect-square h-50 shrink-0 border border-r-0 border-[#27272b] bg-[#27272b] lg:block" />

            {/* Workbench */}
            <Link
              href={""}
              className="group h-40 w-full bg-blue-600 lg:h-50 lg:w-50"
            >
              <div className="flex h-full w-full flex-col items-start justify-between border border-[#27272b] bg-[#101013] p-3 transition-all duration-500 lg:group-hover:-translate-x-10 group-hover:shadow-box transition-[cubic-bezier(0.4,0,0.2,1)]">
                <div className="flex h-full w-full flex-col items-start justify-between">
                  <p className="text-3xl md:text-2xl">Workbench</p>

                  <p className="text-md">
                    Design, test, and iterate on AI workflows in one place.
                  </p>
                </div>
              </div>
            </Link>

            {/* Model Lab */}
            <Link
              href={""}
              className="group h-30 w-full bg-cyan-500 lg:h-50 lg:w-50"
            >
              <div className="flex h-full w-full flex-col items-start justify-between border border-l-0 border-[#27272b] bg-[#101013] p-3 transition-all duration-300 lg:group-hover:translate-x-10 group-hover:shadow-box transition-[cubic-bezier(0,0,0.2,1)]">
                <div className="flex h-full w-full flex-col items-start justify-between">
                  <p className="text-3xl md:text-2xl">Model Lab</p>

                  <p className="text-md">
                    Adapt, evaluate, and optimize models for specialized tasks.
                  </p>
                </div>
              </div>
            </Link>

            <div className="hidden w-20 shrink-0 lg:block" />

            {/* AI Solutions */}
            <Link
              href={""}
              className="group h-40 w-full border border-[#27272b] bg-[#101013] lg:h-50 lg:w-50"
            >
              <div className="flex h-full w-full flex-col items-start justify-between border border-[#27272b] bg-[#101013] p-3 transition-all group-hover:shadow-box lg:group-hover:rotate-12">
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-3xl md:text-2xl">AI Solutions</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Models / Compute */}
          <div className="flex w-full flex-row flex-wrap items-end justify-center translate-y-px lg:flex-nowrap lg:translate-x-6">
            <div className="flex w-full flex-row flex-wrap items-end justify-center translate-y-px lg:flex-nowrap lg:translate-x-6">
              {/* Tensorly Models */}
              <Link
                href="/"
                className="group z-20 h-30 w-full bg-orange-600 lg:h-50 lg:w-50"
              >
                <div className="flex h-full w-full flex-col items-start justify-between border border-[#27272b] bg-[#101013] p-3 transition-all duration-500 lg:group-hover:translate-x-20 group-hover:shadow-box transition-[cubic-bezier(0.4,0,0.2,1)]">
                  <div className="flex aspect-square w-8 items-center justify-center">
                    <span className="relative inline-block w-7 text-3xl md:text-2xl">
                      Tensorly Models
                    </span>
                  </div>
                </div>
              </Link>

              <div className="hidden aspect-square h-20 shrink-0 bg-[#27272b] lg:block" />

              {/* Tensorly Compute */}
              <Link
                href="/"
                className="group z-20 h-40 w-full shrink-0 border border-[#27272b] bg-cyan-400 lg:h-50 lg:w-100"
              >
                <div className="flex h-full w-full flex-col items-start justify-between bg-[#101013] p-3 transition-all duration-500 lg:group-hover:translate-x-20">
                  <div className="flex h-full w-full flex-col items-start justify-between">
                    <p className="text-3xl md:text-2xl">Tensorly Compute</p>

                    <p className="text-lg">
                      Scalable infrastructure for training, deploying, and
                      running AI workloads.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex flex-row items-end">
                <div className="tech-dot tech-dot-top-right z-10 hidden aspect-square h-20 shrink-0 border-x-0 bg-[#27272b] lg:block" />

                <div className="hidden aspect-square h-50 shrink-0 border-y-0 border-[#27272b] bg-[#1a1a1e] lg:block" />

                <div className="absolute right-0 bottom-0 hidden aspect-square h-15 w-15 shrink-0 -translate-x-4.5 rotate-45 origin-bottom-right border border-[#27272b] bg-[#27272b] lg:relative lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
