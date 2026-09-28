import Link from "next/link";
import React from "react";

const navItems = [
  "Products",
  "Industries",
  "Research",
  "Developers",
  "Blog",
  "Company",
];

const navItemClass = "px-5 py-3";

const Navbar = () => {
  return (
    <div>
      <div className="max-w-full border border-[#27272b]">
        <div className="flex items-center justify-between">
          <div className="flex items-center divide-x divide-[#27272b]">
            <div className={navItemClass}>
              <h1>Tensorly</h1>
            </div>

            <div className="hidden md:flex divide-x divide-[#27272b] border-r border-[#27272b]">
              {navItems.map((item) => (
                <div key={item} className={navItemClass}>
                  <Link href="/">{item}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="items-center divide-x divide-[#27272b] flex">
            <Link
              className={`${navItemClass} border-l border-[#27272b]`}
              href=""
            >
              Start building
            </Link>

            <Link className={`${navItemClass} bg-foreground text-background`} href="">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;