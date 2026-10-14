
import Link from "next/link";
import React from "react";

const AllProducts = () => {
  const mobileCard =
    "rounded-xl border border-surface-dark shadow-sm transition-shadow duration-300 active:shadow-box lg:rounded-none lg:shadow-none";

  return (
    <div className="container overflow-hidden">
      <section className="section">
        <p className="px-3 text-xs sm:text-sm">
          Image Source -{" "}
          <Link
            href="https://mistral.ai/"
            className="text-primary text-sm"
          >
            Mistral AI
          </Link>
        </p>

        <div className="pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-20 lg:pb-20  px-3 md:px-0">
          {/* Heading */}
          <div className="mx-auto w-full py-5 text-center sm:py-7 md:max-w-2xl">
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-6xl">
              Everything you need to build with AI
            </h2>
          </div>

          {/* Agents */}
          <div className="mb-3 flex w-full translate-y-1 items-end justify-center lg:mb-0 lg:-translate-x-9">
            <div className="absolute hidden aspect-square h-15 w-15 shrink-0 rotate-45 origin-bottom-right -translate-x-10 border border-surface-dark bg-surface lg:relative lg:block" />

            <Link
              href=""
              className={`group h-auto min-h-36 w-full border border-surface-dark bg-primary lg:h-50 lg:w-100 ${mobileCard}`}
            >
              <div className="flex min-h-36 h-full w-full origin-bottom-right flex-col items-start justify-between rounded-[inherit] border border-surface-dark bg-background-secondary p-3 transition-all duration-500 group-hover:shadow-box active:shadow-box lg:rounded-none lg:group-hover:-translate-x-10 lg:active:translate-x-0 transition-[cubic-bezier(0.4,0,0.2,1)]">
                <div className="flex h-full w-full flex-col items-start justify-between gap-3">
                  <p className="text-2xl leading-tight md:text-2xl">
                    Agents
                  </p>

                  <p className="text-sm leading-relaxed lg:text-md">
                    Build intelligent agents that reason, act, and work across
                    your tools.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Workbench / Model Lab / AI Solutions */}
          <div className="mb-3 flex w-full flex-row flex-wrap items-end justify-center gap-3 translate-y-0.5 lg:mb-0 lg:translate-x-8.5 lg:flex-nowrap lg:gap-0">
            <div className="hidden aspect-square h-50 shrink-0 border border-r-0 border-surface-dark bg-surface-dark lg:block" />

            {/* Workbench */}
            <Link
              href=""
              className={`group h-auto min-h-36 w-full bg-blue-600 lg:h-50 lg:w-50 ${mobileCard}`}
            >
              <div className="flex min-h-36 h-full w-full flex-col items-start justify-between rounded-[inherit] border border-surface-dark bg-background-secondary p-3 transition-all duration-500 group-hover:shadow-box active:shadow-box lg:rounded-none lg:group-hover:-translate-x-10 lg:active:translate-x-0 transition-[cubic-bezier(0.4,0,0.2,1)]">
                <div className="flex h-full w-full flex-col items-start justify-between gap-3">
                  <p className="text-2xl leading-tight md:text-2xl">
                    Workbench
                  </p>

                  <p className="text-sm leading-relaxed lg:text-md">
                    Design, test, and iterate on AI workflows in one place.
                  </p>
                </div>
              </div>
            </Link>

            {/* Model Lab */}
            <Link
              href=""
              className={`group h-auto min-h-32 w-full bg-cyan-500 lg:h-50 lg:w-50 ${mobileCard}`}
            >
              <div className="flex min-h-32 h-full w-full flex-col items-start justify-between rounded-[inherit] border border-l-0 border-surface-dark bg-background-secondary p-3 transition-all duration-300 group-hover:shadow-box active:shadow-box lg:rounded-none lg:group-hover:translate-x-10 lg:active:translate-x-0 transition-[cubic-bezier(0,0,0.2,1)]">
                <div className="flex h-full w-full flex-col items-start justify-between gap-3">
                  <p className="text-2xl leading-tight md:text-2xl">
                    Model Lab
                  </p>

                  <p className="text-sm leading-relaxed lg:text-md">
                    Adapt, evaluate, and optimize models for specialized tasks.
                  </p>
                </div>
              </div>
            </Link>

            <div className="hidden w-20 shrink-0 lg:block" />

            {/* AI Solutions */}
            <Link
              href=""
              className={`group h-28 w-full border border-surface-dark bg-background-secondary lg:h-50 lg:w-50 ${mobileCard}`}
            >
              <div className="flex h-full w-full md:items-center md:justify-center rounded-[inherit] border border-surface-dark bg-background-secondary p-3 transition-all group-hover:shadow-box active:shadow-box lg:rounded-none lg:group-hover:rotate-12 lg:active:rotate-0">
                <p className="md:text-center text-2xl leading-tight md:text-2xl">
                  AI Solutions
                </p>
              </div>
            </Link>
          </div>

          {/* Models / Compute */}
          <div className="mb-3 flex w-full flex-row flex-wrap items-end justify-center gap-3 translate-y-px lg:mb-0 lg:translate-x-6 lg:flex-nowrap lg:gap-0">
            <div className="flex w-full flex-row flex-wrap items-end justify-center gap-3 translate-y-px lg:translate-x-6 lg:flex-nowrap lg:gap-0">
              {/* Tensorly Models */}
              <Link
                href="/"
                className={`group z-20 h-auto min-h-28 w-full bg-primary lg:h-50 lg:w-50 ${mobileCard}`}
              >
                <div className="flex min-h-28 h-full w-full flex-col items-start justify-between rounded-[inherit] border border-surface-dark bg-background-secondary p-3 transition-all duration-500 group-hover:shadow-box active:shadow-box lg:rounded-none lg:group-hover:translate-x-20 lg:active:translate-x-0 transition-[cubic-bezier(0.4,0,0.2,1)]">
                  <div className="flex h-full w-full items-start lg:aspect-square lg:w-8 lg:items-center lg:justify-center">
                    <span className="relative inline-block w-full text-xl leading-tight md:text-2xl lg:w-7 lg:text-3xl">
                      Tensorly Models
                    </span>
                  </div>
                </div>
              </Link>

              <div className="hidden aspect-square h-20 shrink-0 bg-surface-dark lg:block" />

              {/* Tensorly Compute */}
              <Link
                href="/"
                className={`group z-20 h-auto min-h-36 w-full shrink-0 border border-surface-dark bg-cyan-400 lg:h-50 lg:w-100 ${mobileCard}`}
              >
                <div className="flex min-h-36 h-full w-full flex-col items-start justify-between rounded-[inherit] bg-background-secondary p-3 transition-all duration-500 group-hover:shadow-box active:shadow-box lg:rounded-none lg:group-hover:translate-x-20 lg:active:translate-x-0">
                  <div className="flex h-full w-full flex-col items-start justify-between gap-3">
                    <p className="text-2xl leading-tight md:text-2xl">
                      Tensorly Compute
                    </p>

                    <p className="text-sm leading-relaxed lg:text-md">
                      Scalable infrastructure for training, deploying, and
                      running AI workloads.
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex flex-row items-end">
                <div className="tech-dot tech-dot-top-right z-10 hidden aspect-square h-20 shrink-0 border-x-0 bg-surface-dark lg:block" />

                <div className="hidden aspect-square h-50 shrink-0 border-y-0 border-surface-dark bg-surface lg:block" />

                <div className="absolute right-0 bottom-0 hidden aspect-square h-15 w-15 shrink-0 -translate-x-4.5 rotate-45 origin-bottom-right border border-surface-dark bg-surface-dark lg:relative lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
