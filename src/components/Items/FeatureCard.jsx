const FeatureCard = ({ item, index }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        index < 2 ? "border-r-2 border-sky md:border-gray-300" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col text-center md:text-right">
          <span className="text-lg md:text-xl text-sky md:text-dark font-bold">
            {item.title}
          </span>
          <span className="text-sm md:text-md">{item.description}</span>
        </div>
        <div className="hidden sm:block">{item.icon}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
