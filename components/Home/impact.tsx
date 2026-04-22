"use client";

import Image from "next/image";

export default function ImpactSection() {
  const items = [
    {
      title: "The Kweli Project",
      img: "/impact1.jpg",
      text: "This Kweli Project is a volunteer-led initiative providing children with the Thai-Burma border with more green displaced by conflict.",
    },
    {
      title: "Ecarma Earth",
      img: "/impact2.jpg",
      text: "Ecarma Earth is our commitment to measurable environmental impact, funding verified initiatives like tree planting and ocean restoration",
    },
    {
      title: "Kindness Project",
      img: "/impact3.jpg",
      text: "The Kindness Project is about making small, tangible changes through simple, meaningful acts of care and support.",
    },
  ];

  return (
    <section className="bg-[#a9b9d3] text-center py-20 px-6 relative overflow-hidden">

      {/* TITLE */}
      <h2 className="text-[40px] md:text-[60px] font-brandHeader text-[#0259DE] mb-16">
        Our Impact
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            
            {/* IMAGE */}
            <div className="w-44 h-44 md:w-56 md:h-56 relative rounded-full overflow-hidden mb-6">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-[#0259DE] font-semibold mb-3">
              {item.title}
            </h3>

            {/* TEXT */}
            <p className="text-sm text-[#1e3a8a] max-w-xs mb-3">
              {item.text}
            </p>

            {/* LINK */}
            <button className="text-[#0259DE] text-sm underline underline-offset-4">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* QUOTE */}
      <div className="max-w-3xl mx-auto text-[#0259DE] relative mb-20 px-4">
        <p className="text-lg md:text-xl leading-relaxed">
          We’re here to reach people where they are, restore direction and remind them that their story isn’t over.
        </p>

        {/* QUOTES */}
        <span className="absolute -left-4 top-0 text-5xl">“</span>
        <span className="absolute -right-4 bottom-0 text-5xl">”</span>
      </div>

      {/* BOTTOM IMAGE WITH CURVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full h-[220px] md:h-[300px] overflow-hidden">
          <Image
            src="/impact-bottom.jpg"
            alt="community"
            fill
            className="object-cover"
          />

          {/* CURVE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0259DE] via-transparent to-transparent opacity-70" />
        </div>

        {/* SVG CURVE */}
        <svg
          viewBox="0 0 1440 200"
          className="w-full block -mt-1"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C400,0 1000,200 1440,80 L1440,200 L0,200 Z"
            fill="#a9b9d3"
          />
        </svg>
      </div>
    </section>
  );
}