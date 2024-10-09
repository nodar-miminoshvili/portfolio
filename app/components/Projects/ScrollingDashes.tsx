const ScrollingDashes = () => {
  return (
    <>
      <span className="ml-1 text-[--accent-color]">&lt;</span>
      <div aria-hidden className="flex flex-col scrolling-dashes px-0.5">
        <span className="text-red-400">/</span>
        <span className="text-green-400">/</span>
        <span className="text-rose-400">/</span>
        <span className="text-indigo-400 hey">/</span>
        <span className="text-red-400">/</span>
      </div>
      <span className="text-[--accent-color]">&gt;</span>
    </>
  );
};

export default ScrollingDashes;
