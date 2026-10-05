import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="section container">
      {/* Hero heading */}
      <div className="w-full h-full pt-20 lg:h-[50dvh] lg:pt-0">
        <div className="flex h-full flex-col justify-between lg:flex-row">
          <div className="flex flex-col justify-end px-7 py-10 md:py-0 md:pb-10">
            <h1 className="text-5xl font-thin leading-[0.95] sm:text-6xl lg:font-normal xl:text-8xl">
              Frontier AI
              <br />
              Around your work
            </h1>
          </div>

          <div className="w-full max-w-none px-5 lg:flex lg:max-w-[30%] lg:items-end lg:border-b lg:border-l lg:border-surface-dark lg:bg-surface lg:p-7">
            <p className="my-0 text-xl text-balance sm:text-2xl lg:-my-4 xl:text-4xl">
              Build intelligent systems around your data, workflows, and
              organization with the flexibility to shape AI around your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col pt-12 lg:flex-row lg:pt-0">
        <div className="w-full md:min-h-0">
          <Image
            src="/hero-image.png"
            alt="hero image"
            width={1440}
            height={1440}
            quality={100}
            priority
            sizes="(max-width: 1000px) 100vw, 70vw"
            className="block h-[50vh] w-full object-cover object-top-right sm:h-[60vh] md:h-[65vh] lg:h-auto"
          />
        </div>

        <div className="hidden w-full px-7 py-8 md:flex lg:max-w-[30%] md:items-end md:px-7 ">
          <p className="w-fit rounded-md px-3 py-1 text-xl text-balance text-primary">
            Tensorly gives teams the tools to build, customize, and deploy AI
            systems with greater control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
