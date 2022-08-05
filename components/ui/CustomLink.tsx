import clsx from "clsx";
import Link from "next/link";

type CustomLinkType = {
  href: string;
  children: string | JSX.Element | JSX.Element[];
  type: "a" | "Link";
  className?: string;
};

export default function CustomLink({
  children,
  type,
  href,
  className,
}: CustomLinkType) {
  const style = `dark:text-knut-dark-text text-knut-light-text hover:font-black`;
  if (type === "a")
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx(className, style)}
      >
        {children}
      </a>
    );

  if (type === "Link")
    return (
      <Link href={href}>
        <a className={clsx(className, style)}>{children}</a>
      </Link>
    );

  return null;
}
