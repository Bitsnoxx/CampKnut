import type { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Important from "./ui/Important";

const renderOptions: Options = {
  renderMark: {},
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => {
      return <h2 className="text-2xl">{children}</h2>;
    },
    [BLOCKS.HEADING_2]: (_node, children) => {
      return <h2 className="text-xl	">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (_node, children) => {
      return <h3 className="text-lg">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (_node, children) => {
      return <h4 className="text-base">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (_node, children) => {
      return <h5 className="text-sm">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (_node, children) => {
      return <h6 className="text-xs">{children}</h6>;
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return <p className="">{children}</p>;
    },
    [BLOCKS.QUOTE]: (_node, children) => {
      return <Important elementType="blockquote">{children}</Important>;
    },
  },
};

export default renderOptions;
