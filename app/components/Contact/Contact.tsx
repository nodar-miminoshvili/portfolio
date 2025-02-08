import ContactLink from './ContactLink';
import { VscGithubAlt as GithubIcon } from 'react-icons/vsc';
import { CiLinkedin as LinkedInIcon } from 'react-icons/ci';
import { CiMail as MailIcon } from 'react-icons/ci';

const contactLinks = [
  {
    label: 'Email',
    title: 'miminoshvilinodar@gmail.com',
    url: 'miminoshvilinodar@gmail.com',
    isEmail: true,
    icon: <MailIcon className="contact-link-logo" />,
  },
  {
    label: 'GitHub',
    title: 'github/nodar-miminoshvili',
    url: 'https://github.com/nodar-miminoshvili',
    icon: <GithubIcon className="contact-link-logo" />,
  },
  {
    label: 'LinkedIn',
    title: 'in/nodar-miminoshvili',
    url: 'https://www.linkedin.com/in/nodar-miminoshvili-b09767332',
    icon: <LinkedInIcon className="contact-link-logo" />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="mt-4 xs:mt-20 py-8 ">
      <h4 className="text-center text-2xl font-bold tracking-wide after:content-['@'] after:text-[--accent-color] after:ml-2">
        Contact
      </h4>
      <ul className="py-16 grid md:grid-cols-[1fr,1fr] gap-12 w-fit mx-auto gap-x-40 ">
        {contactLinks.map((linkDetails, idx) => (
          <ContactLink key={idx} linkDetails={linkDetails} />
        ))}
      </ul>
    </section>
  );
};

export default Contact;
