"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealTransition = {
  duration?: number;
  delay?: number;
  ease?: unknown;
};

type RevealProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children: ReactNode;
  delay?: number;
  transition?: RevealTransition;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 30,
  transition,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const browserWindow = window as Window & {
      IntersectionObserver?: typeof IntersectionObserver;
    };

    if (!browserWindow.IntersectionObserver) {
      const frame = browserWindow.requestAnimationFrame(() => setVisible(true));
      return () => browserWindow.cancelAnimationFrame(frame);
    }

    const observer = new browserWindow.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealStyle = {
    "--reveal-y": `${y}px`,
    "--reveal-delay": `${(transition?.delay ?? delay) * 1000}ms`,
    "--reveal-duration": `${(transition?.duration ?? 0.68) * 1000}ms`,
    ...style,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={cn("reveal-motion", className)}
      data-visible={visible}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  );
}
