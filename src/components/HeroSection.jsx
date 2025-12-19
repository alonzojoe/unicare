import { HERO_CONTENT } from "@/constants";
import HeroGallery from "@/assets/images/hero/Hero_Gallery.png";
import SearchContainer, {
  SearchContainerSingle,
} from "@/components/UI/SearchContainer";
import FeatureCard from "@/components/Items/FeatureCard";
import QuestionItem from "@/components/Items/Questionitem";
import SearchField from "@/components/UI/SearchField";

import Button from "@/components/UI/Buttons/Button";

const HeroSection = () => {
  const { title, subTitle, items, questions, searchBar } = HERO_CONTENT;

  return (
    <section id="hero" className="pt-20 md:36 lg:pt-42">
      <div className="hero-bg rounded-br-4xl rounded-bl-4xl md:rounded-4xl max-w-10xl mx-auto py-14 px-4 grid items-center grid-cols-1 gap-8 lg:grid-cols-2 mb-20">
        <div className="order-2 md:order-1 flex items-center justify-end md:justify-center">
          <img className="w-md xl:w-xl" src={HeroGallery} alt="hero-image" />
        </div>
        <div className="order-1 md:order-2 flex flex-col space-y-3 items-center lg:items-end">
          <h1 className="font-700-line-normal text-7xl md:text-8xl lg:text-header text-primary text-center md:text-right italic">
            {title}
          </h1>

          <div className="flex flex-col space-y-3">
            <h3 className="font-500-line-130 text-3xl text-neutral-600 text-center  md:text-right">
              {subTitle}
            </h3>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-2">
              {items.map((item, index) => (
                <FeatureCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          <div className="flex md:hidden flex-col space-y-5 w-full my-5 ">
            {searchBar.fields.map((item, index) => (
              <SearchContainerSingle key={item.id}>
                <SearchField item={item} index={index} />
              </SearchContainerSingle>
            ))}

            <Button
              variant="primary"
              className="bg-light-primary border-light-primary text-white"
            >
              <div className="flex items-center gap-2 text-lg">
                <span className="font-700-line-136">{`חיפוש`}</span>
              </div>
            </Button>
          </div>

          <div className="flex md:hidden flex-col space-y-5 w-full my-5 ">
            <Button variant="outline">
              <div className="flex items-center gap-2 text-lg">
                <span className="font-700-line-136">{`סיוע בהבנת זכויות והחזרים מביטוחים`}</span>
              </div>
            </Button>
            <Button variant="outline" className="border-light-primary">
              <div className="flex items-center gap-2 text-lg">
                <span className="font-700-line-136 text-light-primary">{`מידע והכוונה בנושא שירותי סיעוד`}</span>
              </div>
            </Button>
          </div>

          <div className="w-[90%] hidden md:flex flex-col space-y-3 my-5">
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

          <div className="hidden md:flex flex-col items-end space-y-3">
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
