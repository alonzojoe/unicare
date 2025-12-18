const FeatureCard = ({ item, index }) => {
  return (
    <div
      className={`flex items-center gap-2 ${
        index < 2 ? "border-r-2 border-gray-300 pr-4" : ""
      }`}
    >
      <div className="flex flex-col text-right">
        <span className="text-xl font-bold ">{item.title}</span>
        <span className="text-md">{item.description}</span>
      </div>
      {item.icon}
    </div>
  );
};

export default FeatureCard;
