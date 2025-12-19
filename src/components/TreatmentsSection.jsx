import { TREATMENT_CONTENT } from "@/constants";

import ContentHeader from "@/components/UI/Shared/ContentHeader";
import TreatmentCard from "@/components/Items/TreatmentCard";

const TreatmentsSection = () => {
  const { title, subTitle, cards } = TREATMENT_CONTENT;

  return (
    <section id="treatment">
      <ContentHeader title={title} subTitle={subTitle} />
      <div className="max-w-10xl mx-auto py-14 grid items-center px-8 lg:px-0 grid-cols-1 gap-5 lg:grid-cols-3 mb-20">
        {cards.map((item) => (
          <TreatmentCard content={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default TreatmentsSection;
