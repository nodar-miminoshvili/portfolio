import { Metadata } from 'next';
import Link from 'next/link';
import { HiOutlineEmojiSad as SadFaceIcon } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Oops! Could not find the requested Page.',
  icons: {
    icon: '/favicons/sadFace.png',
  },
};

const NotFound = () => {
  return (
    <main className="grid place-content-center pb-20 min-h-[calc(100dvh-9.5rem)] text-center">
      <SadFaceIcon
        aria-hidden
        className="text-7xl fill-[--shade-active-color] text-[--base-background] mb-3 mx-auto"
      />
      <h1 className="text-lg font-bold mb-px">404 Not Found</h1>
      <h2 className="font-medium text-[--secondary-color]">could not find the requested page</h2>
      <Link
        href="/"
        className="mt-3.5 px-3 py-2.5 rounded-md text-[ivory] font-bold bg-[--accent-color] transition-opacity opacity-80 hover:opacity-100 "
      >
        Visit Homepage
      </Link>
    </main>
  );
};

export default NotFound;
