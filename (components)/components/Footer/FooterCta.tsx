import React from "react";
import Image from "next/image";

const FooterCta = () => {
  return (
    <div className="relative">
      <div className="bg-[#ff5229] p-20 flex flex-row mt-20 items-center justify-between">
        <div className="pb-3">
          <div>
            <p className="font-thin">BUILD YOUR OWN AI IDEA</p>
          </div>
          <div className="max-w-4xl">
            <p className="text-5xl">
              Build, customize, and deploy tailored AI solutions with complete
              control over you build
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5">
          <div>
            <button className="flex items-center gap-3 rounded-md bg-[#202023] px-4 py-3 text-lg">
              <span>Start building</span>

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
          <div>
            <button className="flex items-center gap-3 rounded-md bg-foreground text-background px-4 py-3 text-lg">
              <span>Contact for sales</span>

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
      </div>
      <div className=" pointer-events-none
          absolute
          inset-0
          z-10
          size-full
          bg-[url('/noise-rectangle.png')]
          bg-repeat
          bg-size-[160px_160px]
          mix-blend-plus-lighter">
      </div>
    </div>
  );
};

export default FooterCta;
