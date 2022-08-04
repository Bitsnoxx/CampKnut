import Link from "next/link";
import {useState} from "react";
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
      <nav className="relative flex flex-wrap items-center px-2 py-3 mb-3 bg-knut-dark-bg">
        <div className="container px-4 mx-auto flex flex-wrap items-center">
          <div className="w-full relative flex justify-between px-4 lg:static lg:block lg:justify-start lg:w-auto">
            <Link href="/"> Camp Knut 💪 </Link>
            <button
                onClick={handleClick}
                className="cursor-pointer text-xl leading-none px-3 py-1 lg:hidden"
                type="button">
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
              className={clsx(active ? 'flex' : 'hidden', 'lg:flex flex-grow items-center')}
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                   href="/">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"/> <span
                    className="ml-2">HOME</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                   href="/socials">
                  <span className="ml-2">SOCIALS</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                   href="https://store.streamelements.com/knut"
                   rel="noreferrer"
                   target="_blank"
                >
                  <span className="ml-2">MERCH</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );

}
