import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="section container">
      {/* Hero heading */}
      <div className="w-full h-full pt-20 lg:h-[50dvh] lg:pt-0">
        <div className="flex h-full flex-col justify-between md:flex-row">
          <div className="flex flex-col justify-end px-7 py-10 md:py-0 md:pb-10">
            <h1 className="text-5xl font-thin md:font-normal leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
              Frontier AI
              <br />
              In your hands
            </h1>
          </div>

          <div className="w-full max-w-[70%] lg:max-w-[30%] lg:border-b lg:border-l lg:border-[#27272b] lg:bg-[#1a1a1e] px-5 lg:p-7 md:flex md:items-end">
            <p className="text-xl text-balance lg:text-4xl -my-4">
              We help organizations build tailored AI systems to solve the
              world&apos;s hardest problems.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col pt-12 md:flex-row lg:pt-0">
        <div className="w-full md:min-h-0">
          <Image
            src="/hero-image.png"
            alt="hero image"
            width={1440}
            height={1440}
            quality={100}
            priority
            sizes="(max-width: 1000px) 100vw, 70vw"
            className="block w-full object-cover object-top-right h-[65vh] sm:h-[60vh] md:h-auto"
          />
        </div>

        <div className="hidden w-full px-7 py-8 md:flex md:max-w-[30%] md:items-end md:px-7 md:py-0">
          <p className="w-fit rounded-md px-3 py-1 text-xl text-balance text-orange-600">
            Tensorly is focused to build sovereign, open-weight AI technology
            frontier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
