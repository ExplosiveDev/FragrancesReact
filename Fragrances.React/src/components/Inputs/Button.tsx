import { type FC, type ReactNode, type MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  onClick,
  disabled,
  ariaLabel,
}) => {
  return (
    <button
      type="button"
      className={`items-center justify-center rounded-lg text-zinc-500 transition-colors 
                  hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 
                  active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 
                  ${className ?? ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
