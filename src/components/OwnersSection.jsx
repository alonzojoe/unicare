import { OWNERS_CONTENT } from "@/constants/index";
import Button from "@/components/UI/Buttons/Button";

const OwnersSection = () => {
  const { title, subTitle, imageUrl, cardBg, items, buttonText } =
    OWNERS_CONTENT;
  return (
    <section id="recruitment">
      <div className="max-w-10xl mx-auto py-14 lg:pl-[42.5] lg:pr-16 px-8 lg:px-0 grid items-center grid-cols-1 gap-8 lg:grid-cols-3 mb-20">
        <div className="col-span-1 order-2 md:order-1 flex items-center justify-center md:justify-center">
          <img
            className="w-md xl:w-xl"
            src={imageUrl}
            alt="clinic-owners-image"
          />
        </div>
        <div className="col-span-2 order-1 md:order-2 flex flex-col justify-center gap-6 items-center lg:items-stretch">
          <OwnersCard
            title={title}
            subTitle={subTitle}
            items={items}
            cardBg={cardBg}
            buttonText={buttonText}
          />
        </div>
      </div>
    </section>
  );
};

const OwnersCard = ({ title, subTitle, items, cardBg, buttonText }) => {
  return (
    <div
      className="clinic-card w-full bg-cover !bg-position-[20%_center] bg-no-repeat"
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      <div className="clinic-card-content p-10 md:p-16 h-full flex flex-col items-end justify-end gap-6 text-white text-right">
        <div>
          <h2 className="text-white text-4xl md:text-6xl">{title}</h2>
          <h2 className="text-white text-4xl md:text-6xl mt-0">{subTitle}</h2>
        </div>

        <ul className="space-y-4 text-lg md:text-xl">
          {items.map((item) => (
            <ClinicItem label={item.label} icon={item.icon} key={item.id} />
          ))}
        </ul>

        <Button
          className="min-w-[169px] bg-white text-darker"
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

const ClinicItem = ({ label, icon }) => {
  return (
    <li className="flex items-center gap-3 justify-end">
      <span className="text-white text-base md:text-md font-700-line-115">
        {label}
      </span>
      <img className="w-4 md:w-6 h-auto" src={icon} alt={`${label}-icon`} />
    </li>
  );
};

export default OwnersSection;
