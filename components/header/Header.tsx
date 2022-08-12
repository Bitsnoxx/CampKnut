import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';

import clsx from 'clsx';
import ThemeSwitch from '../ThemeSwitch';

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  Router.events.on('routeChangeStart', () => setActive(false));

  return (
    <header className="sticky top-0 z-10 w-full bg-knut-light-bg text-knut-light-text dark:bg-knut-dark-bg dark:text-knut-dark-text">
      <link rel="apple-touch-icon" href="public/icons/knut3head-96x96.webp" />
      <nav className="relative flex flex-wrap">
        <div className="container mx-auto max-w-5xl">
          <div className="w-full lg:hidden">
            <button
              onClick={handleClick}
              className="text-xl cursor-pointer px-4 py-6 align-top"
              type="button"
            >
              <span className="relative block h-px w-6 rounded-sm bg-knut-dark-bg dark:bg-knut-light-bg "></span>
              <span className="relative mt-1 block h-px w-6 rounded-sm bg-knut-dark-bg dark:bg-knut-light-bg"></span>
              <span className="relative mt-1 block h-px w-6 rounded-sm bg-knut-dark-bg dark:bg-knut-light-bg"></span>
            </button>
            <ThemeSwitch
              className={
                'text-xl px-4 py-5 font-black uppercase leading-snug text-knut-light-header hover:opacity-75 dark:text-knut-dark-header'
              }
            />
          </div>
          <div className={clsx(active ? 'flex' : 'hidden', 'grow lg:flex')}>
            <ul className="flex list-none flex-col px-4 lg:mx-auto lg:flex-row lg:items-center lg:justify-center lg:gap-8">
              <li>
                <Link href="/">
                  <a className="text-sm flex cursor-pointer items-center py-4 font-bold uppercase leading-snug hover:opacity-75 ">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/calendar">
                  <a className="text-sm flex cursor-pointer items-center py-4 font-bold uppercase leading-snug hover:opacity-75">
                    Calendar
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/exercises">
                  <a className="text-sm flex cursor-pointer items-center py-4 font-bold uppercase leading-snug hover:opacity-75">
                    Exercises
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/workout">
                  <a className="text-sm flex cursor-pointer items-center py-4 font-bold uppercase leading-snug hover:opacity-75">
                    Workout
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/content">
                  <a className="text-sm flex cursor-pointer items-center py-4 font-bold uppercase leading-snug hover:opacity-75">
                    Content
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/vote">
                  <a className="text-sm flex cursor-pointer items-center py-4 font-bold uppercase leading-snug hover:opacity-75">
                    Vote
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="https://store.streamelements.com/knut"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm flex cursor-pointer items-center py-4 font-bold uppercase leading-snug hover:opacity-75"
                >
                  Merch
                </a>
              </li>
              <li>
                <ThemeSwitch
                  className={
                    'hidden cursor-pointer items-center py-4 text-knut-light-header hover:opacity-75 dark:text-knut-dark-header lg:flex'
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
