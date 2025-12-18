import { HERO_CONTENT } from "../constants";

const HeroSection = () => {
  const { title, subTitle, items, questions } = HERO_CONTENT;

  return (
    <section id="hero" className="pt-36 lg:pt-42">
      <div className="hero-bg rounded-4xl max-w-10xl mx-auto py-14 px-8 lg:pl-[42.5] lg:pr-16 grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-red-500 h-50"></div>
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

          <div></div>

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

export const FeatureCard = ({ item, index }) => {
  return (
    <div
      className={`flex items-center gap-2 ${
        index < 2 ? "border-r-2 border-gray-300 pr-4" : ""
      }`}
    >
      <div className="flex flex-col text-right">
        <span className="text-xl font-bold ">{item.title}</span>
        <span className="text-md">{item.description}</span>
      </div>
      {item.icon}
    </div>
  );
};

export const QuestionItem = ({ item }) => {
  return (
    <div className={`flex items-center gap-2`}>
      <div className="flex flex-col text-right">
        <span className="text-md font-400-line-147">{item.question}</span>
      </div>
      {item.icon}
    </div>
  );
};

export default HeroSection;
