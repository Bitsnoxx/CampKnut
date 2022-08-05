import type { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";
import Important from "./ui/Important";

const renderOptions: Options = {
  renderMark: {},
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => null,
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h1 className="text-2xl font-bold mb-6">{children}</h1>;
    },

    [BLOCKS.HEADING_6]: (node, children) => (
      <div className="w-full p-4 my-4 bg-knut-light-bg-info dark:bg-knut-dark-bg-info">
        {children}
      </div>
    ),
  },
};

export default renderOptions;
