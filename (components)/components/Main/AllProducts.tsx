import Link from "next/link";
import React from "react";

const AllProducts = () => {
  return (
    <div>
      <section className="section">
        <div className="pt-10 lg:pt-20 pb-10 lg:pb-20">
          <div className="w-full text-center py-7">
            <h2 className="md:text-6xl">Do it all with Tensorly</h2>
          </div>
          <div className="w-full flex items-end justify-center lg:-translate-x-9 translate-y-1">
            <div className="hidden lg:block markitecture-block-rotated absolute lg:relative aspect-square w-15 h-15 shrink-0 rotate-45 origin-bottom-right -translate-x-10 border border-[#27272b] bg-[#1a1a1e]"></div>
            <Link
              href={""}
              className="group bg-orange-600 w-full lg:w-100 h-34 lg:h-50 border border-[#27272b]"
            >
              <div className="origin-bottom-right lg:group-hover:-translate-x-10 duration-500 transition-[cubic-bezier(0.4, 0, 0.2, 1)] group-hover:shadow-box transition-all p-3 w-full h-full flex flex-col justify-between items-start border bg-[#101013]  border-[#27272b]">
                <div className="">
                  <p className="text-h5">Vibe</p>
                  <p className="text-body-small">
                    AI Agent for long-horizon work
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full flex flex-row flex-wrap lg:flex-nowrap items-end justify-center lg:translate-x-8.5 translate-y-0.5">
            <div className="hidden lg:block aspect-square h-50 shrink-0 border border-r-0 border-[#27272b] bg-[#27272b]"></div>
            <Link
              href={""}
              className="bg-blue-600 group bg-text-brand-2 w-1/2 lg:w-50 h-40 lg:h-50"
            >
              <div className="origin-bottom-left lg:group-hover:-translate-x-10 duration-500 transition-[cubic-bezier(0.4, 0, 0.2, 1)] group-hover:shadow-box transition-all p-3 w-full h-full flex flex-col justify-between items-start bg-[#101013] border border-[#27272b]">
                <div>
                  <p className="">Studio</p>

                  <p className="">Build, test, and run AI agents and apps.</p>
                </div>
              </div>
            </Link>
            <Link
              href={""}
              className="group bg-cyan-500 w-full lg:w-50 h-30 lg:h-50"
            >
              <div className="origin-bottom-right lg:group-hover:translate-x-10 duration-300 transition-[cubic-bezier(0, 0, 0.2, 1)] group-hover:shadow-box transition-all p-3 w-full h-full flex flex-col justify-between items-start bg-[#101013] border border-l-0 border-[#27272b]">
                <div>
                  <p className="">Forge</p>

                  <p className="">Train, align and evaluate custom AI</p>
                </div>
              </div>
            </Link>
            <div className="hidden lg:block w-20 shrink-0"></div>
            <Link
              href={""}
              className="group bg-[#101013]  border border-[#27272b] w-1/2 lg:w-50 h-40 lg:h-50"
            >
              <div className="origin-bottom-right lg:group-hover:rotate-12 group-hover:shadow-box transition-all transition-[cubic-bezier(0, 0, 0.2, 1)] p-3 w-full h-full flex flex-col justify-between items-start bg-[#101013] border border-[#27272b]">
                <div>
                  <p className="">Applied AI Services</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
