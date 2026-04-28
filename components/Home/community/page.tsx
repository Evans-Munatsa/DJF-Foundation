"use client";

import Image from "next/image";

export function Community() {
    return(
      <div className="relative bottom-0 left-0 w-full h-[700px]">
        <div className="relative w-full h-[320px] md:h-[800px] overflow-hidden">
          <Image
            src="/impact-bottom.svg"
            alt="community"
            fill
            className="object-cover"
          />

          {/* CURVE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0259DE] via-transparent to-transparent opacity-70" />
        </div>

      </div>
    )
}