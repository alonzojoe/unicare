import { cn } from "@/libs/utils.js";
import InputText from "@/components/UI/InputText";

const SearchField = ({ item, index }) => {
  return (
    <div
      className={cn(
        `flex flex-1 justify-end items-center gap-4  pr-4`,
        index === 0 && "border-r-2  border-gray-300"
      )}
    >
      <InputText placeholder={item.placeholder} />
      {item.icon}
    </div>
  );
};

export default SearchField;
