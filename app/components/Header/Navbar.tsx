import ScrollToSectionButton from './ScrollToSectionButton';

const Navbar = () => {
  return (
    <nav>
      <ul className="font-bold flex gap-4 md:text-lg md:gap-6">
        <li>
          <ScrollToSectionButton title="Projects" sectionId="projects" position="start" />
        </li>
        <li>
          <ScrollToSectionButton title="Contact" sectionId="contact" position="center" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
