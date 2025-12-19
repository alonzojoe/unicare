import { cn } from "@/libs/utils.js";

const TreatmentCard = ({ content }) => {
  const { title, subTitle, bgColor, textColor } = content;
  return (
    <div
      className="bg-white min-h-40 md:min-h-70 rounded-2xl p-7.5 w-full flex flex-col items-end justify-end gap-1 text-neutral-600 text-right"
      style={{ backgroundColor: bgColor }}
    >
      <h3
        className={cn(
          `text-2xl md:text-3xl font-700-line-115 max-w-129`,
          textColor
        )}
      >
        {title}
      </h3>
      <p className={cn(`text-base md:text-md font-400-line-147`, textColor)}>
        {subTitle}
      </p>
    </div>
  );
};

export default TreatmentCard;
