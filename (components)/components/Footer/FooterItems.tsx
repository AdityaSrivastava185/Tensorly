import Link from "next/link";
import React from "react";

const footerItems = [
  {
    title: "Products",
    items: [
      { name: "Vibe", href: "/" },
      { name: "Vibe Code", href: "/" },
      { name: "Studio", href: "/" },
      { name: "Forge", href: "/" },
      { name: "Compute", href: "/" },
      { name: "Pricing", href: "/" },
    ],
  },

  {
    title: "Solutions",
    items: [
      { name: "Delivery methodology", href: "/" },
      { name: "Model customization", href: "/" },
      { name: "Coding", href: "/" },
      { name: "Document intelligence", href: "/" },
      { name: "Speech", href: "/" },
      { name: "Mistral for finance", href: "/" },
      { name: "Mistral for public institutions", href: "/" },
      { name: "Mistral for manufacturing", href: "/" },
      { name: "Mistral for energy & utilities", href: "/" },
    ],
  },

  {
    title: "Why Tensorly",
    items: [
      { name: "About us", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Partners", href: "/" },
      { name: "Our customers", href: "/" },
      { name: "Our models", href: "/" },
      { name: "Brand", href: "/" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "Terms of Service", href: "/" },
      { name: "Privacy Policy", href: "/" },
      { name: "Data processing agreement", href: "/" },
      { name: "Trust Center", href: "/" },
    ],
  },
];

const FooterItems = () => {
  return (
    <div>
      <div className="container">
        <section className="section">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {footerItems.map((section) => (
              <div key={section.title} className="border-x border-[#27272b]">
                <div className="p-7">
                  <div className="pb-3">
                    <p className="text-xl text-[#6d6d78]">{section.title}</p>
                  </div>

                  <div className="flex flex-col items-start gap-2 text-md">
                    {section.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="transition-colors duration-200 hover:text-[#ff5229]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="border border-[#27272b]">
        <div className="container flex flex-col md:flex-row items-center justify-between border-x border-[#27272b] p-7">
          <div>
            <span>
              Source and Inspiration form{" "}
              <Link href={"https://mistral.ai/"} className="text-[#ff5229]">
                Mistral AI
              </Link>{" "}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <Link href={""}>Tensorly</Link>
            <Link href={""}>Privacy ploicy</Link>
            <Link href={""}>Terms and conditions</Link>
            <Link href={""}>Terms of use</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
