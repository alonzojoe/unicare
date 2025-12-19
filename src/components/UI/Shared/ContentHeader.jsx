const ContentHeader = ({ title, subTitle }) => {
  return (
    <div className="w-full flex flex-col space-y-2 items-center justify-between text-center">
      <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-700-line-115">
        {title}
      </h2>
      <p className="text-light-primary tex-md md:text-lg lg:text-xl">
        {subTitle}
      </p>
    </div>
  );
};

export default ContentHeader;
