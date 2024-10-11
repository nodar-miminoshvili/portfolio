type Props = {
  linkDetails: {
    label: string;
    title: string;
    url: string;
    isEmail?: boolean;
    icon: React.ReactElement;
  };
};

const contactLink = ({ linkDetails: { label, title, url, isEmail, icon } }: Props) => {
  return (
    <li className="group">
      <a
        href={isEmail ? `mailto:${url}` : url}
        target={isEmail ? '' : '_blank'}
        rel={isEmail ? '' : 'noopener noreferrer'}
        className="block rounded-lg p-0 tiny:p-4 tiny:hover:shadow-border transition-shadow duration-300"
      >
        <p className="text-lg font-bold text-[--text-primary] ">
          {icon}
          {label}
        </p>
        <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-[--accent-color] ">
          {title}
        </p>
      </a>
    </li>
  );
};

export default contactLink;
