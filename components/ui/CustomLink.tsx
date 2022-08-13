import Link from 'next/link';

import clsx from 'clsx';

type CustomLinkType = {
  href: string;
  children: string | JSX.Element | JSX.Element[];
  type: 'a' | 'Link';
  className?: string;
  lightColor?: string | null;
  darkColor?: string | null;
  hover?: string | null;
};

const defaultStyle = {
  lightColor: 'text-knut-light-text',
  darkColor: 'dark:text-knut-dark-text',
  hover: 'hover:underline',
};

export default function CustomLink({
  children,
  type,
  href,
  lightColor = defaultStyle.lightColor,
  darkColor = defaultStyle.darkColor,
  hover = defaultStyle.hover,
  className,
}: CustomLinkType) {
  if (type === 'a') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx(className, lightColor, darkColor, hover)}
      >
        {children}
      </a>
    );
  }

  if (type === 'Link')
    return (
      <Link href={href}>
        <a className={clsx(className, lightColor, darkColor, hover)}>{children}</a>
      </Link>
    );

  return null;
}
