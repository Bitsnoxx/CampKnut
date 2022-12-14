import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ThemeSwitchType = {
  className?: string;
};

export default function ThemeSwitch({ className }: ThemeSwitchType) {
  const { theme, setTheme } = useTheme();

  return (
    <>
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
    </>
  );
}
