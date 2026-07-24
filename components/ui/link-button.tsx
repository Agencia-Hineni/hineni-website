import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LinkVariant = "primary" | "secondary" | "ghost";
type LinkSize = "sm" | "md" | "lg";

type LinkButtonProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    variant?: LinkVariant;
    size?: LinkSize;
  };

const variants: Record<LinkVariant, string> = {
  primary:
    "border border-transparent bg-tech-blue text-shell shadow-[0_14px_30px_rgba(30,58,138,0.22)] hover:bg-[#2749ad]",
  secondary:
    "border border-gold-accent/45 bg-transparent text-slate-100 hover:border-gold-accent/70 hover:bg-gold-accent/10",
  ghost: "border border-slate-600/70 bg-transparent text-slate-200 hover:border-slate-400 hover:bg-slate-900/50",
};

const sizes: Record<LinkSize, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.12em]",
  md: "px-6 py-3 text-xs tracking-[0.14em]",
  lg: "px-8 py-4 text-sm tracking-[0.13em]",
};

export function LinkButton({
  className,
  variant = "primary",
  size = "md",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        "cta-button inline-flex items-center justify-center rounded-full font-semibold uppercase transition-transform hover:-translate-y-[1px] active:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
    />
  );
}
