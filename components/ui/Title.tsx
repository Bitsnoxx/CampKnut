import React from 'react';

import clsx from 'clsx';

const headingPossibleValues = [1, 2, 3, 4, 5, 6] as const;

type HeadingType = typeof headingPossibleValues[number];

type TitleProps = {
  children: string;
  heading: HeadingType;
  className?: string;
};

const baseStyles = {
  mutual: 'light:text-knut-light-header dark:text-knut-dark-header',
  1: 'text-3xl font-black',
  2: 'text-2xl font-bold',
  3: 'text-xl font-semibold',
  4: 'text-lg font-medium',
  5: 'text-base font-normal',
  6: 'text-sm font-light',
};

export default function Title({ children, heading, className }: TitleProps) {
  if (!headingPossibleValues.includes(heading)) return null;

  const style = clsx(className, baseStyles.mutual, baseStyles[heading]);

  const component = React.createElement(`h${heading}`, { className: style }, children);

  return component;
}
