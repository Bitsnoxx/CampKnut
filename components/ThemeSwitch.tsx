import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';

type ThemeSwitchType = {
  className?: string;
};

export default function ThemeSwitch({ className }: ThemeSwitchType) {
  const [isMounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {isMounted ? (
        <button
          className={className}
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
      ) : (
        <button className={className}>
          <FiLoader size={19} />
        </button>
      )}
    </>
  );
}
