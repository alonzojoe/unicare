import { cn } from "@/libs/utils";
import { IoSearchOutline } from "react-icons/io5";

const SearchContainer = ({ children, className, ...props }) => {
  const baseClasses =
    "w-full flex items-center gap-3 p-3 rounded-3xl text-sm font-medium transition-colors cursor-pointer hover:opacity-75";

  return (
    <button
      className={cn(
        baseClasses,
        `bg-white text-palette-neutral-600 shadow-l border border-primary`,
        className
      )}
      {...props}
    >
      <div className="-shrink-0 bg-primary rounded-full h-12 w-12 p-3 flex items-center justify-center text-white">
        <IoSearchOutline className="text-2xl" />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </button>
  );
};

export const SearchContainerSingle = ({ children, className, ...props }) => {
  const baseClasses =
    "w-full flex items-center gap-3 p-3 rounded-[16px] text-sm font-medium transition-colors cursor-pointer hover:opacity-75";

  return (
    <button
      className={cn(
        baseClasses,
        `bg-white text-palette-neutral-600 shadow-l border border-white`,
        className
      )}
      {...props}
    >
      <div className="flex-1 overflow-hidden">{children}</div>
    </button>
  );
};

export default SearchContainer;
