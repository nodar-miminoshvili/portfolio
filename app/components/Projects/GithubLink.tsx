import Link from 'next/link';
import { FiGithub as GithubIcon } from 'react-icons/fi';

const GithubLink = () => {
  return (
    <li className="w-full max-w-[30rem] rounded-lg hover:shadow-border github-grid-link-background group">
      <Link
        href="https://github.com/nodar-miminoshvili"
        target="_blank"
        className="h-full grid place-content-center text-center"
      >
        <GithubIcon className="text-8xl text-white mx-auto  mb-4 transition-colors duration-500 group-hover:text-black" />
        <p className="text-2xl  font-semibold text-[--accent-color] text-white text-center leading-relaxed">
          See All Projects <br />
          on&nbsp;
          <span className="text-white font-bold transition-colors duration-500 group-hover:text-black">
            GitHub
          </span>
        </p>
      </Link>
    </li>
  );
};

export default GithubLink;
