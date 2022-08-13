import { createElement, ReactNode } from 'react';

type ImportantProps = {
  children: ReactNode;
  elementType?: 'div' | 'blockquote';
};

export default function Important({ children, elementType = 'div' }: ImportantProps) {
  const style = 'p-4 my-4 bg-knut-light-bg-info dark:bg-knut-dark-bg-info';

  const comp = createElement(elementType, { className: style }, children);

  return comp;
}
