import { OWNERS_CONTENT } from "@/constants/index";
import OwnersCard from "@/components/Items/OwnersCard";

const OwnersSection = () => {
  const {
    title,
    subTitle,
    imageUrl,
    cardBg,
    items,
    buttonText,
    heroTop,
    heroBottom,
  } = OWNERS_CONTENT;
  return (
    <section id="recruitment">
      <div className="max-w-10xl mx-auto py-8 sm:px-0 md:px-4 grid items-center grid-cols-1 gap-0 lg:gap-8 lg:grid-cols-2 mb-10 lg:mb-20">
        <div className="relative -mt-5 order-2 z-10 lg:order-1 px-4 lg:px-0 grid grid-cols-2 gap-4 lg:gap7.5 lg:grid-cols-1 justify-items-center">
          <div
            className={`owner-hero-top w-full h-26.5 lg:h-69.5`}
            style={{ backgroundImage: `url(${heroTop})` }}
          />
          <div
            className={`owner-hero-bottom w-full h-26.5 lg:h-69.5`}
            style={{ backgroundImage: `url(${heroBottom})` }}
          />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center gap-6 items-center lg:items-stretch">
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
