import Project from './Project';
import devjobsLight from '@/public/screenshots/light/devjobs-light.png';
import audioshopLight from '@/public/screenshots/light/audioShop-light.png';
import easyRental from '@/public/screenshots/light/easyRental.png';
import devjobsDark from '@/public/screenshots/dark/devjobs-dark.png';
import audioshopDark from '@/public/screenshots/dark/audioShop-dark.png';

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
    slideDuration: '7s',
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
      <h3 className="text-center text-2xl font-bold tracking-wide after:content-['_</>'] after:text-[--accent-color]">
        Projects
      </h3>
      <ul className="flex flex-col items-center lg:items-stretch lg:flex-row lg:flex-wrap lg:justify-around gap-y-20 py-20">
        {projects.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
