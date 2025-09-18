import React from "react";

function Button({
  className,
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  className?: string; 
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      className={` items-center justify-center rounded-lg text-zinc-500 transition-colors 
                  hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 
                  active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 
                  ${className ?? ""}`} 
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
