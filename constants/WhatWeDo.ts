export type WhatWeDoCard = {
  title: string;
  description: string;
};

export interface WhatWeDoProps {
  heading: string;
  cards: WhatWeDoCard[];
}

export const DEFAULT_WHATWEDO_PROPS: WhatWeDoProps = {
  heading: "What We Do",
  cards: [
    {
      title: "Youth & Transitional Support",
      description: "We support young people through uncertain moments. Offering guidance, structure and someone in their corner.  ",
    },
    {
      title: "Community Impact",
      description: " We show up in communities that are often overlooked. Doing the work on the ground, where it matters most.",
    },
    {
      title: "Mental Health & Wellbeing",
      description: "We focus on early support, helping people build resilience and find stability.  ",
    },
    {
      title: "Daily Admin Support",
      description: "Support with organisation, coordination and day-to-day tasks.",
    },
  ],
};