import Button from "@/components/UI/Buttons/Button";

const OwnersCard = ({ title, subTitle, items, cardBg, buttonText }) => {
  return (
    <div
      className="clinic-card w-full bg-cover bg-position-[0%_center]! bg-no-repeat"
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      <div className="clinic-card-content h-full flex flex-col items-end justify-end gap-6 text-white text-right">
        <div>
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl">
            {title}
          </h2>
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl mt-0">
            {subTitle}
          </h2>
        </div>

        <ul className="space-y-5 text-lg md:text-xl my-5">
          {items.map((item) => (
            <ClinicItem label={item.label} icon={item.icon} key={item.id} />
          ))}
        </ul>

        <Button
          className="min-w-[169px] bg-white border-white text-darker"
          variant="outline"
        >
          <div className="flex items-center gap-2 text-lg">
            <span className="font-700-line-136">{buttonText}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export const ClinicItem = ({ label, icon }) => {
  return (
    <li className="flex items-center gap-3 justify-end">
      <span className="text-white text-md font-700-line-115">{label}</span>
      <img className="w-4 md:w-6 h-auto" src={icon} alt={`${label}-icon`} />
    </li>
  );
};

export default OwnersCard;
