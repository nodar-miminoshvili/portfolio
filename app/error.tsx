'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { PiMaskSadFill as SadFaceIcon } from 'react-icons/pi';

const ErrorPage = ({ reset }: { reset: () => void }) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  return (
    <>
      {/* Metadata */}
      <title>Oops! Something Went Wrong</title>
      <meta
        name="description"
        content="Oops! Something went wrong. You can try again or visit the homepage."
      />
      <link rel="icon" type="image/x-icon" href="/favicons/sadFace.png" fetchPriority="high" />

      <main className="grid place-content-center pb-20 min-h-[calc(100dvh-9.5rem)] text-center text-base lg:text-lg">
        <SadFaceIcon aria-hidden className="text-5xl fill-[--shade-active-color] mx-auto mb-3" />
        <h1 className="font-semibold mb-5">Oops! Something Went Wrong</h1>

        <button
          className="px-5 py-4 rounded-md font-bold bg-[--shade-color] text-[--accent-color] 
          transition-colors hover:bg-[--shade-active-color] hover:text-[--accent-active-color]"
          onClick={() => {
            startTransition(() => {
              router.refresh();
              reset();
            });
          }}
        >
          Try Again
        </button>
        <span className="font-medium my-2 text-[--secondary-color]">OR</span>
        <a
          href="/"
          className="px-5 py-4 rounded-md text-[ivory] font-bold bg-[--accent-color] transition-opacity 
          opacity-80 hover:opacity-100"
        >
          Visit Homepage
        </a>
      </main>
    </>
  );
};

export default ErrorPage;
