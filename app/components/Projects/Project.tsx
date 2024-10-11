import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { BiLink as LinkIcon } from 'react-icons/bi';
import { FaArrowDown as ArrowIcon } from 'react-icons/fa';

type Props = {
  project: {
    title: string;
    screenshot: StaticImageData;
    description: string;
    liveDemo: string;
    codeLink: string;
    slideDuration: string;
  };
};

const Projects = ({
  project: { title, screenshot, description, liveDemo, codeLink, slideDuration },
}: Props) => {
  return (
    <li
      className=" bg-[--shade-color] overflow-hidden flex flex-col group
    max-w-[30rem] min-h-[27.25rem] px-4 py-6 xs:px-8 xs:py-10 rounded-xl flex-grow hover:bg-[--shade-active-color]
    "
    >
      <div className="shadow-none h-36 tiny:h-44 xs:h-52 rounded-lg overflow-hidden relative tiny:shadow-border">
        <div
          aria-hidden
          className="absolute translate-y-[120%] group-hover:translate-y-0 transition-transform peer bottom-1 left-1/2 -translate-x-1/2 p-4 rounded-full
         z-20 bg-[--shade-color] hover:bg-[--shade-active-color] hover:text-[--accent-active-color] cursor-pointer opacity-85 
         hidden tiny:block"
        >
          <ArrowIcon className="text-[--accent-color]" />
        </div>
        <Image
          src={screenshot}
          alt={title}
          className="w-full h-auto peer-hover:-translate-y-[calc(100%-13rem)] transition-transform ease-linear"
          style={{ transitionDuration: slideDuration }}
        />
      </div>
      <div className="sm:px-3.5 pt-7 pb-7 w-full flex-grow">
        <p className="text-lg font-bold mb-3 tracking-wide ">{title}</p>
        <p className=" text-[--secondary-active-color] font-medium">{description}</p>
      </div>
      <div className="flex flex-col-reverse xs:flex-row xs:items-center gap-5 font-bold sm:px-4">
        <Link
          href={liveDemo}
          target="_blank"
          className="pl-3.5 pr-4 py-3 rounded-md text-gray-200 bg-[#5a67d8] transition-colors
          hover:bg-[#4c51bf] flex items-center justify-center gap-1 group/link "
        >
          <LinkIcon className="text-xl self-start transition-colors group-hover/link:text-[tomato]" />
          Live Demo
        </Link>
        <Link
          href={codeLink}
          target="_blank"
          className="px-4 py-2.5 rounded-md border-2 border-[--github-link-border] text-[--github-link-text] flex items-start justify-center 
          gap-1 transition-colors hover:text-[--accent-active-color] hover:border-[--accent-active-color]"
        >
          <GithubIcon className="text-xl" /> View Code
        </Link>
      </div>
    </li>
  );
};

export default Projects;
