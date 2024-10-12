'use client';

import { usePathname, useRouter } from 'next/navigation';

type Props = {
  title: string;
  sectionId: string;
  position: ScrollLogicalPosition;
};

const ScrollToSectionButton = ({ sectionId, position, title }: Props) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <button
      className="transition-colors hover:text-[--accent-color]"
      onClick={async () => {
        if (pathname !== '/') {
          replace('/');
          const timeoutAfterNavigation: Promise<void> = new Promise(resolve => {
            setTimeout(() => {
              resolve();
            }, 250);
          });
          await timeoutAfterNavigation;
        }

        const section = document.getElementById(sectionId);
        if (section instanceof HTMLElement)
          section.scrollIntoView({ behavior: 'smooth', block: position });
      }}
    >
      {title}
    </button>
  );
};

export default ScrollToSectionButton;
