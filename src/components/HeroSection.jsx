import { HERO_CONTENT } from "@/constants";
import HeroGallery from "@/assets/images/hero/Hero_Gallery.png";

import SearchContainer from "@/components/UI/SearchContainer";
import FeatureCard from "@/components/Items/FeatureCard";
import QuestionItem from "@/components/Items/Questionitem";
import SearchField from "@/components/UI/SearchField";

const HeroSection = () => {
  const { title, subTitle, items, questions, searchBar } = HERO_CONTENT;

  return (
    <section id="hero" className="pt-36 lg:pt-42">
      <div className="hero-bg rounded-4xl max-w-10xl mx-auto py-14 px-8 lg:pl-[42.5] lg:pr-16 grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex items-center justify-end md:justify-center">
          <img className="w-md xl:w-xl" src={HeroGallery} alt="hero-image" />
        </div>
        <div className="h-50 flex flex-col space-y-3 items-end">
          <h1 className="font-700-line-normal text-header text-primary text-right italic">
            {title}
          </h1>

          <div className="flex flex-col space-y-3">
            <h3 className="font-500-line-130 text-3xl text-neutral-600">
              {subTitle}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              {items.map((item, index) => (
                <FeatureCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          <div className="w-[90%] flex flex-col space-y-3 my-5">
            <h2 className="text-5xl text-primary text-right font-500-line-130">
              {searchBar.title}
            </h2>
            <SearchContainer>
              <div className="flex items-center gap-2 w-full">
                {searchBar.fields.map((item, index) => (
                  <SearchField item={item} index={index} key={item.id} />
                ))}
              </div>
            </SearchContainer>
          </div>

          <div className="flex flex-col items-end space-y-3">
            {questions.map((item) => (
              <QuestionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
