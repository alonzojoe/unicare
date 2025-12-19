import ContentHeader from "@/components/UI/Shared/ContentHeader";
import { TREATMENT_CONTENT } from "@/constants";

const TreatmentsSection = () => {
  const { title, subTitle } = TREATMENT_CONTENT;

  return (
    <section id="treatment">
      <ContentHeader title={title} subTitle={subTitle} />
      <div className="max-w-10xl mx-auto py-14 lg:pl-[42.5] lg:pr-16 grid items-center grid-cols-1 gap-5 lg:grid-cols-3 mb-20">
        <div></div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
