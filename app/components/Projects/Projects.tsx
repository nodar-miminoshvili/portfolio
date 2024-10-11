import Project from './Project';
import audioshopScreen from '@/public/screenshots/audioShop.jpg';
import easyRentalSreen from '@/public/screenshots/easyRental.jpg';
import devjobsScreen from '@/public/screenshots/devjobs.png';
import GithubLink from './GithubLink';

const projects = [
  {
    title: 'Audio Tech Shop',
    description:
      'A full-stack e-commerce platform, with user authentication and Stripe payment integration.',
    screenshot: audioshopScreen,
    liveDemo: 'https://audioshop.vercel.app/',
    codeLink: 'https://github.com/nodar-miminoshvili/audio-store',
    slideDuration: '6s',
  },
  {
    title: 'Easy-Rental',
    description: 'A responsive, multi-page front-end website for car rentals.',
    screenshot: easyRentalSreen,
    liveDemo: 'https://easyrental.vercel.app/',
    codeLink: 'https://github.com/nodar-miminoshvili/car-rental',
    slideDuration: '9s',
  },
  {
    title: 'Devjobs web app',
    description:
      'A full-stack job board app featuring user authentication, server-side search, filtering, and pagination.',
    screenshot: devjobsScreen,
    liveDemo: 'https://jobs-dev.vercel.app/',
    codeLink: 'https://github.com/nodar-miminoshvili/devjobs',
    slideDuration: '3s',
  },
];
const Projects = () => {
  return (
    <section id="projects" className="mt-28 pt-16">
      <h3 className="text-center text-2xl font-bold tracking-wide after:content-['</>'] after:text-[--accent-color] after:ml-1">
        Projects
      </h3>

      <ul className="grid grid-cols-1 grid-rows-[1fr,1fr,1fr,14rem] md:grid-rows-none md:auto-rows-fr justify-items-center lg:grid-cols-2 lg:grid-rows-2 gap-16 lg:gap-10 py-16 lg:py-20">
        {projects.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}

        <GithubLink />
      </ul>
    </section>
  );
};

export default Projects;
