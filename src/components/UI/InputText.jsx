import { cn } from "@/libs/utils.js";

const InputText = ({ className, ...props }) => {
  return (
    <input
      type="text"
      className={cn(
        `w-full text-right outline-0 focus:ring-0 text-gray-400 text-xl bg-transparent`,
        className
      )}
      {...props}
    />
  );
};

export default InputText;
