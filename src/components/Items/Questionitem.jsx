const QuestionItem = ({ item }) => {
  return (
    <div className={`flex items-center gap-2`}>
      <div className="flex flex-col text-right">
        <span className="text-md font-400-line-147">{item.question}</span>
      </div>
      {item.icon}
    </div>
  );
};

export default QuestionItem;
