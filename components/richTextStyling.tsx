import Important from './ui/Important';
import type { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const renderOptions: Options = {
  renderMark: {},
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => {
      return <h2 className="text-2xl py-4">{children}</h2>;
    },
    [BLOCKS.HEADING_2]: (_node, children) => {
      return <h2 className="text-xl	py-4">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (_node, children) => {
      return <h3 className="text-lg py-4">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (_node, children) => {
      return <h4 className="text-base py-4">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (_node, children) => {
      return <h5 className="text-sm py-4">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (_node, children) => {
      return <h6 className="text-xs py-4">{children}</h6>;
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return <p className="py-1.5">{children}</p>;
    },
    [BLOCKS.QUOTE]: (_node, children) => {
      return <Important elementType="blockquote">{children}</Important>;
    },
  },
};

export default renderOptions;
