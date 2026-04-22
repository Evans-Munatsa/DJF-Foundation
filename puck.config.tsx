import { Config } from "@puckeditor/core";

import { WhatWeDoProps, DEFAULT_WHATWEDO_PROPS, WhatWeDoCard } from "@/constants/WhatWeDo";
import WhatWeDo from "@/components/WhatWeDo/page";


type Props = {
 
  WhatWeDo: WhatWeDoProps;

};

export const config: Config<Props> = {
  components: {
        WhatWeDo: {
      fields: {
        heading: { type: "text" },
        cards: {
          type: "array",
          getItemSummary: (item: WhatWeDoCard) => item.title || "Card",
          arrayFields: {
            title: { type: "text" },
            description: { type: "textarea" },
          },
        },
      },
      defaultProps: DEFAULT_WHATWEDO_PROPS,
      render: (props) => <WhatWeDo {...props} />,
    },
  }
}