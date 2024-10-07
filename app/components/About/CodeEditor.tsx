import EditorContent from './EditorContent';

const CodeEditor = () => {
  return (
    <div className="w-full lg:w-auto lg:min-w-[26rem] max-w-[30rem] lg:max-w-[26.5rem] bg-gray-600 rounded-md min-h-96 sm:min-h-[22.5rem] overflow-hidden relative code-editor ">
      <div className=" bg-gray-700 h-8 flex items-center gap-2 px-4">
        <div className="p-1.5 rounded-full w-min bg-[tomato]"></div>
        <div className="p-1.5 rounded-full w-min bg-gray-600"></div>
        <div className="p-1.5 rounded-full w-min bg-[rgb(50,205,50)]"></div>
        <h2 className="absolute w-full left-0 text-sm font-bold text-center text-[ivory]">
          about.js
        </h2>
      </div>
      <div className="px-3 py-3.5 flex leading-relaxed">
        <div className="h-full pr-3 text-end text-gray-500/70 ">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div className="xs:hidden">11</div>
          <div className="xs:hidden">12</div>
          <div className="tiny:hidden">13</div>
          <div className="tiny:hidden">14</div>
        </div>

        <EditorContent />
      </div>
    </div>
  );
};

export default CodeEditor;
