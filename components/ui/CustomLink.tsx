import clsx from "clsx";
import Link from "next/link";

type CustomLinkType = {
  href: string;
  children: string | JSX.Element | JSX.Element[];
  type: "a" | "Link";
  className?: string;
  lightColor?: string | null;
  darkColor?: string | null;
  hover?: string | null;
};

export default function CustomLink({
  children,
  type,
  href,
  lightColor,
  darkColor,
  hover,
  className,
}: CustomLinkType) {
  const defaultStyle = {
    lightColor: "text-knut-light-text",
    darkColor: "dark:text-knut-dark-text",
    hover: "hover:font-black",
  };

  const style = clsx(
      lightColor !== null ?  (lightColor !== undefined ? lightColor : defaultStyle.lightColor) : "",
      darkColor !== null ? (darkColor !== undefined ? `dark:${darkColor?.replace("dark:", "")}` : defaultStyle.darkColor) : "",
      hover !== null ? (hover !== undefined ? `hover:${hover?.replace("hover:", "")}` : defaultStyle.hover) : ""
  );

  if (type === "a") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx(style, className)}
      >
        {children}
      </a>
    );
  }

  if (type === "Link")
    return (
      <Link href={href}>
        <a className={clsx(style, className)}>{children}</a>
      </Link>
    );

  return null;
}
