'use server';

import { cookies } from 'next/headers';

export const switchTheme = (theme: Theme) => {
  if (theme === 'system') {
    cookies().delete('theme');
  } else {
    cookies().set('theme', theme);
  }
};
