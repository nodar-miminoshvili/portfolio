import { BsCode as TagIcon } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="py-7">
      <a
        href="https://github.com/nodar-miminoshvili/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mx-auto flex items-center justify-center gap-1.5 font-mono text-sm font-medium 
        hover:text-[--accent-color] group transition-colors"
      >
        <TagIcon className="text-xl group-hover:text-[tomato] transition-colors" /> Project Source
        Code
      </a>
    </footer>
  );
};

export default Footer;
