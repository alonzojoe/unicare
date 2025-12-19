import { RECRUITMENT_CONTENT } from "@/constants/index";
import ContentHeader from "@/components/UI/Shared/ContentHeader";
import RecruitmentCard from "@/components/Items/RecruitmentCard";
import Button from "@/components/UI/Buttons/Button";

const RectruitmentSection = () => {
  const { title, subTitle, imageUrl, header, items } = RECRUITMENT_CONTENT;
  return (
    <section id="recruitment">
      <ContentHeader title={title} subTitle={subTitle} />
      <div className="max-w-10xl mx-auto py-14 lg:pl-[42.5] lg:pr-16 px-8 lg:px-0 grid items-center grid-cols-1 gap-8 lg:grid-cols-2 mb-20">
        <div className="order-2 md:order-1 flex items-center justify-center md:justify-center">
          <img
            className="w-md xl:w-xl"
            src={imageUrl}
            alt="recruitment-image"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center gap-6 items-center lg:items-stretch">
          <h3 className="text-center text-light-primary text-3xl font-700-line-115 mb-5">
            {header}
          </h3>
          {items.map((item) => (
            <RecruitmentCard content={item} key={item.id} />
          ))}
          <div className="flex mt-5 items-center justify-center">
            <Button className="min-w-[42.5] bg-light-primary">
              <div className="flex items-center gap-2 text-lg">
                <span className="font-700-line-136 text-white">{`הצטרפו לאלפי המטפלים`}</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RectruitmentSection;
