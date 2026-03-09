import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-tech-blue text-shell shadow-[0_14px_30px_rgba(30,58,138,0.26)] hover:bg-[#2749ad]",
  secondary:
    "border border-gold-accent/40 bg-gold-accent/10 text-slate-100 hover:bg-gold-accent/20",
  ghost: "border border-slate-500/80 bg-slate-900/45 text-slate-100 hover:bg-slate-900/80",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.12em]",
  md: "px-6 py-3 text-xs tracking-[0.14em]",
  lg: "px-8 py-4 text-sm tracking-[0.13em]",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "cta-button inline-flex items-center justify-center rounded-full font-semibold uppercase transition-transform hover:-translate-y-[1px] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
