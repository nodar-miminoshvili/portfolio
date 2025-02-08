import GenerateCodeSnippet from './GenerateCodeSnippet';

const Content = () => {
  const techStack = ['PHP','JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'SQL', 'OOP', 'Git'];

  return (
    <ul className="tracking-wide text-[ivory]">
      <GenerateCodeSnippet objKey="currentLocation" objValue="Tbilisi, Georgia" />

      <br />

      <GenerateCodeSnippet objKey="techStack" objValue={techStack} />

      <br />

      <li>
        <span className="objKey">.resume</span>
        <a
          href="/CV/Nodar-Miminoshvili-Resume.pdf"
          target="_blank"
          className="text-stone-300 hover:text-neutral-100 transition-colors"
        >
          Nodar-Miminoshvili.pdf
        </a>
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
