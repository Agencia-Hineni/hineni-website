"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollCueProps = {
  className?: string;
  label?: string;
};

export function ScrollCue({ className, label = "Role para explorar" }: ScrollCueProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 160], [1, 0]);

  function handleClick() {
    window.scrollTo({ top: window.innerHeight * 0.86, behavior: "smooth" });
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={label}
      style={shouldReduceMotion ? undefined : { opacity }}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex",
        className,
      )}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 transition-colors group-hover:text-slate-200">
        {label}
      </span>
      <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-500/70 p-1.5 transition-colors group-hover:border-slate-300">
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full bg-gold-accent",
            !shouldReduceMotion && "scroll-cue-dot",
          )}
        />
      </span>
    </motion.button>
  );
}
