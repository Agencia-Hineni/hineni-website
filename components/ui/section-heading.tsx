import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

const toneStyles = {
  light: {
    eyebrow: "text-tech-blue",
    title: "text-deep-blue",
    description: "text-slate-600",
  },
  dark: {
    eyebrow: "text-slate-300",
    title: "text-shell",
    description: "text-slate-300",
  },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const styles = toneStyles[tone];
  const isCenter = align === "center";

  return (
    <div className={cn("max-w-4xl", isCenter && "mx-auto text-center", className)}>
      <p className={cn("text-xs font-semibold uppercase tracking-[0.24em]", styles.eyebrow)}>
        {eyebrow}
      </p>
      <h2 className={cn("mt-5 text-3xl leading-[1.08] sm:text-4xl lg:text-5xl", styles.title)}>{title}</h2>
      <p className={cn("mt-6 max-w-3xl text-base leading-relaxed sm:text-lg", styles.description)}>
        {description}
      </p>
    </div>
  );
}
