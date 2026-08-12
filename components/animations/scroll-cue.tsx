"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollCueProps = {
  className?: string;
  label?: string;
};

export function ScrollCue({ className, label = "Role para explorar" }: ScrollCueProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setVisible(window.scrollY < 160);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: window.innerHeight * 0.86, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={cn(
        "group absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 transition-colors group-hover:text-slate-200">
        {label}
      </span>
      <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-500/70 p-1.5 transition-colors group-hover:border-slate-300">
        <span className="scroll-cue-dot h-1.5 w-1.5 rounded-full bg-gold-accent" />
      </span>
    </button>
  );
}
