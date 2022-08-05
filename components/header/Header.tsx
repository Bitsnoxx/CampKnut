import a from "next/link";
import { introduction, seo } from "../../content/text";
import { NextSeo } from "next-seo";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import Router, { useRouter } from "next/router";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  /**
   * Z- index set to 10 as header should always show no matter content behind
   *
   */

  const { theme, setTheme } = useTheme();

  Router.events.on("routeChangeStart", () => setActive(false));

  return (
    <header className="sticky top-0 z-10 text-knut-light-text dark:text-knut-dark-text bg-knut-light-bg dark:bg-knut-dark-bg w-full">
      <NextSeo title={introduction.title} description={seo.description} />
      <nav className="relative flex flex-wrap items-center py-3">
        <div className="container flex-1 mx-auto max-w-5xl">
          <div>
            <div className="w-full">
              <button
                onClick={handleClick}
                className="cursor-pointer text-xl leading-none px-3 py-5 lg:hidden"
                type="button"
              >
                <span className="block relative w-6 h-px rounded-sm bg-knut-dark-bg dark:bg-knut-light-bg "></span>
                <span className="block relative w-6 h-px rounded-sm bg-knut-dark-bg dark:bg-knut-light-bg mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-knut-dark-bg dark:bg-knut-light-bg mt-1"></span>
              </button>
            </div>
            <div
              className={clsx(active ? "flex" : "hidden", "lg:flex flex-grow")}
            >
              <ul className="flex flex-col lg:flex-row list-none lg:mx-auto lg:justify-center">
                <li>
                  <Link href="/">
                    <a className="cursor-pointer px-3 py-4 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/socials">
                    <a className="cursor-pointer px-3 py-4 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">
                      Socials
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://store.streamelements.com/knut"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="cursor-pointer px-3 py-4 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">
                      Merch
                    </span>
                  </a>
                </li>
                <li>
                  <button
                    className="px-3 pl-4 pt-3 font-black light:text-knut-light-header dark:text-knut-dark-header cursor-pointer flex text-sm uppercase leading-snug hover:opacity-75"
                    onClick={() => {
                      setTheme(theme === "light" ? "dark" : "light");
                    }}
                  >
                    <FaMoon size={20}></FaMoon>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
