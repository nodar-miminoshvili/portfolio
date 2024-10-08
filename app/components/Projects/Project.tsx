import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';

type Props = {
  project: {
    title: string;
    screenshots: {
      light: StaticImageData;
      dark: StaticImageData;
    };
    description: string;
    liveDemo: string;
    codeLink: string;
    slideDuration: string;
  };
};

const Projects = ({
  project: { title, screenshots, description, liveDemo, codeLink, slideDuration },
}: Props) => {
  return (
    <li
      className="rounded-lg shadow-lg bg-[--shade-color] basis-2/5 last:mx-auto overflow-hidden flex flex-col pb-5 group
    max-w-[25rem] min-h-[27.25rem]"
    >
      <div className="h-52 overflow-hidden">
        <Image
          src={screenshots.light}
          alt={title}
          className="w-full h-auto group-hover:-translate-y-[calc(100%-13rem)] transition-transform ease-linear"
          style={{ transitionDuration: slideDuration }}
          width={387}
        />
      </div>
      <div className="px-3.5 pt-5 pb-7 w-full flex-grow">
        <p className="text-lg font-bold mb-3 font-mono ">{title}</p>
        <p className=" text-[--secondary-active-color] font-medium">{description}</p>
      </div>
      <div className="flex flex-col items-center xs:flex-row xs:items-center gap-5 font-bold px-4">
        <Link
          href={liveDemo}
          className="pl-3.5 pr-4 py-3 rounded-md text-gray-200 bg-[#5a67d8] transition-colors
          hover:bg-[#4c51bf] flex items-center gap-1 group"
        >
          <BiLink className="text-xl self-start transition-colors group-hover:text-[tomato]" />
          Live Demo
        </Link>
        <Link
          href={codeLink}
          className="px-4 py-2.5 rounded-md border-2 border-[--github-link-border] text-[--github-link-text] flex items-start gap-1 
          transition-colors hover:bg-[--shade-active-color] hover:text-[--accent-active-color] hover:border-[--accent-active-color]"
        >
          <BsGithub className="text-xl" /> View Code
        </Link>
      </div>
    </li>
  );
};

export default Projects;
