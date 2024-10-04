import Navbar from './Navbar';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ theme }: { theme: Theme }) => {
  return (
    <div className="container">
      <header className="px-5 py-4 md:px-7 md:py-5 flex justify-between items-center">
        <Navbar />
        <ThemeSwitcher theme={theme} />
      </header>
    </div>
  );
};

export default Header;
