import TitleBar from './TitleBar';
import LineNumbers from './LineNumbers';
import Content from './Content';

const CodeEditor = () => {
  return (
    <div className="w-full lg:w-auto lg:min-w-[26rem] max-w-[30rem] bg-gray-600 rounded-md min-h-fit xs:min-h-[22.5rem] overflow-hidden relative code-editor ">
      <TitleBar />
      <div className="px-3 py-3.5 flex leading-relaxed">
        <LineNumbers />
        <Content />
      </div>
    </div>
  );
};

export default CodeEditor;
