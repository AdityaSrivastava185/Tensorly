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
    <div className="container">
      <nav className="section">
        <div className="max-w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center divide-x divide-surface-dark">
              <div className={navItemClass}>
                <h1>Tensorly</h1>
              </div>

              <div className="hidden xl:flex divide-x divide-surface-dark border-r border-surface-dark">
                {navItems.map((item) => (
                  <div key={item} className={navItemClass}>
                    <Link href="/">{item}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="items-center divide-x divide-surface-dark flex">
              <Link
                className={`${navItemClass} border-l border-surface-dark hidden md:block`}
                href=""
              >
                Start building
              </Link>

              <Link
                className={`${navItemClass} bg-foreground text-background`}
                href=""
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
