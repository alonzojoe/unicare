import { RECRUITMENT_CONTENT } from "@/constants/index";
import ContentHeader from "@/components/UI/Shared/ContentHeader";
import RecruitmentCard from "@/components/Items/RecruitmentCard";

const RectruitmentSection = () => {
  const { title, subTitle, imageUrl, header, items } = RECRUITMENT_CONTENT;
  return (
    <section id="treatment">
      <ContentHeader title={title} subTitle={subTitle} />
      <div className="max-w-10xl mx-auto py-14 lg:pl-[42.5] lg:pr-16 px-8 lg:px-0 grid items-center grid-cols-1 gap-8 lg:grid-cols-2 mb-20">
        <div className="order-2 md:order-1 flex items-center justify-center md:justify-center">
          <img
            className="w-md xl:w-xl"
            src={imageUrl}
            alt="recruitment-image"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center space-y-3 items-center lg:items-stretch">
          <h3 className="text-center">{header}</h3>
          {items.map((item) => (
            <RecruitmentCard content={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RectruitmentSection;
