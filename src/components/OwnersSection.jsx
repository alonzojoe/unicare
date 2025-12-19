import { OWNERS_CONTENT } from "@/constants/index";
import OwnersCard from "@/components/Items/OwnersCard";

const OwnersSection = () => {
  const { title, subTitle, imageUrl, cardBg, items, buttonText } =
    OWNERS_CONTENT;
  return (
    <section id="recruitment">
      <div className="max-w-10xl mx-auto py-14 px-8 lg:px-0 grid items-center grid-cols-1 gap-8 lg:grid-cols-2 mb-20">
        <div className="order-2 md:order-1 flex items-center justify-center md:justify-center">
          <img
            className="w-md xl:w-xl"
            src={imageUrl}
            alt="clinic-owners-image"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center gap-6 items-center lg:items-stretch">
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

export default OwnersSection;
