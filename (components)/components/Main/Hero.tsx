import React from "react";

const Hero = () => {
  return (
    <section className="section">
      <div className="pt-20 lg:pt-0 w-full lg:h-[50dvh] h-full">
        <div className="flex flex-col justify-between md:flex-row h-full">
          <div className="px-7 py-10 md:py-0 flex flex-col justify-end">
            <h1 className="text-8xl">
              Frontier AI
              <br />
              In your hands
            </h1>
          </div>
          <div className="hidden max-w-[30%] w-full bg-[#1a1a1e] md:flex md:items-end p-7 border-l border-[#27272b] border-b">
            <p className="text-4xl text-balance">
              We help organizations build tailored AI systems to solve the
              world&apos;s hardest problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
