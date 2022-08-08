import type { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";
import Important from "./ui/Important";

const renderOptions: Options = {
  renderMark: {},
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h2 className="text-2xl">{children}</h2>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-xl	">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-lg">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="text-base">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5 className="text-sm">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6 className="text-xs">{children}</h6>;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="">{children}</p>;
    },
    [BLOCKS.QUOTE]: (node, children) => {
      return <Important elementType="blockquote">{children}</Important>;
    },
  },
};

export default renderOptions;
