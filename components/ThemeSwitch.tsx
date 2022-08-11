import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';

export default function ThemeSwitch() {
  const [isMounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {isMounted && (
        <button
          className="text-sm flex cursor-pointer font-black uppercase leading-snug text-knut-light-header hover:opacity-75 dark:text-knut-dark-header"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme && theme === 'dark' ? (
            <FaSun size={19} title="Get flash-banged" />
          ) : (
            <FaMoon size={19} title="Switch to gamer mode" />
          )}
        </button>
      )}
      {!isMounted && (
        <button className="text-sm flex cursor-pointer py-4 font-black uppercase leading-snug text-knut-light-header hover:opacity-75 dark:text-knut-dark-header">
          <FiLoader size={19} />
        </button>
      )}
    </>
  );
}
