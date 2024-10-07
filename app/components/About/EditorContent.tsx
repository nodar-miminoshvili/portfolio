import Link from 'next/link';
import GenerateCodeSnippet from './GenerateCodeSnippet';

const EditorContent = () => {
  const techStack = ['JavaScript', 'TypeScript', 'Tailwind', 'React', 'Next.js'];

  return (
    <ul className="tracking-wider text-[ivory]">
      <GenerateCodeSnippet objKey="currentLocation" objValue="Tbilisi, Georgia" />

      <br />

      <GenerateCodeSnippet objKey="techStack" objValue={techStack} />

      <br />

      <li>
        <span className="objKey">.CV</span>
        <Link href="/" className="text-stone-300 hover:text-neutral-100 transition-colors">
          Nodar-Miminoshvili.pdf
        </Link>
      </li>

      <br />

      <GenerateCodeSnippet
        objKey="education"
        objValue="Tbilisi state university, political Science"
      />
    </ul>
  );
};

export default EditorContent;
