'use client';

import { switchTheme } from '@/actions';
import { ReactElement, useState } from 'react';
import { GoMoon as MoonIcon } from 'react-icons/go';
import { RiComputerLine as SystemIcon } from 'react-icons/ri';
import { GoSun as SunIcon } from 'react-icons/go';

const ThemeSwitcher = ({ theme }: { theme: Theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  let themeIcon: ReactElement;
  switch (theme) {
    case 'system':
      themeIcon = <SystemIcon />;
      break;
    case 'dark':
      themeIcon = <MoonIcon />;
      break;
    case 'light':
      themeIcon = <SunIcon />;
      break;
  }

  return (
    <div>
      <div className="relative ml-auto mr-7 sm:mr-9">
        <button
          onClick={() => setIsOpen(true)}
          className={`text-xl text-[--accent-color] p-2 rounded-md bg-gray-700 transition-colors hover:bg-gray-600 
            ${isOpen && '!bg-gray-600'}`}
        >
          {themeIcon}
        </button>

        {/* Dropdown */}
        {isOpen && (
          <ul
            className="themeSwitcher flex justify-between items-center gap-2.5 w-max px-2.5 py-3 
                text-lg text-[--text-primary] absolute top-[125%] left-1/2 -translate-x-1/2 z-40 
                 rounded-md shadow-md"
          >
            <li className={`${theme === 'dark' && 'active'} `}>
              <button title="dark" onClick={() => switchTheme('dark')}>
                <MoonIcon />
              </button>
            </li>
            <li className={`${theme === 'system' && 'active'} text-[1rem]`}>
              <button title="system" onClick={() => switchTheme('system')}>
                <SystemIcon />
              </button>
            </li>
            <li className={`${theme === 'light' && 'active'}  `}>
              <button title="light" onClick={() => switchTheme('light')}>
                <SunIcon />
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full z-30"
        ></div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
