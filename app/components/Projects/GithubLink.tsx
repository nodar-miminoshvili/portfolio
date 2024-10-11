import { FiGithub as GithubIcon } from 'react-icons/fi';

const GithubLink = () => {
  return (
    <li className="max-h-56 xs:max-h-none w-full max-w-[30rem] rounded-lg hover:shadow-border transition-shadow duration-300 github-grid-link-background group">
      <a
        href="https://github.com/nodar-miminoshvili"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full grid place-content-center text-center"
      >
        <GithubIcon className="text-6xl md:text-8xl text-white mx-auto  mb-4 transition-colors duration-500 group-hover:text-black" />
        <p className="text-xl md:text-2xl font-semibold text-[--accent-color] text-white text-center leading-relaxed">
          See All Projects <br />
          on&nbsp;
          <span className="text-white font-bold transition-colors duration-500 group-hover:text-black">
            GitHub
          </span>
        </p>
      </a>
    </li>
  );
};

export default GithubLink;
