type Props = { objKey: string; objValue: string | string[] };

const GenerateCodeSnippet = ({ objKey, objValue }: Props) => {
  return (
    <li className="last-of-type:code-editor-cursor">
      <span className="objKey">.{objKey}</span>
      {!Array.isArray(objValue) ? (
        <span className="objValue">{`'${objValue}'`}</span>
      ) : (
        <ul className="inline before:content-['[_'] after:content-['_]'] before:text-purple-500  after:text-purple-500">
          {objValue.map(language => (
            <li
              key={language}
              className='inline objValue after:content-["_,_"] after:text-[ivory] last-of-type:after:hidden'
            >
              {`'${language}'`}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default GenerateCodeSnippet;
