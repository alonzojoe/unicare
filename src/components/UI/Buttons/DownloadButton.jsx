import { cn } from "@/libs/utils.js";

const DownloadButton = ({ button, className, ...props }) => {
  const { download, label, icon, link } = button;

  const hoverEffects = `transition-all duration-300 hover:scale-102`;

  return (
    <a
      className={cn(
        `cursor-pointer flex items-center justify-center gap-2 border border-neutral-600 rounded-xl px-3 py-2 sm:px-4`,
        hoverEffects,
        className
      )}
      {...props}
      href={link}
      target="_blank"
    >
      <img className="w-3 h-auto sm:w-4.25" src={icon} alt={label} />
      <div className="flex flex-col space-y-0 text-dark">
        <span className="text-2xs font-semibold leading-tight">{download}</span>
        <span className="text-sm sm:text-md font-bold tracking-[-0.5px] sm:tracking-[-1.1px]">
          {label}
        </span>
      </div>
    </a>
  );
};

export default DownloadButton;
