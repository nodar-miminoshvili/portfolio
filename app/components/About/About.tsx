import CodeEditor from './CodeEditor/CodeEditor';
import Intro from './Intro';

const About = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      <Intro />
      <CodeEditor />
    </section>
  );
};

export default About;
