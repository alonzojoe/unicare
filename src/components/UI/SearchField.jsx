import { cn } from "@/libs/utils.js";
import InputText from "@/components/UI/InputText";

const SearchField = ({ item, index }) => {
  return (
    <div
      className={cn(
        `flex flex-1 justify-center items-center`,
        index === 0 && "md:border-r-2 md:border-gray-300"
      )}
    >
      <div className="flex justify-end items-center gap-4 w-full">
        <InputText placeholder={item.placeholder} />
        {item.icon}
      </div>
    </div>
  );
};

export default SearchField;
