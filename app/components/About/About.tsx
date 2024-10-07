import CodeEditor from './CodeEditor';
import Intro from './Intro';

const About = () => {
  return (
    <section className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-0 lg:justify-between">
      <Intro />
      <CodeEditor />
    </section>
  );
};

export default About;
