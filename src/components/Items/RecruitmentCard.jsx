const RecruitmentCard = ({ content }) => {
  const { title, description, icon } = content;
  return (
    <div className="bg-sky-soft p-4 rounded-1xl flex items-center justify-end gap-4 w-full">
      <div className="flex flex-col space-y-2 items-end text-right text-darker">
        <h4 className="text-xl md:text-3xl font-700-line-115">{title}</h4>
        <span className="hidden md:inline text-base md:text-md font-400-line-147">
          {description}
        </span>
      </div>
      <div className="rounded-1xl h-15 w-15 py-1 px-2 bg-sky flex items-center justify-center gap-2.5 aspect-square">
        <img src={icon} className="w-6 h-auto" alt="icon" />
      </div>
    </div>
  );
};

export default RecruitmentCard;
