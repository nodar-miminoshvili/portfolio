import Project from './Project';
import devjobsLight from '@/public/screenshots/light/devjobs-light.png';
import audioshopLight from '@/public/screenshots/light/audioShop-light.jpg';
import easyRental from '@/public/screenshots/light/easyRental.jpg';
import devjobsDark from '@/public/screenshots/dark/devjobs-dark.png';
import audioshopDark from '@/public/screenshots/dark/audioShop-dark.jpg';
import GithubLink from './GithubLink';

const projects = [
  {
    title: 'Audio Tech Shop',
    description:
      'A full-stack e-commerce platform, with user authentication and Stripe payment integration.',
    screenshots: {
      light: audioshopLight,
      dark: audioshopDark,
    },
    liveDemo: 'https://audioshop.vercel.app/',
    codeLink: 'https://github.com/nodar-miminoshvili/audio-store',
    slideDuration: '6s',
  },
  {
    title: 'Easy-Rental',
    description: 'A responsive, multi-page front-end website for car rentals.',
    screenshots: {
      light: easyRental,
      dark: easyRental,
    },
    liveDemo: 'https://easyrental.vercel.app/',
    codeLink: 'https://github.com/nodar-miminoshvili/car-rental',
    slideDuration: '9s',
  },
  {
    title: 'Devjobs web app',
    description:
      'A full-stack job board app featuring user authentication, server-side search, filtering, and pagination.',
    screenshots: {
      light: devjobsLight,
      dark: devjobsDark,
    },
    liveDemo: 'https://jobs-dev.vercel.app/',
    codeLink: 'https://github.com/nodar-miminoshvili/devjobs',
    slideDuration: '3s',
  },
];
const Projects = () => {
  return (
    <section className="my-44">
      <h3 className="text-center text-2xl font-bold tracking-wide after:content-['</>'] after:text-[--accent-color] after:ml-1">
        Projects
      </h3>

      <ul className="grid grid-cols-1 auto-rows-fr justify-items-center lg:grid-cols-2 lg:grid-rows-2 gap-16 lg:gap-10 py-16 lg:py-20">
        {projects.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}

        <GithubLink />
      </ul>
    </section>
  );
};

export default Projects;
