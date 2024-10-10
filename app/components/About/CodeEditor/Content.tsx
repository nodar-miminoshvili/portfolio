import Link from 'next/link';
import GenerateCodeSnippet from './GenerateCodeSnippet';

const Content = () => {
  const techStack = ['JavaScript', 'TypeScript', 'Tailwind', 'React', 'Next.js'];

  return (
    <ul className="tracking-wide text-[ivory]">
      <GenerateCodeSnippet objKey="currentLocation" objValue="Tbilisi, Georgia" />

      <br />

      <GenerateCodeSnippet objKey="techStack" objValue={techStack} />

      <br />

      <li>
        <span className="objKey">.CV</span>
        <Link
          href="/CV/Nodar-Miminoshvili.pdf"
          target="_blank"
          className="text-stone-300 hover:text-neutral-100 transition-colors"
        >
          Nodar-Miminoshvili.pdf
        </Link>
      </li>

      <br />

      <GenerateCodeSnippet
        objKey="education"
        objValue="B.A. in Political Science - Tbilisi State University, Georgia"
      />
    </ul>
  );
};

export default Content;
