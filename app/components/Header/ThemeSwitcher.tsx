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
          className={`text-xl text-[--accent-color] bg-[--shade-color] p-2 rounded-md transition-colors
             hover:bg-[--shade-active-color] hover:text-[--accent-active-color]
            ${isOpen && '!bg-[--shade-active-color] !text-[--accent-active-color]'}`}
        >
          {themeIcon}
        </button>

        {/* Dropdown */}
        {isOpen && (
          <ul
            className="ThemeSwitcher flex justify-between items-center gap-2 w-max 
                text-lg absolute top-[125%] left-1/2 -translate-x-1/2 z-20 
                 rounded-md shadow-md bg-[--shade-color] px-2.5 py-3 text-[--secondary-color]"
          >
            <li>
              <button
                title="dark"
                className={theme === 'dark' ? 'active' : ''}
                onClick={() => switchTheme('dark')}
              >
                <MoonIcon />
              </button>
            </li>

            <li>
              <button
                title="system"
                className={`${theme === 'system' && 'active'} text-[1rem]`}
                onClick={() => switchTheme('system')}
              >
                <SystemIcon />
              </button>
            </li>

            <li>
              <button
                title="light"
                className={theme === 'light' ? 'active' : ''}
                onClick={() => switchTheme('light')}
              >
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
          className="fixed top-0 left-0 w-full h-full z-10"
        ></div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
