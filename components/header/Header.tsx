import Link from "next/link";
import { introduction, seo } from "../../content/text";
import { NextSeo } from "next-seo";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  /**
   * Z- index set to 10 as header should always show no matter content behind
   *
   */
  return (
    <header className="sticky top-0 z-10">
      <NextSeo title={introduction.title} description={seo.description} />
      <nav className="relative flex flex-wrap items-center px-2 py-3 mb-3 bg-knut-dark-bg">
        <div className="container px-4 mx-auto flex flex-wrap items-center">
          <div className="w-full relative flex justify-between px-4 lg:static lg:block lg:justify-start lg:w-auto">
            <Link href="/"> Camp Knut 💪 </Link>
            <button
              onClick={handleClick}
              className="cursor-pointer text-xl leading-none px-3 py-1 lg:hidden"
              type="button"
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className={clsx(
              active ? "flex" : "hidden",
              "lg:flex flex-grow items-center"
            )}
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="nav-item">
                <Link href="/">
                  <span className="cursor-pointer ml-2 px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/socials">
                  <span className="cursor-pointer ml-2 px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                    Socials
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://store.streamelements.com/knut"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="cursor-pointer ml-2 px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                    Merch
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
