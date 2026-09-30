import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="section container">
      {/* Hero heading */}
      <div className="w-full h-full pt-20 lg:h-[50dvh] lg:pt-0">
        <div className="flex h-full flex-col justify-between md:flex-row">
          <div className="flex flex-col justify-end px-7 py-10 md:py-0 md:pb-10">
            <h1 className="text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
              Frontier AI
              <br />
              In your hands
            </h1>
          </div>

          <div className="hidden w-full max-w-[30%] border-b border-l border-[#27272b] bg-[#1a1a1e] p-7 md:flex md:items-end">
            <p className="text-2xl text-balance lg:text-4xl">
              We help organizations build tailored AI systems to solve the
              world&apos;s hardest problems.
            </p>
          </div>
        </div>
      </div>

      {/* Hero image + description */}
      <div className="flex w-full flex-col pt-12 md:flex-row lg:pt-0">
        <div className="w-full">
          <Image
            src="/hero-image.png"
            alt="hero image"
            width={1440}
            height={1440}
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 70vw"
            className="block h-auto w-full object-contain object-left"
          />
        </div>

        <div className="w-full px-7 py-8 md:flex md:max-w-[30%] md:items-end md:px-7 md:py-0">
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