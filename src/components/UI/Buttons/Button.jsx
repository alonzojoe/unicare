import { cn } from "@/libs/utils";

const Button = ({ variant = "primary", className, children, ...props }) => {
  const baseClasses =
    "flex items-center justify-center gap-3 px-[24px] py-[12px] rounded-full border text-sm font-medium transition-colors cursor-pointer hover:opacity-75";

  const variantClasses = {
    primary:
      "bg-[var(--color-primary)] text-white border-[var(--color-primary)]",
    outline:
      "bg-transparent text-[var(--palette-neutral-600)] border-[var(--palette-neutral-600)]",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
