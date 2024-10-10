const TitleBar = () => {
  return (
    <div className=" bg-gray-700 h-8 flex items-center gap-2 px-4">
      <div aria-hidden className="p-1.5 rounded-full w-min bg-[tomato]"></div>
      <div aria-hidden className="p-1.5 rounded-full w-min bg-gray-600"></div>
      <div aria-hidden className="p-1.5 rounded-full w-min bg-[rgb(50,205,50)]"></div>
      <h2 className="absolute w-full left-0 text-sm font-bold text-center text-[ivory]">
        about.js
      </h2>
    </div>
  );
};

export default TitleBar;
