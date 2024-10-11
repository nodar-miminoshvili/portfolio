'use client';

type Props = {
  title: string;
  sectionId: string;
  position: ScrollLogicalPosition;
};

const ScrollToSectionButton = ({ sectionId, position, title }: Props) => {
  return (
    <button
      onClick={() => {
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
